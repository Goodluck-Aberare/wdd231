// Toggle Hamburger Menu
const menuBtn = document.querySelector('#menuBtn');
const navMenu = document.querySelector('#navMenu');

menuBtn.addEventListener('click', () => {
    navMenu.classList.toggle('open');
});

// Display Last Modified Date in Footer
const lastModifiedElement = document.querySelector('#lastModified');
if (lastModifiedElement) {
    lastModifiedElement.textContent = `Last Modified: ${document.lastModified}`;
}