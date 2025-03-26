// Select the elments

const hamburger = document.getElementById('hamburger');
const menu = document.getElementById('menu');

// Toggle menu  visibilty on hamburger click
hamburger.addEventListener('click', () => {
    menu.classList.toggle('show');
});