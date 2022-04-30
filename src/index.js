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

const orderBtn = document.querySelector('.order-btn');
const cupSelected = document.querySelector('.drink__cup');

orderBtn.addEventListener('click', () => {
  const ordered = cupSelected.classList.toggle('drink__cup--selected');
  orderBtn.textContent = ordered ? 'Zrušit' : 'Objednat';
});
