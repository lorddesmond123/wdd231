
// Select the navigation button and navigation menu
const menuButton = document.querySelector("#menu-button");
const primaryNav = document.querySelector("#primary-nav");

// Check that both elements exist
if (menuButton && primaryNav) {

    // Listen for clicks on the menu button
    menuButton.addEventListener("click", function () {

        // Open or close the navigation menu
        const isOpen = primaryNav.classList.toggle("open");

        // Update accessibility information
        menuButton.setAttribute("aria-expanded", isOpen);

        // Change the button label
        menuButton.setAttribute(
            "aria-label",
            isOpen ? "Close navigation menu" : "Open navigation menu"
        );

        // Change the hamburger symbol
        menuButton.textContent = isOpen ? "✕" : "☰";
    });
}
