// variables ######@~$&*

let contactContainer = document.querySelector(".contactContainer");
let mainContainer = document.querySelector(".mainContainer");
let contactLink = document.getElementById("contact");
let backButton = document.getElementsByClassName("buttons")[0].getElementsByTagName("button")[1];
let aboutLink = document.getElementById("about")
let aboutContainer = document.querySelector(".aboutContainer");
let bodyElement = document.querySelector("body");
let menuLink = document.getElementById("menuIcon");
let menuContainer = document.querySelector(".menuContainer");
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

  if (menuContainer.style.display === "flex" && menuContainer.contains(targetElement) && !targetElement.closest(".languageSelect")) {
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
  menuContainer.style.display = "none"
  bodyElement.style.backdropFilter = null;
};



 // Function to change background image constantly
 let images = [
  "/photo/DSC_1042.JPG",
  "/photo/DSC_0187-2.JPG",
  "/photo/DSC_0095.JPG",
  "/photo/DSC_1202.JPG",
  "/photo/DSC_0069.jpg"
];

let currentIndex = 1;

function preloadImages() {
  for ( let i = 2; i < images.length; i++ ) {
    let img = new Image();
    img.src = images[i];
  };
};

function changeBackground() {
  document.body.style.backgroundImage = "url(" + images[currentIndex] + ")";
  currentIndex = (currentIndex + 1) % images.length;
};

changeBackground(); // change background immediatly on pafe load
preloadImages();  // more fluently changes of images with preload

setInterval(changeBackground, 10000); // Run the function every 10 seconds


// Code here is for change of languages
