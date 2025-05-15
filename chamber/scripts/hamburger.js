//hamburger button on menu
const hamButton = document.querySelector('#menu');
const navigation = document.querySelector('#navMenu');

hamButton.addEventListener('click', () => {
    navigation.classList.toggle('open');
    hamButton.classList.toggle('open');
});