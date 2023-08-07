"use strict";

// imported variables
import { contactContainer, mainContainer, contactLink, backButton, aboutLink, aboutContainer, bodyElement, menuLink, menuContainer, submitButton, contactForm, portfolioContainer, portfolioLink, pricingContainer, pricingLink, portfolioItems, previewContainer, nameInput, emailInput, messageInput, nameError, emailError, messageError, errorMessage, successMessage} from "/src/JS/variables.js";


// general reuseble functions
function openSection(sectionContainer) {
  sectionContainer.style.display = "flex";
  mainContainer.style.display = "none";
  if (sectionContainer !== menuContainer) {
    menuContainer.style.display = "none";
  };
  sectionContainer.style.backdropFilter = "blur(5px)";
  sectionContainer.style.webkitBackdropFilter = "blur(5px)";
};

function closeSection(sectionContainer) {
  mainContainer.style.display = "flex";
  sectionContainer.style.display = "none";
  sectionContainer.style.backdropFilter = null;
  sectionContainer.style.webkitBackdropfFilter = null;
  if (sectionContainer === contactContainer) {
    if (successMessage.style.display === "flex") {
      successMessage.style.display = "none";
      nameInput.value = "";
      emailInput.value = "";
      messageInput.value = "";
    };
  };
};

function handleSectionClick(event, sectionContainer, contentClass) {
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




// event handlers

// Open Menu section when Menu Icon svg is pressed
menuLink.addEventListener("click", function (event) {
  event.preventDefault();
  openSection(menuContainer);
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
  openSection(contactContainer);
});

//Closing it  
document.addEventListener("keydown", function (event) {
  handleSectionEscKey(event, closeSection, contactContainer);
});

backButton.addEventListener("click", function (event) {
  event.preventDefault();
  closeSection(contactContainer);
});
 
 function handleContactFormClick(event) {
  handleSectionClick(event, contactContainer, ".contact-form");
};

// Closing based on the width of the browser
function closingContactForm() {
  if (websiteWidth > 700) {
    document.addEventListener("click", handleContactFormClick);
  } else if (websiteWidth < 701) {
    document.removeEventListener("click", handleContactFormClick);
  };
};





// Open About section, when "About" link is clicked
aboutLink.addEventListener("click", function (event) {
  event.preventDefault();
  openSection(aboutContainer);
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
  openSection(portfolioContainer);
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
  openSection(pricingContainer);
});

// Closing it 
document.addEventListener("click", function (event) {
  handleSectionClick(event, pricingContainer, ".pricingContent");
});

document.addEventListener("keydown", function (event) {
  handleSectionEscKey(event, closeSection, pricingContainer);
});


























































// another dimension

// Function to load portfolio images after DOMContent is fully loaded
window.addEventListener('load', function() {
  const lazyImages = document.querySelectorAll('.lazy');

  lazyImages.forEach(image => {
    const imageUrl = image.dataset.src;
    const tempImage = new Image();

    tempImage.addEventListener('load', function() {
      image.setAttribute('src', imageUrl);
    });

    tempImage.src = imageUrl;
  });
});
 











  // Function to change and rotate background images on web site
  let imageArrays = {
    large: [
      "/photo/DSC_0069.jpg",
      "/photo/DSC_1202.JPG",
      "/photo/DSC_0187-2.JPG",
      "/photo/DSC_1042.JPG",
      "/photo/DSC_0095.JPG"
    ],
    small: [
      "/photo/mobilePhoto1.jpeg",
      "/photo/mobilePhoto2.jpeg",
      "/photo/mobilePhoto3.jpeg"
    ]
  };
  
  // Function to choose which array of images choose base on width of window
  function chooseImageArray(width) {
    if (width > 925) {
      return imageArrays.large;
    } else {
      return imageArrays.small;
    };
  };

    // event handler to constantly now actual width of website

    let websiteWidth;
    let currentImageArray;
    let currentIndex = 0;
    let preloadedImages = [];
    let images;
    let rotationInterval;
  
    function updateWebsiteWidth() {
      const previousImageArray = currentImageArray;
      websiteWidth = window.innerWidth;
      currentImageArray = chooseImageArray(websiteWidth);
  
      if (currentImageArray !== previousImageArray) {
       images = currentImageArray;
       currentIndex = 0;
       preloadedImages = [];
       preloadImages();
     };

     closingContactForm();
    };
  
    updateWebsiteWidth();
  
    window.addEventListener("resize", updateWebsiteWidth);
  
   // Function to change background image constantly

  function preloadImage(index) {
    return new Promise((resolve, reject) => {
      let img = new Image();
      img.onload = () => {
        preloadedImages[index] = img;
        resolve();
      };
      img.onerror = () => reject(new Error(`Failed to load image: ${images[index]}`));
      img.src = images[index];
    });
  };
  
  function preloadImages() {
    let promises = [];
  
    for (let i = 0; i < images.length; i++) {
      let promise = preloadImage(i);
      promises.push(promise);
    };
  
    Promise.all(promises)
      .then(() => {
        startRotation();
      })
      .catch((error) => {
        console.error(error);
      });
  };
  
  function displayImage(index) {
    document.body.style.backgroundImage = `url(${images[index]})`;
  };
  
  function startRotation() {
    if (rotationInterval) {
      clearInterval(rotationInterval); // Clear the previous interval
    }
  
    rotationInterval = setInterval(() => {
      currentIndex = (currentIndex + 1) % images.length;
      displayImage(currentIndex);
    }, 10000);
  }
  
  let firstImage = new Image();
  firstImage.src = images[0];

  firstImage.onload = () => {
    displayImage(0);
  };

  firstImage.onerror = () => {
    console.log("Failed to load image: " + images[0]);
  };













