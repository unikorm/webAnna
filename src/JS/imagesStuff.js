"use strict";

// imported functions
import {handleSectionClick} from "/src/JS/script.js";

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
