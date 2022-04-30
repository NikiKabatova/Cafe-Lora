import './style.css';
const navElm = document.querySelector('nav');
const openMenu = () => {
  navElm.classList.toggle('nav-closed');
};
const hamburgerMenu = document.querySelector('#nav-btn');
hamburgerMenu.addEventListener('click', openMenu);

const listOfLinks = document.querySelectorAll('a');

const closedMenu = () => navElm.classList.add('nav-closed');
listOfLinks.forEach((item) => {
  item.addEventListener('click', closedMenu);
});
