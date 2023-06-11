// variables ######@~$&*

let contactContainer = document.querySelector(".contactContainer");
let mainContainer = document.querySelector(".mainContainer");
let contactLink = document.getElementById("contact");
let backButton = document.getElementsByClassName("buttons")[0].getElementsByTagName("button")[1];
let aboutLink = document.getElementById("about")
let aboutContainer = document.querySelector(".aboutContainer");
let bodyElement = document.querySelector("body");
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
  if (event.key === 'Escape') {
    closeContactForm();
  };
});

// Close the contact form when clicked outside of it
document.addEventListener("click", function(event) {
  let targetElement = event.target;

  if (contactContainer.style.display = "flex" && contactContainer.contains(targetElement) && !targetElement.closest(".contact-form")) {
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

  if (aboutContainer.style.display = "flex" && aboutContainer.contains(targetElement) && !targetElement.closest(".aboutContent")) {
    closeAboutSection();
  };
});



// Functions ######@~$&*

// Function to open the contact form
function openContactForm() {
  contactContainer.style.display = "flex";
  mainContainer.style.display = "none";
  bodyElement.style.backdropFilter = "blur(5px)"
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
  bodyElement.style.backdropFilter = "blur(5px)"
};

// Function to close About section
function closeAboutSection() {
  mainContainer.style.display = "block";
  aboutContainer.style.display = "none";
  bodyElement.style.backdropFilter = null;
}