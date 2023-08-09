const hamburgerButton = document.getElementById('hamburger');
const navList = document.getElementById('navList');
const nav = document.getElementById('navbar');
const navbarShow = true;

hamburgerButton.addEventListener('click', function () {
    navList.classList.toggle('show');
    hamburgerButton.classList.toggle('show');
    nav.classList.toggle('stayGreen');
    navbarShow = !navbarShow;

});
window.addEventListener('resize', resetNavbar);


//Nav Bar
// function toggleNavButton() {
//     navList.classList.toggle('show');
//     hamburgerButton.classList.toggle('show');
//     navbarShow = !navbarShow;
// }

function resetNavbar() {
    let width = screen.width;

    if (width >= 1000 && navbarShow) {
        navList.classList.remove('show');
        hamburgerButton.classList.remove('show');
        nav.classList.remove('stayGreen');
        navbarShow = false;
    }
}
