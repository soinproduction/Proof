export default {
  activeMode: 'active--mode',
  activeClass: "active",
  windowEl: window,
  documentEl: document,
  htmlEl: document.documentElement,
  bodyEl: document.body,
  overlay: document.querySelector('[data-overlay]'),
  accParrent: [...document.querySelectorAll("[data-accordion-init]")],
  // selectParrent: [...document.querySelectorAll("[data-select]")],
  tabsParrents: [...document.querySelectorAll("[data-tabs-parrent]")],
  modals: [...document.querySelectorAll('[data-popup]')],
  modalsButton: [...document.querySelectorAll("[data-btn-modal]")],
  modalsButtonMode: [...document.querySelectorAll("[data-mode-modal]")],
  innerButtonModal: [...document.querySelectorAll("[data-btn-inner]")],
  // customSelect: [...document.querySelectorAll("[data-select]")],
  burger: document.querySelector('.header .burger'),
  mobileBurger: document.querySelector('.mobile-menu .burger'),
  // mobileMenu: document.querySelector('.header-box__nav'),
  header: document.querySelector("header"),

  game: document.getElementById('game'),


  mainSlider: document.querySelector('.main-slider .swiper-container'),
  programBox: document.querySelector('.program-section__sliders'),



  // default variables
  passForm: [...document.querySelectorAll('.password-form__label')],
  footerLabel: document.querySelector('.footer__label'),
  footer: document.querySelector('.footer'),
  parrentBuffer: [...document.querySelectorAll('.buffer')],
  hiddenList: document.querySelector('.hidden-list'),
  mobileMenu: document.querySelector('.mobile-menu'),

  mainLinks: [...document.querySelectorAll('.mobile-link')],



  // logoSlider: [...document.querySelectorAll('.payment-slider .swiper-container')],
  // mainLinks: [...document.querySelectorAll('.main-nav__link')],
  // observSections: [...document.querySelectorAll('.section-observe')],
  // formsSecond: '.contacts-section__form',
  // formsFirst: '.contact-section__form',
}





