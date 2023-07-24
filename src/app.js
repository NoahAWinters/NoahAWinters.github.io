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

//Contact Form https://www.youtube.com/watch?v=sGQSz22U8VM
function sendEmail() {
    Email.send({
        Host: "smtp.elasticemail.com",
        Username: "username",
        Password: "password",
        To: 'them@website.com',
        From: "you@isp.com",
        Subject: "This is the subject",
        Body: "And this is the body"
    }).then(
        message => alert(message)
    );
}