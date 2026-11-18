
// CURRENT YEAR
document.querySelector("#currentyear").textContent =
    new Date().getFullYear();

// FORM TIMESTAMP
document.querySelector("#timestamp").value =
    new Date().toISOString();

// MOBILE NAVIGATION
const menuButton = document.querySelector("#menu-button");
const navigation = document.querySelector("#primary-nav");

menuButton.addEventListener("click", () => {
    const isOpen = navigation.classList.toggle("open");

    menuButton.setAttribute("aria-expanded", isOpen);
    menuButton.setAttribute(
        "aria-label",
        isOpen ? "Close navigation menu" : "Open navigation menu"
    );
});

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
        button.closest("dialog").close();
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

// FOOTER DATE INFORMATION
document.querySelector("#currentyear").textContent =
    new Date().getFullYear();

document.querySelector("#lastModified").textContent =
    document.lastModified;