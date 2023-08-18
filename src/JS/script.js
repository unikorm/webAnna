"use strict";

// shorter way to console...
let check = console.log;

// imported variables   !!!!!
import { contactContainer, mainContainer, contactLink, backButton, aboutLink, aboutContainer, menuLink, menuContainer, portfolioContainer, portfolioLink, pricingContainer, pricingLink, nameInput, emailInput, messageInput, errorMessage, successMessage} from "/src/JS/variables.js";

// general reuseble functions  !!!!!
function openSection(sectionContainer) {
  sectionContainer.style.display = "flex";
  mainContainer.style.display = "none";

  if (sectionContainer !== menuContainer) {
    menuContainer.style.display = "none";
  }

  sectionContainer.style.backdropFilter = "blur(5px)";
  sectionContainer.style.webkitBackdropFilter = "blur(5px)";
};

function closeSection(sectionContainer) {
  mainContainer.style.display = "flex";
  sectionContainer.style.display = "none";
  sectionContainer.style.backdropFilter = null;
  sectionContainer.style.webkitBackdropfFilter = null;

  updateURL("mainContainer");

  if (sectionContainer === contactContainer) {
    if (successMessage.style.display === "flex") {
      successMessage.style.display = "none";
      nameInput.value = "";
      emailInput.value = "";
      messageInput.value = "";
    };
  };
};

export function handleSectionClick(event, sectionContainer, contentClass) {
  const targetElement = event.target;

  if (
    getComputedStyle(sectionContainer).display === "flex" &&
    sectionContainer.contains(targetElement) &&
    !targetElement.closest(contentClass)
  ) {
    closeSection(sectionContainer);
  };
};

function handleSectionEscKey(event, closeSection, sectionContainer) {
  if (event.key === "Escape") {
    closeSection(sectionContainer);
  };
};

function navigateToSection(sectionContainer, sectionId) {
  openSection(sectionContainer);
  updateURL(sectionId);
};

// reusable function to open sections...
let openSec = (link, container, stringContainer) => {
  link.addEventListener("click", (e) => {
      e.preventDefault();
      navigateToSection(container, stringContainer);
  });
};



// event handlers !!!!
openSec(menuLink, menuContainer, "menuContainer");

document.addEventListener("click", function (event) {
  handleSectionClick(event, menuContainer, ".menuSelect");
});

document.addEventListener("keydown", function (event) {
  handleSectionEscKey(event, closeSection, menuContainer);
});

openSec(contactLink, contactContainer, "contactContainer");

document.addEventListener("keydown", function (event) {
  handleSectionEscKey(event, closeSection, contactContainer);
});

backButton.addEventListener("click", function (event) {
  event.preventDefault();
  closeSection(contactContainer);
});
 
openSec(aboutLink, aboutContainer, "aboutContainer");

document.addEventListener("click", function (event) {
  handleSectionClick(event, aboutContainer, ".authorInfo");
});

document.addEventListener("keydown", function (event) {
  handleSectionEscKey(event, closeSection, aboutContainer);
});

openSec(portfolioLink, portfolioContainer, "portfolioContainer");

document.addEventListener("click", function (event) {
  handleSectionClick(event, portfolioContainer, ".portfolioItem");
});

document.addEventListener("keydown", function (event) {
  handleSectionEscKey(event, closeSection, portfolioContainer);
});

openSec(pricingLink, pricingContainer, "pricingContainer");

document.addEventListener("click", function (event) {
  handleSectionClick(event, pricingContainer, ".pricingContent");
});

document.addEventListener("keydown", function (event) {
  handleSectionEscKey(event, closeSection, pricingContainer);
});











// logic to updateing URL address

let currentOpenSection = getSectionContainerById(getURLSectionId());  // navigation logic variable

//this works
// this function put new query in URL after opening new section, put it into history too
function updateURL(sectionId) {
  let url = new URL(window.location.href);

  if (sectionId === "mainContainer") {
    url.searchParams.delete("section");
  } else {
    url.searchParams.set("section", sectionId);
  }
  history.pushState(null, null, url);
};

// this function get name of id and give in result them name of variable
function getSectionContainerById(sectionId) {
  switch (sectionId) {
    case "menuContainer":
      return menuContainer;
    case "contactContainer":
      return contactContainer;
    case "aboutContainer":
      return aboutContainer;
    case "portfolioContainer":
      return portfolioContainer;
    case "pricingContainer":
      return pricingContainer;
    default:
      return null;
  };
};

// this function return a string, value of URL query parameter named "section" 
function getURLSectionId() {
  let urlParams = new URLSearchParams(window.location.search);
  let sectionId = urlParams.get("section");
  return sectionId;
};



// this i think doesn't work properly
// this function do something like open/close sections, but it cross with other logic doin it i think, and that is problem... maybe
function navigateToSectionFromURL() {
  let urlParams = new URLSearchParams(window.location.search);
  let sectionId = urlParams.get("section");
  let actualSectionContainer = getSectionContainerById(sectionId);

  if (!sectionId || sectionId === "mainContainer") {
    if (currentOpenSection) {
    closeSection(currentOpenSection);
    }
    openSection(mainContainer);
  } else {
    if (currentOpenSection) {
      closeSection(currentOpenSection);
    };
    if (actualSectionContainer) {
      openSection(actualSectionContainer);
    };
  };
};

// function to after reload of page clean queries history and start from clean state (it seems like it doesn't work well now)
document.addEventListener("DOMContentLoaded", function () {
  if (window.performance && window.performance.navigation.type === window.performance.navigation.TYPE_RELOAD) {
    let url = new URL(window.location.href);
    url.searchParams.delete("section");
    window.history.replaceState(null, null, url);
  }
});

// this function listen on click on back/forward and calling function "n" and redeclare let "c" (idk what exactly do it)
window.addEventListener("popstate", () => {
  navigateToSectionFromURL();
  currentOpenSection = getSectionContainerById(getURLSectionId());
});