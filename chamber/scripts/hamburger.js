//hamburger button on menu
const hamButton = document.querySelector('#menu');
const navigation = document.querySelector('#navMenu');

hamButton.addEventListener('click', () => {
    navigation.classList.toggle('open');
    hamButton.classList.toggle('open');
});

//wayfinding
document.addEventListener('DOMContentLoaded', () => {
    const currentPath = window.location.pathname.split('/').pop();
    const navLinks = document.querySelectorAll('nav ul li a');

    navLinks.forEach(link => {
        if (link.getAttribute("href") === currentPath) {   //checks to see what page it's on
            link.classList.add("active")
        }
    });
});