import './style.css';

import { Layer } from '../Layer/index.js';
export const Drink = (props) => {
  let { id, name, ordered, layers, image } = props;

  const drinkProduct = document.createElement('div');
  drinkProduct.classList.add('drink');
  drinkProduct.innerHTML += `
  <div class="drink__product">
  <div class="drink__cup">
      <img
        src="${image}"
      />
    </div>
    <div class="drink__info">
      <h3>${name}</h3>
    </div>
    </div>
    <div class="drink__controls">
              <button class="order-btn">Objednat</button>
            </div>
  `;
  const drinkInfoElm = drinkProduct.querySelector('.drink__info');

  layers.forEach((item) => {
    drinkInfoElm.innerHTML += Layer(item);
  });

  const orderBtn = drinkProduct.querySelector('.order-btn');
  const cupSelected = drinkProduct.querySelector('.drink__cup');

  orderBtn.addEventListener('click', () => {
    cupSelected.classList.toggle('drink__cup--selected');
    if (ordered === true) {
      orderBtn.textContent = 'Objednat';
      ordered = false;
    } else {
      orderBtn.textContent = 'Zrušit';
      ordered = true;
    }
    //orderBtn.textContent = ordered ? 'Zrušit' : 'Objednat';
  });
  return drinkProduct;
};
