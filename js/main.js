const btnNav = document.querySelector('.nav__toggle');
const links = document.querySelector('.navigation__list');

btnNav.addEventListener('click', function () {
    links.classList.toggle('show__links');
});