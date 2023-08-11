"use strict";

// imported variables
import { contactContainer, mainContainer, contactLink, backButton, aboutLink, aboutContainer, menuLink, menuContainer, portfolioContainer, portfolioLink, pricingContainer, pricingLink, nameInput, emailInput, messageInput, errorMessage, successMessage} from "/src/JS/variables.js";

// function to after reload of page clean queries history and start from clean state
document.addEventListener("DOMContentLoaded", function () {
  if (window.performance && window.performance.navigation.type === window.performance.navigation.TYPE_RELOAD) {
    let url = new URL(window.location.href);
    url.searchParams.delete("section");
    window.history.replaceState(null, null, url);
  }
});


// general reuseble functions
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






// event handlers

// Open Menu section when Menu Icon svg is pressed
menuLink.addEventListener("click", function (event) {
  event.preventDefault();
  navigateToSection(menuContainer, "menuContainer")
});

// Closing it
document.addEventListener("click", function (event) {
  handleSectionClick(event, menuContainer, ".menuSelect");
});

document.addEventListener("keydown", function (event) {
  handleSectionEscKey(event, closeSection, menuContainer);
});



// Open the contact form when "Contact" link is clicked
contactLink.addEventListener("click", function (event) {
  event.preventDefault();
  navigateToSection(contactContainer, "contactContainer")
});

//Closing it  
document.addEventListener("keydown", function (event) {
  handleSectionEscKey(event, closeSection, contactContainer);
});

backButton.addEventListener("click", function (event) {
  event.preventDefault();
  closeSection(contactContainer);
});
 


// Open About section, when "About" link is clicked
aboutLink.addEventListener("click", function (event) {
  event.preventDefault();
  navigateToSection(aboutContainer, "aboutContainer")
});

// Closing it 
document.addEventListener("click", function (event) {
  handleSectionClick(event, aboutContainer, ".authorInfo");
});

document.addEventListener("keydown", function (event) {
  handleSectionEscKey(event, closeSection, aboutContainer);
  errorMessage.style.display = "none";
});



// Open Portfolio section when "Portfolio" link is clicked
portfolioLink.addEventListener("click", function (event) {
  event.preventDefault();
  navigateToSection(portfolioContainer, "portfolioContainer")
});

// Closing it 
document.addEventListener("click", function (event) {
  handleSectionClick(event, portfolioContainer, ".portfolioItem");
});

document.addEventListener("keydown", function (event) {
  handleSectionEscKey(event, closeSection, portfolioContainer);
});



// Open Pricing section when "Pricing" link is clicked
pricingLink.addEventListener("click", function (event) {
  event.preventDefault();
  navigateToSection(pricingContainer, "pricingContainer")
});

// Closing it 
document.addEventListener("click", function (event) {
  handleSectionClick(event, pricingContainer, ".pricingContent");
});

document.addEventListener("keydown", function (event) {
  handleSectionEscKey(event, closeSection, pricingContainer);
});





// logic to updateing URL address
let currentOpenSection = null;

function updateURL(sectionId) {
  let url = new URL(window.location.href);

  if (sectionId === "mainContainer") {
    url.searchParams.delete("section");
  } else {
    url.searchParams.set("section", sectionId);
  }
  history.pushState(null, null, url);
};

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

function getURLSectionId() {
  let urlParams = new URLSearchParams(window.location.search);
  let sectionId = urlParams.get("section");
};

window.addEventListener("popstate", () => {
  navigateToSectionFromURL();
  currentOpenSection = getSectionContainerById(getURLSectionId());
});