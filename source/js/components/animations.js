import { removeClassInArray, addCustomClass, removeCustomClass } from '../functions/customFunctions'
import vars from '../_vars';
import lottie from 'lottie-web';
const {dataName ,activeClass} = vars;

dataName.forEach(function(item) {
  const currentName = item.getAttribute('data-name');
  const icon = item.querySelector('.mining-card__icon');
  const plusBnt = item.querySelector('.mining-card__plus');
  const minusBnt = item.querySelector('.mining-card__minus');

  const animationIcon = lottie.loadAnimation({
    container: icon,
    renderer: 'svg',
    loop: true,
    autoplay: false,
    path: `../JSON/${currentName}.json`
  });

  plusBnt.addEventListener('click', function(e){
    e.preventDefault;
    addCustomClass(item, activeClass);

    if (item.classList.contains(activeClass)) animationIcon.play()
  });

  minusBnt.addEventListener('click', function(e){
    e.preventDefault;

    if (item.classList.contains(activeClass)) {
      animationIcon.stop();
      removeCustomClass(item, activeClass);
    }
  })
});
