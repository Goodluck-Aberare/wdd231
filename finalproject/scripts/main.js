// Toggle Menu
const menuBtn = document.querySelector('#menu-button');
const navLinks = document.querySelector('.nav-links');

menuBtn.addEventListener('click', () => {
    navLinks.classList.toggle('open');
});

// Local Storage - Track Visits
const lastVisitDisplay = document.querySelector('#last-visit');
const now = Date.now();
const lastVisit = localStorage.getItem('last-visit');

if (lastVisit) {
    const daysSince = Math.floor((now - lastVisit) / (1000 * 60 * 60 * 24));
    lastVisitDisplay.textContent = `Welcome back! Your last visit was ${daysSince} days ago.`;
} else {
    lastVisitDisplay.textContent = "Welcome! This is your first visit.";
}
localStorage.setItem('last-visit', now);