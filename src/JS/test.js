import { handleSectionClick } from "./script";

backButton.addEventListener("click", function (event) {
  event.preventDefault();
  closeSection(contactContainer);
});
document.addEventListener("keydown", function (event) {
  handleSectionEscKey(event, closeSection, contactContainer);
});

  document.addEventListener("click", function (event) {
    handleSectionClick(event, menuContainer, ".menuSelect");
  });
  document.addEventListener("click", function (event) {
    handleSectionClick(event, aboutContainer, ".authorInfo");
  });
  document.addEventListener("click", function (event) {
    handleSectionClick(event, portfolioContainer, ".portfolioItem");
  });
  document.addEventListener("click", function (event) {
    handleSectionClick(event, pricingContainer, ".pricingContent");
  });

  let closeSecClick = (container, content) => {
    document.addEventListener("click", (e) => {
      e.preventDefault();
      handleSectionClick(e, container, content);
    });
  };



















  document.addEventListener("keydown", function (event) {
    handleSectionEscKey(event, closeSection, menuContainer);
  });
  document.addEventListener("keydown", function (event) {
    handleSectionEscKey(event, closeSection, pricingContainer);
  });
  document.addEventListener("keydown", function (event) {
    handleSectionEscKey(event, closeSection, portfolioContainer);
  });
  document.addEventListener("keydown", function (event) {
    handleSectionEscKey(event, closeSection, aboutContainer);
  });
