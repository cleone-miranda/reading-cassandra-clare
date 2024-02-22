const burgerButton = document.querySelector('.burger');
const burgerMenuIcon = document.querySelector('.bi-list');
const containerMenu = document.querySelector('#container');

function showAndHideBurgerMenu() {
    if (containerMenu.classList.contains('displayNone')) {
        containerMenu.classList.remove('displayNone');
        burgerMenuIcon.classList.replace('bi-list', 'bi-x-lg');
    } else {
        containerMenu.classList.add('displayNone');
        burgerMenuIcon.classList.replace('bi-x-lg', 'bi-list');
    }
}

// burgerButton.addEventListener('click', showAndHideBurgerMenu(), true);