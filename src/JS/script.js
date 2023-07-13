
// imported variables
import { contactContainer, mainContainer, contactLink, backButton, aboutLink, aboutContainer, bodyElement, menuLink, menuContainer, submitButton, portfolioContainer, portfolioLink, pricingContainer, pricingLink, portfolioItems, previewContainer} from "/src/JS/variables.js";








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

// s tymto sa este pohram, dam var ktora bude mat v sebe aktualny width stranky a z nej vivodim ci treba zapnut tuto funkciu a napojim na tu var mozno aj funkciu na prehodenie bckground image na mobilnu variantu obrazkov
// if (websiteWidth > 700) {
//   document.addEventListener("click", function (event) {
//     handleSectionClick(event, contactContainer, ".contact-form");
//   });
// };

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
});

document.addEventListener("keydown", function (event) {
  handleSectionEscKey(event, closeSection, aboutContainer);
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
  
    for (let i = 1; i < images.length; i++) {
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
    preloadImages();
  };

  firstImage.onerror = () => {
    console.log("Failed to load image: " + images[0]);
  };


  // Function to control behaviour of closing Contact form clicking outside of it 
  function closingContactForm() {
    if (websiteWidth > 700) {
      document.addEventListener("click", function (event) {
       handleSectionClick(event, contactContainer, ".contact-form");
      });
      console.log("desktop");
    } else if (websiteWidth < 701) {
      console.log("mobil")
    }
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
  })
  .catch(error => console.error(error));
};

















// code for http request to server side from contact form, etc.
submitButton.addEventListener("click", function(event) {
  event.preventDefault();
  // here will be code for handling and design to send us a user message
});