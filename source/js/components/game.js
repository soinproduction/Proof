import vars from '../_vars';

import { addCustomClass, toggleCustomClass } from '../functions/customFunctions';


const {game} = vars;

if(game) {

  let gameList = game.querySelector('.game__list');
  const itemQty = gameList.getAttribute('data-item-gty');

  for (let i = 0; i < +itemQty; i++) {
    let item = `<li class="game__item"><span>${Math.floor(Math.random()*100)}</span></li>`;
    gameList.insertAdjacentHTML('afterBegin', item);
  }

  (function itemHandler(){
    gameList.addEventListener('click', function(e){
      e.stopPropagation();

      // !gameList.querySelector('.game__item.active') ? addCustomClass(e.target, 'active') : '';

      toggleCustomClass(e.target, 'active')

      console.log(e.target)
    })
  })();
}

