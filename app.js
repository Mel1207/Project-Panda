$(document).ready(function() {
    $(window).on('scroll', () => {
        if ($(window).scrollTop ()) {
            $('nav').addClass('coloredNav');
        } else {
            $('nav').removeClass('coloredNav');
        }
    });
});

const navSlide = () => {
    const menu = document.querySelector('.menu');
    const navLinks = document.querySelector('.nav-links');
    const links = document.querySelectorAll('.nav-links li');

    menu.addEventListener('click', () => {
        navLinks.classList.toggle('nav-active');
        links.forEach((link, index) => {
            if (link.style.animation) {
                link.style.animation = ''
            } else {
                link.style.animation = `linkFade 0.5s ease forwards ${index / 7 + 0.5}s`;
            }
        });
        // Menu animation
        menu.classList.toggle('toggle');
    });
}
navSlide();

// Login Modal
const modalLogin = () => {
    const modal = document.querySelector('#simpleModal');
    const modalBtn = document.querySelector('#modalOpen'); //This is submit button
    const closebtn = document.querySelector('.closeBtn');

    window.addEventListener('click', clickOutside);
    function clickOutside(e) {
        if (e.target == modal) {
            modal.style.display = 'none';
        }
    }
    modalBtn.addEventListener('click', openModal);
    function openModal () {
        modal.style.display = 'block';
    }
    closebtn.addEventListener('click', closeModal);
    function closeModal () {
        modal.style.display = 'none';
    }
}
modalLogin();

// Sign In modal
const modalSignin = () => {
    const modal = document.querySelector('#simpleModalSignIn');
    const modalBtn = document.querySelector('#btnSign');
    const closebtn = document.querySelector('.closeBtnSI');

    window.addEventListener('click', clickOutside);
    function clickOutside(e) {
        if (e.target == modal) {
            modal.style.display = 'none';
        }
    }
    modalBtn.addEventListener('click', openModal);
    function openModal () {
        modal.style.display = 'block';
    }
    closebtn.addEventListener('click', closeModal);
    function closeModal () {
        modal.style.display = 'none';
    }
}
modalSignin();
