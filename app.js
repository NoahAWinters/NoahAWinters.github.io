const sections = document.querySelectorAll('.section');
const sectBtns = document.querySelectorAll('.menu');
const sectBtn = document.querySelectorAll('.button');
const allSections = document.querySelector('.main-content');

function PageTransitions() {
    //Button click active class
    for (let i = 0; i < sectBtn.length; i++) {
        sectBtn[i].addEventListener('click', function () {
            let currentBtn = document.querySelectorAll('.active-btn');
            currentBtn[0].className = currentBtn[0].className.replace('active-btn', '');
            this.className += ' active-btn';
        })
    }

    //Section Active
    allSections.addEventListener('click', (e) => {
        const id = e.target.dataset.id;
        if (id) {
            //remove selected from the button
            sectBtns.forEach((btn) => {
                btn.classList.remove('active')
            })
            //e.target.classList.add('active')

            //Hide all other sections
            sections.forEach((section) => {
                section.classList.remove('active')
            })
            const element = document.getElementById(id)
            element.classList.add('active')
        }
    })
}

PageTransitions();