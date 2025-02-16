// hamburger menu on and off toggle
const hamMenu = document.querySelector('.ham-menu');
const offScreenMenu = document.querySelector('.off-screen-menu');

hamMenu.addEventListener('click', () => {
    hamMenu.classList.toggle('active'); // Toggles the X animation
    offScreenMenu.classList.toggle('active'); // Toggles the off-screen menu visibility
});
