"use strict";

// imported variables
import { submitButton, contactForm, nameInput, emailInput, messageInput, nameError, emailError, messageError, errorMessage, successMessage} from "/src/JS/variables.js";

// Code here is for calling PHP script to send email from contact form
let messaggeVisible = false;

// Event listener for the submit button
submitButton.addEventListener("click", function(event) {
  event.preventDefault();

  if (validateForm()) {
    const formData = new FormData(contactForm);
    sendEmail(formData);
    console.log("button is click, sendEmail function is fired");
  }
});

// Function to validate the form
function validateForm() {
  let isValid = true;

  isValid = validateField(nameInput, nameError) && isValid;
  isValid = validateField(emailInput, emailError, isValidEmail) && isValid;
  isValid = validateField(messageInput, messageError) && isValid;

  console.log(isValid);
  return isValid;
};

// Function to validate individual fields
function validateField(inputElement, errorElement, validationFunction = null) {
  const value = inputElement.value.trim();
  const isFieldValid = validationFunction ? validationFunction(value) : value !== "";

  setError(errorElement, !isFieldValid);

  return isFieldValid;
};

// Function to set error messages
function setError(element, hasError) {
  element.style.display = hasError ? "flex" : "none";
};

// Function to check if the email is valid
function isValidEmail(email) {
  const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  return emailRegex.test(email);
};

function sendEmail(formData) {
  const xhr = new XMLHttpRequest();
  xhr.open("POST", "src/php_stuff/send_email.php", true);
  xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");

  xhr.onreadystatechange = function() {
    if (xhr.readyState === XMLHttpRequest.DONE) {
      if (xhr.status === 200) {
        const response = JSON.parse(xhr.responseText);
        if (response.success) {
          successMessage.style.display = "flex";
          messaggeVisible = true;
        } else {
          errorMessage.style.display = "flex";
          throw ("Error sending email: ${xhr.status}");
        }
      } else {
        errorMessage.style.display = "flex"; // tu treba dodat dodatok ked bude tato chyba, aby som ja vedel ze je to tato chyba
        throw ("Error sending email: ${xhr.status}");
      };
    };
  };

  const encodedData = new URLSearchParams(formData).toString();
  xhr.send(encodedData);
  console.log(encodedData);
};

// function to handle change of visibility on message success/error
function handleTextInputInteraction(i, e) {
  if (messaggeVisible && document.activeElement === e) {
    i.style.display = "none";
    messaggeVisible = false;
    return;
  } else {
    return;
  };
};

// listeneri to handle success/error message
nameInput.addEventListener("click", handleTextInputInteraction.bind(null, successMessage, nameInput));
emailInput.addEventListener("click", handleTextInputInteraction.bind(null, successMessage, emailInput));
messageInput.addEventListener("click", handleTextInputInteraction.bind(null, successMessage, messageInput));
