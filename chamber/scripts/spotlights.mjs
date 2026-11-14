
const spotlightContainer = document.querySelector("#spotlight-container");

// ======================================
// BUSINESS SPOTLIGHTS
// ======================================

export async function getSpotlights() {
    try {
        const response = await fetch("data/members.json");

        if (!response.ok) {
            throw new Error("Unable to load business members.");
        }

        const members = await response.json();

        if (!Array.isArray(members)) {
            throw new Error("Invalid members data.");
        }

        // Only Gold and Silver members qualify.
        const eligibleMembers = members.filter(
            member => member.membership === 2 ||
                      member.membership === 3
        );

        // Shuffle the eligible members.
        for (let i = eligibleMembers.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));

            [eligibleMembers[i], eligibleMembers[j]] =
            [eligibleMembers[j], eligibleMembers[i]];
        }

        // Display two or three members.
        const numberToShow = Math.min(
            eligibleMembers.length,
            Math.random() < 0.5 ? 2 : 3
        );

        const selectedMembers =
            eligibleMembers.slice(0, numberToShow);

        spotlightContainer.innerHTML = "";

        selectedMembers.forEach(member => {
            const membershipName =
                member.membership === 3
                    ? "Gold Member"
                    : "Silver Member";

            const card = document.createElement("article");
            card.classList.add("spotlight-card");

            card.innerHTML = `
                <h3>${member.name}</h3>

                <img
                    src="images/${member.image}"
                    alt="${member.name} logo"
                    width="150"
                    height="100"
                    loading="lazy"
                    decoding="async"
                >

                <p class="membership">${membershipName}</p>

                <p><strong>Phone:</strong> ${member.phone}</p>

                <p><strong>Address:</strong> ${member.address}</p>

                <p>
                    <strong>Website:</strong>
                    <a href="${member.website}"
                       target="_blank"
                       rel="noopener noreferrer">
                       Visit Website
                    </a>
                </p>
            `;

            spotlightContainer.appendChild(card);
        });

        if (selectedMembers.length === 0) {
            spotlightContainer.textContent =
                "No Gold or Silver members are currently available.";
        }

    } catch (error) {
        console.error("Spotlight error:", error);

        spotlightContainer.textContent =
            "Business spotlights could not be loaded.";
    }
}
