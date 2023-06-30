import { contactContainer, mainContainer, contactLink, backButton, aboutLink, aboutContainer, bodyElement, menuLink, menuContainer, submitButton, portfolioContainer, portfolioLink, pricingContainer, pricingLink} from "/src/JS/variables.js";

function openSection(sectionContainer) {
  sectionContainer.style.display = "flex";
  mainContainer.style.display = "none";
  if (sectionContainer !== menuContainer) {
    menuContainer.style.display = "none";
  }
  bodyElement.style.backdropFilter = "blur(5px)";
}

function closeSection(sectionContainer) {
  mainContainer.style.display = "flex";
  sectionContainer.style.display = "none";
  bodyElement.style.backdropFilter = null;
}

function handleSectionClick(event, sectionContainer, contentClass, closeSectionFn) {
  const targetElement = event.target;

  if (
    getComputedStyle(sectionContainer).display === "flex" &&
    sectionContainer.contains(targetElement) &&
    targetElement.closest(contentClass)
  ) {
    closeSectionFn();
  }
}

function handleSectionEscKey(event, closeSectionFn) {
  if (event.key === "Escape") {
    closeSectionFn();
  }
}





// Open Menu section when Menu Icon svg is pressed
if (menuLink) {
  menuLink.addEventListener("click", function (event) {
    event.preventDefault();
    openSection(menuContainer);
  });
}

document.addEventListener("click", function (event) {
  handleSectionClick(event, menuContainer, ".menuSelect", closeMenuSection);
});

document.addEventListener("keydown", function (event) {
  handleSectionEscKey(event, closeSection(menuContainer));
});




// Open the contact form when "Contact" link is clicked
if (contactLink) {
  contactLink.addEventListener("click", function (event) {
    event.preventDefault();
    openSection(contactContainer);
  });
}



// Open About section, when "About" link is clicked
if (aboutLink) {
  aboutLink.addEventListener("click", function (event) {
    event.preventDefault();
    openSection(aboutContainer);
  });
}



// Open Portfolio section when "Portfolio" link is clicked
if (portfolioLink) {
  portfolioLink.addEventListener("click", function (event) {
    event.preventDefault();
    openSection(portfolioContainer);
  });
}



// Open Pricing section when "Pricing" link is clicked
if (pricingLink) {
  portfolioLink.addEventListener("click", function (event) {
    event.preventDefault();
    openSection(pricingContainer);
  });
}


























































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
    setInterval(changeBackground, 10000); // Run the function every 10 seconds
  };
  
  function changeBackground() {
    document.body.style.backgroundImage = "url(" + images[currentIndex] + ")";
    currentIndex = (currentIndex + 1) % images.length;
  };

  // preloadImages();  // start preloading images
  
  
  








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