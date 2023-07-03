
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
}

function closeSection(sectionContainer) {
  mainContainer.style.display = "flex";
  sectionContainer.style.display = "none";
  sectionContainer.style.backdropFilter = null;
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

// Closing it 
document.addEventListener("click", function (event) {
  handleSectionClick(event, contactContainer, ".contact-form");
});

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

  // Function to change background image constantly
  let images = [
    "/photo/DSC_1042.JPG",
    "/photo/DSC_0187-2.JPG",
    "/photo/DSC_0095.JPG",
    "/photo/DSC_1202.JPG",
    "/photo/DSC_0069.jpg"
  ];
  
  let currentIndex = 1;
  let preloadedImages = [];  // Array to store preloaded images
  
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
    setInterval(changeBackground, 4000); // Run the function every 10 seconds
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
  fetch("src/translations/" + lang + ".json")
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
    document.getElementById("messageContactForm").textContent = data.messageContactForm;
    document.getElementById("backButton").textContent = data.backButton;
    document.getElementById("submitButton").textContent = data.submitButton;
  })
  .catch(error => console.error(error));
}










// Code for preview of portfolio items
// portfolioItems.forEach((item) => {
//   item.addEventListener("click", (event) => {
//     event.preventDefault();
//     const imgUrl = item.getAttribute("href");
//     showPreview(imgUrl);
//   });
// });

// function showPreview(imgUrl) {
//   const previewImage = document.createElement("img");
//   previewImage.src = imgUrl;

//   previewContainer.innerHTML = "";
//   previewContainer.appendChild(previewImage);
//   portfolioContainer.style.display = "none";
//   previewContainer.style.display = "flex";

// }

// previewContainer.addEventListener("click", () => {
//   previewContainer.style.display = "none";
//   portfolioContainer.style.display = "flex";
// });








// code for http request to server side from contact form, etc.
submitButton.addEventListener("click", function(event) {
  event.preventDefault();
  // here will be code for handling and design to send us a user message
});