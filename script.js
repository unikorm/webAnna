// variables ######@~$&*

let contactContainer = document.querySelector(".contactContainer");
let mainContainer = document.querySelector(".mainContainer");
let contactLink = document.getElementById("contact");
let backButton = document.getElementById("backButton");
let aboutLink = document.getElementById("about");
let aboutContainer = document.querySelector(".aboutContainer");
let bodyElement = document.querySelector("body");
let menuLink = document.getElementById("menuIcon");
let menuContainer = document.querySelector(".menuContainer");
let submitButton = document.getElementById("submitButton");
let portfolioContainer= document.querySelector(".portfolioContainer");
let portfolioLink = document.getElementById("portfolio");
let pricingContainer = document.querySelector(".pricingContainer");
let pricingLink = document.getElementById("pricing");
// console.log();





// Event Handlers ######@~$&*


// Open the contact form when "Contact" link is clicked
if (contactLink) {
  contactLink.addEventListener("click", function(event) {
    event.preventDefault();
    openContactForm();
  });
};

// Close the contact form when Esc key is pressed
document.addEventListener("keydown", function(event) {
  if (event.key === "Escape") {
    closeContactForm();
  };
});

// Close the contact form when clicked outside of it
document.addEventListener("click", function(event) {
  let targetElement = event.target;

  if (contactContainer.style.display === "flex" && contactContainer.contains(targetElement) && !targetElement.closest(".contact-form")) {
    closeContactForm();
  };  
});

// Close the contact form when "Back" button is clicked
if (backButton) {
  backButton.addEventListener("click", function(event) {
    event.preventDefault();
    closeContactForm();
    //event.stopPropagation();
  });
};






// Open About section, when "About" link is clicked
if (aboutLink) {
  aboutLink.addEventListener("click", function(event) {
    event.preventDefault();
    openAboutSection();
  });
};

// Close About section when is click outside of it
document.addEventListener("click", function(event) {
  const targetElement = event.target;

  if (getComputedStyle(aboutContainer).display === "flex" && aboutContainer.contains(targetElement) && !targetElement.closest(".aboutContent")) {
    closeAboutSection();
  };
});

// Close About section when "Esc" key is clicked
document.addEventListener("keydown", function(event) {
  if(event.key === "Escape") {
    closeAboutSection();
  };
});






// Open Menu section when Menu Icon svg is pressed
if (menuLink) {
  menuLink.addEventListener("click", function(event) {
    event.preventDefault();
    openMenuSection();
  });
};

// Close Menu section when is click outside of it
document.addEventListener("click", function(event) {
  const targetElement = event.target;

  if (getComputedStyle(menuContainer).display === "flex" && menuContainer.contains(targetElement) && !targetElement.closest(".menuSelect")) {
    closeMenuSection();
  };
});

// Close Menu section when "Esc" key is pressed
document.addEventListener("keydown", function(event) {
  if (event.key === "Escape") {
    closeMenuSection();
  };
});






// Open Portfolio section when "Portfolio" link is clicked
if (portfolioLink) {
  portfolioLink.addEventListener("click", function(event) {
    event.preventDefault();
    openPortfolioSection();
  });
};

// Close Portfolio section when is click outside of it
document.addEventListener("click", function(event) {
  const targetElement = event.target;

  if (getComputedStyle(portfolioContainer).display === "flex" && portfolioContainer.contains(targetElement) && !targetElement.closest(".portfolioContent")) {
    closePortfolioSection();
  };
});

//Close Portfolio section when "Esc" is clicked
document.addEventListener("keydown", function(event) {
  if (event.key === "Escape") {
    closePortfolioSection();
  };
});






// Open Pricing section when "Pricing" link is clicked
if (pricingLink) {
  pricingLink.addEventListener("click", function(event) {
    event.preventDefault();
    openPricingSection();
  });
};

// Close Pricing section when is click outside of it
document.addEventListener("click", function(event) {
  const targetElement = event.target;

  if (getComputedStyle(pricingContainer).display === "flex" && pricingContainer.contains(targetElement) && !targetElement.closest(".pricingContent")) {
    closePricingSection();
  };
});

//Close Pricing section when "Esc" is clicked
document.addEventListener("keydown", function(event) {
  if (event.key === "Escape") {
    closePricingSection();
  };
});









// Functions ######@~$&*


// Function to open the contact form
function openContactForm() {
  contactContainer.style.display = "flex";
  mainContainer.style.display = "none";
  menuContainer.style.display = "none";
  bodyElement.style.backdropFilter = "blur(5px)";
};

// Function to close the contact form
function closeContactForm() {
  mainContainer.style.display = "block";
  contactContainer.style.display = "none";
  bodyElement.style.backdropFilter = null;
};






// Function to open About section 
function openAboutSection() {
  aboutContainer.style.display = "flex";
  mainContainer.style.display = "none";
  menuContainer.style.display = "none";
  bodyElement.style.backdropFilter = "blur(5px)";
};

// Function to close About section
function closeAboutSection() {
  mainContainer.style.display = "block";
  aboutContainer.style.display = "none";
  bodyElement.style.backdropFilter = null;
};






// Function to open Menu section
function openMenuSection() {
  menuContainer.style.display = "flex";
  mainContainer.style.display = "none";
  bodyElement.style.backdropFilter = "blur(5px)";
};

// Function to close Menu section
function closeMenuSection() {
  mainContainer.style.display = "block";
  menuContainer.style.display = "none";
  bodyElement.style.backdropFilter = null;
};

// Function to close Menu section slowly, idk I use it in final, probably not
function closeMenuSectionSlowly() {
  menuContainer.style.animationTimingFunction = "fadeOut 0.6s cubic-bezier(0.4, 0, 0.2, 1)";
  menuContainer.style.animationFillMode = "forwards";

  setTimeout(() => {
    mainContainer.style.display = "block";
    menuContainer.style.display = "none";
    bodyElement.style.backdropFilter = null;
  }, 10);
};






// Function to open Portfolio section
function openPortfolioSection() {
  portfolioContainer.style.display = "flex";
  mainContainer.style.display = "none";
  menuContainer.style.display = "none";
  bodyElement.style.backdropFilter = "blur(5px)";
};

// Function to close Portfolio section
function closePortfolioSection() {
  mainContainer.style.display = "block";
  portfolioContainer.style.display = "none";
  bodyElement.style.backdropFilter = null;
};






// Function to open Pricing section
function openPricingSection() {
  pricingContainer.style.display = "flex";
  mainContainer.style.display = "none";
  menuContainer.style.display = "none";
  bodyElement.style.backdropFilter = "blur(5px)";
};

// Function to close Pricing section
function closePricingSection() {
  mainContainer.style.display = "block";
  pricingContainer.style.display = "none";
  bodyElement.style.backdropFilter = null;
};


























// another dimension

  // Function to change background image constantly
  let images = [
    "/photo/DSC_1042.JPG",
    "/photo/DSC_0187-2.JPG",
    "/photo/DSC_0095.JPG",
    "/photo/DSC_1202.JPG",
    "/photo/DSC_0069.jpg"
  ];
  
  let currentIndex = 1;
  let preloadedImage = [];  // Array to store preloaded images
  
  function preloadImages() {
    let promises = [];
  
    for (let i = 0; i < images.length; i++) {
      let img = new Image();
      let promise = new Promise((resolve, reject) => {
        img.onload = () => resolve(img);
        img.onerror = () => reject(new Error(`Failed to load image: ${images[i]}`));
      });
  
      img.src = images[i];
      promises.push(promise);
    };
  
    Promise.all(promises)
      .then((loadedImages) => {
        preloadedImages = loadedImages;
        startRotation();
      })
      .catch((error) => {
        console.error(error);
      });
  };

  function startRotation() {
    changeBackground(); // change background immediatly on page load
    setInterval(changeBackground, 10000); // Run the function every 10 seconds
  };
  
  function changeBackground() {
    document.body.style.backgroundImage = "url(" + images[currentIndex] + ")";
    currentIndex = (currentIndex + 1) % images.length;
  };

  preloadImages();  // start preloading images
  
  
  








// Code here is for change of languages

document.getElementById("sk").addEventListener("click", function(event) {
  loadLanguage("sk");
});

document.getElementById("en").addEventListener("click", function(event) {
  loadLanguage("en");
});

document.getElementById("ua").addEventListener("click", function(event) {
  loadLanguage("ua");
});


function loadLanguage(lang) {
  fetch("translations/" + lang + ".json")
  .then(response => response.json())
  .then(data => {
    document.getElementById("portfolio").textContent = data.portfolio;
    document.getElementById("about").textContent = data.about;
    document.getElementById("contact").textContent = data.contact;
    document.getElementById("pricing").textContent = data.pricing;
    document.getElementById("mainName").textContent = data.mainName;
    document.getElementById("mainDescription").textContent = data.mainDescription;
    document.getElementById("aboutName").textContent = data.aboutName;
    document.getElementById("authorInfo1").textContent = data.authorInfo1;
    document.getElementById("authorInfo2").textContent = data.authorInfo2;
    document.getElementById("authorInfo3").textContent = data.authorInfo3;
    document.getElementById("sk").textContent = data.sk;
    document.getElementById("ua").textContent = data.ua;
    document.getElementById("en").textContent = data.en;
    document.getElementById("contactMeForm").textContent = data.contactMeForm;
    document.getElementById("nameContactForm").textContent = data.nameContactForm;
    document.getElementById("emailContactForm").textContent = data.emailContactForm;
    document.getElementById("phoneContactForm").textContent = data.phoneContactForm;
    document.getElementById("messageContactForm").textContent = data.messageContactForm;
    document.getElementById("backButton").textContent = data.backButton;
    document.getElementById("submitButton").textContent = data.submitButton;
  })
  .catch(error => console.error(error));
}








// code for http request to server side from contact form, etc.
submitButton.addEventListener("click", function(event) {
  event.preventDefault();
  // here will be code for handling and design to send us a user message
});