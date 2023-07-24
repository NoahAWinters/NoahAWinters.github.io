const hamburgerButton = document.getElementById('hamburger');
const navList = document.getElementById('navList')
const navbarShow = true;
let width = screen.width;


function toggleNavButton() {
    navList.classList.toggle('show')
    navbarShow = !navbarShow
}

function resetNavbar() {
    if (width >= 1000 && navbarShow) {
        navList.classList.remove('show')
        navbarShow = false
    }

}


hamburgerButton.addEventListener('click', toggleNavButton)
window.addEventListener('resize', resetNavbar)