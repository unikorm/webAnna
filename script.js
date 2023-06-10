


  let contactContainer = document.querySelector(".contactContainer");
  let mainContainer = document.querySelector(".mainContainer");
  
  // Event Handlers

  // Open the contact form when "Contact" link is clicked
let contactLink = document.getElementsByClassName("navbar-nav")[0].getElementsByTagName("a")[2];
console.log(contactLink);
if (contactLink) {
  contactLink.addEventListener('click', function(event) {
    event.preventDefault();
    openContactForm();
    console.log("kktina")
  });
};


  // Functions

  // Function to open the contact form
function openContactForm() {
  mainContainer.style.display = "none";
  contactContainer.style.display = "flex";
};


