"use strict";

// imported variables
import { contactContainer, mainContainer, contactLink, backButton, aboutLink, aboutContainer, bodyElement, menuLink, menuContainer, submitButton, contactForm, portfolioContainer, portfolioLink, pricingContainer, pricingLink, portfolioItems, previewContainer, nameInput, emailInput, messageInput, nameError, emailError, messageError, errorMessage, successMessage} from "/src/JS/variables.js";








// general reuseble functions
function openSection(sectionContainer) {
  sectionContainer.style.display = "flex";
  mainContainer.style.display = "none";
  if (sectionContainer !== menuContainer) {
    menuContainer.style.display = "none";
  }
  sectionContainer.style.backdropFilter = "blur(5px)";
  sectionContainer.style.webkitBackdropFilter = "blur(5px)";
}

function closeSection(sectionContainer) {
  mainContainer.style.display = "flex";
  sectionContainer.style.display = "none";
  sectionContainer.style.backdropFilter = null;
  sectionContainer.style.webkitBackdropfFilter = null;
}

function handleSectionClick(event, sectionContainer, contentClass) {
  const targetElement = event.target;

  if (
    getComputedStyle(sectionContainer).display === "flex" &&
    sectionContainer.contains(targetElement) &&
    !targetElement.closest(contentClass)
  ) {
    closeSection(sectionContainer);
  }
}

function handleSectionEscKey(event, closeSection, sectionContainer) {
  if (event.key === "Escape") {
    closeSection(sectionContainer);
  }
}




// event handlers

// Open Menu section when Menu Icon svg is pressed
if (menuLink) {
  menuLink.addEventListener("click", function (event) {
    event.preventDefault();
    openSection(menuContainer);
  });
}

// Closing it
document.addEventListener("click", function (event) {
  handleSectionClick(event, menuContainer, ".menuSelect");
});

document.addEventListener("keydown", function (event) {
  handleSectionEscKey(event, closeSection, menuContainer);
});




// Open the contact form when "Contact" link is clicked
if (contactLink) {
  contactLink.addEventListener("click", function (event) {
    event.preventDefault();
    openSection(contactContainer);
  });
}

//Closing it  
document.addEventListener("keydown", function (event) {
  handleSectionEscKey(event, closeSection, contactContainer);
});

if (backButton) {
  backButton.addEventListener("click", function (event) {
    event.preventDefault();
    closeSection(contactContainer);
  });
}





// Open About section, when "About" link is clicked
if (aboutLink) {
  aboutLink.addEventListener("click", function (event) {
    event.preventDefault();
    openSection(aboutContainer);
  });
}

// Closing it 
document.addEventListener("click", function (event) {
  handleSectionClick(event, aboutContainer, ".authorInfo");
  errorMessage.style.display = "none";
  errorMessage.textContent = ""
  successMessage.style.display = "none";
  successMessage.textContent = "";
});

document.addEventListener("keydown", function (event) {
  handleSectionEscKey(event, closeSection, aboutContainer);
  errorMessage.style.display = "none";
});



// Open Portfolio section when "Portfolio" link is clicked
if (portfolioLink) {
  portfolioLink.addEventListener("click", function (event) {
    event.preventDefault();
    openSection(portfolioContainer);
  });
}

// Closing it 
document.addEventListener("click", function (event) {
  handleSectionClick(event, portfolioContainer, ".portfolioItem");
});

document.addEventListener("keydown", function (event) {
  handleSectionEscKey(event, closeSection, portfolioContainer);
});



// Open Pricing section when "Pricing" link is clicked
if (pricingLink) {
  pricingLink.addEventListener("click", function (event) {
    event.preventDefault();
    openSection(pricingContainer);
  });
}

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








  // Function to control behaviour of closing Contact form clicking outside of it 
  function handleContactFormClick(event) {
    handleSectionClick(event, contactContainer, ".contact-form");
  };

  function closingContactForm() {
    if (websiteWidth > 700) {
      document.addEventListener("click", handleContactFormClick);
    } else if (websiteWidth < 701) {
      document.removeEventListener("click", handleContactFormClick);
    };
  };





  
  
  






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
  fetch("src/translations/" + lang + ".json")
  .then(response => response.json())
  .then(data => {
    document.getElementById("portfolio").textContent = data.portfolio;
    document.getElementById("about").textContent = data.about;
    document.getElementById("contact").textContent = data.contact;
    // document.getElementById("pricing").textContent = data.pricing;
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
    document.getElementById("messageContactForm").textContent = data.messageContactForm;
    document.getElementById("backButton").textContent = data.backButton;
    document.getElementById("submitButton").textContent = data.submitButton;
    document.getElementById("errorMessage").textContent = data.errorMessage;
    document.getElementById("successMessage").textContent = data.successMessage;
    document.getElementById("nameError").textContent = data.nameError;
    document.getElementById("emailError").textContent = data.emailError;
    document.getElementById("messageError").textContent = data.messageError;
  })
  .catch(error => console.error(error));
};











// Code here is for calling PHP script to send email from contact form

// Event listener for the submit button
submitButton.addEventListener("click", function(event) {
  event.preventDefault();

  if (validateForm() && !containsBadWord()) {
    const formData = new FormData(contactForm);
    sendEmail(formData);
    console.log("button is click, sendEmail function is fired");
  }
});

// Function to validate the form
function validateForm() {
  let isValid = true;

  isValid = validateField(nameInput, nameError, "Please enter your name.") && isValid;
  isValid = validateField(emailInput, emailError, "Please enter a valid email address.", isValidEmail) && isValid;
  isValid = validateField(messageInput, messageError, "Please enter a message.") && isValid;

  return isValid;
}

// Function to validate individual fields
function validateField(inputElement, errorElement, errorMessage, validationFunction = null) {
  const value = inputElement.value.trim();
  const isFieldValid = validationFunction ? validationFunction(value) : value !== "";

  if (!isFieldValid) {
    setError(errorElement, errorMessage);
  } else {
    setError(errorElement, "");
  }

  return isFieldValid;
}

// Function to set error messages
function setError(element, message) {
  element.style.display = message ? "flex" : "none";
  element.textContent = message;
}

// Function to check if the email is valid
function isValidEmail(email) {
  const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  return emailRegex.test(email);
}

// List of bad words
const BADWORDS = ["fuck", "bitch", "motherfucker", "kkt", "pica", "jebem", "kotleba"];

// Function to check if the form contains any bad word
function containsBadWord() {
  const name = nameInput.value;
  const email = emailInput.value;
  const message = messageInput.value;

  for (const word of BADWORDS) {
    const pattern = new RegExp("\\b" + word + "\\b", "i");
    if (pattern.test(name) || pattern.test(email) || pattern.test(message)) {
      setError(nameError, "Nenadávaj tu!");
      setError(emailError, "Nenadávaj tu!");
      setError(messageError, "Nenadávaj tu!");
      return true;
    }
  }

  setError(nameError, "");
  setError(emailError, "");
  setError(messageError, "");
  return false;
}


function sendEmail(formData) {
  const xhr = new XMLHttpRequest();
  xhr.open("POST", "src/php_stuff/send_email.php", true);
  xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");

  xhr.onreadystatechange = function() {
    if (xhr.readyState === XMLHttpRequest.DONE) {
      if (xhr.status === 200) {
        const response = JSON.parse(xhr.responseText);
        if (response.success) {
          console.log("PHP is working, " + response.message);
          successMessage.style.display = "flex";
          // errorMessage.style.display = "none";
        } else {
          errorMessage.style.display = "flex";
          console.error("PHP not working, " + response.message);
        }
      } else {
        console.error("Error sending email: " + xhr.status);
        errorMessage.style.display = "flex";
      }
    };
  };

  const encodedData = new URLSearchParams(formData).toString();
  xhr.send(encodedData);
  console.log(encodedData);
};





