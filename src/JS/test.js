import { handleSectionClick } from "./script";

backButton.addEventListener("click", function (event) {
  event.preventDefault();
  closeSection(contactContainer);
});
document.addEventListener("keydown", function (event) {
  handleSectionEscKey(event, closeSection, contactContainer);
});















