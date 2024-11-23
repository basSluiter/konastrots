// JavaScript for Hamburger Menu
document.addEventListener("DOMContentLoaded", () => {
    const hamburger = document.querySelector('.hamburger');
    const navLinks = document.querySelector('.nav-links');

    hamburger.addEventListener('click', () => {
        navLinks.classList.toggle('hidden');
        navLinks.classList.toggle('active');
    });
});


// const hamburger = document.querySelector('.hamburger');
// const navLinks = document.querySelector('.nav-links');

// hamburger.addEventListener('click', () => {
//     const expanded = hamburger.getAttribute('aria-expanded') === 'true';
//     hamburger.setAttribute('aria-expanded', !expanded);
//     navLinks.classList.toggle('hidden');
// });

// const hamburger = document.querySelector('.hamburger');
// const navLinks = document.querySelector('.nav-links');

// hamburger.addEventListener('click', () => {
//     navLinks.classList.toggle('active');
//     // Optionally toggle aria-expanded here
// });