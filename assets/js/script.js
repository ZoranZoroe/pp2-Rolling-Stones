/*Navigation bar*/
const nav = document.querySelector('.header')
window.addEventListener('scroll', fixNav)

function fixNav() {
    if(window.scrollY > nav.offsetHeight + 200) {
        nav.classList.add('navdown')
    } else {
        nav.classList.remove('navdown')
    }
}

/*Main banner*/
const left = document.querySelector('.left');
const right = document.querySelector('.right');
const banner = document.querySelector('.banner');

left.addEventListener('mouseenter', ()=>banner.classList.add('hover-left'));
left.addEventListener('mouseleave', ()=>banner.classList.remove('hover-left'));

right.addEventListener('mouseenter', ()=>banner.classList.add('hover-right'));
right.addEventListener('mouseleave', ()=>banner.classList.remove('hover-right'));

/* Javascript for tour section*/
const panels = document.querySelectorAll('.panel')

panels.forEach(panel => {
    panel.addEventListener('click', () => {
        removeActiveClasses()
        panel.classList.add('active')
    })
})

function removeActiveClasses() {
    panels.forEach(panel => {
        panel.classList.remove('active')
    })
}

/*Sign up form*/
const firstName = document.getElementById('fname');
const lastName = document.getElementById('lname');
const email = document.getElementById('email');
const form = document.getElementById('form');
const errorDiv = document.getElementById('error-div');

form.addEventListener('submit', (e) => {
    let errorMessages = [];
    if (firstName.value === '') {
        errorMessages.push('First name is required');
    }

    if (lastName.value === '') {
        errorMessages.push('Last name is required');
    }

    if (errorMessages.length > 0) {
        e.preventDefault();
        errorDiv.innerText = errorMessages.join(', ');
      }
    });
