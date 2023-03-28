const header = document.querySelector('header');

window.addEventListener('scroll', function () {
    header.classList.toggle('sticky', this.window.scrollY > 0)
})

let menu = document.querySelector('#header__menu-icon');
let navmenu = document.querySelector('.header__nav');

menu.onclick = () => {
    menu.classList.toggle('bx-x');
    navmenu.classList.toggle('open');
}