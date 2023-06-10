// variables ######@~$&*

let contactContainer = document.querySelector(".contactContainer");
let mainContainer = document.querySelector(".mainContainer");
let contactLink = document.getElementsByClassName("navbar-nav")[0].getElementsByTagName("li")[2];
let backButton = document.getElementsByClassName("buttons")[0].getElementsByTagName("button")[1];




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




// Functions ######@~$&*

// Function to open the contact form
function openContactForm() {
  contactContainer.style.display = "flex";
  mainContainer.style.display = "none";
};

// Function to close the contact form
function closeContactForm() {
  mainContainer.style.display = "block";
  contactContainer.style.display = "none";
};