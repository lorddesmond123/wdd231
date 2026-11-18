
/* =========================================
   JOS CITY CHAMBER - JOIN PAGE JAVASCRIPT
========================================= */

// CURRENT YEAR
const currentYear = document.querySelector("#currentyear");

if (currentYear) {
    currentYear.textContent = new Date().getFullYear();
}

// LAST MODIFIED DATE
const lastModified = document.querySelector("#lastModified");

if (lastModified) {
    lastModified.textContent = document.lastModified;
}

// FORM TIMESTAMP
const timestamp = document.querySelector("#timestamp");

if (timestamp) {
    timestamp.value = new Date().toISOString();
}

// MOBILE NAVIGATION
const menuButton = document.querySelector("#menu-button");
const navigation = document.querySelector("#primary-nav");

if (menuButton && navigation) {
    menuButton.addEventListener("click", () => {
        const isOpen = navigation.classList.toggle("open");

        menuButton.setAttribute("aria-expanded", isOpen);
        menuButton.setAttribute(
            "aria-label",
            isOpen ? "Close navigation menu" : "Open navigation menu"
        );
    });
}

// MEMBERSHIP MODALS
const benefitButtons = document.querySelectorAll(".benefit-button");

benefitButtons.forEach((button) => {
    button.addEventListener("click", () => {
        const modalId = button.dataset.modal;
        const modal = document.getElementById(modalId);

        if (modal) {
            modal.showModal();
        }
    });
});

// CLOSE MODALS
const closeButtons = document.querySelectorAll(".close-modal");

closeButtons.forEach((button) => {
    button.addEventListener("click", () => {
        const modal = button.closest("dialog");

        if (modal) {
            modal.close();
        }
    });
});

// CLOSE MODAL WHEN CLICKING OUTSIDE ITS CONTENT
document.querySelectorAll("dialog").forEach((modal) => {
    modal.addEventListener("click", (event) => {
        if (event.target === modal) {
            modal.close();
        }
    });
});
