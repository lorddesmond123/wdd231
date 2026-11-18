
// READ FORM VALUES USING URLSearchParams
const params = new URLSearchParams(window.location.search);

// GET SUBMITTED VALUES
const firstName = params.get("first-name") || "";
const lastName = params.get("last-name") || "";
const email = params.get("email") || "";
const phone = params.get("phone") || "";
const organization = params.get("organization") || "";
const organizationTitle = params.get("organization-title") || "";
const membership = params.get("membership") || "";
const timestamp = params.get("timestamp") || "";

// FORMAT MEMBERSHIP LEVEL
const membershipNames = {
    nonprofit: "Nonprofit Membership",
    bronze: "Bronze Membership",
    silver: "Silver Membership",
    gold: "Gold Membership"
};

const membershipName = membershipNames[membership] || membership || "Not provided";

// FORMAT SUBMISSION DATE
let submissionDate = "Not provided";

if (timestamp) {
    const date = new Date(timestamp);

    if (!Number.isNaN(date.getTime())) {
        submissionDate = date.toLocaleString();
    }
}

// DISPLAY APPLICATION DETAILS
const details = document.querySelector("#application-details");

if (details) {
    details.innerHTML = `
        <p><strong>First Name:</strong> ${firstName}</p>
        <p><strong>Last Name:</strong> ${lastName}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone}</p>
        <p><strong>Organization:</strong> ${organization}</p>
        <p><strong>Organization Title:</strong> ${organizationTitle}</p>
        <p><strong>Membership:</strong> ${membershipName}</p>
        <p><strong>Application Date:</strong> ${submissionDate}</p>
    `;
}

// CURRENT YEAR
const currentYear = document.querySelector("#currentyear");

if (currentYear) {
    currentYear.textContent = new Date().getFullYear();
}

// LAST MODIFIED
const lastModified = document.querySelector("#lastModified");

if (lastModified) {
    lastModified.textContent = document.lastModified;
}

// MOBILE NAVIGATION
const menuButton = document.querySelector("#menu-button");
const primaryNav = document.querySelector("#primary-nav");

if (menuButton && primaryNav) {
    menuButton.addEventListener("click", () => {
        primaryNav.classList.toggle("open");
    });
}
