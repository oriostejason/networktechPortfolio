// select DOM items

const menuButton = document.querySelector('.menu-btn');
const menu = document.querySelector('.menu');
const menuNav = document.querySelector('.menu-nav');
const menuLeftMenu = document.querySelector('.menu-left');

const navItems = document.querySelectorAll('.nav-item');

//set initital set of the menu
let showMenu = false;
menuButton.addEventListener('click', toggleMenu);

function toggleMenu() {
    if (!showMenu) {
        menuButton.classList.add('close');
        menu.classList.add('show');
        menuNav.classList.add('show');
        menuLeftMenu.classList.add('show');
        navItems.forEach(item => item.classList.add('show'));

        //set menu state
        showMenu = true;

    } else {
        menuButton.classList.remove('close');
        menu.classList.remove('show');
        menuNav.classList.remove('show');
        menuLeftMenu.classList.remove('show');
        navItems.forEach(item => item.classList.remove('show'));

        //set menu state
        showMenu = false;
    }
}