document.addEventListener("click", function (event) {
    handleSectionClick(event, menuContainer, ".menuSelect");
  });
  document.addEventListener("keydown", function (event) {
    handleSectionEscKey(event, closeSection, menuContainer);
  });

  backButton.addEventListener("click", function (event) {
    event.preventDefault();
    closeSection(contactContainer);
  });
  document.addEventListener("keydown", function (event) {
    handleSectionEscKey(event, closeSection, contactContainer);
  });

  document.addEventListener("click", function (event) {
    handleSectionClick(event, aboutContainer, ".authorInfo");
  });
  document.addEventListener("keydown", function (event) {
    handleSectionEscKey(event, closeSection, aboutContainer);
  });

  document.addEventListener("click", function (event) {
    handleSectionClick(event, portfolioContainer, ".portfolioItem");
  });
  document.addEventListener("keydown", function (event) {
    handleSectionEscKey(event, closeSection, portfolioContainer);
  });

  document.addEventListener("click", function (event) {
    handleSectionClick(event, pricingContainer, ".pricingContent");
  });
  document.addEventListener("keydown", function (event) {
    handleSectionEscKey(event, closeSection, pricingContainer);
  });