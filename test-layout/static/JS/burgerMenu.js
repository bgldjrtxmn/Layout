let hamb = document.querySelector('.header__burger-menu');
let popup = document.querySelector('.header__popup');

hamb.addEventListener('click', hambHandler);

function hambHandler (e) {
    popup.classList.toggle('header__popup-open');
}