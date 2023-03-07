import { addMultiListener,removeClassInArray, addCustomClass, removeCustomClass } from '../functions/customFunctions'
import vars from '../_vars';

const {elem} = vars;


addMultiListener(window, 'resize scroll', () => {
  let elemTop = elem.getBoundingClientRect().top  - (window.scrollY - oldScrollY); //

  if (elem.closest("[data-tab-content]").classList.contains('active')) {
    elem.style.width = elem.clientWidth + "px";
    elem.style.height = elem.offsetHeight + "px";

    if (elemTop < 100) {
      addCustomClass(elem, 'fixed')
    } else {
      removeCustomClass(elem, 'fixed')
    }
    oldScrollY = window.scrollY;
  } else {
    removeCustomClass(elem, 'fixed');
  }
});

let oldScrollY = 0;

