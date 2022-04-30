import './style.css';

import { Ingredients } from './Layer/index.js';

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

const ingredientsItems = [
  {
    color: '#feeeca',
    label: 'mléčná pěna',
  },
  {
    color: '#fed7b0',
    label: 'teplé mléko',
  },
  {
    color: '#613916',
    label: 'espresso',
  },
];

const drinkInfoElm = document.querySelector('.drink__info');

ingredientsItems.forEach((item) => {
  return (drinkInfoElm.innerHTML += Ingredients(item));
});

//for (let i=0; i < ingredientsItems.length ; i++ )
