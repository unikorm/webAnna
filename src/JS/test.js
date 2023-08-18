// Open Menu section when Menu Icon svg is pressed
menuLink.addEventListener("click", function (event) {
    event.preventDefault();
    navigateToSection(menuContainer, "menuContainer")
  });
  // Open the contact form when "Contact" link is clicked
contactLink.addEventListener("click", function (event) {
    event.preventDefault();
    navigateToSection(contactContainer, "contactContainer")
  });
  // Open About section, when "About" link is clicked
aboutLink.addEventListener("click", function (event) {
    event.preventDefault();
    navigateToSection(aboutContainer, "aboutContainer")
  });
  // Open Portfolio section when "Portfolio" link is clicked
portfolioLink.addEventListener("click", function (event) {
    event.preventDefault();
    navigateToSection(portfolioContainer, "portfolioContainer")
  });
  // Open Pricing section when "Pricing" link is clicked
pricingLink.addEventListener("click", function (event) {
    event.preventDefault();
    navigateToSection(pricingContainer, "pricingContainer")
  });

let openSec = (link, container, stringContainer) => {
    link.addEventListener("click", (e) => {
        e.preventDefault();
        navigateToSection(container, stringContainer);
    });
};

openSec(menuLink, menuContainer, "menuContainer");
