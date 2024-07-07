// Navbar and Menubar Toggle
const toggleButton = document.querySelector('.toggle-button');
const navbarLinks = document.querySelector('.navbar-links');
const closeButton = document.querySelector('.close-button');

toggleButton.addEventListener('click', () => {
    navbarLinks.classList.toggle('active');
});

closeButton.addEventListener('click', () => {
    navbarLinks.classList.remove('active');
});

// Scroll Reveal Animation
document.addEventListener('DOMContentLoaded', function () {
    const revealElements = document.querySelectorAll('.reveal');

    function revealOnScroll() {
        revealElements.forEach(element => {
            const elementTop = element.getBoundingClientRect().top;
            const windowHeight = window.innerHeight;
            if (elementTop < windowHeight / 1.3) {
                element.classList.add('visible');
            } else {
                element.classList.remove('visible');
            }
        });
    }

    revealOnScroll();

    window.addEventListener('scroll', revealOnScroll);
});

// Automatic Scroll to Section
const navbarLinksList = document.querySelectorAll('.navbar-links ul li a');

navbarLinksList.forEach(link => {
    link.addEventListener('click', function (e) {
        e.preventDefault();

        const targetId = this.getAttribute('href').substring(1);
        const targetSection = document.getElementById(targetId);

        if (targetSection) {
            const offsetTop = targetSection.offsetTop;

            window.scrollTo({
                top: offsetTop,
                behavior: 'smooth'
            });
        }
    });
});

// Smooth scrolling for navbar brand link
const brandLink = document.querySelector('.brand-title a');

brandLink.addEventListener('click', function (e) {
    e.preventDefault();

    const targetId = this.getAttribute('href').substring(1);
    const targetSection = document.getElementById(targetId);

    if (targetSection) {
        const offsetTop = targetSection.offsetTop;

        window.scrollTo({
            top: offsetTop,
            behavior: 'smooth'
        });
    }
});

function sendEmail() {
    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var message = document.getElementById('message').value;
    var mailtoLink = 'mailto:alithedubster@gmail.com?subject=' + encodeURIComponent('Message from ' + name) + '&body=' + encodeURIComponent(message + '\n\nFrom: ' + name + '\nEmail: ' + email);
    window.location.href = mailtoLink;
}