"use strict";

const SK = document.getElementById("sk");
const UA = document.getElementById("ua");
const EU = document.getElementById("en")

// Code here is for change of languages
SK.addEventListener("click", function(e) {
    e.preventDefault();
    loadLanguage("sk");
  });

EU.addEventListener("click", function(e) {
    e.preventDefault();
    loadLanguage("en");
  });

UA.addEventListener("click", function(e) {
    e.preventDefault();
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
    document.getElementById("errorMessage").textContent = data.errorMessage;
    document.getElementById("successMessage").textContent = data.successMessage;
    document.getElementById("nameError").textContent = data.nameError;
    document.getElementById("emailError").textContent = data.emailError;
    document.getElementById("messageError").textContent = data.messageError;
  })
  .catch(error => console.error(error));
};
