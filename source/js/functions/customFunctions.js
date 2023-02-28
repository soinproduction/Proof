export const fadeIn = (el, timeout, display) => {
  el.style.opacity = 0;
  el.style.display = display || 'block';
  el.style.transition = `opacity ${timeout}ms`;
  setTimeout(() => {
    el.style.opacity = 1;
  }, 10);
};
// ----------------------------------------------------
export const fadeOut = (el, timeout) => {
  el.style.opacity = 1;
  el.style.transition = `opacity ${timeout}ms`;
  el.style.opacity = 0;

  setTimeout(() => {
    el.style.display = 'none';
  }, timeout);
};
// ----------------------------------------------------
export function addMultiListener(element, eventNames, listener) {
  var events = eventNames.split(' ');
  for (var i = 0, iLen = events.length; i < iLen; i++) {
    element.addEventListener(events[i], listener, false);
  }
}
// ----------------------------------------------------
export const even = n => !(n % 2);
// ----------------------------------------------------
export const removeCustomClass = (item, customClass) => {
  item.classList.remove(customClass);
}
// ----------------------------------------------------
export const toggleCustomClass = (item, customClass) => {
  item.classList.toggle(customClass);
}
// ----------------------------------------------------
export const addCustomClass = (item, customClass) => {
  item.classList.add(customClass);
}
// ----------------------------------------------------
export const removeClassInArray = (arr, customClass) => {
  arr.map((item) => {
    item.classList.remove(customClass);
  });
}
// ----------------------------------------------------
export const addClassInArray = (arr, customClass) => {
  arr.map((item) => {
    item.classList.add(customClass);
  });
}
// ----------------------------------------------------
export const toggleClassInArray = (arr, customClass) => {
  arr.map((item) => {
    item.classList.toggle(customClass);
  });
}
//-----------------------------------------------------
export const elementHeight = (el, variableName) => {
  // el -- сам елемент (но не коллекция)
  // variableName -- строка, имя создаваемой переменной
  if (el) {
    function initListener() {
      const elementHeight = el.offsetHeight;
      document.querySelector(':root').style.setProperty(`--${variableName}`, `${elementHeight}px`);
    }
    window.addEventListener('DOMContentLoaded', initListener)
    window.addEventListener('resize', initListener)
  }
}
