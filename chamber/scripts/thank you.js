
// GET FORM INFORMATION
const params = new URLSearchParams(window.location.search);

// FORM FIELDS TO DISPLAY
const fields = [
    "first-name",
    "last-name",
    "email",
    "phone",
    "organization",
    "organization-title"
];

// DISPLAY SUBMITTED INFORMATION
fields.forEach((field) => {
    const element = document.getElementById(field);

    if (element) {
        element.textContent = params.get(field) || "Not provided";
    }
});

// DISPLAY MEMBERSHIP LEVEL
const membership = params.get("membership");

const membershipNames = {
    nonprofit: "Non-Profit",
    bronze: "Bronze",
    silver: "Silver",
    gold: "Gold"
};

document.getElementById("membership").textContent =
    membershipNames[membership] || "Not provided";

// DISPLAY SUBMISSION DATE
const timestamp = params.get("timestamp");
const dateElement = document.getElementById("timestamp");

if (timestamp && !Number.isNaN(Date.parse(timestamp))) {
    dateElement.textContent =
        new Date(timestamp).toLocaleString();
} else {
    dateElement.textContent = "Not available";
}

// CURRENT YEAR
document.getElementById("currentyear").textContent =
    new Date().getFullYear();

// MOBILE NAVIGATION
const menuButton = document.getElementById("menu-button");
const navigation = document.getElementById("primary-nav");

menuButton.addEventListener("click", () => {
    const isOpen = navigation.classList.toggle("open");

    menuButton.setAttribute("aria-expanded", isOpen);

    menuButton.setAttribute(
        "aria-label",
        isOpen ? "Close navigation menu" : "Open navigation menu"
    );
});
