const hamburgerButton = document.getElementById('hamburger');
const navList = document.getElementById('navList')
const navbarShow = true;

hamburgerButton.addEventListener('click', toggleNavButton)
window.addEventListener('resize', resetNavbar)


//Nav Bar
function toggleNavButton() {
    navList.classList.toggle('show')
    navbarShow = !navbarShow
}

function resetNavbar() {
    let width = screen.width;

    if (width >= 1000 && navbarShow) {
        navList.classList.remove('show')
        navbarShow = false
    }
}
