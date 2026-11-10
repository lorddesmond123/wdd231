

// ======================================
// JOS CITY CHAMBER OF COMMERCE
// DIRECTORY JAVASCRIPT
// ======================================

// SELECT HTML ELEMENTS
const membersContainer = document.querySelector("#members-container");
const gridButton = document.querySelector("#grid-view");
const listButton = document.querySelector("#list-view");
const menuButton = document.querySelector("#menu-button");
const navigation = document.querySelector("#primary-nav");

// ======================================
// FETCH MEMBERS FROM JSON
// ======================================

async function getMembers() {
    try {
        const response = await fetch("data/members.json");

        if (!response.ok) {
            throw new Error("Unable to load member information.");
        }

        const members = await response.json();

        displayMembers(members);

    } catch (error) {
        console.error("Error loading members:", error);

        membersContainer.innerHTML =
            "<p>Sorry, business members could not be loaded. Please try again later.</p>";
    }
}

// ======================================
// DISPLAY BUSINESS MEMBERS
// ======================================

function displayMembers(members) {
    membersContainer.innerHTML = "";

    members.forEach((member) => {
        const card = document.createElement("article");
        card.classList.add("member-card");

        let membershipName;

        if (member.membership === 3) {
            membershipName = "Gold Member";
        } else if (member.membership === 2) {
            membershipName = "Silver Member";
        } else {
            membershipName = "Member";
        }

        card.innerHTML = `
            <img
                src="images/${member.image}"
                alt="${member.name} business logo"
                loading="lazy"
                width="150"
                height="100"
            >

            <h2>${member.name}</h2>

            <p class="membership">${membershipName}</p>

            <details class="member-details">
                <summary>Details</summary>

                <div class="details-content">
                    <p>${member.description}</p>

                    <p>
                        <strong>Address:</strong>
                        ${member.address}
                    </p>

                    <p>
                        <strong>Phone:</strong>
                        ${member.phone}
                    </p>

                    <p>
                        <strong>Website:</strong>
                        <a href="${member.website}"
                           target="_blank"
                           rel="noopener noreferrer">
                           Visit Website
                        </a>
                    </p>
                </div>
            </details>
        `;

        membersContainer.appendChild(card);
    });
}

// ======================================
// GRID VIEW
// ======================================

gridButton.addEventListener("click", () => {
    membersContainer.classList.remove("list-view");
    membersContainer.classList.add("grid-view");

    gridButton.classList.add("selected");
    listButton.classList.remove("selected");

    gridButton.setAttribute("aria-pressed", "true");
    listButton.setAttribute("aria-pressed", "false");
});

// ======================================
// LIST VIEW
// ======================================

listButton.addEventListener("click", () => {
    membersContainer.classList.remove("grid-view");
    membersContainer.classList.add("list-view");

    listButton.classList.add("selected");
    gridButton.classList.remove("selected");

    listButton.setAttribute("aria-pressed", "true");
    gridButton.setAttribute("aria-pressed", "false");
});

// ======================================
// MOBILE NAVIGATION
// ======================================

menuButton.addEventListener("click", () => {
    navigation.classList.toggle("open");

    const isOpen = navigation.classList.contains("open");

    menuButton.setAttribute("aria-expanded", isOpen);

    menuButton.setAttribute(
        "aria-label",
        isOpen ? "Close navigation menu" : "Open navigation menu"
    );

    menuButton.textContent = isOpen ? "✕" : "☰";
});

// ======================================
// FOOTER COPYRIGHT YEAR
// ======================================

const currentYear = document.querySelector("#currentyear");

if (currentYear) {
    currentYear.textContent = new Date().getFullYear();
}

// ======================================
// LAST MODIFIED DATE
// ======================================

const lastModified = document.querySelector("#lastModified");

if (lastModified) {
    lastModified.textContent = document.lastModified;
}

// ======================================
// LOAD MEMBERS
// ======================================

getMembers();
