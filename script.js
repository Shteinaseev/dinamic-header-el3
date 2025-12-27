const burgerBtn = document.querySelector('.burger-btn')
const navbar = document.querySelector('.navbar')
const menu = document.querySelector('.menu')

window.addEventListener('scroll', () => {
    navbar.classList.toggle('scrolled', window.scrollY > 200)
    menu.classList.remove('open');
})

burgerBtn.addEventListener('click', () => {
    navbar.classList.toggle('scrolled')
    menu.classList.toggle('open');
    burgerBtn.setAttribute('aria-expanded', menu.classList.contains('open'));
})

document.querySelectorAll('a[href^="#"]')
.forEach(a => {
    a.addEventListener('click', e => {
    e.preventDefault();
        const target = document.querySelector(a.getAttribute('href'));
        target?.scrollIntoView({ behavior: 'smooth' });
        menu.classList.remove('open');
    });
});


menu.addEventListener('click', e => {
    if (e.target === menu) menu.classList.remove('open');
});