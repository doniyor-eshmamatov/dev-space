

const menuBtn = document.querySelector('.menu-btn');
const closeBtn = document.querySelector('.close-menu');
const menu = document.querySelector('.menu');

menuBtn.addEventListener('click', () => {
    menu.classList.add('menu-open');
    menuBtn.classList.add('rotate-btn');
    closeBtn.classList.remove('rotate-btn');
})

closeBtn.addEventListener('click', () => {
    menu.classList.remove('menu-open');
    menuBtn.classList.remove('rotate-btn');
    closeBtn.classList.add('rotate-btn');
})


window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
        menu.classList.remove('menu-open');
        menuBtn.classList.remove('rotate-btn');
        closeBtn.classList.add('rotate-btn');
    }
})