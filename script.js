// variables ######@~$&*

let contactContainer = document.querySelector(".contactContainer");
let mainContainer = document.querySelector(".mainContainer");
let contactLink = document.getElementById("contact");
let backButton = document.getElementById("backButton")
let aboutLink = document.getElementById("about")
let aboutContainer = document.querySelector(".aboutContainer");
let bodyElement = document.querySelector("body");
let menuLink = document.getElementById("menuIcon");
let menuContainer = document.querySelector(".menuContainer");
let submitButton = document.getElementById("submitButton");
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
  let targetElement = event.target;

  if (aboutContainer.style.display === "flex" && aboutContainer.contains(targetElement) && !targetElement.closest(".aboutContent")) {
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
  let targetElement = event.target;

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

























// another dimension

 // Function to change background image constantly + responsive
 let standartImages = [
  "/photo/DSC_1042.JPG",
  "/photo/DSC_0187-2.JPG",
  "/photo/DSC_0095.JPG",
  "/photo/DSC_1202.JPG",
  "/photo/DSC_0069.jpg"
];

let mobileImages = [
  "/photo/mobilePhoto1.jpeg",
  "/photo/mobilePhoto2.jpeg",
  "/photo/mobilePhoto3.jpeg"
];

let currentIndex = 1;
let currentImageTimeout;

function preloadImagesFromList(imageList) {
  for ( let i = 2; i < imageList.length; i++ ) {
    let img = new Image();
    img.src = imageList[i];
  };
};

function changeBackground() {
  let width = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
  let height = window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight;

  let ratio = (width / 11 * 9) - 10;
  let shouldChangeImage = false;

  if (ratio < height && currentIndex < mobileImages.length) {
    shouldChangeImage = true;
  } else if (currentIndex < standartImages.length) {
    shouldChangeImage = true;
  }

  if (shouldChangeImage) {
    let currentImage;
    if (ratio < height) {
      currentImage = mobileImages[currentIndex];
    } else {
      currentImage = standartImages[currentIndex];
    }

    if (currentImage) {
      document.body.style.backgroundImage = "url(" + currentImage + ")";
    }

    currentIndex = (currentIndex + 1) % Math.max(standartImages.length, mobileImages.length);
  };
};

function startImagesChange() {
  changeBackground();
  currentImageTimeout = setInterval(startImagesChange, 10000);
};

function stopImagesChange() {
  clearInterval(currentImageTimeout);
};

// initial setup
preloadImagesFromList(standartImages.concat(mobileImages));  // more fluently changes of images with preload

// Change background immediately on page load
changeBackground();

// Start periodic image change
startImagesChange();

// Event listeners for window resize
window.addEventListener("beforeunload", stopImagesChange);
window.addEventListener("resize", preloadImagesFromList.bind(null, standartImages.concat(mobileImages)));









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