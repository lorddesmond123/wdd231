
import { getWeather } from "./weather.mjs";
import { getSpotlights } from "./spotlights.mjs";
import { initializeNavigation } from "./navigation.mjs";

// ======================================
// HOME PAGE INITIALIZATION
// ======================================

// Load current weather and forecast.
getWeather();

// Load random business spotlights.
getSpotlights();

// Initialize mobile navigation.
initializeNavigation();

// ======================================
// FOOTER
// ======================================

const currentYear = document.querySelector("#currentyear");
const lastModified = document.querySelector("#lastModified");

if (currentYear) {
    currentYear.textContent = new Date().getFullYear();
}

if (lastModified) {
    lastModified.textContent = document.lastModified;
}
