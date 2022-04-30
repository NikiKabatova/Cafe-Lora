import './style.css';
import { Drink } from './Drink/index.js';
import { Layer } from './Layer/index.js';

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

// const layerItems = [
//   {
//     id: 'romano',
//     name: 'Romano',
//     ordered: false,
//     layers: [
//       {
//         color: '#fbdf5b',
//         label: 'citrón',
//       },
//       {
//         color: '#613916',
//         label: 'espresso',
//       },
//     ],
//     image: 'https://apps.kodim.cz/daweb/cafelora/assets/cups/romano.png',
//   },
// ];

// const drinkELm = document.querySelector('.drinks-list');
// drinkELm.appendChild(Drink(layerItems[0]));

const layerItems = [
  {
    id: 'cappuccino',
    name: 'Cappuccino',
    ordered: false,
    layers: [
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
    ],
    image: 'https://apps.kodim.cz/daweb/cafelora/assets/cups/cappuccino.png',
  },
  {
    id: 'romano',
    name: 'Romano',
    ordered: false,
    layers: [
      {
        color: '#fbdf5b',
        label: 'citrón',
      },
      {
        color: '#613916',
        label: 'espresso',
      },
    ],
    image: 'https://apps.kodim.cz/daweb/cafelora/assets/cups/romano.png',
  },
];

fetch('https://apps.kodim.cz/daweb/cafelora/api/drinks')
  .then((response) => {
    return response.json();
  })
  .then((data) => {
    data.results.forEach((item) =>
      document.querySelector('.drinks-list').appendChild(Drink(item)),
    );
  });

// zakomentovana komponenta
// layerItems.forEach((item) => {
//   return (drinkInfoElm.innerHTML += Layer(item));
// });
