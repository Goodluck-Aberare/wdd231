import { locations } from '../data/locations.mjs';

document.addEventListener("DOMContentLoaded", () => {
    const grid = document.querySelector(".discover-grid");
    const messageDisplay = document.querySelector("#visit-message");

    // 1. Handle Last Visit Message
    const msToDays = 84600000; // Milliseconds in a day
    const lastVisit = localStorage.getItem("lastVisitDate");
    const today = Date.now();

    if (!lastVisit) {
        messageDisplay.textContent = "Welcome! Let us know if you have any questions.";
    } else {
        const daysPassed = Math.floor((today - lastVisit) / msToDays);
        
        if (daysPassed < 1) {
            messageDisplay.textContent = "Back so soon! Awesome!";
        } else {
            const dayText = daysPassed === 1 ? "day" : "days";
            messageDisplay.textContent = `You last visited ${daysPassed} ${dayText} ago.`;
        }
    }
    localStorage.setItem("lastVisitDate", today);

    // 2. Generate Attraction Cards
    locations.forEach(location => {
        const card = document.createElement("section");
        card.className = "member-card"; // Reusing your existing CSS class

        card.innerHTML = `
            <h2>${location.name}</h2>
            <figure>
                <img src="${location.image}" alt="${location.name}" loading="lazy" width="300" height="200">
            </figure>
            <address>${location.address}</address>
            <p>${location.description}</p>
            <button>Learn More</button>
        `;
        grid.appendChild(card);
    });
});