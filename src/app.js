const hamburgerButton = document.getElementById('hamburger');
const navList = document.getElementById('navList')


function toggleNavButton() {
    navList.classList.toggle('show')
}

hamburgerButton.addEventListener('click', toggleNavButton)