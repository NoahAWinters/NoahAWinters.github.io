const hamburgerButton = document.getElementById('hamburger');
const navList = document.getElementById('navList')

let width = screen.width;

function toggleNavButton() {
    navList.classList.toggle('show')
}

function showText() {

}

hamburgerButton.addEventListener('click', toggleNavButton)