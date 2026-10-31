
// Get the current year
const currentYear = new Date().getFullYear();

// Display the current year in the footer
document.querySelector("#currentyear").textContent = currentYear;

// Get the last modified date of the HTML document
const lastModified = document.lastModified;

// Display the last modified date
document.querySelector("#lastModified").textContent = lastModified;
