/******/ (function() { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./source/js/_components.js":
/*!**********************************!*\
  !*** ./source/js/_components.js ***!
  \**********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _components_getDinamicHeight__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components/getDinamicHeight */ "./source/js/components/getDinamicHeight.js");
/* harmony import */ var _components_sliders__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/sliders */ "./source/js/components/sliders.js");
/* harmony import */ var _components_game__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/game */ "./source/js/components/game.js");
// import './components/animations';


// import './components/burger';
// import './components/buffer';
// import './components/modals';
// import './components/tabs';
// import './components/select';
// import './components/replaceEl';
// import './components/accordions';
// import './components/anchor';


/***/ }),

/***/ "./source/js/_vars.js":
/*!****************************!*\
  !*** ./source/js/_vars.js ***!
  \****************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ({
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
  mainLinks: [...document.querySelectorAll('.mobile-link')]

  // logoSlider: [...document.querySelectorAll('.payment-slider .swiper-container')],
  // mainLinks: [...document.querySelectorAll('.main-nav__link')],
  // observSections: [...document.querySelectorAll('.section-observe')],
  // formsSecond: '.contacts-section__form',
  // formsFirst: '.contact-section__form',
});

/***/ }),

/***/ "./source/js/_vendor.js":
/*!******************************!*\
  !*** ./source/js/_vendor.js ***!
  \******************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _vendor_focus_visible_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./vendor/focus-visible.js */ "./source/js/vendor/focus-visible.js");
/* harmony import */ var _vendor_focus_visible_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_vendor_focus_visible_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _vendor_picturefill_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./vendor/picturefill.js */ "./source/js/vendor/picturefill.js");
/* harmony import */ var _vendor_picturefill_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_vendor_picturefill_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _vendor_choise__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./vendor/choise */ "./source/js/vendor/choise.js");
/* harmony import */ var _vendor_choise__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_vendor_choise__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _vendor_swiper_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./vendor/swiper.js */ "./source/js/vendor/swiper.js");
/* harmony import */ var _vendor_swiper_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_vendor_swiper_js__WEBPACK_IMPORTED_MODULE_3__);





/***/ }),

/***/ "./source/js/components/game.js":
/*!**************************************!*\
  !*** ./source/js/components/game.js ***!
  \**************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _vars__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_vars */ "./source/js/_vars.js");
/* harmony import */ var _functions_customFunctions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../functions/customFunctions */ "./source/js/functions/customFunctions.js");


const {
  game
} = _vars__WEBPACK_IMPORTED_MODULE_0__["default"];
if (game) {
  const gameList = game.querySelector('.game__list');
  const gameParent = game.querySelector('.game');
  const itemQty = gameList.getAttribute('data-item-gty');
  for (let i = 0; i < +itemQty; i++) {
    let item = `<li class="game__item"><span>${Math.floor(Math.random() * 100)}</span></li>`;
    gameList.insertAdjacentHTML('afterBegin', item);
  }
  (function itemHandler() {
    gameList.addEventListener('click', function (e) {
      e.stopPropagation();
      // !gameList.querySelector('.game__item.active') ? addCustomClass(e.target, 'active') : '';
      (0,_functions_customFunctions__WEBPACK_IMPORTED_MODULE_1__.toggleCustomClass)(e.target, 'active');
    });
  })();
  game.querySelector('.game-box__btn').addEventListener('click', function (e) {
    e.preventDefault();
    (0,_functions_customFunctions__WEBPACK_IMPORTED_MODULE_1__.toggleCustomClass)(gameParent, 'active');
  });
}

/***/ }),

/***/ "./source/js/components/getDinamicHeight.js":
/*!**************************************************!*\
  !*** ./source/js/components/getDinamicHeight.js ***!
  \**************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _vars__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_vars */ "./source/js/_vars.js");
/* harmony import */ var _functions_customFunctions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../functions/customFunctions */ "./source/js/functions/customFunctions.js");


const {
  header,
  headerTop,
  headerBottom
} = _vars__WEBPACK_IMPORTED_MODULE_0__["default"];
(0,_functions_customFunctions__WEBPACK_IMPORTED_MODULE_1__.elementHeight)(header, "header-height");

/***/ }),

/***/ "./source/js/components/sliders.js":
/*!*****************************************!*\
  !*** ./source/js/components/sliders.js ***!
  \*****************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _vendor_swiper__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../vendor/swiper */ "./source/js/vendor/swiper.js");
/* harmony import */ var _vendor_swiper__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_vendor_swiper__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _vars__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../_vars */ "./source/js/_vars.js");
/* harmony import */ var _functions_throttle__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../functions/throttle */ "./source/js/functions/throttle.js");
/* harmony import */ var _functions_customFunctions__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../functions/customFunctions */ "./source/js/functions/customFunctions.js");




const {
  mainSlider,
  programBox
} = _vars__WEBPACK_IMPORTED_MODULE_1__["default"];
new (_vendor_swiper__WEBPACK_IMPORTED_MODULE_0___default())(mainSlider, {
  slidesPerView: 'auto',
  spaceBetween: 30,
  loop: true,
  observer: true,
  initialSlide: 2,
  watchOverflow: true,
  centeredSlides: true,
  observeParents: true,
  allowTouchMove: false,
  speed: 2000,
  parallax: true,
  autoplay: {
    delay: 2000
  }
});
const navigationContent = [{
  name: 'Bonus 1',
  descr: 'Connect Wallet',
  class: 'orange',
  iconName: 'icon.svg'
}, {
  name: 'level 1',
  descr: 'Bring your friends',
  class: 'purpure',
  iconName: 'icon2.svg'
}, {
  name: 'level 2',
  descr: "Get 5% from your friend's referral",
  class: 'red',
  iconName: 'icon3.svg'
}];
const mySwiper = new (_vendor_swiper__WEBPACK_IMPORTED_MODULE_0___default())(programBox.querySelector('.program-slider'), {
  slidesPerView: 'auto',
  spaceBetween: 40,
  loop: true,
  observer: true,
  watchOverflow: true,
  observeParents: true,
  allowTouchMove: true,
  speed: 2500,
  autoplay: {
    delay: 3000
  },
  pagination: {
    el: '.program-slider__nav',
    clickable: 'true',
    type: 'bullets',
    renderBullet: function (index, className) {
      return `
          <li class="${className}">
            <button class="program-button ${navigationContent[index].class}">
              ${navigationContent[index].name}
              <img class="program-button__icon" src="img/program-slider/${navigationContent[index].iconName}" alt="icon">
              <span class="program-button__descr">
                ${navigationContent[index].descr}
              </span>
              <i class="custom-icon custom-icon--nav program-button__stars"></i>
            </button>
          </li>
        `;
    }
  }
});

/***/ }),

/***/ "./source/js/functions/customFunctions.js":
/*!************************************************!*\
  !*** ./source/js/functions/customFunctions.js ***!
  \************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "addClassInArray": function() { return /* binding */ addClassInArray; },
/* harmony export */   "addCustomClass": function() { return /* binding */ addCustomClass; },
/* harmony export */   "elementHeight": function() { return /* binding */ elementHeight; },
/* harmony export */   "even": function() { return /* binding */ even; },
/* harmony export */   "removeClassInArray": function() { return /* binding */ removeClassInArray; },
/* harmony export */   "removeCustomClass": function() { return /* binding */ removeCustomClass; },
/* harmony export */   "toggleClassInArray": function() { return /* binding */ toggleClassInArray; },
/* harmony export */   "toggleCustomClass": function() { return /* binding */ toggleCustomClass; }
/* harmony export */ });
const even = n => !(n % 2);
// ----------------------------------------------------
const removeCustomClass = (item, customClass) => {
  item.classList.remove(customClass);
};
// ----------------------------------------------------
const toggleCustomClass = (item, customClass) => {
  item.classList.toggle(customClass);
};
// ----------------------------------------------------
const addCustomClass = (item, customClass) => {
  item.classList.add(customClass);
};
// ----------------------------------------------------
const removeClassInArray = (arr, customClass) => {
  arr.map(item => {
    item.classList.remove(customClass);
  });
};
// ----------------------------------------------------
const addClassInArray = (arr, customClass) => {
  arr.map(item => {
    item.classList.add(customClass);
  });
};
// ----------------------------------------------------
const toggleClassInArray = (arr, customClass) => {
  arr.map(item => {
    item.classList.toggle(customClass);
  });
};
//-----------------------------------------------------
const elementHeight = (el, variableName) => {
  // el -- сам елемент (но не коллекция)
  // variableName -- строка, имя создаваемой переменной
  if (el) {
    function initListener() {
      const elementHeight = el.offsetHeight;
      document.querySelector(':root').style.setProperty(`--${variableName}`, `${elementHeight}px`);
    }
    window.addEventListener('DOMContentLoaded', initListener);
    window.addEventListener('resize', initListener);
  }
};

/***/ }),

/***/ "./source/js/functions/throttle.js":
/*!*****************************************!*\
  !*** ./source/js/functions/throttle.js ***!
  \*****************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "throttle": function() { return /* binding */ throttle; }
/* harmony export */ });
const throttle = function (func) {
  let delay = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 250;
  let isThrottled = false;
  let savedArgs = null;
  let savedThis = null;
  return function wrap() {
    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }
    if (isThrottled) {
      savedArgs = args, savedThis = this;
      return;
    }
    func.apply(this, args);
    isThrottled = true;
    setTimeout(() => {
      isThrottled = false;
      if (savedThis) {
        wrap.apply(savedThis, savedArgs);
        savedThis = null;
        savedArgs = null;
      }
    }, delay);
  };
};

/***/ }),

/***/ "./source/js/vendor/choise.js":
/*!************************************!*\
  !*** ./source/js/vendor/choise.js ***!
  \************************************/
/***/ (function(module) {

/*! choices.js v10.1.0 | © 2022 Josh Johnson | https://github.com/jshjohnson/Choices#readme */
(function webpackUniversalModuleDefinition(root, factory) {
  if (true) module.exports = factory();else {}
})(window, function () {
  return (/******/function () {
      // webpackBootstrap
      /******/
      "use strict";

      /******/
      var __webpack_modules__ = {
        /***/282: /***/function (__unused_webpack_module, exports, __nested_webpack_require_658__) {
          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.clearChoices = exports.activateChoices = exports.filterChoices = exports.addChoice = void 0;
          var constants_1 = __nested_webpack_require_658__(883);
          var addChoice = function (_a) {
            var value = _a.value,
              label = _a.label,
              id = _a.id,
              groupId = _a.groupId,
              disabled = _a.disabled,
              elementId = _a.elementId,
              customProperties = _a.customProperties,
              placeholder = _a.placeholder,
              keyCode = _a.keyCode;
            return {
              type: constants_1.ACTION_TYPES.ADD_CHOICE,
              value: value,
              label: label,
              id: id,
              groupId: groupId,
              disabled: disabled,
              elementId: elementId,
              customProperties: customProperties,
              placeholder: placeholder,
              keyCode: keyCode
            };
          };
          exports.addChoice = addChoice;
          var filterChoices = function (results) {
            return {
              type: constants_1.ACTION_TYPES.FILTER_CHOICES,
              results: results
            };
          };
          exports.filterChoices = filterChoices;
          var activateChoices = function (active) {
            if (active === void 0) {
              active = true;
            }
            return {
              type: constants_1.ACTION_TYPES.ACTIVATE_CHOICES,
              active: active
            };
          };
          exports.activateChoices = activateChoices;
          var clearChoices = function () {
            return {
              type: constants_1.ACTION_TYPES.CLEAR_CHOICES
            };
          };
          exports.clearChoices = clearChoices;

          /***/
        },

        /***/783: /***/function (__unused_webpack_module, exports, __nested_webpack_require_2632__) {
          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.addGroup = void 0;
          var constants_1 = __nested_webpack_require_2632__(883);
          var addGroup = function (_a) {
            var value = _a.value,
              id = _a.id,
              active = _a.active,
              disabled = _a.disabled;
            return {
              type: constants_1.ACTION_TYPES.ADD_GROUP,
              value: value,
              id: id,
              active: active,
              disabled: disabled
            };
          };
          exports.addGroup = addGroup;

          /***/
        },

        /***/464: /***/function (__unused_webpack_module, exports, __nested_webpack_require_3367__) {
          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.highlightItem = exports.removeItem = exports.addItem = void 0;
          var constants_1 = __nested_webpack_require_3367__(883);
          var addItem = function (_a) {
            var value = _a.value,
              label = _a.label,
              id = _a.id,
              choiceId = _a.choiceId,
              groupId = _a.groupId,
              customProperties = _a.customProperties,
              placeholder = _a.placeholder,
              keyCode = _a.keyCode;
            return {
              type: constants_1.ACTION_TYPES.ADD_ITEM,
              value: value,
              label: label,
              id: id,
              choiceId: choiceId,
              groupId: groupId,
              customProperties: customProperties,
              placeholder: placeholder,
              keyCode: keyCode
            };
          };
          exports.addItem = addItem;
          var removeItem = function (id, choiceId) {
            return {
              type: constants_1.ACTION_TYPES.REMOVE_ITEM,
              id: id,
              choiceId: choiceId
            };
          };
          exports.removeItem = removeItem;
          var highlightItem = function (id, highlighted) {
            return {
              type: constants_1.ACTION_TYPES.HIGHLIGHT_ITEM,
              id: id,
              highlighted: highlighted
            };
          };
          exports.highlightItem = highlightItem;

          /***/
        },

        /***/137: /***/function (__unused_webpack_module, exports, __nested_webpack_require_4999__) {
          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.setIsLoading = exports.resetTo = exports.clearAll = void 0;
          var constants_1 = __nested_webpack_require_4999__(883);
          var clearAll = function () {
            return {
              type: constants_1.ACTION_TYPES.CLEAR_ALL
            };
          };
          exports.clearAll = clearAll;
          var resetTo = function (state) {
            return {
              type: constants_1.ACTION_TYPES.RESET_TO,
              state: state
            };
          };
          exports.resetTo = resetTo;
          var setIsLoading = function (isLoading) {
            return {
              type: constants_1.ACTION_TYPES.SET_IS_LOADING,
              isLoading: isLoading
            };
          };
          exports.setIsLoading = setIsLoading;

          /***/
        },

        /***/373: /***/function (__unused_webpack_module, exports, __nested_webpack_require_5982__) {
          var __spreadArray = this && this.__spreadArray || function (to, from, pack) {
            if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
              if (ar || !(i in from)) {
                if (!ar) ar = Array.prototype.slice.call(from, 0, i);
                ar[i] = from[i];
              }
            }
            return to.concat(ar || Array.prototype.slice.call(from));
          };
          var __importDefault = this && this.__importDefault || function (mod) {
            return mod && mod.__esModule ? mod : {
              "default": mod
            };
          };
          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          var deepmerge_1 = __importDefault(__nested_webpack_require_5982__(996));
          /* eslint-disable @typescript-eslint/no-explicit-any */

          var fuse_js_1 = __importDefault(__nested_webpack_require_5982__(221));
          var choices_1 = __nested_webpack_require_5982__(282);
          var groups_1 = __nested_webpack_require_5982__(783);
          var items_1 = __nested_webpack_require_5982__(464);
          var misc_1 = __nested_webpack_require_5982__(137);
          var components_1 = __nested_webpack_require_5982__(520);
          var constants_1 = __nested_webpack_require_5982__(883);
          var defaults_1 = __nested_webpack_require_5982__(789);
          var utils_1 = __nested_webpack_require_5982__(799);
          var reducers_1 = __nested_webpack_require_5982__(655);
          var store_1 = __importDefault(__nested_webpack_require_5982__(744));
          var templates_1 = __importDefault(__nested_webpack_require_5982__(686));
          /** @see {@link http://browserhacks.com/#hack-acea075d0ac6954f275a70023906050c} */

          var IS_IE11 = '-ms-scroll-limit' in document.documentElement.style && '-ms-ime-align' in document.documentElement.style;
          var USER_DEFAULTS = {};
          /**
           * Choices
           * @author Josh Johnson<josh@joshuajohnson.co.uk>
           */

          var Choices = /** @class */
          function () {
            function Choices(element, userConfig) {
              var _this = this;
              if (element === void 0) {
                element = '[data-choice]';
              }
              if (userConfig === void 0) {
                userConfig = {};
              }
              if (userConfig.allowHTML === undefined) {
                console.warn('Deprecation warning: allowHTML will default to false in a future release. To render HTML in Choices, you will need to set it to true. Setting allowHTML will suppress this message.');
              }
              this.config = deepmerge_1.default.all([defaults_1.DEFAULT_CONFIG, Choices.defaults.options, userConfig],
              // When merging array configs, replace with a copy of the userConfig array,
              // instead of concatenating with the default array
              {
                arrayMerge: function (_, sourceArray) {
                  return __spreadArray([], sourceArray, true);
                }
              });
              var invalidConfigOptions = (0, utils_1.diff)(this.config, defaults_1.DEFAULT_CONFIG);
              if (invalidConfigOptions.length) {
                console.warn('Unknown config option(s) passed', invalidConfigOptions.join(', '));
              }
              var passedElement = typeof element === 'string' ? document.querySelector(element) : element;
              if (!(passedElement instanceof HTMLInputElement || passedElement instanceof HTMLSelectElement)) {
                throw TypeError('Expected one of the following types text|select-one|select-multiple');
              }
              this._isTextElement = passedElement.type === constants_1.TEXT_TYPE;
              this._isSelectOneElement = passedElement.type === constants_1.SELECT_ONE_TYPE;
              this._isSelectMultipleElement = passedElement.type === constants_1.SELECT_MULTIPLE_TYPE;
              this._isSelectElement = this._isSelectOneElement || this._isSelectMultipleElement;
              this.config.searchEnabled = this._isSelectMultipleElement || this.config.searchEnabled;
              if (!['auto', 'always'].includes("".concat(this.config.renderSelectedChoices))) {
                this.config.renderSelectedChoices = 'auto';
              }
              if (userConfig.addItemFilter && typeof userConfig.addItemFilter !== 'function') {
                var re = userConfig.addItemFilter instanceof RegExp ? userConfig.addItemFilter : new RegExp(userConfig.addItemFilter);
                this.config.addItemFilter = re.test.bind(re);
              }
              if (this._isTextElement) {
                this.passedElement = new components_1.WrappedInput({
                  element: passedElement,
                  classNames: this.config.classNames,
                  delimiter: this.config.delimiter
                });
              } else {
                this.passedElement = new components_1.WrappedSelect({
                  element: passedElement,
                  classNames: this.config.classNames,
                  template: function (data) {
                    return _this._templates.option(data);
                  }
                });
              }
              this.initialised = false;
              this._store = new store_1.default();
              this._initialState = reducers_1.defaultState;
              this._currentState = reducers_1.defaultState;
              this._prevState = reducers_1.defaultState;
              this._currentValue = '';
              this._canSearch = !!this.config.searchEnabled;
              this._isScrollingOnIe = false;
              this._highlightPosition = 0;
              this._wasTap = true;
              this._placeholderValue = this._generatePlaceholderValue();
              this._baseId = (0, utils_1.generateId)(this.passedElement.element, 'choices-');
              /**
               * setting direction in cases where it's explicitly set on passedElement
               * or when calculated direction is different from the document
               */

              this._direction = this.passedElement.dir;
              if (!this._direction) {
                var elementDirection = window.getComputedStyle(this.passedElement.element).direction;
                var documentDirection = window.getComputedStyle(document.documentElement).direction;
                if (elementDirection !== documentDirection) {
                  this._direction = elementDirection;
                }
              }
              this._idNames = {
                itemChoice: 'item-choice'
              };
              if (this._isSelectElement) {
                // Assign preset groups from passed element
                this._presetGroups = this.passedElement.optionGroups; // Assign preset options from passed element

                this._presetOptions = this.passedElement.options;
              } // Assign preset choices from passed object

              this._presetChoices = this.config.choices; // Assign preset items from passed object first

              this._presetItems = this.config.items; // Add any values passed from attribute

              if (this.passedElement.value && this._isTextElement) {
                var splitValues = this.passedElement.value.split(this.config.delimiter);
                this._presetItems = this._presetItems.concat(splitValues);
              } // Create array of choices from option elements

              if (this.passedElement.options) {
                this.passedElement.options.forEach(function (option) {
                  _this._presetChoices.push({
                    value: option.value,
                    label: option.innerHTML,
                    selected: !!option.selected,
                    disabled: option.disabled || option.parentNode.disabled,
                    placeholder: option.value === '' || option.hasAttribute('placeholder'),
                    customProperties: option.dataset['custom-properties']
                  });
                });
              }
              this._render = this._render.bind(this);
              this._onFocus = this._onFocus.bind(this);
              this._onBlur = this._onBlur.bind(this);
              this._onKeyUp = this._onKeyUp.bind(this);
              this._onKeyDown = this._onKeyDown.bind(this);
              this._onClick = this._onClick.bind(this);
              this._onTouchMove = this._onTouchMove.bind(this);
              this._onTouchEnd = this._onTouchEnd.bind(this);
              this._onMouseDown = this._onMouseDown.bind(this);
              this._onMouseOver = this._onMouseOver.bind(this);
              this._onFormReset = this._onFormReset.bind(this);
              this._onSelectKey = this._onSelectKey.bind(this);
              this._onEnterKey = this._onEnterKey.bind(this);
              this._onEscapeKey = this._onEscapeKey.bind(this);
              this._onDirectionKey = this._onDirectionKey.bind(this);
              this._onDeleteKey = this._onDeleteKey.bind(this); // If element has already been initialised with Choices, fail silently

              if (this.passedElement.isActive) {
                if (!this.config.silent) {
                  console.warn('Trying to initialise Choices on element already initialised', {
                    element: element
                  });
                }
                this.initialised = true;
                return;
              } // Let's go

              this.init();
            }
            Object.defineProperty(Choices, "defaults", {
              get: function () {
                return Object.preventExtensions({
                  get options() {
                    return USER_DEFAULTS;
                  },
                  get templates() {
                    return templates_1.default;
                  }
                });
              },
              enumerable: false,
              configurable: true
            });
            Choices.prototype.init = function () {
              if (this.initialised) {
                return;
              }
              this._createTemplates();
              this._createElements();
              this._createStructure();
              this._store.subscribe(this._render);
              this._render();
              this._addEventListeners();
              var shouldDisable = !this.config.addItems || this.passedElement.element.hasAttribute('disabled');
              if (shouldDisable) {
                this.disable();
              }
              this.initialised = true;
              var callbackOnInit = this.config.callbackOnInit; // Run callback if it is a function

              if (callbackOnInit && typeof callbackOnInit === 'function') {
                callbackOnInit.call(this);
              }
            };
            Choices.prototype.destroy = function () {
              if (!this.initialised) {
                return;
              }
              this._removeEventListeners();
              this.passedElement.reveal();
              this.containerOuter.unwrap(this.passedElement.element);
              this.clearStore();
              if (this._isSelectElement) {
                this.passedElement.options = this._presetOptions;
              }
              this._templates = templates_1.default;
              this.initialised = false;
            };
            Choices.prototype.enable = function () {
              if (this.passedElement.isDisabled) {
                this.passedElement.enable();
              }
              if (this.containerOuter.isDisabled) {
                this._addEventListeners();
                this.input.enable();
                this.containerOuter.enable();
              }
              return this;
            };
            Choices.prototype.disable = function () {
              if (!this.passedElement.isDisabled) {
                this.passedElement.disable();
              }
              if (!this.containerOuter.isDisabled) {
                this._removeEventListeners();
                this.input.disable();
                this.containerOuter.disable();
              }
              return this;
            };
            Choices.prototype.highlightItem = function (item, runEvent) {
              if (runEvent === void 0) {
                runEvent = true;
              }
              if (!item || !item.id) {
                return this;
              }
              var id = item.id,
                _a = item.groupId,
                groupId = _a === void 0 ? -1 : _a,
                _b = item.value,
                value = _b === void 0 ? '' : _b,
                _c = item.label,
                label = _c === void 0 ? '' : _c;
              var group = groupId >= 0 ? this._store.getGroupById(groupId) : null;
              this._store.dispatch((0, items_1.highlightItem)(id, true));
              if (runEvent) {
                this.passedElement.triggerEvent(constants_1.EVENTS.highlightItem, {
                  id: id,
                  value: value,
                  label: label,
                  groupValue: group && group.value ? group.value : null
                });
              }
              return this;
            };
            Choices.prototype.unhighlightItem = function (item) {
              if (!item || !item.id) {
                return this;
              }
              var id = item.id,
                _a = item.groupId,
                groupId = _a === void 0 ? -1 : _a,
                _b = item.value,
                value = _b === void 0 ? '' : _b,
                _c = item.label,
                label = _c === void 0 ? '' : _c;
              var group = groupId >= 0 ? this._store.getGroupById(groupId) : null;
              this._store.dispatch((0, items_1.highlightItem)(id, false));
              this.passedElement.triggerEvent(constants_1.EVENTS.highlightItem, {
                id: id,
                value: value,
                label: label,
                groupValue: group && group.value ? group.value : null
              });
              return this;
            };
            Choices.prototype.highlightAll = function () {
              var _this = this;
              this._store.items.forEach(function (item) {
                return _this.highlightItem(item);
              });
              return this;
            };
            Choices.prototype.unhighlightAll = function () {
              var _this = this;
              this._store.items.forEach(function (item) {
                return _this.unhighlightItem(item);
              });
              return this;
            };
            Choices.prototype.removeActiveItemsByValue = function (value) {
              var _this = this;
              this._store.activeItems.filter(function (item) {
                return item.value === value;
              }).forEach(function (item) {
                return _this._removeItem(item);
              });
              return this;
            };
            Choices.prototype.removeActiveItems = function (excludedId) {
              var _this = this;
              this._store.activeItems.filter(function (_a) {
                var id = _a.id;
                return id !== excludedId;
              }).forEach(function (item) {
                return _this._removeItem(item);
              });
              return this;
            };
            Choices.prototype.removeHighlightedItems = function (runEvent) {
              var _this = this;
              if (runEvent === void 0) {
                runEvent = false;
              }
              this._store.highlightedActiveItems.forEach(function (item) {
                _this._removeItem(item); // If this action was performed by the user
                // trigger the event

                if (runEvent) {
                  _this._triggerChange(item.value);
                }
              });
              return this;
            };
            Choices.prototype.showDropdown = function (preventInputFocus) {
              var _this = this;
              if (this.dropdown.isActive) {
                return this;
              }
              requestAnimationFrame(function () {
                _this.dropdown.show();
                _this.containerOuter.open(_this.dropdown.distanceFromTopWindow);
                if (!preventInputFocus && _this._canSearch) {
                  _this.input.focus();
                }
                _this.passedElement.triggerEvent(constants_1.EVENTS.showDropdown, {});
              });
              return this;
            };
            Choices.prototype.hideDropdown = function (preventInputBlur) {
              var _this = this;
              if (!this.dropdown.isActive) {
                return this;
              }
              requestAnimationFrame(function () {
                _this.dropdown.hide();
                _this.containerOuter.close();
                if (!preventInputBlur && _this._canSearch) {
                  _this.input.removeActiveDescendant();
                  _this.input.blur();
                }
                _this.passedElement.triggerEvent(constants_1.EVENTS.hideDropdown, {});
              });
              return this;
            };
            Choices.prototype.getValue = function (valueOnly) {
              if (valueOnly === void 0) {
                valueOnly = false;
              }
              var values = this._store.activeItems.reduce(function (selectedItems, item) {
                var itemValue = valueOnly ? item.value : item;
                selectedItems.push(itemValue);
                return selectedItems;
              }, []);
              return this._isSelectOneElement ? values[0] : values;
            };
            Choices.prototype.setValue = function (items) {
              var _this = this;
              if (!this.initialised) {
                return this;
              }
              items.forEach(function (value) {
                return _this._setChoiceOrItem(value);
              });
              return this;
            };
            Choices.prototype.setChoiceByValue = function (value) {
              var _this = this;
              if (!this.initialised || this._isTextElement) {
                return this;
              } // If only one value has been passed, convert to array

              var choiceValue = Array.isArray(value) ? value : [value]; // Loop through each value and

              choiceValue.forEach(function (val) {
                return _this._findAndSelectChoiceByValue(val);
              });
              return this;
            };
            /**
             * Set choices of select input via an array of objects (or function that returns array of object or promise of it),
             * a value field name and a label field name.
             * This behaves the same as passing items via the choices option but can be called after initialising Choices.
             * This can also be used to add groups of choices (see example 2); Optionally pass a true `replaceChoices` value to remove any existing choices.
             * Optionally pass a `customProperties` object to add additional data to your choices (useful when searching/filtering etc).
             *
             * **Input types affected:** select-one, select-multiple
             *
             * @example
             * ```js
             * const example = new Choices(element);
             *
             * example.setChoices([
             *   {value: 'One', label: 'Label One', disabled: true},
             *   {value: 'Two', label: 'Label Two', selected: true},
             *   {value: 'Three', label: 'Label Three'},
             * ], 'value', 'label', false);
             * ```
             *
             * @example
             * ```js
             * const example = new Choices(element);
             *
             * example.setChoices(async () => {
             *   try {
             *      const items = await fetch('/items');
             *      return items.json()
             *   } catch(err) {
             *      console.error(err)
             *   }
             * });
             * ```
             *
             * @example
             * ```js
             * const example = new Choices(element);
             *
             * example.setChoices([{
             *   label: 'Group one',
             *   id: 1,
             *   disabled: false,
             *   choices: [
             *     {value: 'Child One', label: 'Child One', selected: true},
             *     {value: 'Child Two', label: 'Child Two',  disabled: true},
             *     {value: 'Child Three', label: 'Child Three'},
             *   ]
             * },
             * {
             *   label: 'Group two',
             *   id: 2,
             *   disabled: false,
             *   choices: [
             *     {value: 'Child Four', label: 'Child Four', disabled: true},
             *     {value: 'Child Five', label: 'Child Five'},
             *     {value: 'Child Six', label: 'Child Six', customProperties: {
             *       description: 'Custom description about child six',
             *       random: 'Another random custom property'
             *     }},
             *   ]
             * }], 'value', 'label', false);
             * ```
             */

            Choices.prototype.setChoices = function (choicesArrayOrFetcher, value, label, replaceChoices) {
              var _this = this;
              if (choicesArrayOrFetcher === void 0) {
                choicesArrayOrFetcher = [];
              }
              if (value === void 0) {
                value = 'value';
              }
              if (label === void 0) {
                label = 'label';
              }
              if (replaceChoices === void 0) {
                replaceChoices = false;
              }
              if (!this.initialised) {
                throw new ReferenceError("setChoices was called on a non-initialized instance of Choices");
              }
              if (!this._isSelectElement) {
                throw new TypeError("setChoices can't be used with INPUT based Choices");
              }
              if (typeof value !== 'string' || !value) {
                throw new TypeError("value parameter must be a name of 'value' field in passed objects");
              } // Clear choices if needed

              if (replaceChoices) {
                this.clearChoices();
              }
              if (typeof choicesArrayOrFetcher === 'function') {
                // it's a choices fetcher function
                var fetcher_1 = choicesArrayOrFetcher(this);
                if (typeof Promise === 'function' && fetcher_1 instanceof Promise) {
                  // that's a promise
                  // eslint-disable-next-line no-promise-executor-return
                  return new Promise(function (resolve) {
                    return requestAnimationFrame(resolve);
                  }).then(function () {
                    return _this._handleLoadingState(true);
                  }).then(function () {
                    return fetcher_1;
                  }).then(function (data) {
                    return _this.setChoices(data, value, label, replaceChoices);
                  }).catch(function (err) {
                    if (!_this.config.silent) {
                      console.error(err);
                    }
                  }).then(function () {
                    return _this._handleLoadingState(false);
                  }).then(function () {
                    return _this;
                  });
                } // function returned something else than promise, let's check if it's an array of choices

                if (!Array.isArray(fetcher_1)) {
                  throw new TypeError(".setChoices first argument function must return either array of choices or Promise, got: ".concat(typeof fetcher_1));
                } // recursion with results, it's sync and choices were cleared already

                return this.setChoices(fetcher_1, value, label, false);
              }
              if (!Array.isArray(choicesArrayOrFetcher)) {
                throw new TypeError(".setChoices must be called either with array of choices with a function resulting into Promise of array of choices");
              }
              this.containerOuter.removeLoadingState();
              this._startLoading();
              choicesArrayOrFetcher.forEach(function (groupOrChoice) {
                if (groupOrChoice.choices) {
                  _this._addGroup({
                    id: groupOrChoice.id ? parseInt("".concat(groupOrChoice.id), 10) : null,
                    group: groupOrChoice,
                    valueKey: value,
                    labelKey: label
                  });
                } else {
                  var choice = groupOrChoice;
                  _this._addChoice({
                    value: choice[value],
                    label: choice[label],
                    isSelected: !!choice.selected,
                    isDisabled: !!choice.disabled,
                    placeholder: !!choice.placeholder,
                    customProperties: choice.customProperties
                  });
                }
              });
              this._stopLoading();
              return this;
            };
            Choices.prototype.clearChoices = function () {
              this._store.dispatch((0, choices_1.clearChoices)());
              return this;
            };
            Choices.prototype.clearStore = function () {
              this._store.dispatch((0, misc_1.clearAll)());
              return this;
            };
            Choices.prototype.clearInput = function () {
              var shouldSetInputWidth = !this._isSelectOneElement;
              this.input.clear(shouldSetInputWidth);
              if (!this._isTextElement && this._canSearch) {
                this._isSearching = false;
                this._store.dispatch((0, choices_1.activateChoices)(true));
              }
              return this;
            };
            Choices.prototype._render = function () {
              if (this._store.isLoading()) {
                return;
              }
              this._currentState = this._store.state;
              var stateChanged = this._currentState.choices !== this._prevState.choices || this._currentState.groups !== this._prevState.groups || this._currentState.items !== this._prevState.items;
              var shouldRenderChoices = this._isSelectElement;
              var shouldRenderItems = this._currentState.items !== this._prevState.items;
              if (!stateChanged) {
                return;
              }
              if (shouldRenderChoices) {
                this._renderChoices();
              }
              if (shouldRenderItems) {
                this._renderItems();
              }
              this._prevState = this._currentState;
            };
            Choices.prototype._renderChoices = function () {
              var _this = this;
              var _a = this._store,
                activeGroups = _a.activeGroups,
                activeChoices = _a.activeChoices;
              var choiceListFragment = document.createDocumentFragment();
              this.choiceList.clear();
              if (this.config.resetScrollPosition) {
                requestAnimationFrame(function () {
                  return _this.choiceList.scrollToTop();
                });
              } // If we have grouped options

              if (activeGroups.length >= 1 && !this._isSearching) {
                // If we have a placeholder choice along with groups
                var activePlaceholders = activeChoices.filter(function (activeChoice) {
                  return activeChoice.placeholder === true && activeChoice.groupId === -1;
                });
                if (activePlaceholders.length >= 1) {
                  choiceListFragment = this._createChoicesFragment(activePlaceholders, choiceListFragment);
                }
                choiceListFragment = this._createGroupsFragment(activeGroups, activeChoices, choiceListFragment);
              } else if (activeChoices.length >= 1) {
                choiceListFragment = this._createChoicesFragment(activeChoices, choiceListFragment);
              } // If we have choices to show

              if (choiceListFragment.childNodes && choiceListFragment.childNodes.length > 0) {
                var activeItems = this._store.activeItems;
                var canAddItem = this._canAddItem(activeItems, this.input.value); // ...and we can select them

                if (canAddItem.response) {
                  // ...append them and highlight the first choice
                  this.choiceList.append(choiceListFragment);
                  this._highlightChoice();
                } else {
                  var notice = this._getTemplate('notice', canAddItem.notice);
                  this.choiceList.append(notice);
                }
              } else {
                // Otherwise show a notice
                var dropdownItem = void 0;
                var notice = void 0;
                if (this._isSearching) {
                  notice = typeof this.config.noResultsText === 'function' ? this.config.noResultsText() : this.config.noResultsText;
                  dropdownItem = this._getTemplate('notice', notice, 'no-results');
                } else {
                  notice = typeof this.config.noChoicesText === 'function' ? this.config.noChoicesText() : this.config.noChoicesText;
                  dropdownItem = this._getTemplate('notice', notice, 'no-choices');
                }
                this.choiceList.append(dropdownItem);
              }
            };
            Choices.prototype._renderItems = function () {
              var activeItems = this._store.activeItems || [];
              this.itemList.clear(); // Create a fragment to store our list items
              // (so we don't have to update the DOM for each item)

              var itemListFragment = this._createItemsFragment(activeItems); // If we have items to add, append them

              if (itemListFragment.childNodes) {
                this.itemList.append(itemListFragment);
              }
            };
            Choices.prototype._createGroupsFragment = function (groups, choices, fragment) {
              var _this = this;
              if (fragment === void 0) {
                fragment = document.createDocumentFragment();
              }
              var getGroupChoices = function (group) {
                return choices.filter(function (choice) {
                  if (_this._isSelectOneElement) {
                    return choice.groupId === group.id;
                  }
                  return choice.groupId === group.id && (_this.config.renderSelectedChoices === 'always' || !choice.selected);
                });
              }; // If sorting is enabled, filter groups

              if (this.config.shouldSort) {
                groups.sort(this.config.sorter);
              }
              groups.forEach(function (group) {
                var groupChoices = getGroupChoices(group);
                if (groupChoices.length >= 1) {
                  var dropdownGroup = _this._getTemplate('choiceGroup', group);
                  fragment.appendChild(dropdownGroup);
                  _this._createChoicesFragment(groupChoices, fragment, true);
                }
              });
              return fragment;
            };
            Choices.prototype._createChoicesFragment = function (choices, fragment, withinGroup) {
              var _this = this;
              if (fragment === void 0) {
                fragment = document.createDocumentFragment();
              }
              if (withinGroup === void 0) {
                withinGroup = false;
              } // Create a fragment to store our list items (so we don't have to update the DOM for each item)

              var _a = this.config,
                renderSelectedChoices = _a.renderSelectedChoices,
                searchResultLimit = _a.searchResultLimit,
                renderChoiceLimit = _a.renderChoiceLimit;
              var filter = this._isSearching ? utils_1.sortByScore : this.config.sorter;
              var appendChoice = function (choice) {
                var shouldRender = renderSelectedChoices === 'auto' ? _this._isSelectOneElement || !choice.selected : true;
                if (shouldRender) {
                  var dropdownItem = _this._getTemplate('choice', choice, _this.config.itemSelectText);
                  fragment.appendChild(dropdownItem);
                }
              };
              var rendererableChoices = choices;
              if (renderSelectedChoices === 'auto' && !this._isSelectOneElement) {
                rendererableChoices = choices.filter(function (choice) {
                  return !choice.selected;
                });
              } // Split array into placeholders and "normal" choices

              var _b = rendererableChoices.reduce(function (acc, choice) {
                  if (choice.placeholder) {
                    acc.placeholderChoices.push(choice);
                  } else {
                    acc.normalChoices.push(choice);
                  }
                  return acc;
                }, {
                  placeholderChoices: [],
                  normalChoices: []
                }),
                placeholderChoices = _b.placeholderChoices,
                normalChoices = _b.normalChoices; // If sorting is enabled or the user is searching, filter choices

              if (this.config.shouldSort || this._isSearching) {
                normalChoices.sort(filter);
              }
              var choiceLimit = rendererableChoices.length; // Prepend placeholeder

              var sortedChoices = this._isSelectOneElement ? __spreadArray(__spreadArray([], placeholderChoices, true), normalChoices, true) : normalChoices;
              if (this._isSearching) {
                choiceLimit = searchResultLimit;
              } else if (renderChoiceLimit && renderChoiceLimit > 0 && !withinGroup) {
                choiceLimit = renderChoiceLimit;
              } // Add each choice to dropdown within range

              for (var i = 0; i < choiceLimit; i += 1) {
                if (sortedChoices[i]) {
                  appendChoice(sortedChoices[i]);
                }
              }
              return fragment;
            };
            Choices.prototype._createItemsFragment = function (items, fragment) {
              var _this = this;
              if (fragment === void 0) {
                fragment = document.createDocumentFragment();
              } // Create fragment to add elements to

              var _a = this.config,
                shouldSortItems = _a.shouldSortItems,
                sorter = _a.sorter,
                removeItemButton = _a.removeItemButton; // If sorting is enabled, filter items

              if (shouldSortItems && !this._isSelectOneElement) {
                items.sort(sorter);
              }
              if (this._isTextElement) {
                // Update the value of the hidden input
                this.passedElement.value = items.map(function (_a) {
                  var value = _a.value;
                  return value;
                }).join(this.config.delimiter);
              } else {
                // Update the options of the hidden input
                this.passedElement.options = items;
              }
              var addItemToFragment = function (item) {
                // Create new list element
                var listItem = _this._getTemplate('item', item, removeItemButton); // Append it to list

                fragment.appendChild(listItem);
              }; // Add each list item to list

              items.forEach(addItemToFragment);
              return fragment;
            };
            Choices.prototype._triggerChange = function (value) {
              if (value === undefined || value === null) {
                return;
              }
              this.passedElement.triggerEvent(constants_1.EVENTS.change, {
                value: value
              });
            };
            Choices.prototype._selectPlaceholderChoice = function (placeholderChoice) {
              this._addItem({
                value: placeholderChoice.value,
                label: placeholderChoice.label,
                choiceId: placeholderChoice.id,
                groupId: placeholderChoice.groupId,
                placeholder: placeholderChoice.placeholder
              });
              this._triggerChange(placeholderChoice.value);
            };
            Choices.prototype._handleButtonAction = function (activeItems, element) {
              if (!activeItems || !element || !this.config.removeItems || !this.config.removeItemButton) {
                return;
              }
              var itemId = element.parentNode && element.parentNode.dataset.id;
              var itemToRemove = itemId && activeItems.find(function (item) {
                return item.id === parseInt(itemId, 10);
              });
              if (!itemToRemove) {
                return;
              } // Remove item associated with button

              this._removeItem(itemToRemove);
              this._triggerChange(itemToRemove.value);
              if (this._isSelectOneElement && this._store.placeholderChoice) {
                this._selectPlaceholderChoice(this._store.placeholderChoice);
              }
            };
            Choices.prototype._handleItemAction = function (activeItems, element, hasShiftKey) {
              var _this = this;
              if (hasShiftKey === void 0) {
                hasShiftKey = false;
              }
              if (!activeItems || !element || !this.config.removeItems || this._isSelectOneElement) {
                return;
              }
              var passedId = element.dataset.id; // We only want to select one item with a click
              // so we deselect any items that aren't the target
              // unless shift is being pressed

              activeItems.forEach(function (item) {
                if (item.id === parseInt("".concat(passedId), 10) && !item.highlighted) {
                  _this.highlightItem(item);
                } else if (!hasShiftKey && item.highlighted) {
                  _this.unhighlightItem(item);
                }
              }); // Focus input as without focus, a user cannot do anything with a
              // highlighted item

              this.input.focus();
            };
            Choices.prototype._handleChoiceAction = function (activeItems, element) {
              if (!activeItems || !element) {
                return;
              } // If we are clicking on an option

              var id = element.dataset.id;
              var choice = id && this._store.getChoiceById(id);
              if (!choice) {
                return;
              }
              var passedKeyCode = activeItems[0] && activeItems[0].keyCode ? activeItems[0].keyCode : undefined;
              var hasActiveDropdown = this.dropdown.isActive; // Update choice keyCode

              choice.keyCode = passedKeyCode;
              this.passedElement.triggerEvent(constants_1.EVENTS.choice, {
                choice: choice
              });
              if (!choice.selected && !choice.disabled) {
                var canAddItem = this._canAddItem(activeItems, choice.value);
                if (canAddItem.response) {
                  this._addItem({
                    value: choice.value,
                    label: choice.label,
                    choiceId: choice.id,
                    groupId: choice.groupId,
                    customProperties: choice.customProperties,
                    placeholder: choice.placeholder,
                    keyCode: choice.keyCode
                  });
                  this._triggerChange(choice.value);
                }
              }
              this.clearInput(); // We want to close the dropdown if we are dealing with a single select box

              if (hasActiveDropdown && this._isSelectOneElement) {
                this.hideDropdown(true);
                this.containerOuter.focus();
              }
            };
            Choices.prototype._handleBackspace = function (activeItems) {
              if (!this.config.removeItems || !activeItems) {
                return;
              }
              var lastItem = activeItems[activeItems.length - 1];
              var hasHighlightedItems = activeItems.some(function (item) {
                return item.highlighted;
              }); // If editing the last item is allowed and there are not other selected items,
              // we can edit the item value. Otherwise if we can remove items, remove all selected items

              if (this.config.editItems && !hasHighlightedItems && lastItem) {
                this.input.value = lastItem.value;
                this.input.setWidth();
                this._removeItem(lastItem);
                this._triggerChange(lastItem.value);
              } else {
                if (!hasHighlightedItems) {
                  // Highlight last item if none already highlighted
                  this.highlightItem(lastItem, false);
                }
                this.removeHighlightedItems(true);
              }
            };
            Choices.prototype._startLoading = function () {
              this._store.dispatch((0, misc_1.setIsLoading)(true));
            };
            Choices.prototype._stopLoading = function () {
              this._store.dispatch((0, misc_1.setIsLoading)(false));
            };
            Choices.prototype._handleLoadingState = function (setLoading) {
              if (setLoading === void 0) {
                setLoading = true;
              }
              var placeholderItem = this.itemList.getChild(".".concat(this.config.classNames.placeholder));
              if (setLoading) {
                this.disable();
                this.containerOuter.addLoadingState();
                if (this._isSelectOneElement) {
                  if (!placeholderItem) {
                    placeholderItem = this._getTemplate('placeholder', this.config.loadingText);
                    if (placeholderItem) {
                      this.itemList.append(placeholderItem);
                    }
                  } else {
                    placeholderItem.innerHTML = this.config.loadingText;
                  }
                } else {
                  this.input.placeholder = this.config.loadingText;
                }
              } else {
                this.enable();
                this.containerOuter.removeLoadingState();
                if (this._isSelectOneElement) {
                  if (placeholderItem) {
                    placeholderItem.innerHTML = this._placeholderValue || '';
                  }
                } else {
                  this.input.placeholder = this._placeholderValue || '';
                }
              }
            };
            Choices.prototype._handleSearch = function (value) {
              if (!this.input.isFocussed) {
                return;
              }
              var choices = this._store.choices;
              var _a = this.config,
                searchFloor = _a.searchFloor,
                searchChoices = _a.searchChoices;
              var hasUnactiveChoices = choices.some(function (option) {
                return !option.active;
              }); // Check that we have a value to search and the input was an alphanumeric character

              if (value !== null && typeof value !== 'undefined' && value.length >= searchFloor) {
                var resultCount = searchChoices ? this._searchChoices(value) : 0; // Trigger search event

                this.passedElement.triggerEvent(constants_1.EVENTS.search, {
                  value: value,
                  resultCount: resultCount
                });
              } else if (hasUnactiveChoices) {
                // Otherwise reset choices to active
                this._isSearching = false;
                this._store.dispatch((0, choices_1.activateChoices)(true));
              }
            };
            Choices.prototype._canAddItem = function (activeItems, value) {
              var canAddItem = true;
              var notice = typeof this.config.addItemText === 'function' ? this.config.addItemText(value) : this.config.addItemText;
              if (!this._isSelectOneElement) {
                var isDuplicateValue = (0, utils_1.existsInArray)(activeItems, value);
                if (this.config.maxItemCount > 0 && this.config.maxItemCount <= activeItems.length) {
                  // If there is a max entry limit and we have reached that limit
                  // don't update
                  canAddItem = false;
                  notice = typeof this.config.maxItemText === 'function' ? this.config.maxItemText(this.config.maxItemCount) : this.config.maxItemText;
                }
                if (!this.config.duplicateItemsAllowed && isDuplicateValue && canAddItem) {
                  canAddItem = false;
                  notice = typeof this.config.uniqueItemText === 'function' ? this.config.uniqueItemText(value) : this.config.uniqueItemText;
                }
                if (this._isTextElement && this.config.addItems && canAddItem && typeof this.config.addItemFilter === 'function' && !this.config.addItemFilter(value)) {
                  canAddItem = false;
                  notice = typeof this.config.customAddItemText === 'function' ? this.config.customAddItemText(value) : this.config.customAddItemText;
                }
              }
              return {
                response: canAddItem,
                notice: notice
              };
            };
            Choices.prototype._searchChoices = function (value) {
              var newValue = typeof value === 'string' ? value.trim() : value;
              var currentValue = typeof this._currentValue === 'string' ? this._currentValue.trim() : this._currentValue;
              if (newValue.length < 1 && newValue === "".concat(currentValue, " ")) {
                return 0;
              } // If new value matches the desired length and is not the same as the current value with a space

              var haystack = this._store.searchableChoices;
              var needle = newValue;
              var options = Object.assign(this.config.fuseOptions, {
                keys: __spreadArray([], this.config.searchFields, true),
                includeMatches: true
              });
              var fuse = new fuse_js_1.default(haystack, options);
              var results = fuse.search(needle); // see https://github.com/krisk/Fuse/issues/303

              this._currentValue = newValue;
              this._highlightPosition = 0;
              this._isSearching = true;
              this._store.dispatch((0, choices_1.filterChoices)(results));
              return results.length;
            };
            Choices.prototype._addEventListeners = function () {
              var documentElement = document.documentElement; // capture events - can cancel event processing or propagation

              documentElement.addEventListener('touchend', this._onTouchEnd, true);
              this.containerOuter.element.addEventListener('keydown', this._onKeyDown, true);
              this.containerOuter.element.addEventListener('mousedown', this._onMouseDown, true); // passive events - doesn't call `preventDefault` or `stopPropagation`

              documentElement.addEventListener('click', this._onClick, {
                passive: true
              });
              documentElement.addEventListener('touchmove', this._onTouchMove, {
                passive: true
              });
              this.dropdown.element.addEventListener('mouseover', this._onMouseOver, {
                passive: true
              });
              if (this._isSelectOneElement) {
                this.containerOuter.element.addEventListener('focus', this._onFocus, {
                  passive: true
                });
                this.containerOuter.element.addEventListener('blur', this._onBlur, {
                  passive: true
                });
              }
              this.input.element.addEventListener('keyup', this._onKeyUp, {
                passive: true
              });
              this.input.element.addEventListener('focus', this._onFocus, {
                passive: true
              });
              this.input.element.addEventListener('blur', this._onBlur, {
                passive: true
              });
              if (this.input.element.form) {
                this.input.element.form.addEventListener('reset', this._onFormReset, {
                  passive: true
                });
              }
              this.input.addEventListeners();
            };
            Choices.prototype._removeEventListeners = function () {
              var documentElement = document.documentElement;
              documentElement.removeEventListener('touchend', this._onTouchEnd, true);
              this.containerOuter.element.removeEventListener('keydown', this._onKeyDown, true);
              this.containerOuter.element.removeEventListener('mousedown', this._onMouseDown, true);
              documentElement.removeEventListener('click', this._onClick);
              documentElement.removeEventListener('touchmove', this._onTouchMove);
              this.dropdown.element.removeEventListener('mouseover', this._onMouseOver);
              if (this._isSelectOneElement) {
                this.containerOuter.element.removeEventListener('focus', this._onFocus);
                this.containerOuter.element.removeEventListener('blur', this._onBlur);
              }
              this.input.element.removeEventListener('keyup', this._onKeyUp);
              this.input.element.removeEventListener('focus', this._onFocus);
              this.input.element.removeEventListener('blur', this._onBlur);
              if (this.input.element.form) {
                this.input.element.form.removeEventListener('reset', this._onFormReset);
              }
              this.input.removeEventListeners();
            };
            Choices.prototype._onKeyDown = function (event) {
              var keyCode = event.keyCode;
              var activeItems = this._store.activeItems;
              var hasFocusedInput = this.input.isFocussed;
              var hasActiveDropdown = this.dropdown.isActive;
              var hasItems = this.itemList.hasChildren();
              var keyString = String.fromCharCode(keyCode);
              var wasAlphaNumericChar = /[a-zA-Z0-9-_ ]/.test(keyString);
              var BACK_KEY = constants_1.KEY_CODES.BACK_KEY,
                DELETE_KEY = constants_1.KEY_CODES.DELETE_KEY,
                ENTER_KEY = constants_1.KEY_CODES.ENTER_KEY,
                A_KEY = constants_1.KEY_CODES.A_KEY,
                ESC_KEY = constants_1.KEY_CODES.ESC_KEY,
                UP_KEY = constants_1.KEY_CODES.UP_KEY,
                DOWN_KEY = constants_1.KEY_CODES.DOWN_KEY,
                PAGE_UP_KEY = constants_1.KEY_CODES.PAGE_UP_KEY,
                PAGE_DOWN_KEY = constants_1.KEY_CODES.PAGE_DOWN_KEY;
              if (!this._isTextElement && !hasActiveDropdown && wasAlphaNumericChar) {
                this.showDropdown();
                if (!this.input.isFocussed) {
                  /*
                    We update the input value with the pressed key as
                    the input was not focussed at the time of key press
                    therefore does not have the value of the key.
                  */
                  this.input.value += keyString.toLowerCase();
                }
              }
              switch (keyCode) {
                case A_KEY:
                  return this._onSelectKey(event, hasItems);
                case ENTER_KEY:
                  return this._onEnterKey(event, activeItems, hasActiveDropdown);
                case ESC_KEY:
                  return this._onEscapeKey(hasActiveDropdown);
                case UP_KEY:
                case PAGE_UP_KEY:
                case DOWN_KEY:
                case PAGE_DOWN_KEY:
                  return this._onDirectionKey(event, hasActiveDropdown);
                case DELETE_KEY:
                case BACK_KEY:
                  return this._onDeleteKey(event, activeItems, hasFocusedInput);
                default:
              }
            };
            Choices.prototype._onKeyUp = function (_a) {
              var target = _a.target,
                keyCode = _a.keyCode;
              var value = this.input.value;
              var activeItems = this._store.activeItems;
              var canAddItem = this._canAddItem(activeItems, value);
              var backKey = constants_1.KEY_CODES.BACK_KEY,
                deleteKey = constants_1.KEY_CODES.DELETE_KEY; // We are typing into a text input and have a value, we want to show a dropdown
              // notice. Otherwise hide the dropdown

              if (this._isTextElement) {
                var canShowDropdownNotice = canAddItem.notice && value;
                if (canShowDropdownNotice) {
                  var dropdownItem = this._getTemplate('notice', canAddItem.notice);
                  this.dropdown.element.innerHTML = dropdownItem.outerHTML;
                  this.showDropdown(true);
                } else {
                  this.hideDropdown(true);
                }
              } else {
                var wasRemovalKeyCode = keyCode === backKey || keyCode === deleteKey;
                var userHasRemovedValue = wasRemovalKeyCode && target && !target.value;
                var canReactivateChoices = !this._isTextElement && this._isSearching;
                var canSearch = this._canSearch && canAddItem.response;
                if (userHasRemovedValue && canReactivateChoices) {
                  this._isSearching = false;
                  this._store.dispatch((0, choices_1.activateChoices)(true));
                } else if (canSearch) {
                  this._handleSearch(this.input.rawValue);
                }
              }
              this._canSearch = this.config.searchEnabled;
            };
            Choices.prototype._onSelectKey = function (event, hasItems) {
              var ctrlKey = event.ctrlKey,
                metaKey = event.metaKey;
              var hasCtrlDownKeyPressed = ctrlKey || metaKey; // If CTRL + A or CMD + A have been pressed and there are items to select

              if (hasCtrlDownKeyPressed && hasItems) {
                this._canSearch = false;
                var shouldHightlightAll = this.config.removeItems && !this.input.value && this.input.element === document.activeElement;
                if (shouldHightlightAll) {
                  this.highlightAll();
                }
              }
            };
            Choices.prototype._onEnterKey = function (event, activeItems, hasActiveDropdown) {
              var target = event.target;
              var enterKey = constants_1.KEY_CODES.ENTER_KEY;
              var targetWasButton = target && target.hasAttribute('data-button');
              if (this._isTextElement && target && target.value) {
                var value = this.input.value;
                var canAddItem = this._canAddItem(activeItems, value);
                if (canAddItem.response) {
                  this.hideDropdown(true);
                  this._addItem({
                    value: value
                  });
                  this._triggerChange(value);
                  this.clearInput();
                }
              }
              if (targetWasButton) {
                this._handleButtonAction(activeItems, target);
                event.preventDefault();
              }
              if (hasActiveDropdown) {
                var highlightedChoice = this.dropdown.getChild(".".concat(this.config.classNames.highlightedState));
                if (highlightedChoice) {
                  // add enter keyCode value
                  if (activeItems[0]) {
                    activeItems[0].keyCode = enterKey; // eslint-disable-line no-param-reassign
                  }

                  this._handleChoiceAction(activeItems, highlightedChoice);
                }
                event.preventDefault();
              } else if (this._isSelectOneElement) {
                this.showDropdown();
                event.preventDefault();
              }
            };
            Choices.prototype._onEscapeKey = function (hasActiveDropdown) {
              if (hasActiveDropdown) {
                this.hideDropdown(true);
                this.containerOuter.focus();
              }
            };
            Choices.prototype._onDirectionKey = function (event, hasActiveDropdown) {
              var keyCode = event.keyCode,
                metaKey = event.metaKey;
              var downKey = constants_1.KEY_CODES.DOWN_KEY,
                pageUpKey = constants_1.KEY_CODES.PAGE_UP_KEY,
                pageDownKey = constants_1.KEY_CODES.PAGE_DOWN_KEY; // If up or down key is pressed, traverse through options

              if (hasActiveDropdown || this._isSelectOneElement) {
                this.showDropdown();
                this._canSearch = false;
                var directionInt = keyCode === downKey || keyCode === pageDownKey ? 1 : -1;
                var skipKey = metaKey || keyCode === pageDownKey || keyCode === pageUpKey;
                var selectableChoiceIdentifier = '[data-choice-selectable]';
                var nextEl = void 0;
                if (skipKey) {
                  if (directionInt > 0) {
                    nextEl = this.dropdown.element.querySelector("".concat(selectableChoiceIdentifier, ":last-of-type"));
                  } else {
                    nextEl = this.dropdown.element.querySelector(selectableChoiceIdentifier);
                  }
                } else {
                  var currentEl = this.dropdown.element.querySelector(".".concat(this.config.classNames.highlightedState));
                  if (currentEl) {
                    nextEl = (0, utils_1.getAdjacentEl)(currentEl, selectableChoiceIdentifier, directionInt);
                  } else {
                    nextEl = this.dropdown.element.querySelector(selectableChoiceIdentifier);
                  }
                }
                if (nextEl) {
                  // We prevent default to stop the cursor moving
                  // when pressing the arrow
                  if (!(0, utils_1.isScrolledIntoView)(nextEl, this.choiceList.element, directionInt)) {
                    this.choiceList.scrollToChildElement(nextEl, directionInt);
                  }
                  this._highlightChoice(nextEl);
                } // Prevent default to maintain cursor position whilst
                // traversing dropdown options

                event.preventDefault();
              }
            };
            Choices.prototype._onDeleteKey = function (event, activeItems, hasFocusedInput) {
              var target = event.target; // If backspace or delete key is pressed and the input has no value

              if (!this._isSelectOneElement && !target.value && hasFocusedInput) {
                this._handleBackspace(activeItems);
                event.preventDefault();
              }
            };
            Choices.prototype._onTouchMove = function () {
              if (this._wasTap) {
                this._wasTap = false;
              }
            };
            Choices.prototype._onTouchEnd = function (event) {
              var target = (event || event.touches[0]).target;
              var touchWasWithinContainer = this._wasTap && this.containerOuter.element.contains(target);
              if (touchWasWithinContainer) {
                var containerWasExactTarget = target === this.containerOuter.element || target === this.containerInner.element;
                if (containerWasExactTarget) {
                  if (this._isTextElement) {
                    this.input.focus();
                  } else if (this._isSelectMultipleElement) {
                    this.showDropdown();
                  }
                } // Prevents focus event firing

                event.stopPropagation();
              }
              this._wasTap = true;
            };
            /**
             * Handles mousedown event in capture mode for containetOuter.element
             */

            Choices.prototype._onMouseDown = function (event) {
              var target = event.target;
              if (!(target instanceof HTMLElement)) {
                return;
              } // If we have our mouse down on the scrollbar and are on IE11...

              if (IS_IE11 && this.choiceList.element.contains(target)) {
                // check if click was on a scrollbar area
                var firstChoice = this.choiceList.element.firstElementChild;
                var isOnScrollbar = this._direction === 'ltr' ? event.offsetX >= firstChoice.offsetWidth : event.offsetX < firstChoice.offsetLeft;
                this._isScrollingOnIe = isOnScrollbar;
              }
              if (target === this.input.element) {
                return;
              }
              var item = target.closest('[data-button],[data-item],[data-choice]');
              if (item instanceof HTMLElement) {
                var hasShiftKey = event.shiftKey;
                var activeItems = this._store.activeItems;
                var dataset = item.dataset;
                if ('button' in dataset) {
                  this._handleButtonAction(activeItems, item);
                } else if ('item' in dataset) {
                  this._handleItemAction(activeItems, item, hasShiftKey);
                } else if ('choice' in dataset) {
                  this._handleChoiceAction(activeItems, item);
                }
              }
              event.preventDefault();
            };
            /**
             * Handles mouseover event over this.dropdown
             * @param {MouseEvent} event
             */

            Choices.prototype._onMouseOver = function (_a) {
              var target = _a.target;
              if (target instanceof HTMLElement && 'choice' in target.dataset) {
                this._highlightChoice(target);
              }
            };
            Choices.prototype._onClick = function (_a) {
              var target = _a.target;
              var clickWasWithinContainer = this.containerOuter.element.contains(target);
              if (clickWasWithinContainer) {
                if (!this.dropdown.isActive && !this.containerOuter.isDisabled) {
                  if (this._isTextElement) {
                    if (document.activeElement !== this.input.element) {
                      this.input.focus();
                    }
                  } else {
                    this.showDropdown();
                    this.containerOuter.focus();
                  }
                } else if (this._isSelectOneElement && target !== this.input.element && !this.dropdown.element.contains(target)) {
                  this.hideDropdown();
                }
              } else {
                var hasHighlightedItems = this._store.highlightedActiveItems.length > 0;
                if (hasHighlightedItems) {
                  this.unhighlightAll();
                }
                this.containerOuter.removeFocusState();
                this.hideDropdown(true);
              }
            };
            Choices.prototype._onFocus = function (_a) {
              var _b;
              var _this = this;
              var target = _a.target;
              var focusWasWithinContainer = target && this.containerOuter.element.contains(target);
              if (!focusWasWithinContainer) {
                return;
              }
              var focusActions = (_b = {}, _b[constants_1.TEXT_TYPE] = function () {
                if (target === _this.input.element) {
                  _this.containerOuter.addFocusState();
                }
              }, _b[constants_1.SELECT_ONE_TYPE] = function () {
                _this.containerOuter.addFocusState();
                if (target === _this.input.element) {
                  _this.showDropdown(true);
                }
              }, _b[constants_1.SELECT_MULTIPLE_TYPE] = function () {
                if (target === _this.input.element) {
                  _this.showDropdown(true); // If element is a select box, the focused element is the container and the dropdown
                  // isn't already open, focus and show dropdown

                  _this.containerOuter.addFocusState();
                }
              }, _b);
              focusActions[this.passedElement.element.type]();
            };
            Choices.prototype._onBlur = function (_a) {
              var _b;
              var _this = this;
              var target = _a.target;
              var blurWasWithinContainer = target && this.containerOuter.element.contains(target);
              if (blurWasWithinContainer && !this._isScrollingOnIe) {
                var activeItems = this._store.activeItems;
                var hasHighlightedItems_1 = activeItems.some(function (item) {
                  return item.highlighted;
                });
                var blurActions = (_b = {}, _b[constants_1.TEXT_TYPE] = function () {
                  if (target === _this.input.element) {
                    _this.containerOuter.removeFocusState();
                    if (hasHighlightedItems_1) {
                      _this.unhighlightAll();
                    }
                    _this.hideDropdown(true);
                  }
                }, _b[constants_1.SELECT_ONE_TYPE] = function () {
                  _this.containerOuter.removeFocusState();
                  if (target === _this.input.element || target === _this.containerOuter.element && !_this._canSearch) {
                    _this.hideDropdown(true);
                  }
                }, _b[constants_1.SELECT_MULTIPLE_TYPE] = function () {
                  if (target === _this.input.element) {
                    _this.containerOuter.removeFocusState();
                    _this.hideDropdown(true);
                    if (hasHighlightedItems_1) {
                      _this.unhighlightAll();
                    }
                  }
                }, _b);
                blurActions[this.passedElement.element.type]();
              } else {
                // On IE11, clicking the scollbar blurs our input and thus
                // closes the dropdown. To stop this, we refocus our input
                // if we know we are on IE *and* are scrolling.
                this._isScrollingOnIe = false;
                this.input.element.focus();
              }
            };
            Choices.prototype._onFormReset = function () {
              this._store.dispatch((0, misc_1.resetTo)(this._initialState));
            };
            Choices.prototype._highlightChoice = function (el) {
              var _this = this;
              if (el === void 0) {
                el = null;
              }
              var choices = Array.from(this.dropdown.element.querySelectorAll('[data-choice-selectable]'));
              if (!choices.length) {
                return;
              }
              var passedEl = el;
              var highlightedChoices = Array.from(this.dropdown.element.querySelectorAll(".".concat(this.config.classNames.highlightedState))); // Remove any highlighted choices

              highlightedChoices.forEach(function (choice) {
                choice.classList.remove(_this.config.classNames.highlightedState);
                choice.setAttribute('aria-selected', 'false');
              });
              if (passedEl) {
                this._highlightPosition = choices.indexOf(passedEl);
              } else {
                // Highlight choice based on last known highlight location
                if (choices.length > this._highlightPosition) {
                  // If we have an option to highlight
                  passedEl = choices[this._highlightPosition];
                } else {
                  // Otherwise highlight the option before
                  passedEl = choices[choices.length - 1];
                }
                if (!passedEl) {
                  passedEl = choices[0];
                }
              }
              passedEl.classList.add(this.config.classNames.highlightedState);
              passedEl.setAttribute('aria-selected', 'true');
              this.passedElement.triggerEvent(constants_1.EVENTS.highlightChoice, {
                el: passedEl
              });
              if (this.dropdown.isActive) {
                // IE11 ignores aria-label and blocks virtual keyboard
                // if aria-activedescendant is set without a dropdown
                this.input.setActiveDescendant(passedEl.id);
                this.containerOuter.setActiveDescendant(passedEl.id);
              }
            };
            Choices.prototype._addItem = function (_a) {
              var value = _a.value,
                _b = _a.label,
                label = _b === void 0 ? null : _b,
                _c = _a.choiceId,
                choiceId = _c === void 0 ? -1 : _c,
                _d = _a.groupId,
                groupId = _d === void 0 ? -1 : _d,
                _e = _a.customProperties,
                customProperties = _e === void 0 ? {} : _e,
                _f = _a.placeholder,
                placeholder = _f === void 0 ? false : _f,
                _g = _a.keyCode,
                keyCode = _g === void 0 ? -1 : _g;
              var passedValue = typeof value === 'string' ? value.trim() : value;
              var items = this._store.items;
              var passedLabel = label || passedValue;
              var passedOptionId = choiceId || -1;
              var group = groupId >= 0 ? this._store.getGroupById(groupId) : null;
              var id = items ? items.length + 1 : 1; // If a prepended value has been passed, prepend it

              if (this.config.prependValue) {
                passedValue = this.config.prependValue + passedValue.toString();
              } // If an appended value has been passed, append it

              if (this.config.appendValue) {
                passedValue += this.config.appendValue.toString();
              }
              this._store.dispatch((0, items_1.addItem)({
                value: passedValue,
                label: passedLabel,
                id: id,
                choiceId: passedOptionId,
                groupId: groupId,
                customProperties: customProperties,
                placeholder: placeholder,
                keyCode: keyCode
              }));
              if (this._isSelectOneElement) {
                this.removeActiveItems(id);
              } // Trigger change event

              this.passedElement.triggerEvent(constants_1.EVENTS.addItem, {
                id: id,
                value: passedValue,
                label: passedLabel,
                customProperties: customProperties,
                groupValue: group && group.value ? group.value : null,
                keyCode: keyCode
              });
            };
            Choices.prototype._removeItem = function (item) {
              var id = item.id,
                value = item.value,
                label = item.label,
                customProperties = item.customProperties,
                choiceId = item.choiceId,
                groupId = item.groupId;
              var group = groupId && groupId >= 0 ? this._store.getGroupById(groupId) : null;
              if (!id || !choiceId) {
                return;
              }
              this._store.dispatch((0, items_1.removeItem)(id, choiceId));
              this.passedElement.triggerEvent(constants_1.EVENTS.removeItem, {
                id: id,
                value: value,
                label: label,
                customProperties: customProperties,
                groupValue: group && group.value ? group.value : null
              });
            };
            Choices.prototype._addChoice = function (_a) {
              var value = _a.value,
                _b = _a.label,
                label = _b === void 0 ? null : _b,
                _c = _a.isSelected,
                isSelected = _c === void 0 ? false : _c,
                _d = _a.isDisabled,
                isDisabled = _d === void 0 ? false : _d,
                _e = _a.groupId,
                groupId = _e === void 0 ? -1 : _e,
                _f = _a.customProperties,
                customProperties = _f === void 0 ? {} : _f,
                _g = _a.placeholder,
                placeholder = _g === void 0 ? false : _g,
                _h = _a.keyCode,
                keyCode = _h === void 0 ? -1 : _h;
              if (typeof value === 'undefined' || value === null) {
                return;
              } // Generate unique id

              var choices = this._store.choices;
              var choiceLabel = label || value;
              var choiceId = choices ? choices.length + 1 : 1;
              var choiceElementId = "".concat(this._baseId, "-").concat(this._idNames.itemChoice, "-").concat(choiceId);
              this._store.dispatch((0, choices_1.addChoice)({
                id: choiceId,
                groupId: groupId,
                elementId: choiceElementId,
                value: value,
                label: choiceLabel,
                disabled: isDisabled,
                customProperties: customProperties,
                placeholder: placeholder,
                keyCode: keyCode
              }));
              if (isSelected) {
                this._addItem({
                  value: value,
                  label: choiceLabel,
                  choiceId: choiceId,
                  customProperties: customProperties,
                  placeholder: placeholder,
                  keyCode: keyCode
                });
              }
            };
            Choices.prototype._addGroup = function (_a) {
              var _this = this;
              var group = _a.group,
                id = _a.id,
                _b = _a.valueKey,
                valueKey = _b === void 0 ? 'value' : _b,
                _c = _a.labelKey,
                labelKey = _c === void 0 ? 'label' : _c;
              var groupChoices = (0, utils_1.isType)('Object', group) ? group.choices : Array.from(group.getElementsByTagName('OPTION'));
              var groupId = id || Math.floor(new Date().valueOf() * Math.random());
              var isDisabled = group.disabled ? group.disabled : false;
              if (groupChoices) {
                this._store.dispatch((0, groups_1.addGroup)({
                  value: group.label,
                  id: groupId,
                  active: true,
                  disabled: isDisabled
                }));
                var addGroupChoices = function (choice) {
                  var isOptDisabled = choice.disabled || choice.parentNode && choice.parentNode.disabled;
                  _this._addChoice({
                    value: choice[valueKey],
                    label: (0, utils_1.isType)('Object', choice) ? choice[labelKey] : choice.innerHTML,
                    isSelected: choice.selected,
                    isDisabled: isOptDisabled,
                    groupId: groupId,
                    customProperties: choice.customProperties,
                    placeholder: choice.placeholder
                  });
                };
                groupChoices.forEach(addGroupChoices);
              } else {
                this._store.dispatch((0, groups_1.addGroup)({
                  value: group.label,
                  id: group.id,
                  active: false,
                  disabled: group.disabled
                }));
              }
            };
            Choices.prototype._getTemplate = function (template) {
              var _a;
              var args = [];
              for (var _i = 1; _i < arguments.length; _i++) {
                args[_i - 1] = arguments[_i];
              }
              return (_a = this._templates[template]).call.apply(_a, __spreadArray([this, this.config], args, false));
            };
            Choices.prototype._createTemplates = function () {
              var callbackOnCreateTemplates = this.config.callbackOnCreateTemplates;
              var userTemplates = {};
              if (callbackOnCreateTemplates && typeof callbackOnCreateTemplates === 'function') {
                userTemplates = callbackOnCreateTemplates.call(this, utils_1.strToEl);
              }
              this._templates = (0, deepmerge_1.default)(templates_1.default, userTemplates);
            };
            Choices.prototype._createElements = function () {
              this.containerOuter = new components_1.Container({
                element: this._getTemplate('containerOuter', this._direction, this._isSelectElement, this._isSelectOneElement, this.config.searchEnabled, this.passedElement.element.type, this.config.labelId),
                classNames: this.config.classNames,
                type: this.passedElement.element.type,
                position: this.config.position
              });
              this.containerInner = new components_1.Container({
                element: this._getTemplate('containerInner'),
                classNames: this.config.classNames,
                type: this.passedElement.element.type,
                position: this.config.position
              });
              this.input = new components_1.Input({
                element: this._getTemplate('input', this._placeholderValue),
                classNames: this.config.classNames,
                type: this.passedElement.element.type,
                preventPaste: !this.config.paste
              });
              this.choiceList = new components_1.List({
                element: this._getTemplate('choiceList', this._isSelectOneElement)
              });
              this.itemList = new components_1.List({
                element: this._getTemplate('itemList', this._isSelectOneElement)
              });
              this.dropdown = new components_1.Dropdown({
                element: this._getTemplate('dropdown'),
                classNames: this.config.classNames,
                type: this.passedElement.element.type
              });
            };
            Choices.prototype._createStructure = function () {
              // Hide original element
              this.passedElement.conceal(); // Wrap input in container preserving DOM ordering

              this.containerInner.wrap(this.passedElement.element); // Wrapper inner container with outer container

              this.containerOuter.wrap(this.containerInner.element);
              if (this._isSelectOneElement) {
                this.input.placeholder = this.config.searchPlaceholderValue || '';
              } else if (this._placeholderValue) {
                this.input.placeholder = this._placeholderValue;
                this.input.setWidth();
              }
              this.containerOuter.element.appendChild(this.containerInner.element);
              this.containerOuter.element.appendChild(this.dropdown.element);
              this.containerInner.element.appendChild(this.itemList.element);
              if (!this._isTextElement) {
                this.dropdown.element.appendChild(this.choiceList.element);
              }
              if (!this._isSelectOneElement) {
                this.containerInner.element.appendChild(this.input.element);
              } else if (this.config.searchEnabled) {
                this.dropdown.element.insertBefore(this.input.element, this.dropdown.element.firstChild);
              }
              if (this._isSelectElement) {
                this._highlightPosition = 0;
                this._isSearching = false;
                this._startLoading();
                if (this._presetGroups.length) {
                  this._addPredefinedGroups(this._presetGroups);
                } else {
                  this._addPredefinedChoices(this._presetChoices);
                }
                this._stopLoading();
              }
              if (this._isTextElement) {
                this._addPredefinedItems(this._presetItems);
              }
            };
            Choices.prototype._addPredefinedGroups = function (groups) {
              var _this = this; // If we have a placeholder option

              var placeholderChoice = this.passedElement.placeholderOption;
              if (placeholderChoice && placeholderChoice.parentNode && placeholderChoice.parentNode.tagName === 'SELECT') {
                this._addChoice({
                  value: placeholderChoice.value,
                  label: placeholderChoice.innerHTML,
                  isSelected: placeholderChoice.selected,
                  isDisabled: placeholderChoice.disabled,
                  placeholder: true
                });
              }
              groups.forEach(function (group) {
                return _this._addGroup({
                  group: group,
                  id: group.id || null
                });
              });
            };
            Choices.prototype._addPredefinedChoices = function (choices) {
              var _this = this; // If sorting is enabled or the user is searching, filter choices

              if (this.config.shouldSort) {
                choices.sort(this.config.sorter);
              }
              var hasSelectedChoice = choices.some(function (choice) {
                return choice.selected;
              });
              var firstEnabledChoiceIndex = choices.findIndex(function (choice) {
                return choice.disabled === undefined || !choice.disabled;
              });
              choices.forEach(function (choice, index) {
                var _a = choice.value,
                  value = _a === void 0 ? '' : _a,
                  label = choice.label,
                  customProperties = choice.customProperties,
                  placeholder = choice.placeholder;
                if (_this._isSelectElement) {
                  // If the choice is actually a group
                  if (choice.choices) {
                    _this._addGroup({
                      group: choice,
                      id: choice.id || null
                    });
                  } else {
                    /**
                     * If there is a selected choice already or the choice is not the first in
                     * the array, add each choice normally.
                     *
                     * Otherwise we pre-select the first enabled choice in the array ("select-one" only)
                     */
                    var shouldPreselect = _this._isSelectOneElement && !hasSelectedChoice && index === firstEnabledChoiceIndex;
                    var isSelected = shouldPreselect ? true : choice.selected;
                    var isDisabled = choice.disabled;
                    _this._addChoice({
                      value: value,
                      label: label,
                      isSelected: !!isSelected,
                      isDisabled: !!isDisabled,
                      placeholder: !!placeholder,
                      customProperties: customProperties
                    });
                  }
                } else {
                  _this._addChoice({
                    value: value,
                    label: label,
                    isSelected: !!choice.selected,
                    isDisabled: !!choice.disabled,
                    placeholder: !!choice.placeholder,
                    customProperties: customProperties
                  });
                }
              });
            };
            Choices.prototype._addPredefinedItems = function (items) {
              var _this = this;
              items.forEach(function (item) {
                if (typeof item === 'object' && item.value) {
                  _this._addItem({
                    value: item.value,
                    label: item.label,
                    choiceId: item.id,
                    customProperties: item.customProperties,
                    placeholder: item.placeholder
                  });
                }
                if (typeof item === 'string') {
                  _this._addItem({
                    value: item
                  });
                }
              });
            };
            Choices.prototype._setChoiceOrItem = function (item) {
              var _this = this;
              var itemType = (0, utils_1.getType)(item).toLowerCase();
              var handleType = {
                object: function () {
                  if (!item.value) {
                    return;
                  } // If we are dealing with a select input, we need to create an option first
                  // that is then selected. For text inputs we can just add items normally.

                  if (!_this._isTextElement) {
                    _this._addChoice({
                      value: item.value,
                      label: item.label,
                      isSelected: true,
                      isDisabled: false,
                      customProperties: item.customProperties,
                      placeholder: item.placeholder
                    });
                  } else {
                    _this._addItem({
                      value: item.value,
                      label: item.label,
                      choiceId: item.id,
                      customProperties: item.customProperties,
                      placeholder: item.placeholder
                    });
                  }
                },
                string: function () {
                  if (!_this._isTextElement) {
                    _this._addChoice({
                      value: item,
                      label: item,
                      isSelected: true,
                      isDisabled: false
                    });
                  } else {
                    _this._addItem({
                      value: item
                    });
                  }
                }
              };
              handleType[itemType]();
            };
            Choices.prototype._findAndSelectChoiceByValue = function (value) {
              var _this = this;
              var choices = this._store.choices; // Check 'value' property exists and the choice isn't already selected

              var foundChoice = choices.find(function (choice) {
                return _this.config.valueComparer(choice.value, value);
              });
              if (foundChoice && !foundChoice.selected) {
                this._addItem({
                  value: foundChoice.value,
                  label: foundChoice.label,
                  choiceId: foundChoice.id,
                  groupId: foundChoice.groupId,
                  customProperties: foundChoice.customProperties,
                  placeholder: foundChoice.placeholder,
                  keyCode: foundChoice.keyCode
                });
              }
            };
            Choices.prototype._generatePlaceholderValue = function () {
              if (this._isSelectElement && this.passedElement.placeholderOption) {
                var placeholderOption = this.passedElement.placeholderOption;
                return placeholderOption ? placeholderOption.text : null;
              }
              var _a = this.config,
                placeholder = _a.placeholder,
                placeholderValue = _a.placeholderValue;
              var dataset = this.passedElement.element.dataset;
              if (placeholder) {
                if (placeholderValue) {
                  return placeholderValue;
                }
                if (dataset.placeholder) {
                  return dataset.placeholder;
                }
              }
              return null;
            };
            return Choices;
          }();
          exports["default"] = Choices;

          /***/
        },

        /***/613: /***/function (__unused_webpack_module, exports, __nested_webpack_require_94352__) {
          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          var utils_1 = __nested_webpack_require_94352__(799);
          var constants_1 = __nested_webpack_require_94352__(883);
          var Container = /** @class */
          function () {
            function Container(_a) {
              var element = _a.element,
                type = _a.type,
                classNames = _a.classNames,
                position = _a.position;
              this.element = element;
              this.classNames = classNames;
              this.type = type;
              this.position = position;
              this.isOpen = false;
              this.isFlipped = false;
              this.isFocussed = false;
              this.isDisabled = false;
              this.isLoading = false;
              this._onFocus = this._onFocus.bind(this);
              this._onBlur = this._onBlur.bind(this);
            }
            Container.prototype.addEventListeners = function () {
              this.element.addEventListener('focus', this._onFocus);
              this.element.addEventListener('blur', this._onBlur);
            };
            Container.prototype.removeEventListeners = function () {
              this.element.removeEventListener('focus', this._onFocus);
              this.element.removeEventListener('blur', this._onBlur);
            };
            /**
             * Determine whether container should be flipped based on passed
             * dropdown position
             */

            Container.prototype.shouldFlip = function (dropdownPos) {
              if (typeof dropdownPos !== 'number') {
                return false;
              } // If flip is enabled and the dropdown bottom position is
              // greater than the window height flip the dropdown.

              var shouldFlip = false;
              if (this.position === 'auto') {
                shouldFlip = !window.matchMedia("(min-height: ".concat(dropdownPos + 1, "px)")).matches;
              } else if (this.position === 'top') {
                shouldFlip = true;
              }
              return shouldFlip;
            };
            Container.prototype.setActiveDescendant = function (activeDescendantID) {
              this.element.setAttribute('aria-activedescendant', activeDescendantID);
            };
            Container.prototype.removeActiveDescendant = function () {
              this.element.removeAttribute('aria-activedescendant');
            };
            Container.prototype.open = function (dropdownPos) {
              this.element.classList.add(this.classNames.openState);
              this.element.setAttribute('aria-expanded', 'true');
              this.isOpen = true;
              if (this.shouldFlip(dropdownPos)) {
                this.element.classList.add(this.classNames.flippedState);
                this.isFlipped = true;
              }
            };
            Container.prototype.close = function () {
              this.element.classList.remove(this.classNames.openState);
              this.element.setAttribute('aria-expanded', 'false');
              this.removeActiveDescendant();
              this.isOpen = false; // A dropdown flips if it does not have space within the page

              if (this.isFlipped) {
                this.element.classList.remove(this.classNames.flippedState);
                this.isFlipped = false;
              }
            };
            Container.prototype.focus = function () {
              if (!this.isFocussed) {
                this.element.focus();
              }
            };
            Container.prototype.addFocusState = function () {
              this.element.classList.add(this.classNames.focusState);
            };
            Container.prototype.removeFocusState = function () {
              this.element.classList.remove(this.classNames.focusState);
            };
            Container.prototype.enable = function () {
              this.element.classList.remove(this.classNames.disabledState);
              this.element.removeAttribute('aria-disabled');
              if (this.type === constants_1.SELECT_ONE_TYPE) {
                this.element.setAttribute('tabindex', '0');
              }
              this.isDisabled = false;
            };
            Container.prototype.disable = function () {
              this.element.classList.add(this.classNames.disabledState);
              this.element.setAttribute('aria-disabled', 'true');
              if (this.type === constants_1.SELECT_ONE_TYPE) {
                this.element.setAttribute('tabindex', '-1');
              }
              this.isDisabled = true;
            };
            Container.prototype.wrap = function (element) {
              (0, utils_1.wrap)(element, this.element);
            };
            Container.prototype.unwrap = function (element) {
              if (this.element.parentNode) {
                // Move passed element outside this element
                this.element.parentNode.insertBefore(element, this.element); // Remove this element

                this.element.parentNode.removeChild(this.element);
              }
            };
            Container.prototype.addLoadingState = function () {
              this.element.classList.add(this.classNames.loadingState);
              this.element.setAttribute('aria-busy', 'true');
              this.isLoading = true;
            };
            Container.prototype.removeLoadingState = function () {
              this.element.classList.remove(this.classNames.loadingState);
              this.element.removeAttribute('aria-busy');
              this.isLoading = false;
            };
            Container.prototype._onFocus = function () {
              this.isFocussed = true;
            };
            Container.prototype._onBlur = function () {
              this.isFocussed = false;
            };
            return Container;
          }();
          exports["default"] = Container;

          /***/
        },

        /***/217: /***/function (__unused_webpack_module, exports) {
          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          var Dropdown = /** @class */
          function () {
            function Dropdown(_a) {
              var element = _a.element,
                type = _a.type,
                classNames = _a.classNames;
              this.element = element;
              this.classNames = classNames;
              this.type = type;
              this.isActive = false;
            }
            Object.defineProperty(Dropdown.prototype, "distanceFromTopWindow", {
              /**
               * Bottom position of dropdown in viewport coordinates
               */
              get: function () {
                return this.element.getBoundingClientRect().bottom;
              },
              enumerable: false,
              configurable: true
            });
            Dropdown.prototype.getChild = function (selector) {
              return this.element.querySelector(selector);
            };
            /**
             * Show dropdown to user by adding active state class
             */

            Dropdown.prototype.show = function () {
              this.element.classList.add(this.classNames.activeState);
              this.element.setAttribute('aria-expanded', 'true');
              this.isActive = true;
              return this;
            };
            /**
             * Hide dropdown from user
             */

            Dropdown.prototype.hide = function () {
              this.element.classList.remove(this.classNames.activeState);
              this.element.setAttribute('aria-expanded', 'false');
              this.isActive = false;
              return this;
            };
            return Dropdown;
          }();
          exports["default"] = Dropdown;

          /***/
        },

        /***/520: /***/function (__unused_webpack_module, exports, __nested_webpack_require_102336__) {
          var __importDefault = this && this.__importDefault || function (mod) {
            return mod && mod.__esModule ? mod : {
              "default": mod
            };
          };
          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.WrappedSelect = exports.WrappedInput = exports.List = exports.Input = exports.Container = exports.Dropdown = void 0;
          var dropdown_1 = __importDefault(__nested_webpack_require_102336__(217));
          exports.Dropdown = dropdown_1.default;
          var container_1 = __importDefault(__nested_webpack_require_102336__(613));
          exports.Container = container_1.default;
          var input_1 = __importDefault(__nested_webpack_require_102336__(11));
          exports.Input = input_1.default;
          var list_1 = __importDefault(__nested_webpack_require_102336__(624));
          exports.List = list_1.default;
          var wrapped_input_1 = __importDefault(__nested_webpack_require_102336__(541));
          exports.WrappedInput = wrapped_input_1.default;
          var wrapped_select_1 = __importDefault(__nested_webpack_require_102336__(982));
          exports.WrappedSelect = wrapped_select_1.default;

          /***/
        },

        /***/11: /***/function (__unused_webpack_module, exports, __nested_webpack_require_103599__) {
          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          var utils_1 = __nested_webpack_require_103599__(799);
          var constants_1 = __nested_webpack_require_103599__(883);
          var Input = /** @class */
          function () {
            function Input(_a) {
              var element = _a.element,
                type = _a.type,
                classNames = _a.classNames,
                preventPaste = _a.preventPaste;
              this.element = element;
              this.type = type;
              this.classNames = classNames;
              this.preventPaste = preventPaste;
              this.isFocussed = this.element.isEqualNode(document.activeElement);
              this.isDisabled = element.disabled;
              this._onPaste = this._onPaste.bind(this);
              this._onInput = this._onInput.bind(this);
              this._onFocus = this._onFocus.bind(this);
              this._onBlur = this._onBlur.bind(this);
            }
            Object.defineProperty(Input.prototype, "placeholder", {
              set: function (placeholder) {
                this.element.placeholder = placeholder;
              },
              enumerable: false,
              configurable: true
            });
            Object.defineProperty(Input.prototype, "value", {
              get: function () {
                return (0, utils_1.sanitise)(this.element.value);
              },
              set: function (value) {
                this.element.value = value;
              },
              enumerable: false,
              configurable: true
            });
            Object.defineProperty(Input.prototype, "rawValue", {
              get: function () {
                return this.element.value;
              },
              enumerable: false,
              configurable: true
            });
            Input.prototype.addEventListeners = function () {
              this.element.addEventListener('paste', this._onPaste);
              this.element.addEventListener('input', this._onInput, {
                passive: true
              });
              this.element.addEventListener('focus', this._onFocus, {
                passive: true
              });
              this.element.addEventListener('blur', this._onBlur, {
                passive: true
              });
            };
            Input.prototype.removeEventListeners = function () {
              this.element.removeEventListener('input', this._onInput);
              this.element.removeEventListener('paste', this._onPaste);
              this.element.removeEventListener('focus', this._onFocus);
              this.element.removeEventListener('blur', this._onBlur);
            };
            Input.prototype.enable = function () {
              this.element.removeAttribute('disabled');
              this.isDisabled = false;
            };
            Input.prototype.disable = function () {
              this.element.setAttribute('disabled', '');
              this.isDisabled = true;
            };
            Input.prototype.focus = function () {
              if (!this.isFocussed) {
                this.element.focus();
              }
            };
            Input.prototype.blur = function () {
              if (this.isFocussed) {
                this.element.blur();
              }
            };
            Input.prototype.clear = function (setWidth) {
              if (setWidth === void 0) {
                setWidth = true;
              }
              if (this.element.value) {
                this.element.value = '';
              }
              if (setWidth) {
                this.setWidth();
              }
              return this;
            };
            /**
             * Set the correct input width based on placeholder
             * value or input value
             */

            Input.prototype.setWidth = function () {
              // Resize input to contents or placeholder
              var _a = this.element,
                style = _a.style,
                value = _a.value,
                placeholder = _a.placeholder;
              style.minWidth = "".concat(placeholder.length + 1, "ch");
              style.width = "".concat(value.length + 1, "ch");
            };
            Input.prototype.setActiveDescendant = function (activeDescendantID) {
              this.element.setAttribute('aria-activedescendant', activeDescendantID);
            };
            Input.prototype.removeActiveDescendant = function () {
              this.element.removeAttribute('aria-activedescendant');
            };
            Input.prototype._onInput = function () {
              if (this.type !== constants_1.SELECT_ONE_TYPE) {
                this.setWidth();
              }
            };
            Input.prototype._onPaste = function (event) {
              if (this.preventPaste) {
                event.preventDefault();
              }
            };
            Input.prototype._onFocus = function () {
              this.isFocussed = true;
            };
            Input.prototype._onBlur = function () {
              this.isFocussed = false;
            };
            return Input;
          }();
          exports["default"] = Input;

          /***/
        },

        /***/624: /***/function (__unused_webpack_module, exports, __nested_webpack_require_108951__) {
          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          var constants_1 = __nested_webpack_require_108951__(883);
          var List = /** @class */
          function () {
            function List(_a) {
              var element = _a.element;
              this.element = element;
              this.scrollPos = this.element.scrollTop;
              this.height = this.element.offsetHeight;
            }
            List.prototype.clear = function () {
              this.element.innerHTML = '';
            };
            List.prototype.append = function (node) {
              this.element.appendChild(node);
            };
            List.prototype.getChild = function (selector) {
              return this.element.querySelector(selector);
            };
            List.prototype.hasChildren = function () {
              return this.element.hasChildNodes();
            };
            List.prototype.scrollToTop = function () {
              this.element.scrollTop = 0;
            };
            List.prototype.scrollToChildElement = function (element, direction) {
              var _this = this;
              if (!element) {
                return;
              }
              var listHeight = this.element.offsetHeight; // Scroll position of dropdown

              var listScrollPosition = this.element.scrollTop + listHeight;
              var elementHeight = element.offsetHeight; // Distance from bottom of element to top of parent

              var elementPos = element.offsetTop + elementHeight; // Difference between the element and scroll position

              var destination = direction > 0 ? this.element.scrollTop + elementPos - listScrollPosition : element.offsetTop;
              requestAnimationFrame(function () {
                _this._animateScroll(destination, direction);
              });
            };
            List.prototype._scrollDown = function (scrollPos, strength, destination) {
              var easing = (destination - scrollPos) / strength;
              var distance = easing > 1 ? easing : 1;
              this.element.scrollTop = scrollPos + distance;
            };
            List.prototype._scrollUp = function (scrollPos, strength, destination) {
              var easing = (scrollPos - destination) / strength;
              var distance = easing > 1 ? easing : 1;
              this.element.scrollTop = scrollPos - distance;
            };
            List.prototype._animateScroll = function (destination, direction) {
              var _this = this;
              var strength = constants_1.SCROLLING_SPEED;
              var choiceListScrollTop = this.element.scrollTop;
              var continueAnimation = false;
              if (direction > 0) {
                this._scrollDown(choiceListScrollTop, strength, destination);
                if (choiceListScrollTop < destination) {
                  continueAnimation = true;
                }
              } else {
                this._scrollUp(choiceListScrollTop, strength, destination);
                if (choiceListScrollTop > destination) {
                  continueAnimation = true;
                }
              }
              if (continueAnimation) {
                requestAnimationFrame(function () {
                  _this._animateScroll(destination, direction);
                });
              }
            };
            return List;
          }();
          exports["default"] = List;

          /***/
        },

        /***/730: /***/function (__unused_webpack_module, exports, __nested_webpack_require_112542__) {
          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          var utils_1 = __nested_webpack_require_112542__(799);
          var WrappedElement = /** @class */
          function () {
            function WrappedElement(_a) {
              var element = _a.element,
                classNames = _a.classNames;
              this.element = element;
              this.classNames = classNames;
              if (!(element instanceof HTMLInputElement) && !(element instanceof HTMLSelectElement)) {
                throw new TypeError('Invalid element passed');
              }
              this.isDisabled = false;
            }
            Object.defineProperty(WrappedElement.prototype, "isActive", {
              get: function () {
                return this.element.dataset.choice === 'active';
              },
              enumerable: false,
              configurable: true
            });
            Object.defineProperty(WrappedElement.prototype, "dir", {
              get: function () {
                return this.element.dir;
              },
              enumerable: false,
              configurable: true
            });
            Object.defineProperty(WrappedElement.prototype, "value", {
              get: function () {
                return this.element.value;
              },
              set: function (value) {
                // you must define setter here otherwise it will be readonly property
                this.element.value = value;
              },
              enumerable: false,
              configurable: true
            });
            WrappedElement.prototype.conceal = function () {
              // Hide passed input
              this.element.classList.add(this.classNames.input);
              this.element.hidden = true; // Remove element from tab index

              this.element.tabIndex = -1; // Backup original styles if any

              var origStyle = this.element.getAttribute('style');
              if (origStyle) {
                this.element.setAttribute('data-choice-orig-style', origStyle);
              }
              this.element.setAttribute('data-choice', 'active');
            };
            WrappedElement.prototype.reveal = function () {
              // Reinstate passed element
              this.element.classList.remove(this.classNames.input);
              this.element.hidden = false;
              this.element.removeAttribute('tabindex'); // Recover original styles if any

              var origStyle = this.element.getAttribute('data-choice-orig-style');
              if (origStyle) {
                this.element.removeAttribute('data-choice-orig-style');
                this.element.setAttribute('style', origStyle);
              } else {
                this.element.removeAttribute('style');
              }
              this.element.removeAttribute('data-choice'); // Re-assign values - this is weird, I know
              // @todo Figure out why we need to do this

              this.element.value = this.element.value; // eslint-disable-line no-self-assign
            };

            WrappedElement.prototype.enable = function () {
              this.element.removeAttribute('disabled');
              this.element.disabled = false;
              this.isDisabled = false;
            };
            WrappedElement.prototype.disable = function () {
              this.element.setAttribute('disabled', '');
              this.element.disabled = true;
              this.isDisabled = true;
            };
            WrappedElement.prototype.triggerEvent = function (eventType, data) {
              (0, utils_1.dispatchEvent)(this.element, eventType, data);
            };
            return WrappedElement;
          }();
          exports["default"] = WrappedElement;

          /***/
        },

        /***/541: /***/function (__unused_webpack_module, exports, __nested_webpack_require_116462__) {
          var __extends = this && this.__extends || function () {
            var extendStatics = function (d, b) {
              extendStatics = Object.setPrototypeOf || {
                __proto__: []
              } instanceof Array && function (d, b) {
                d.__proto__ = b;
              } || function (d, b) {
                for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p];
              };
              return extendStatics(d, b);
            };
            return function (d, b) {
              if (typeof b !== "function" && b !== null) throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
              extendStatics(d, b);
              function __() {
                this.constructor = d;
              }
              d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
            };
          }();
          var __importDefault = this && this.__importDefault || function (mod) {
            return mod && mod.__esModule ? mod : {
              "default": mod
            };
          };
          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          var wrapped_element_1 = __importDefault(__nested_webpack_require_116462__(730));
          var WrappedInput = /** @class */
          function (_super) {
            __extends(WrappedInput, _super);
            function WrappedInput(_a) {
              var element = _a.element,
                classNames = _a.classNames,
                delimiter = _a.delimiter;
              var _this = _super.call(this, {
                element: element,
                classNames: classNames
              }) || this;
              _this.delimiter = delimiter;
              return _this;
            }
            Object.defineProperty(WrappedInput.prototype, "value", {
              get: function () {
                return this.element.value;
              },
              set: function (value) {
                this.element.setAttribute('value', value);
                this.element.value = value;
              },
              enumerable: false,
              configurable: true
            });
            return WrappedInput;
          }(wrapped_element_1.default);
          exports["default"] = WrappedInput;

          /***/
        },

        /***/982: /***/function (__unused_webpack_module, exports, __nested_webpack_require_118905__) {
          var __extends = this && this.__extends || function () {
            var extendStatics = function (d, b) {
              extendStatics = Object.setPrototypeOf || {
                __proto__: []
              } instanceof Array && function (d, b) {
                d.__proto__ = b;
              } || function (d, b) {
                for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p];
              };
              return extendStatics(d, b);
            };
            return function (d, b) {
              if (typeof b !== "function" && b !== null) throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
              extendStatics(d, b);
              function __() {
                this.constructor = d;
              }
              d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
            };
          }();
          var __importDefault = this && this.__importDefault || function (mod) {
            return mod && mod.__esModule ? mod : {
              "default": mod
            };
          };
          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          var wrapped_element_1 = __importDefault(__nested_webpack_require_118905__(730));
          var WrappedSelect = /** @class */
          function (_super) {
            __extends(WrappedSelect, _super);
            function WrappedSelect(_a) {
              var element = _a.element,
                classNames = _a.classNames,
                template = _a.template;
              var _this = _super.call(this, {
                element: element,
                classNames: classNames
              }) || this;
              _this.template = template;
              return _this;
            }
            Object.defineProperty(WrappedSelect.prototype, "placeholderOption", {
              get: function () {
                return this.element.querySelector('option[value=""]') ||
                // Backward compatibility layer for the non-standard placeholder attribute supported in older versions.
                this.element.querySelector('option[placeholder]');
              },
              enumerable: false,
              configurable: true
            });
            Object.defineProperty(WrappedSelect.prototype, "optionGroups", {
              get: function () {
                return Array.from(this.element.getElementsByTagName('OPTGROUP'));
              },
              enumerable: false,
              configurable: true
            });
            Object.defineProperty(WrappedSelect.prototype, "options", {
              get: function () {
                return Array.from(this.element.options);
              },
              set: function (options) {
                var _this = this;
                var fragment = document.createDocumentFragment();
                var addOptionToFragment = function (data) {
                  // Create a standard select option
                  var option = _this.template(data); // Append it to fragment

                  fragment.appendChild(option);
                }; // Add each list item to list

                options.forEach(function (optionData) {
                  return addOptionToFragment(optionData);
                });
                this.appendDocFragment(fragment);
              },
              enumerable: false,
              configurable: true
            });
            WrappedSelect.prototype.appendDocFragment = function (fragment) {
              this.element.innerHTML = '';
              this.element.appendChild(fragment);
            };
            return WrappedSelect;
          }(wrapped_element_1.default);
          exports["default"] = WrappedSelect;

          /***/
        },

        /***/883: /***/function (__unused_webpack_module, exports) {
          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.SCROLLING_SPEED = exports.SELECT_MULTIPLE_TYPE = exports.SELECT_ONE_TYPE = exports.TEXT_TYPE = exports.KEY_CODES = exports.ACTION_TYPES = exports.EVENTS = void 0;
          exports.EVENTS = {
            showDropdown: 'showDropdown',
            hideDropdown: 'hideDropdown',
            change: 'change',
            choice: 'choice',
            search: 'search',
            addItem: 'addItem',
            removeItem: 'removeItem',
            highlightItem: 'highlightItem',
            highlightChoice: 'highlightChoice',
            unhighlightItem: 'unhighlightItem'
          };
          exports.ACTION_TYPES = {
            ADD_CHOICE: 'ADD_CHOICE',
            FILTER_CHOICES: 'FILTER_CHOICES',
            ACTIVATE_CHOICES: 'ACTIVATE_CHOICES',
            CLEAR_CHOICES: 'CLEAR_CHOICES',
            ADD_GROUP: 'ADD_GROUP',
            ADD_ITEM: 'ADD_ITEM',
            REMOVE_ITEM: 'REMOVE_ITEM',
            HIGHLIGHT_ITEM: 'HIGHLIGHT_ITEM',
            CLEAR_ALL: 'CLEAR_ALL',
            RESET_TO: 'RESET_TO',
            SET_IS_LOADING: 'SET_IS_LOADING'
          };
          exports.KEY_CODES = {
            BACK_KEY: 46,
            DELETE_KEY: 8,
            ENTER_KEY: 13,
            A_KEY: 65,
            ESC_KEY: 27,
            UP_KEY: 38,
            DOWN_KEY: 40,
            PAGE_UP_KEY: 33,
            PAGE_DOWN_KEY: 34
          };
          exports.TEXT_TYPE = 'text';
          exports.SELECT_ONE_TYPE = 'select-one';
          exports.SELECT_MULTIPLE_TYPE = 'select-multiple';
          exports.SCROLLING_SPEED = 4;

          /***/
        },

        /***/789: /***/function (__unused_webpack_module, exports, __nested_webpack_require_124555__) {
          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.DEFAULT_CONFIG = exports.DEFAULT_CLASSNAMES = void 0;
          var utils_1 = __nested_webpack_require_124555__(799);
          exports.DEFAULT_CLASSNAMES = {
            containerOuter: 'choices',
            containerInner: 'choices__inner',
            input: 'choices__input',
            inputCloned: 'choices__input--cloned',
            list: 'choices__list',
            listItems: 'choices__list--multiple',
            listSingle: 'choices__list--single',
            listDropdown: 'choices__list--dropdown',
            item: 'choices__item',
            itemSelectable: 'choices__item--selectable',
            itemDisabled: 'choices__item--disabled',
            itemChoice: 'choices__item--choice',
            placeholder: 'choices__placeholder',
            group: 'choices__group',
            groupHeading: 'choices__heading',
            button: 'choices__button',
            activeState: 'is-active',
            focusState: 'is-focused',
            openState: 'is-open',
            disabledState: 'is-disabled',
            highlightedState: 'is-highlighted',
            selectedState: 'is-selected',
            flippedState: 'is-flipped',
            loadingState: 'is-loading',
            noResults: 'has-no-results',
            noChoices: 'has-no-choices'
          };
          exports.DEFAULT_CONFIG = {
            items: [],
            choices: [],
            silent: false,
            renderChoiceLimit: -1,
            maxItemCount: -1,
            addItems: true,
            addItemFilter: null,
            removeItems: true,
            removeItemButton: false,
            editItems: false,
            allowHTML: true,
            duplicateItemsAllowed: true,
            delimiter: ',',
            paste: true,
            searchEnabled: true,
            searchChoices: true,
            searchFloor: 1,
            searchResultLimit: 4,
            searchFields: ['label', 'value'],
            position: 'auto',
            resetScrollPosition: true,
            shouldSort: true,
            shouldSortItems: false,
            sorter: utils_1.sortByAlpha,
            placeholder: true,
            placeholderValue: null,
            searchPlaceholderValue: null,
            prependValue: null,
            appendValue: null,
            renderSelectedChoices: 'auto',
            loadingText: 'Loading...',
            noResultsText: 'No results found',
            noChoicesText: 'No choices to choose from',
            itemSelectText: 'Press to select',
            uniqueItemText: 'Only unique values can be added',
            customAddItemText: 'Only values matching specific conditions can be added',
            addItemText: function (value) {
              return "Press Enter to add <b>\"".concat((0, utils_1.sanitise)(value), "\"</b>");
            },
            maxItemText: function (maxItemCount) {
              return "Only ".concat(maxItemCount, " values can be added");
            },
            valueComparer: function (value1, value2) {
              return value1 === value2;
            },
            fuseOptions: {
              includeScore: true
            },
            labelId: '',
            callbackOnInit: null,
            callbackOnCreateTemplates: null,
            classNames: exports.DEFAULT_CLASSNAMES
          };

          /***/
        },

        /***/18: /***/function (__unused_webpack_module, exports) {
          Object.defineProperty(exports, "__esModule", {
            value: true
          });

          /***/
        },

        /***/978: /***/function (__unused_webpack_module, exports) {
          /* eslint-disable @typescript-eslint/no-explicit-any */

          Object.defineProperty(exports, "__esModule", {
            value: true
          });

          /***/
        },

        /***/948: /***/function (__unused_webpack_module, exports) {
          Object.defineProperty(exports, "__esModule", {
            value: true
          });

          /***/
        },

        /***/359: /***/function (__unused_webpack_module, exports) {
          Object.defineProperty(exports, "__esModule", {
            value: true
          });

          /***/
        },

        /***/285: /***/function (__unused_webpack_module, exports) {
          Object.defineProperty(exports, "__esModule", {
            value: true
          });

          /***/
        },

        /***/533: /***/function (__unused_webpack_module, exports) {
          /* eslint-disable @typescript-eslint/no-explicit-any */

          Object.defineProperty(exports, "__esModule", {
            value: true
          });

          /***/
        },

        /***/187: /***/function (__unused_webpack_module, exports, __nested_webpack_require_129377__) {
          var __createBinding = this && this.__createBinding || (Object.create ? function (o, m, k, k2) {
            if (k2 === undefined) k2 = k;
            Object.defineProperty(o, k2, {
              enumerable: true,
              get: function () {
                return m[k];
              }
            });
          } : function (o, m, k, k2) {
            if (k2 === undefined) k2 = k;
            o[k2] = m[k];
          });
          var __exportStar = this && this.__exportStar || function (m, exports) {
            for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
          };
          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          __exportStar(__nested_webpack_require_129377__(18), exports);
          __exportStar(__nested_webpack_require_129377__(978), exports);
          __exportStar(__nested_webpack_require_129377__(948), exports);
          __exportStar(__nested_webpack_require_129377__(359), exports);
          __exportStar(__nested_webpack_require_129377__(285), exports);
          __exportStar(__nested_webpack_require_129377__(533), exports);
          __exportStar(__nested_webpack_require_129377__(287), exports);
          __exportStar(__nested_webpack_require_129377__(132), exports);
          __exportStar(__nested_webpack_require_129377__(837), exports);
          __exportStar(__nested_webpack_require_129377__(598), exports);
          __exportStar(__nested_webpack_require_129377__(369), exports);
          __exportStar(__nested_webpack_require_129377__(37), exports);
          __exportStar(__nested_webpack_require_129377__(47), exports);
          __exportStar(__nested_webpack_require_129377__(923), exports);
          __exportStar(__nested_webpack_require_129377__(876), exports);

          /***/
        },

        /***/287: /***/function (__unused_webpack_module, exports) {
          Object.defineProperty(exports, "__esModule", {
            value: true
          });

          /***/
        },

        /***/132: /***/function (__unused_webpack_module, exports) {
          Object.defineProperty(exports, "__esModule", {
            value: true
          });

          /***/
        },

        /***/837: /***/function (__unused_webpack_module, exports) {
          Object.defineProperty(exports, "__esModule", {
            value: true
          });

          /***/
        },

        /***/598: /***/function (__unused_webpack_module, exports) {
          Object.defineProperty(exports, "__esModule", {
            value: true
          });

          /***/
        },

        /***/37: /***/function (__unused_webpack_module, exports) {
          Object.defineProperty(exports, "__esModule", {
            value: true
          });

          /***/
        },

        /***/369: /***/function (__unused_webpack_module, exports) {
          Object.defineProperty(exports, "__esModule", {
            value: true
          });

          /***/
        },

        /***/47: /***/function (__unused_webpack_module, exports) {
          Object.defineProperty(exports, "__esModule", {
            value: true
          });

          /***/
        },

        /***/923: /***/function (__unused_webpack_module, exports) {
          Object.defineProperty(exports, "__esModule", {
            value: true
          });

          /***/
        },

        /***/876: /***/function (__unused_webpack_module, exports) {
          Object.defineProperty(exports, "__esModule", {
            value: true
          });

          /***/
        },

        /***/799: /***/function (__unused_webpack_module, exports) {
          /* eslint-disable @typescript-eslint/no-explicit-any */

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.diff = exports.cloneObject = exports.existsInArray = exports.dispatchEvent = exports.sortByScore = exports.sortByAlpha = exports.strToEl = exports.sanitise = exports.isScrolledIntoView = exports.getAdjacentEl = exports.wrap = exports.isType = exports.getType = exports.generateId = exports.generateChars = exports.getRandomNumber = void 0;
          var getRandomNumber = function (min, max) {
            return Math.floor(Math.random() * (max - min) + min);
          };
          exports.getRandomNumber = getRandomNumber;
          var generateChars = function (length) {
            return Array.from({
              length: length
            }, function () {
              return (0, exports.getRandomNumber)(0, 36).toString(36);
            }).join('');
          };
          exports.generateChars = generateChars;
          var generateId = function (element, prefix) {
            var id = element.id || element.name && "".concat(element.name, "-").concat((0, exports.generateChars)(2)) || (0, exports.generateChars)(4);
            id = id.replace(/(:|\.|\[|\]|,)/g, '');
            id = "".concat(prefix, "-").concat(id);
            return id;
          };
          exports.generateId = generateId;
          var getType = function (obj) {
            return Object.prototype.toString.call(obj).slice(8, -1);
          };
          exports.getType = getType;
          var isType = function (type, obj) {
            return obj !== undefined && obj !== null && (0, exports.getType)(obj) === type;
          };
          exports.isType = isType;
          var wrap = function (element, wrapper) {
            if (wrapper === void 0) {
              wrapper = document.createElement('div');
            }
            if (element.parentNode) {
              if (element.nextSibling) {
                element.parentNode.insertBefore(wrapper, element.nextSibling);
              } else {
                element.parentNode.appendChild(wrapper);
              }
            }
            return wrapper.appendChild(element);
          };
          exports.wrap = wrap;
          var getAdjacentEl = function (startEl, selector, direction) {
            if (direction === void 0) {
              direction = 1;
            }
            var prop = "".concat(direction > 0 ? 'next' : 'previous', "ElementSibling");
            var sibling = startEl[prop];
            while (sibling) {
              if (sibling.matches(selector)) {
                return sibling;
              }
              sibling = sibling[prop];
            }
            return sibling;
          };
          exports.getAdjacentEl = getAdjacentEl;
          var isScrolledIntoView = function (element, parent, direction) {
            if (direction === void 0) {
              direction = 1;
            }
            if (!element) {
              return false;
            }
            var isVisible;
            if (direction > 0) {
              // In view from bottom
              isVisible = parent.scrollTop + parent.offsetHeight >= element.offsetTop + element.offsetHeight;
            } else {
              // In view from top
              isVisible = element.offsetTop >= parent.scrollTop;
            }
            return isVisible;
          };
          exports.isScrolledIntoView = isScrolledIntoView;
          var sanitise = function (value) {
            if (typeof value !== 'string') {
              return value;
            }
            return value.replace(/&/g, '&amp;').replace(/>/g, '&gt;').replace(/</g, '&lt;').replace(/"/g, '&quot;');
          };
          exports.sanitise = sanitise;
          exports.strToEl = function () {
            var tmpEl = document.createElement('div');
            return function (str) {
              var cleanedInput = str.trim();
              tmpEl.innerHTML = cleanedInput;
              var firldChild = tmpEl.children[0];
              while (tmpEl.firstChild) {
                tmpEl.removeChild(tmpEl.firstChild);
              }
              return firldChild;
            };
          }();
          var sortByAlpha = function (_a, _b) {
            var value = _a.value,
              _c = _a.label,
              label = _c === void 0 ? value : _c;
            var value2 = _b.value,
              _d = _b.label,
              label2 = _d === void 0 ? value2 : _d;
            return label.localeCompare(label2, [], {
              sensitivity: 'base',
              ignorePunctuation: true,
              numeric: true
            });
          };
          exports.sortByAlpha = sortByAlpha;
          var sortByScore = function (a, b) {
            var _a = a.score,
              scoreA = _a === void 0 ? 0 : _a;
            var _b = b.score,
              scoreB = _b === void 0 ? 0 : _b;
            return scoreA - scoreB;
          };
          exports.sortByScore = sortByScore;
          var dispatchEvent = function (element, type, customArgs) {
            if (customArgs === void 0) {
              customArgs = null;
            }
            var event = new CustomEvent(type, {
              detail: customArgs,
              bubbles: true,
              cancelable: true
            });
            return element.dispatchEvent(event);
          };
          exports.dispatchEvent = dispatchEvent;
          var existsInArray = function (array, value, key) {
            if (key === void 0) {
              key = 'value';
            }
            return array.some(function (item) {
              if (typeof value === 'string') {
                return item[key] === value.trim();
              }
              return item[key] === value;
            });
          };
          exports.existsInArray = existsInArray;
          var cloneObject = function (obj) {
            return JSON.parse(JSON.stringify(obj));
          };
          exports.cloneObject = cloneObject;
          /**
           * Returns an array of keys present on the first but missing on the second object
           */

          var diff = function (a, b) {
            var aKeys = Object.keys(a).sort();
            var bKeys = Object.keys(b).sort();
            return aKeys.filter(function (i) {
              return bKeys.indexOf(i) < 0;
            });
          };
          exports.diff = diff;

          /***/
        },

        /***/273: /***/function (__unused_webpack_module, exports) {
          var __spreadArray = this && this.__spreadArray || function (to, from, pack) {
            if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
              if (ar || !(i in from)) {
                if (!ar) ar = Array.prototype.slice.call(from, 0, i);
                ar[i] = from[i];
              }
            }
            return to.concat(ar || Array.prototype.slice.call(from));
          };
          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.defaultState = void 0;
          exports.defaultState = [];
          function choices(state, action) {
            if (state === void 0) {
              state = exports.defaultState;
            }
            if (action === void 0) {
              action = {};
            }
            switch (action.type) {
              case 'ADD_CHOICE':
                {
                  var addChoiceAction = action;
                  var choice = {
                    id: addChoiceAction.id,
                    elementId: addChoiceAction.elementId,
                    groupId: addChoiceAction.groupId,
                    value: addChoiceAction.value,
                    label: addChoiceAction.label || addChoiceAction.value,
                    disabled: addChoiceAction.disabled || false,
                    selected: false,
                    active: true,
                    score: 9999,
                    customProperties: addChoiceAction.customProperties,
                    placeholder: addChoiceAction.placeholder || false
                  };
                  /*
                    A disabled choice appears in the choice dropdown but cannot be selected
                    A selected choice has been added to the passed input's value (added as an item)
                    An active choice appears within the choice dropdown
                  */

                  return __spreadArray(__spreadArray([], state, true), [choice], false);
                }
              case 'ADD_ITEM':
                {
                  var addItemAction_1 = action; // When an item is added and it has an associated choice,
                  // we want to disable it so it can't be chosen again

                  if (addItemAction_1.choiceId > -1) {
                    return state.map(function (obj) {
                      var choice = obj;
                      if (choice.id === parseInt("".concat(addItemAction_1.choiceId), 10)) {
                        choice.selected = true;
                      }
                      return choice;
                    });
                  }
                  return state;
                }
              case 'REMOVE_ITEM':
                {
                  var removeItemAction_1 = action; // When an item is removed and it has an associated choice,
                  // we want to re-enable it so it can be chosen again

                  if (removeItemAction_1.choiceId && removeItemAction_1.choiceId > -1) {
                    return state.map(function (obj) {
                      var choice = obj;
                      if (choice.id === parseInt("".concat(removeItemAction_1.choiceId), 10)) {
                        choice.selected = false;
                      }
                      return choice;
                    });
                  }
                  return state;
                }
              case 'FILTER_CHOICES':
                {
                  var filterChoicesAction_1 = action;
                  return state.map(function (obj) {
                    var choice = obj; // Set active state based on whether choice is
                    // within filtered results

                    choice.active = filterChoicesAction_1.results.some(function (_a) {
                      var item = _a.item,
                        score = _a.score;
                      if (item.id === choice.id) {
                        choice.score = score;
                        return true;
                      }
                      return false;
                    });
                    return choice;
                  });
                }
              case 'ACTIVATE_CHOICES':
                {
                  var activateChoicesAction_1 = action;
                  return state.map(function (obj) {
                    var choice = obj;
                    choice.active = activateChoicesAction_1.active;
                    return choice;
                  });
                }
              case 'CLEAR_CHOICES':
                {
                  return exports.defaultState;
                }
              default:
                {
                  return state;
                }
            }
          }
          exports["default"] = choices;

          /***/
        },

        /***/871: /***/function (__unused_webpack_module, exports) {
          var __spreadArray = this && this.__spreadArray || function (to, from, pack) {
            if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
              if (ar || !(i in from)) {
                if (!ar) ar = Array.prototype.slice.call(from, 0, i);
                ar[i] = from[i];
              }
            }
            return to.concat(ar || Array.prototype.slice.call(from));
          };
          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.defaultState = void 0;
          exports.defaultState = [];
          function groups(state, action) {
            if (state === void 0) {
              state = exports.defaultState;
            }
            if (action === void 0) {
              action = {};
            }
            switch (action.type) {
              case 'ADD_GROUP':
                {
                  var addGroupAction = action;
                  return __spreadArray(__spreadArray([], state, true), [{
                    id: addGroupAction.id,
                    value: addGroupAction.value,
                    active: addGroupAction.active,
                    disabled: addGroupAction.disabled
                  }], false);
                }
              case 'CLEAR_CHOICES':
                {
                  return [];
                }
              default:
                {
                  return state;
                }
            }
          }
          exports["default"] = groups;

          /***/
        },

        /***/655: /***/function (__unused_webpack_module, exports, __nested_webpack_require_145941__) {
          var __importDefault = this && this.__importDefault || function (mod) {
            return mod && mod.__esModule ? mod : {
              "default": mod
            };
          };
          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.defaultState = void 0;
          var redux_1 = __nested_webpack_require_145941__(857);
          var items_1 = __importDefault(__nested_webpack_require_145941__(52));
          var groups_1 = __importDefault(__nested_webpack_require_145941__(871));
          var choices_1 = __importDefault(__nested_webpack_require_145941__(273));
          var loading_1 = __importDefault(__nested_webpack_require_145941__(502));
          var utils_1 = __nested_webpack_require_145941__(799);
          exports.defaultState = {
            groups: [],
            items: [],
            choices: [],
            loading: false
          };
          var appReducer = (0, redux_1.combineReducers)({
            items: items_1.default,
            groups: groups_1.default,
            choices: choices_1.default,
            loading: loading_1.default
          });
          var rootReducer = function (passedState, action) {
            var state = passedState; // If we are clearing all items, groups and options we reassign
            // state and then pass that state to our proper reducer. This isn't
            // mutating our actual state
            // See: http://stackoverflow.com/a/35641992

            if (action.type === 'CLEAR_ALL') {
              state = exports.defaultState;
            } else if (action.type === 'RESET_TO') {
              return (0, utils_1.cloneObject)(action.state);
            }
            return appReducer(state, action);
          };
          exports["default"] = rootReducer;

          /***/
        },

        /***/52: /***/function (__unused_webpack_module, exports) {
          var __spreadArray = this && this.__spreadArray || function (to, from, pack) {
            if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
              if (ar || !(i in from)) {
                if (!ar) ar = Array.prototype.slice.call(from, 0, i);
                ar[i] = from[i];
              }
            }
            return to.concat(ar || Array.prototype.slice.call(from));
          };
          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.defaultState = void 0;
          exports.defaultState = [];
          function items(state, action) {
            if (state === void 0) {
              state = exports.defaultState;
            }
            if (action === void 0) {
              action = {};
            }
            switch (action.type) {
              case 'ADD_ITEM':
                {
                  var addItemAction = action; // Add object to items array

                  var newState = __spreadArray(__spreadArray([], state, true), [{
                    id: addItemAction.id,
                    choiceId: addItemAction.choiceId,
                    groupId: addItemAction.groupId,
                    value: addItemAction.value,
                    label: addItemAction.label,
                    active: true,
                    highlighted: false,
                    customProperties: addItemAction.customProperties,
                    placeholder: addItemAction.placeholder || false,
                    keyCode: null
                  }], false);
                  return newState.map(function (obj) {
                    var item = obj;
                    item.highlighted = false;
                    return item;
                  });
                }
              case 'REMOVE_ITEM':
                {
                  // Set item to inactive
                  return state.map(function (obj) {
                    var item = obj;
                    if (item.id === action.id) {
                      item.active = false;
                    }
                    return item;
                  });
                }
              case 'HIGHLIGHT_ITEM':
                {
                  var highlightItemAction_1 = action;
                  return state.map(function (obj) {
                    var item = obj;
                    if (item.id === highlightItemAction_1.id) {
                      item.highlighted = highlightItemAction_1.highlighted;
                    }
                    return item;
                  });
                }
              default:
                {
                  return state;
                }
            }
          }
          exports["default"] = items;

          /***/
        },

        /***/502: /***/function (__unused_webpack_module, exports) {
          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.defaultState = void 0;
          exports.defaultState = false;
          var general = function (state, action) {
            if (state === void 0) {
              state = exports.defaultState;
            }
            if (action === void 0) {
              action = {};
            }
            switch (action.type) {
              case 'SET_IS_LOADING':
                {
                  return action.isLoading;
                }
              default:
                {
                  return state;
                }
            }
          };
          exports["default"] = general;

          /***/
        },

        /***/744: /***/function (__unused_webpack_module, exports, __nested_webpack_require_151453__) {
          var __spreadArray = this && this.__spreadArray || function (to, from, pack) {
            if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
              if (ar || !(i in from)) {
                if (!ar) ar = Array.prototype.slice.call(from, 0, i);
                ar[i] = from[i];
              }
            }
            return to.concat(ar || Array.prototype.slice.call(from));
          };
          var __importDefault = this && this.__importDefault || function (mod) {
            return mod && mod.__esModule ? mod : {
              "default": mod
            };
          };
          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          /* eslint-disable @typescript-eslint/no-explicit-any */

          var redux_1 = __nested_webpack_require_151453__(857);
          var index_1 = __importDefault(__nested_webpack_require_151453__(655));
          var Store = /** @class */
          function () {
            function Store() {
              this._store = (0, redux_1.createStore)(index_1.default, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());
            }
            /**
             * Subscribe store to function call (wrapped Redux method)
             */

            Store.prototype.subscribe = function (onChange) {
              this._store.subscribe(onChange);
            };
            /**
             * Dispatch event to store (wrapped Redux method)
             */

            Store.prototype.dispatch = function (action) {
              this._store.dispatch(action);
            };
            Object.defineProperty(Store.prototype, "state", {
              /**
               * Get store object (wrapping Redux method)
               */
              get: function () {
                return this._store.getState();
              },
              enumerable: false,
              configurable: true
            });
            Object.defineProperty(Store.prototype, "items", {
              /**
               * Get items from store
               */
              get: function () {
                return this.state.items;
              },
              enumerable: false,
              configurable: true
            });
            Object.defineProperty(Store.prototype, "activeItems", {
              /**
               * Get active items from store
               */
              get: function () {
                return this.items.filter(function (item) {
                  return item.active === true;
                });
              },
              enumerable: false,
              configurable: true
            });
            Object.defineProperty(Store.prototype, "highlightedActiveItems", {
              /**
               * Get highlighted items from store
               */
              get: function () {
                return this.items.filter(function (item) {
                  return item.active && item.highlighted;
                });
              },
              enumerable: false,
              configurable: true
            });
            Object.defineProperty(Store.prototype, "choices", {
              /**
               * Get choices from store
               */
              get: function () {
                return this.state.choices;
              },
              enumerable: false,
              configurable: true
            });
            Object.defineProperty(Store.prototype, "activeChoices", {
              /**
               * Get active choices from store
               */
              get: function () {
                return this.choices.filter(function (choice) {
                  return choice.active === true;
                });
              },
              enumerable: false,
              configurable: true
            });
            Object.defineProperty(Store.prototype, "selectableChoices", {
              /**
               * Get selectable choices from store
               */
              get: function () {
                return this.choices.filter(function (choice) {
                  return choice.disabled !== true;
                });
              },
              enumerable: false,
              configurable: true
            });
            Object.defineProperty(Store.prototype, "searchableChoices", {
              /**
               * Get choices that can be searched (excluding placeholders)
               */
              get: function () {
                return this.selectableChoices.filter(function (choice) {
                  return choice.placeholder !== true;
                });
              },
              enumerable: false,
              configurable: true
            });
            Object.defineProperty(Store.prototype, "placeholderChoice", {
              /**
               * Get placeholder choice from store
               */
              get: function () {
                return __spreadArray([], this.choices, true).reverse().find(function (choice) {
                  return choice.placeholder === true;
                });
              },
              enumerable: false,
              configurable: true
            });
            Object.defineProperty(Store.prototype, "groups", {
              /**
               * Get groups from store
               */
              get: function () {
                return this.state.groups;
              },
              enumerable: false,
              configurable: true
            });
            Object.defineProperty(Store.prototype, "activeGroups", {
              /**
               * Get active groups from store
               */
              get: function () {
                var _a = this,
                  groups = _a.groups,
                  choices = _a.choices;
                return groups.filter(function (group) {
                  var isActive = group.active === true && group.disabled === false;
                  var hasActiveOptions = choices.some(function (choice) {
                    return choice.active === true && choice.disabled === false;
                  });
                  return isActive && hasActiveOptions;
                }, []);
              },
              enumerable: false,
              configurable: true
            });
            /**
             * Get loading state from store
             */

            Store.prototype.isLoading = function () {
              return this.state.loading;
            };
            /**
             * Get single choice by it's ID
             */

            Store.prototype.getChoiceById = function (id) {
              return this.activeChoices.find(function (choice) {
                return choice.id === parseInt(id, 10);
              });
            };
            /**
             * Get group by group id
             */

            Store.prototype.getGroupById = function (id) {
              return this.groups.find(function (group) {
                return group.id === id;
              });
            };
            return Store;
          }();
          exports["default"] = Store;

          /***/
        },

        /***/686: /***/function (__unused_webpack_module, exports) {
          /**
           * Helpers to create HTML elements used by Choices
           * Can be overridden by providing `callbackOnCreateTemplates` option
           */

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          var templates = {
            containerOuter: function (_a, dir, isSelectElement, isSelectOneElement, searchEnabled, passedElementType, labelId) {
              var containerOuter = _a.classNames.containerOuter;
              var div = Object.assign(document.createElement('div'), {
                className: containerOuter
              });
              div.dataset.type = passedElementType;
              if (dir) {
                div.dir = dir;
              }
              if (isSelectOneElement) {
                div.tabIndex = 0;
              }
              if (isSelectElement) {
                div.setAttribute('role', searchEnabled ? 'combobox' : 'listbox');
                if (searchEnabled) {
                  div.setAttribute('aria-autocomplete', 'list');
                }
              }
              div.setAttribute('aria-haspopup', 'true');
              div.setAttribute('aria-expanded', 'false');
              if (labelId) {
                div.setAttribute('aria-labeledby', labelId);
              }
              return div;
            },
            containerInner: function (_a) {
              var containerInner = _a.classNames.containerInner;
              return Object.assign(document.createElement('div'), {
                className: containerInner
              });
            },
            itemList: function (_a, isSelectOneElement) {
              var _b = _a.classNames,
                list = _b.list,
                listSingle = _b.listSingle,
                listItems = _b.listItems;
              return Object.assign(document.createElement('div'), {
                className: "".concat(list, " ").concat(isSelectOneElement ? listSingle : listItems)
              });
            },
            placeholder: function (_a, value) {
              var _b;
              var allowHTML = _a.allowHTML,
                placeholder = _a.classNames.placeholder;
              return Object.assign(document.createElement('div'), (_b = {
                className: placeholder
              }, _b[allowHTML ? 'innerHTML' : 'innerText'] = value, _b));
            },
            item: function (_a, _b, removeItemButton) {
              var _c, _d;
              var allowHTML = _a.allowHTML,
                _e = _a.classNames,
                item = _e.item,
                button = _e.button,
                highlightedState = _e.highlightedState,
                itemSelectable = _e.itemSelectable,
                placeholder = _e.placeholder;
              var id = _b.id,
                value = _b.value,
                label = _b.label,
                customProperties = _b.customProperties,
                active = _b.active,
                disabled = _b.disabled,
                highlighted = _b.highlighted,
                isPlaceholder = _b.placeholder;
              var div = Object.assign(document.createElement('div'), (_c = {
                className: item
              }, _c[allowHTML ? 'innerHTML' : 'innerText'] = label, _c));
              Object.assign(div.dataset, {
                item: '',
                id: id,
                value: value,
                customProperties: customProperties
              });
              if (active) {
                div.setAttribute('aria-selected', 'true');
              }
              if (disabled) {
                div.setAttribute('aria-disabled', 'true');
              }
              if (isPlaceholder) {
                div.classList.add(placeholder);
              }
              div.classList.add(highlighted ? highlightedState : itemSelectable);
              if (removeItemButton) {
                if (disabled) {
                  div.classList.remove(itemSelectable);
                }
                div.dataset.deletable = '';
                /** @todo This MUST be localizable, not hardcoded! */

                var REMOVE_ITEM_TEXT = 'Remove item';
                var removeButton = Object.assign(document.createElement('button'), (_d = {
                  type: 'button',
                  className: button
                }, _d[allowHTML ? 'innerHTML' : 'innerText'] = REMOVE_ITEM_TEXT, _d));
                removeButton.setAttribute('aria-label', "".concat(REMOVE_ITEM_TEXT, ": '").concat(value, "'"));
                removeButton.dataset.button = '';
                div.appendChild(removeButton);
              }
              return div;
            },
            choiceList: function (_a, isSelectOneElement) {
              var list = _a.classNames.list;
              var div = Object.assign(document.createElement('div'), {
                className: list
              });
              if (!isSelectOneElement) {
                div.setAttribute('aria-multiselectable', 'true');
              }
              div.setAttribute('role', 'listbox');
              return div;
            },
            choiceGroup: function (_a, _b) {
              var _c;
              var allowHTML = _a.allowHTML,
                _d = _a.classNames,
                group = _d.group,
                groupHeading = _d.groupHeading,
                itemDisabled = _d.itemDisabled;
              var id = _b.id,
                value = _b.value,
                disabled = _b.disabled;
              var div = Object.assign(document.createElement('div'), {
                className: "".concat(group, " ").concat(disabled ? itemDisabled : '')
              });
              div.setAttribute('role', 'group');
              Object.assign(div.dataset, {
                group: '',
                id: id,
                value: value
              });
              if (disabled) {
                div.setAttribute('aria-disabled', 'true');
              }
              div.appendChild(Object.assign(document.createElement('div'), (_c = {
                className: groupHeading
              }, _c[allowHTML ? 'innerHTML' : 'innerText'] = value, _c)));
              return div;
            },
            choice: function (_a, _b, selectText) {
              var _c;
              var allowHTML = _a.allowHTML,
                _d = _a.classNames,
                item = _d.item,
                itemChoice = _d.itemChoice,
                itemSelectable = _d.itemSelectable,
                selectedState = _d.selectedState,
                itemDisabled = _d.itemDisabled,
                placeholder = _d.placeholder;
              var id = _b.id,
                value = _b.value,
                label = _b.label,
                groupId = _b.groupId,
                elementId = _b.elementId,
                isDisabled = _b.disabled,
                isSelected = _b.selected,
                isPlaceholder = _b.placeholder;
              var div = Object.assign(document.createElement('div'), (_c = {
                id: elementId
              }, _c[allowHTML ? 'innerHTML' : 'innerText'] = label, _c.className = "".concat(item, " ").concat(itemChoice), _c));
              if (isSelected) {
                div.classList.add(selectedState);
              }
              if (isPlaceholder) {
                div.classList.add(placeholder);
              }
              div.setAttribute('role', groupId && groupId > 0 ? 'treeitem' : 'option');
              Object.assign(div.dataset, {
                choice: '',
                id: id,
                value: value,
                selectText: selectText
              });
              if (isDisabled) {
                div.classList.add(itemDisabled);
                div.dataset.choiceDisabled = '';
                div.setAttribute('aria-disabled', 'true');
              } else {
                div.classList.add(itemSelectable);
                div.dataset.choiceSelectable = '';
              }
              return div;
            },
            input: function (_a, placeholderValue) {
              var _b = _a.classNames,
                input = _b.input,
                inputCloned = _b.inputCloned;
              var inp = Object.assign(document.createElement('input'), {
                type: 'search',
                name: 'search_terms',
                className: "".concat(input, " ").concat(inputCloned),
                autocomplete: 'off',
                autocapitalize: 'off',
                spellcheck: false
              });
              inp.setAttribute('role', 'textbox');
              inp.setAttribute('aria-autocomplete', 'list');
              inp.setAttribute('aria-label', placeholderValue);
              return inp;
            },
            dropdown: function (_a) {
              var _b = _a.classNames,
                list = _b.list,
                listDropdown = _b.listDropdown;
              var div = document.createElement('div');
              div.classList.add(list, listDropdown);
              div.setAttribute('aria-expanded', 'false');
              return div;
            },
            notice: function (_a, innerText, type) {
              var _b;
              var allowHTML = _a.allowHTML,
                _c = _a.classNames,
                item = _c.item,
                itemChoice = _c.itemChoice,
                noResults = _c.noResults,
                noChoices = _c.noChoices;
              if (type === void 0) {
                type = '';
              }
              var classes = [item, itemChoice];
              if (type === 'no-choices') {
                classes.push(noChoices);
              } else if (type === 'no-results') {
                classes.push(noResults);
              }
              return Object.assign(document.createElement('div'), (_b = {}, _b[allowHTML ? 'innerHTML' : 'innerText'] = innerText, _b.className = classes.join(' '), _b));
            },
            option: function (_a) {
              var label = _a.label,
                value = _a.value,
                customProperties = _a.customProperties,
                active = _a.active,
                disabled = _a.disabled;
              var opt = new Option(label, value, false, active);
              if (customProperties) {
                opt.dataset.customProperties = "".concat(customProperties);
              }
              opt.disabled = !!disabled;
              return opt;
            }
          };
          exports["default"] = templates;

          /***/
        },

        /***/996: /***/function (module) {
          var isMergeableObject = function isMergeableObject(value) {
            return isNonNullObject(value) && !isSpecial(value);
          };
          function isNonNullObject(value) {
            return !!value && typeof value === 'object';
          }
          function isSpecial(value) {
            var stringValue = Object.prototype.toString.call(value);
            return stringValue === '[object RegExp]' || stringValue === '[object Date]' || isReactElement(value);
          }

          // see https://github.com/facebook/react/blob/b5ac963fb791d1298e7f396236383bc955f916c1/src/isomorphic/classic/element/ReactElement.js#L21-L25
          var canUseSymbol = typeof Symbol === 'function' && Symbol.for;
          var REACT_ELEMENT_TYPE = canUseSymbol ? Symbol.for('react.element') : 0xeac7;
          function isReactElement(value) {
            return value.$$typeof === REACT_ELEMENT_TYPE;
          }
          function emptyTarget(val) {
            return Array.isArray(val) ? [] : {};
          }
          function cloneUnlessOtherwiseSpecified(value, options) {
            return options.clone !== false && options.isMergeableObject(value) ? deepmerge(emptyTarget(value), value, options) : value;
          }
          function defaultArrayMerge(target, source, options) {
            return target.concat(source).map(function (element) {
              return cloneUnlessOtherwiseSpecified(element, options);
            });
          }
          function getMergeFunction(key, options) {
            if (!options.customMerge) {
              return deepmerge;
            }
            var customMerge = options.customMerge(key);
            return typeof customMerge === 'function' ? customMerge : deepmerge;
          }
          function getEnumerableOwnPropertySymbols(target) {
            return Object.getOwnPropertySymbols ? Object.getOwnPropertySymbols(target).filter(function (symbol) {
              return target.propertyIsEnumerable(symbol);
            }) : [];
          }
          function getKeys(target) {
            return Object.keys(target).concat(getEnumerableOwnPropertySymbols(target));
          }
          function propertyIsOnObject(object, property) {
            try {
              return property in object;
            } catch (_) {
              return false;
            }
          }

          // Protects from prototype poisoning and unexpected merging up the prototype chain.
          function propertyIsUnsafe(target, key) {
            return propertyIsOnObject(target, key) // Properties are safe to merge if they don't exist in the target yet,
            && !(Object.hasOwnProperty.call(target, key) // unsafe if they exist up the prototype chain,
            && Object.propertyIsEnumerable.call(target, key)); // and also unsafe if they're nonenumerable.
          }

          function mergeObject(target, source, options) {
            var destination = {};
            if (options.isMergeableObject(target)) {
              getKeys(target).forEach(function (key) {
                destination[key] = cloneUnlessOtherwiseSpecified(target[key], options);
              });
            }
            getKeys(source).forEach(function (key) {
              if (propertyIsUnsafe(target, key)) {
                return;
              }
              if (propertyIsOnObject(target, key) && options.isMergeableObject(source[key])) {
                destination[key] = getMergeFunction(key, options)(target[key], source[key], options);
              } else {
                destination[key] = cloneUnlessOtherwiseSpecified(source[key], options);
              }
            });
            return destination;
          }
          function deepmerge(target, source, options) {
            options = options || {};
            options.arrayMerge = options.arrayMerge || defaultArrayMerge;
            options.isMergeableObject = options.isMergeableObject || isMergeableObject;
            // cloneUnlessOtherwiseSpecified is added to `options` so that custom arrayMerge()
            // implementations can use it. The caller may not replace it.
            options.cloneUnlessOtherwiseSpecified = cloneUnlessOtherwiseSpecified;
            var sourceIsArray = Array.isArray(source);
            var targetIsArray = Array.isArray(target);
            var sourceAndTargetTypesMatch = sourceIsArray === targetIsArray;
            if (!sourceAndTargetTypesMatch) {
              return cloneUnlessOtherwiseSpecified(source, options);
            } else if (sourceIsArray) {
              return options.arrayMerge(target, source, options);
            } else {
              return mergeObject(target, source, options);
            }
          }
          deepmerge.all = function deepmergeAll(array, options) {
            if (!Array.isArray(array)) {
              throw new Error('first argument should be an array');
            }
            return array.reduce(function (prev, next) {
              return deepmerge(prev, next, options);
            }, {});
          };
          var deepmerge_1 = deepmerge;
          module.exports = deepmerge_1;

          /***/
        },

        /***/221: /***/function (__unused_webpack_module, __webpack_exports__, __nested_webpack_require_174476__) {
          __nested_webpack_require_174476__.r(__webpack_exports__);
          /* harmony export */
          __nested_webpack_require_174476__.d(__webpack_exports__, {
            /* harmony export */"default": function () {
              return (/* binding */Fuse
              );
            }
            /* harmony export */
          });
          /**
           * Fuse.js v6.5.3 - Lightweight fuzzy-search (http://fusejs.io)
           *
           * Copyright (c) 2021 Kiro Risk (http://kiro.me)
           * All Rights Reserved. Apache Software License 2.0
           *
           * http://www.apache.org/licenses/LICENSE-2.0
           */

          function isArray(value) {
            return !Array.isArray ? getTag(value) === '[object Array]' : Array.isArray(value);
          }

          // Adapted from: https://github.com/lodash/lodash/blob/master/.internal/baseToString.js
          const INFINITY = 1 / 0;
          function baseToString(value) {
            // Exit early for strings to avoid a performance hit in some environments.
            if (typeof value == 'string') {
              return value;
            }
            let result = value + '';
            return result == '0' && 1 / value == -INFINITY ? '-0' : result;
          }
          function toString(value) {
            return value == null ? '' : baseToString(value);
          }
          function isString(value) {
            return typeof value === 'string';
          }
          function isNumber(value) {
            return typeof value === 'number';
          }

          // Adapted from: https://github.com/lodash/lodash/blob/master/isBoolean.js
          function isBoolean(value) {
            return value === true || value === false || isObjectLike(value) && getTag(value) == '[object Boolean]';
          }
          function isObject(value) {
            return typeof value === 'object';
          }

          // Checks if `value` is object-like.
          function isObjectLike(value) {
            return isObject(value) && value !== null;
          }
          function isDefined(value) {
            return value !== undefined && value !== null;
          }
          function isBlank(value) {
            return !value.trim().length;
          }

          // Gets the `toStringTag` of `value`.
          // Adapted from: https://github.com/lodash/lodash/blob/master/.internal/getTag.js
          function getTag(value) {
            return value == null ? value === undefined ? '[object Undefined]' : '[object Null]' : Object.prototype.toString.call(value);
          }
          const EXTENDED_SEARCH_UNAVAILABLE = 'Extended search is not available';
          const INCORRECT_INDEX_TYPE = "Incorrect 'index' type";
          const LOGICAL_SEARCH_INVALID_QUERY_FOR_KEY = key => `Invalid value for key ${key}`;
          const PATTERN_LENGTH_TOO_LARGE = max => `Pattern length exceeds max of ${max}.`;
          const MISSING_KEY_PROPERTY = name => `Missing ${name} property in key`;
          const INVALID_KEY_WEIGHT_VALUE = key => `Property 'weight' in key '${key}' must be a positive integer`;
          const hasOwn = Object.prototype.hasOwnProperty;
          class KeyStore {
            constructor(keys) {
              this._keys = [];
              this._keyMap = {};
              let totalWeight = 0;
              keys.forEach(key => {
                let obj = createKey(key);
                totalWeight += obj.weight;
                this._keys.push(obj);
                this._keyMap[obj.id] = obj;
                totalWeight += obj.weight;
              });

              // Normalize weights so that their sum is equal to 1
              this._keys.forEach(key => {
                key.weight /= totalWeight;
              });
            }
            get(keyId) {
              return this._keyMap[keyId];
            }
            keys() {
              return this._keys;
            }
            toJSON() {
              return JSON.stringify(this._keys);
            }
          }
          function createKey(key) {
            let path = null;
            let id = null;
            let src = null;
            let weight = 1;
            if (isString(key) || isArray(key)) {
              src = key;
              path = createKeyPath(key);
              id = createKeyId(key);
            } else {
              if (!hasOwn.call(key, 'name')) {
                throw new Error(MISSING_KEY_PROPERTY('name'));
              }
              const name = key.name;
              src = name;
              if (hasOwn.call(key, 'weight')) {
                weight = key.weight;
                if (weight <= 0) {
                  throw new Error(INVALID_KEY_WEIGHT_VALUE(name));
                }
              }
              path = createKeyPath(name);
              id = createKeyId(name);
            }
            return {
              path,
              id,
              weight,
              src
            };
          }
          function createKeyPath(key) {
            return isArray(key) ? key : key.split('.');
          }
          function createKeyId(key) {
            return isArray(key) ? key.join('.') : key;
          }
          function get(obj, path) {
            let list = [];
            let arr = false;
            const deepGet = (obj, path, index) => {
              if (!isDefined(obj)) {
                return;
              }
              if (!path[index]) {
                // If there's no path left, we've arrived at the object we care about.
                list.push(obj);
              } else {
                let key = path[index];
                const value = obj[key];
                if (!isDefined(value)) {
                  return;
                }

                // If we're at the last value in the path, and if it's a string/number/bool,
                // add it to the list
                if (index === path.length - 1 && (isString(value) || isNumber(value) || isBoolean(value))) {
                  list.push(toString(value));
                } else if (isArray(value)) {
                  arr = true;
                  // Search each item in the array.
                  for (let i = 0, len = value.length; i < len; i += 1) {
                    deepGet(value[i], path, index + 1);
                  }
                } else if (path.length) {
                  // An object. Recurse further.
                  deepGet(value, path, index + 1);
                }
              }
            };

            // Backwards compatibility (since path used to be a string)
            deepGet(obj, isString(path) ? path.split('.') : path, 0);
            return arr ? list : list[0];
          }
          const MatchOptions = {
            // Whether the matches should be included in the result set. When `true`, each record in the result
            // set will include the indices of the matched characters.
            // These can consequently be used for highlighting purposes.
            includeMatches: false,
            // When `true`, the matching function will continue to the end of a search pattern even if
            // a perfect match has already been located in the string.
            findAllMatches: false,
            // Minimum number of characters that must be matched before a result is considered a match
            minMatchCharLength: 1
          };
          const BasicOptions = {
            // When `true`, the algorithm continues searching to the end of the input even if a perfect
            // match is found before the end of the same input.
            isCaseSensitive: false,
            // When true, the matching function will continue to the end of a search pattern even if
            includeScore: false,
            // List of properties that will be searched. This also supports nested properties.
            keys: [],
            // Whether to sort the result list, by score
            shouldSort: true,
            // Default sort function: sort by ascending score, ascending index
            sortFn: (a, b) => a.score === b.score ? a.idx < b.idx ? -1 : 1 : a.score < b.score ? -1 : 1
          };
          const FuzzyOptions = {
            // Approximately where in the text is the pattern expected to be found?
            location: 0,
            // At what point does the match algorithm give up. A threshold of '0.0' requires a perfect match
            // (of both letters and location), a threshold of '1.0' would match anything.
            threshold: 0.6,
            // Determines how close the match must be to the fuzzy location (specified above).
            // An exact letter match which is 'distance' characters away from the fuzzy location
            // would score as a complete mismatch. A distance of '0' requires the match be at
            // the exact location specified, a threshold of '1000' would require a perfect match
            // to be within 800 characters of the fuzzy location to be found using a 0.8 threshold.
            distance: 100
          };
          const AdvancedOptions = {
            // When `true`, it enables the use of unix-like search commands
            useExtendedSearch: false,
            // The get function to use when fetching an object's properties.
            // The default will search nested paths *ie foo.bar.baz*
            getFn: get,
            // When `true`, search will ignore `location` and `distance`, so it won't matter
            // where in the string the pattern appears.
            // More info: https://fusejs.io/concepts/scoring-theory.html#fuzziness-score
            ignoreLocation: false,
            // When `true`, the calculation for the relevance score (used for sorting) will
            // ignore the field-length norm.
            // More info: https://fusejs.io/concepts/scoring-theory.html#field-length-norm
            ignoreFieldNorm: false,
            // The weight to determine how much field length norm effects scoring.
            fieldNormWeight: 1
          };
          var Config = {
            ...BasicOptions,
            ...MatchOptions,
            ...FuzzyOptions,
            ...AdvancedOptions
          };
          const SPACE = /[^ ]+/g;

          // Field-length norm: the shorter the field, the higher the weight.
          // Set to 3 decimals to reduce index size.
          function norm() {
            let weight = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 1;
            let mantissa = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 3;
            const cache = new Map();
            const m = Math.pow(10, mantissa);
            return {
              get(value) {
                const numTokens = value.match(SPACE).length;
                if (cache.has(numTokens)) {
                  return cache.get(numTokens);
                }

                // Default function is 1/sqrt(x), weight makes that variable
                const norm = 1 / Math.pow(numTokens, 0.5 * weight);

                // In place of `toFixed(mantissa)`, for faster computation
                const n = parseFloat(Math.round(norm * m) / m);
                cache.set(numTokens, n);
                return n;
              },
              clear() {
                cache.clear();
              }
            };
          }
          class FuseIndex {
            constructor() {
              let {
                getFn = Config.getFn,
                fieldNormWeight = Config.fieldNormWeight
              } = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
              this.norm = norm(fieldNormWeight, 3);
              this.getFn = getFn;
              this.isCreated = false;
              this.setIndexRecords();
            }
            setSources() {
              let docs = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
              this.docs = docs;
            }
            setIndexRecords() {
              let records = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
              this.records = records;
            }
            setKeys() {
              let keys = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
              this.keys = keys;
              this._keysMap = {};
              keys.forEach((key, idx) => {
                this._keysMap[key.id] = idx;
              });
            }
            create() {
              if (this.isCreated || !this.docs.length) {
                return;
              }
              this.isCreated = true;

              // List is Array<String>
              if (isString(this.docs[0])) {
                this.docs.forEach((doc, docIndex) => {
                  this._addString(doc, docIndex);
                });
              } else {
                // List is Array<Object>
                this.docs.forEach((doc, docIndex) => {
                  this._addObject(doc, docIndex);
                });
              }
              this.norm.clear();
            }
            // Adds a doc to the end of the index
            add(doc) {
              const idx = this.size();
              if (isString(doc)) {
                this._addString(doc, idx);
              } else {
                this._addObject(doc, idx);
              }
            }
            // Removes the doc at the specified index of the index
            removeAt(idx) {
              this.records.splice(idx, 1);

              // Change ref index of every subsquent doc
              for (let i = idx, len = this.size(); i < len; i += 1) {
                this.records[i].i -= 1;
              }
            }
            getValueForItemAtKeyId(item, keyId) {
              return item[this._keysMap[keyId]];
            }
            size() {
              return this.records.length;
            }
            _addString(doc, docIndex) {
              if (!isDefined(doc) || isBlank(doc)) {
                return;
              }
              let record = {
                v: doc,
                i: docIndex,
                n: this.norm.get(doc)
              };
              this.records.push(record);
            }
            _addObject(doc, docIndex) {
              let record = {
                i: docIndex,
                $: {}
              };

              // Iterate over every key (i.e, path), and fetch the value at that key
              this.keys.forEach((key, keyIndex) => {
                // console.log(key)
                let value = this.getFn(doc, key.path);
                if (!isDefined(value)) {
                  return;
                }
                if (isArray(value)) {
                  let subRecords = [];
                  const stack = [{
                    nestedArrIndex: -1,
                    value
                  }];
                  while (stack.length) {
                    const {
                      nestedArrIndex,
                      value
                    } = stack.pop();
                    if (!isDefined(value)) {
                      continue;
                    }
                    if (isString(value) && !isBlank(value)) {
                      let subRecord = {
                        v: value,
                        i: nestedArrIndex,
                        n: this.norm.get(value)
                      };
                      subRecords.push(subRecord);
                    } else if (isArray(value)) {
                      value.forEach((item, k) => {
                        stack.push({
                          nestedArrIndex: k,
                          value: item
                        });
                      });
                    } else ;
                  }
                  record.$[keyIndex] = subRecords;
                } else if (!isBlank(value)) {
                  let subRecord = {
                    v: value,
                    n: this.norm.get(value)
                  };
                  record.$[keyIndex] = subRecord;
                }
              });
              this.records.push(record);
            }
            toJSON() {
              return {
                keys: this.keys,
                records: this.records
              };
            }
          }
          function createIndex(keys, docs) {
            let {
              getFn = Config.getFn,
              fieldNormWeight = Config.fieldNormWeight
            } = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
            const myIndex = new FuseIndex({
              getFn,
              fieldNormWeight
            });
            myIndex.setKeys(keys.map(createKey));
            myIndex.setSources(docs);
            myIndex.create();
            return myIndex;
          }
          function parseIndex(data) {
            let {
              getFn = Config.getFn,
              fieldNormWeight = Config.fieldNormWeight
            } = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
            const {
              keys,
              records
            } = data;
            const myIndex = new FuseIndex({
              getFn,
              fieldNormWeight
            });
            myIndex.setKeys(keys);
            myIndex.setIndexRecords(records);
            return myIndex;
          }
          function computeScore$1(pattern) {
            let {
              errors = 0,
              currentLocation = 0,
              expectedLocation = 0,
              distance = Config.distance,
              ignoreLocation = Config.ignoreLocation
            } = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
            const accuracy = errors / pattern.length;
            if (ignoreLocation) {
              return accuracy;
            }
            const proximity = Math.abs(expectedLocation - currentLocation);
            if (!distance) {
              // Dodge divide by zero error.
              return proximity ? 1.0 : accuracy;
            }
            return accuracy + proximity / distance;
          }
          function convertMaskToIndices() {
            let matchmask = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
            let minMatchCharLength = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : Config.minMatchCharLength;
            let indices = [];
            let start = -1;
            let end = -1;
            let i = 0;
            for (let len = matchmask.length; i < len; i += 1) {
              let match = matchmask[i];
              if (match && start === -1) {
                start = i;
              } else if (!match && start !== -1) {
                end = i - 1;
                if (end - start + 1 >= minMatchCharLength) {
                  indices.push([start, end]);
                }
                start = -1;
              }
            }

            // (i-1 - start) + 1 => i - start
            if (matchmask[i - 1] && i - start >= minMatchCharLength) {
              indices.push([start, i - 1]);
            }
            return indices;
          }

          // Machine word size
          const MAX_BITS = 32;
          function search(text, pattern, patternAlphabet) {
            let {
              location = Config.location,
              distance = Config.distance,
              threshold = Config.threshold,
              findAllMatches = Config.findAllMatches,
              minMatchCharLength = Config.minMatchCharLength,
              includeMatches = Config.includeMatches,
              ignoreLocation = Config.ignoreLocation
            } = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : {};
            if (pattern.length > MAX_BITS) {
              throw new Error(PATTERN_LENGTH_TOO_LARGE(MAX_BITS));
            }
            const patternLen = pattern.length;
            // Set starting location at beginning text and initialize the alphabet.
            const textLen = text.length;
            // Handle the case when location > text.length
            const expectedLocation = Math.max(0, Math.min(location, textLen));
            // Highest score beyond which we give up.
            let currentThreshold = threshold;
            // Is there a nearby exact match? (speedup)
            let bestLocation = expectedLocation;

            // Performance: only computer matches when the minMatchCharLength > 1
            // OR if `includeMatches` is true.
            const computeMatches = minMatchCharLength > 1 || includeMatches;
            // A mask of the matches, used for building the indices
            const matchMask = computeMatches ? Array(textLen) : [];
            let index;

            // Get all exact matches, here for speed up
            while ((index = text.indexOf(pattern, bestLocation)) > -1) {
              let score = computeScore$1(pattern, {
                currentLocation: index,
                expectedLocation,
                distance,
                ignoreLocation
              });
              currentThreshold = Math.min(score, currentThreshold);
              bestLocation = index + patternLen;
              if (computeMatches) {
                let i = 0;
                while (i < patternLen) {
                  matchMask[index + i] = 1;
                  i += 1;
                }
              }
            }

            // Reset the best location
            bestLocation = -1;
            let lastBitArr = [];
            let finalScore = 1;
            let binMax = patternLen + textLen;
            const mask = 1 << patternLen - 1;
            for (let i = 0; i < patternLen; i += 1) {
              // Scan for the best match; each iteration allows for one more error.
              // Run a binary search to determine how far from the match location we can stray
              // at this error level.
              let binMin = 0;
              let binMid = binMax;
              while (binMin < binMid) {
                const score = computeScore$1(pattern, {
                  errors: i,
                  currentLocation: expectedLocation + binMid,
                  expectedLocation,
                  distance,
                  ignoreLocation
                });
                if (score <= currentThreshold) {
                  binMin = binMid;
                } else {
                  binMax = binMid;
                }
                binMid = Math.floor((binMax - binMin) / 2 + binMin);
              }

              // Use the result from this iteration as the maximum for the next.
              binMax = binMid;
              let start = Math.max(1, expectedLocation - binMid + 1);
              let finish = findAllMatches ? textLen : Math.min(expectedLocation + binMid, textLen) + patternLen;

              // Initialize the bit array
              let bitArr = Array(finish + 2);
              bitArr[finish + 1] = (1 << i) - 1;
              for (let j = finish; j >= start; j -= 1) {
                let currentLocation = j - 1;
                let charMatch = patternAlphabet[text.charAt(currentLocation)];
                if (computeMatches) {
                  // Speed up: quick bool to int conversion (i.e, `charMatch ? 1 : 0`)
                  matchMask[currentLocation] = +!!charMatch;
                }

                // First pass: exact match
                bitArr[j] = (bitArr[j + 1] << 1 | 1) & charMatch;

                // Subsequent passes: fuzzy match
                if (i) {
                  bitArr[j] |= (lastBitArr[j + 1] | lastBitArr[j]) << 1 | 1 | lastBitArr[j + 1];
                }
                if (bitArr[j] & mask) {
                  finalScore = computeScore$1(pattern, {
                    errors: i,
                    currentLocation,
                    expectedLocation,
                    distance,
                    ignoreLocation
                  });

                  // This match will almost certainly be better than any existing match.
                  // But check anyway.
                  if (finalScore <= currentThreshold) {
                    // Indeed it is
                    currentThreshold = finalScore;
                    bestLocation = currentLocation;

                    // Already passed `loc`, downhill from here on in.
                    if (bestLocation <= expectedLocation) {
                      break;
                    }

                    // When passing `bestLocation`, don't exceed our current distance from `expectedLocation`.
                    start = Math.max(1, 2 * expectedLocation - bestLocation);
                  }
                }
              }

              // No hope for a (better) match at greater error levels.
              const score = computeScore$1(pattern, {
                errors: i + 1,
                currentLocation: expectedLocation,
                expectedLocation,
                distance,
                ignoreLocation
              });
              if (score > currentThreshold) {
                break;
              }
              lastBitArr = bitArr;
            }
            const result = {
              isMatch: bestLocation >= 0,
              // Count exact matches (those with a score of 0) to be "almost" exact
              score: Math.max(0.001, finalScore)
            };
            if (computeMatches) {
              const indices = convertMaskToIndices(matchMask, minMatchCharLength);
              if (!indices.length) {
                result.isMatch = false;
              } else if (includeMatches) {
                result.indices = indices;
              }
            }
            return result;
          }
          function createPatternAlphabet(pattern) {
            let mask = {};
            for (let i = 0, len = pattern.length; i < len; i += 1) {
              const char = pattern.charAt(i);
              mask[char] = (mask[char] || 0) | 1 << len - i - 1;
            }
            return mask;
          }
          class BitapSearch {
            constructor(pattern) {
              let {
                location = Config.location,
                threshold = Config.threshold,
                distance = Config.distance,
                includeMatches = Config.includeMatches,
                findAllMatches = Config.findAllMatches,
                minMatchCharLength = Config.minMatchCharLength,
                isCaseSensitive = Config.isCaseSensitive,
                ignoreLocation = Config.ignoreLocation
              } = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
              this.options = {
                location,
                threshold,
                distance,
                includeMatches,
                findAllMatches,
                minMatchCharLength,
                isCaseSensitive,
                ignoreLocation
              };
              this.pattern = isCaseSensitive ? pattern : pattern.toLowerCase();
              this.chunks = [];
              if (!this.pattern.length) {
                return;
              }
              const addChunk = (pattern, startIndex) => {
                this.chunks.push({
                  pattern,
                  alphabet: createPatternAlphabet(pattern),
                  startIndex
                });
              };
              const len = this.pattern.length;
              if (len > MAX_BITS) {
                let i = 0;
                const remainder = len % MAX_BITS;
                const end = len - remainder;
                while (i < end) {
                  addChunk(this.pattern.substr(i, MAX_BITS), i);
                  i += MAX_BITS;
                }
                if (remainder) {
                  const startIndex = len - MAX_BITS;
                  addChunk(this.pattern.substr(startIndex), startIndex);
                }
              } else {
                addChunk(this.pattern, 0);
              }
            }
            searchIn(text) {
              const {
                isCaseSensitive,
                includeMatches
              } = this.options;
              if (!isCaseSensitive) {
                text = text.toLowerCase();
              }

              // Exact match
              if (this.pattern === text) {
                let result = {
                  isMatch: true,
                  score: 0
                };
                if (includeMatches) {
                  result.indices = [[0, text.length - 1]];
                }
                return result;
              }

              // Otherwise, use Bitap algorithm
              const {
                location,
                distance,
                threshold,
                findAllMatches,
                minMatchCharLength,
                ignoreLocation
              } = this.options;
              let allIndices = [];
              let totalScore = 0;
              let hasMatches = false;
              this.chunks.forEach(_ref3 => {
                let {
                  pattern,
                  alphabet,
                  startIndex
                } = _ref3;
                const {
                  isMatch,
                  score,
                  indices
                } = search(text, pattern, alphabet, {
                  location: location + startIndex,
                  distance,
                  threshold,
                  findAllMatches,
                  minMatchCharLength,
                  includeMatches,
                  ignoreLocation
                });
                if (isMatch) {
                  hasMatches = true;
                }
                totalScore += score;
                if (isMatch && indices) {
                  allIndices = [...allIndices, ...indices];
                }
              });
              let result = {
                isMatch: hasMatches,
                score: hasMatches ? totalScore / this.chunks.length : 1
              };
              if (hasMatches && includeMatches) {
                result.indices = allIndices;
              }
              return result;
            }
          }
          class BaseMatch {
            constructor(pattern) {
              this.pattern = pattern;
            }
            static isMultiMatch(pattern) {
              return getMatch(pattern, this.multiRegex);
            }
            static isSingleMatch(pattern) {
              return getMatch(pattern, this.singleRegex);
            }
            search( /*text*/) {}
          }
          function getMatch(pattern, exp) {
            const matches = pattern.match(exp);
            return matches ? matches[1] : null;
          }

          // Token: 'file

          class ExactMatch extends BaseMatch {
            constructor(pattern) {
              super(pattern);
            }
            static get type() {
              return 'exact';
            }
            static get multiRegex() {
              return /^="(.*)"$/;
            }
            static get singleRegex() {
              return /^=(.*)$/;
            }
            search(text) {
              const isMatch = text === this.pattern;
              return {
                isMatch,
                score: isMatch ? 0 : 1,
                indices: [0, this.pattern.length - 1]
              };
            }
          }

          // Token: !fire

          class InverseExactMatch extends BaseMatch {
            constructor(pattern) {
              super(pattern);
            }
            static get type() {
              return 'inverse-exact';
            }
            static get multiRegex() {
              return /^!"(.*)"$/;
            }
            static get singleRegex() {
              return /^!(.*)$/;
            }
            search(text) {
              const index = text.indexOf(this.pattern);
              const isMatch = index === -1;
              return {
                isMatch,
                score: isMatch ? 0 : 1,
                indices: [0, text.length - 1]
              };
            }
          }

          // Token: ^file

          class PrefixExactMatch extends BaseMatch {
            constructor(pattern) {
              super(pattern);
            }
            static get type() {
              return 'prefix-exact';
            }
            static get multiRegex() {
              return /^\^"(.*)"$/;
            }
            static get singleRegex() {
              return /^\^(.*)$/;
            }
            search(text) {
              const isMatch = text.startsWith(this.pattern);
              return {
                isMatch,
                score: isMatch ? 0 : 1,
                indices: [0, this.pattern.length - 1]
              };
            }
          }

          // Token: !^fire

          class InversePrefixExactMatch extends BaseMatch {
            constructor(pattern) {
              super(pattern);
            }
            static get type() {
              return 'inverse-prefix-exact';
            }
            static get multiRegex() {
              return /^!\^"(.*)"$/;
            }
            static get singleRegex() {
              return /^!\^(.*)$/;
            }
            search(text) {
              const isMatch = !text.startsWith(this.pattern);
              return {
                isMatch,
                score: isMatch ? 0 : 1,
                indices: [0, text.length - 1]
              };
            }
          }

          // Token: .file$

          class SuffixExactMatch extends BaseMatch {
            constructor(pattern) {
              super(pattern);
            }
            static get type() {
              return 'suffix-exact';
            }
            static get multiRegex() {
              return /^"(.*)"\$$/;
            }
            static get singleRegex() {
              return /^(.*)\$$/;
            }
            search(text) {
              const isMatch = text.endsWith(this.pattern);
              return {
                isMatch,
                score: isMatch ? 0 : 1,
                indices: [text.length - this.pattern.length, text.length - 1]
              };
            }
          }

          // Token: !.file$

          class InverseSuffixExactMatch extends BaseMatch {
            constructor(pattern) {
              super(pattern);
            }
            static get type() {
              return 'inverse-suffix-exact';
            }
            static get multiRegex() {
              return /^!"(.*)"\$$/;
            }
            static get singleRegex() {
              return /^!(.*)\$$/;
            }
            search(text) {
              const isMatch = !text.endsWith(this.pattern);
              return {
                isMatch,
                score: isMatch ? 0 : 1,
                indices: [0, text.length - 1]
              };
            }
          }
          class FuzzyMatch extends BaseMatch {
            constructor(pattern) {
              let {
                location = Config.location,
                threshold = Config.threshold,
                distance = Config.distance,
                includeMatches = Config.includeMatches,
                findAllMatches = Config.findAllMatches,
                minMatchCharLength = Config.minMatchCharLength,
                isCaseSensitive = Config.isCaseSensitive,
                ignoreLocation = Config.ignoreLocation
              } = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
              super(pattern);
              this._bitapSearch = new BitapSearch(pattern, {
                location,
                threshold,
                distance,
                includeMatches,
                findAllMatches,
                minMatchCharLength,
                isCaseSensitive,
                ignoreLocation
              });
            }
            static get type() {
              return 'fuzzy';
            }
            static get multiRegex() {
              return /^"(.*)"$/;
            }
            static get singleRegex() {
              return /^(.*)$/;
            }
            search(text) {
              return this._bitapSearch.searchIn(text);
            }
          }

          // Token: 'file

          class IncludeMatch extends BaseMatch {
            constructor(pattern) {
              super(pattern);
            }
            static get type() {
              return 'include';
            }
            static get multiRegex() {
              return /^'"(.*)"$/;
            }
            static get singleRegex() {
              return /^'(.*)$/;
            }
            search(text) {
              let location = 0;
              let index;
              const indices = [];
              const patternLen = this.pattern.length;

              // Get all exact matches
              while ((index = text.indexOf(this.pattern, location)) > -1) {
                location = index + patternLen;
                indices.push([index, location - 1]);
              }
              const isMatch = !!indices.length;
              return {
                isMatch,
                score: isMatch ? 0 : 1,
                indices
              };
            }
          }

          // ❗Order is important. DO NOT CHANGE.
          const searchers = [ExactMatch, IncludeMatch, PrefixExactMatch, InversePrefixExactMatch, InverseSuffixExactMatch, SuffixExactMatch, InverseExactMatch, FuzzyMatch];
          const searchersLen = searchers.length;

          // Regex to split by spaces, but keep anything in quotes together
          const SPACE_RE = / +(?=([^\"]*\"[^\"]*\")*[^\"]*$)/;
          const OR_TOKEN = '|';

          // Return a 2D array representation of the query, for simpler parsing.
          // Example:
          // "^core go$ | rb$ | py$ xy$" => [["^core", "go$"], ["rb$"], ["py$", "xy$"]]
          function parseQuery(pattern) {
            let options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
            return pattern.split(OR_TOKEN).map(item => {
              let query = item.trim().split(SPACE_RE).filter(item => item && !!item.trim());
              let results = [];
              for (let i = 0, len = query.length; i < len; i += 1) {
                const queryItem = query[i];

                // 1. Handle multiple query match (i.e, once that are quoted, like `"hello world"`)
                let found = false;
                let idx = -1;
                while (!found && ++idx < searchersLen) {
                  const searcher = searchers[idx];
                  let token = searcher.isMultiMatch(queryItem);
                  if (token) {
                    results.push(new searcher(token, options));
                    found = true;
                  }
                }
                if (found) {
                  continue;
                }

                // 2. Handle single query matches (i.e, once that are *not* quoted)
                idx = -1;
                while (++idx < searchersLen) {
                  const searcher = searchers[idx];
                  let token = searcher.isSingleMatch(queryItem);
                  if (token) {
                    results.push(new searcher(token, options));
                    break;
                  }
                }
              }
              return results;
            });
          }

          // These extended matchers can return an array of matches, as opposed
          // to a singl match
          const MultiMatchSet = new Set([FuzzyMatch.type, IncludeMatch.type]);

          /**
           * Command-like searching
           * ======================
           *
           * Given multiple search terms delimited by spaces.e.g. `^jscript .python$ ruby !java`,
           * search in a given text.
           *
           * Search syntax:
           *
           * | Token       | Match type                 | Description                            |
           * | ----------- | -------------------------- | -------------------------------------- |
           * | `jscript`   | fuzzy-match                | Items that fuzzy match `jscript`       |
           * | `=scheme`   | exact-match                | Items that are `scheme`                |
           * | `'python`   | include-match              | Items that include `python`            |
           * | `!ruby`     | inverse-exact-match        | Items that do not include `ruby`       |
           * | `^java`     | prefix-exact-match         | Items that start with `java`           |
           * | `!^earlang` | inverse-prefix-exact-match | Items that do not start with `earlang` |
           * | `.js$`      | suffix-exact-match         | Items that end with `.js`              |
           * | `!.go$`     | inverse-suffix-exact-match | Items that do not end with `.go`       |
           *
           * A single pipe character acts as an OR operator. For example, the following
           * query matches entries that start with `core` and end with either`go`, `rb`,
           * or`py`.
           *
           * ```
           * ^core go$ | rb$ | py$
           * ```
           */
          class ExtendedSearch {
            constructor(pattern) {
              let {
                isCaseSensitive = Config.isCaseSensitive,
                includeMatches = Config.includeMatches,
                minMatchCharLength = Config.minMatchCharLength,
                ignoreLocation = Config.ignoreLocation,
                findAllMatches = Config.findAllMatches,
                location = Config.location,
                threshold = Config.threshold,
                distance = Config.distance
              } = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
              this.query = null;
              this.options = {
                isCaseSensitive,
                includeMatches,
                minMatchCharLength,
                findAllMatches,
                ignoreLocation,
                location,
                threshold,
                distance
              };
              this.pattern = isCaseSensitive ? pattern : pattern.toLowerCase();
              this.query = parseQuery(this.pattern, this.options);
            }
            static condition(_, options) {
              return options.useExtendedSearch;
            }
            searchIn(text) {
              const query = this.query;
              if (!query) {
                return {
                  isMatch: false,
                  score: 1
                };
              }
              const {
                includeMatches,
                isCaseSensitive
              } = this.options;
              text = isCaseSensitive ? text : text.toLowerCase();
              let numMatches = 0;
              let allIndices = [];
              let totalScore = 0;

              // ORs
              for (let i = 0, qLen = query.length; i < qLen; i += 1) {
                const searchers = query[i];

                // Reset indices
                allIndices.length = 0;
                numMatches = 0;

                // ANDs
                for (let j = 0, pLen = searchers.length; j < pLen; j += 1) {
                  const searcher = searchers[j];
                  const {
                    isMatch,
                    indices,
                    score
                  } = searcher.search(text);
                  if (isMatch) {
                    numMatches += 1;
                    totalScore += score;
                    if (includeMatches) {
                      const type = searcher.constructor.type;
                      if (MultiMatchSet.has(type)) {
                        allIndices = [...allIndices, ...indices];
                      } else {
                        allIndices.push(indices);
                      }
                    }
                  } else {
                    totalScore = 0;
                    numMatches = 0;
                    allIndices.length = 0;
                    break;
                  }
                }

                // OR condition, so if TRUE, return
                if (numMatches) {
                  let result = {
                    isMatch: true,
                    score: totalScore / numMatches
                  };
                  if (includeMatches) {
                    result.indices = allIndices;
                  }
                  return result;
                }
              }

              // Nothing was matched
              return {
                isMatch: false,
                score: 1
              };
            }
          }
          const registeredSearchers = [];
          function register() {
            registeredSearchers.push(...arguments);
          }
          function createSearcher(pattern, options) {
            for (let i = 0, len = registeredSearchers.length; i < len; i += 1) {
              let searcherClass = registeredSearchers[i];
              if (searcherClass.condition(pattern, options)) {
                return new searcherClass(pattern, options);
              }
            }
            return new BitapSearch(pattern, options);
          }
          const LogicalOperator = {
            AND: '$and',
            OR: '$or'
          };
          const KeyType = {
            PATH: '$path',
            PATTERN: '$val'
          };
          const isExpression = query => !!(query[LogicalOperator.AND] || query[LogicalOperator.OR]);
          const isPath = query => !!query[KeyType.PATH];
          const isLeaf = query => !isArray(query) && isObject(query) && !isExpression(query);
          const convertToExplicit = query => ({
            [LogicalOperator.AND]: Object.keys(query).map(key => ({
              [key]: query[key]
            }))
          });

          // When `auto` is `true`, the parse function will infer and initialize and add
          // the appropriate `Searcher` instance
          function parse(query, options) {
            let {
              auto = true
            } = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
            const next = query => {
              let keys = Object.keys(query);
              const isQueryPath = isPath(query);
              if (!isQueryPath && keys.length > 1 && !isExpression(query)) {
                return next(convertToExplicit(query));
              }
              if (isLeaf(query)) {
                const key = isQueryPath ? query[KeyType.PATH] : keys[0];
                const pattern = isQueryPath ? query[KeyType.PATTERN] : query[key];
                if (!isString(pattern)) {
                  throw new Error(LOGICAL_SEARCH_INVALID_QUERY_FOR_KEY(key));
                }
                const obj = {
                  keyId: createKeyId(key),
                  pattern
                };
                if (auto) {
                  obj.searcher = createSearcher(pattern, options);
                }
                return obj;
              }
              let node = {
                children: [],
                operator: keys[0]
              };
              keys.forEach(key => {
                const value = query[key];
                if (isArray(value)) {
                  value.forEach(item => {
                    node.children.push(next(item));
                  });
                }
              });
              return node;
            };
            if (!isExpression(query)) {
              query = convertToExplicit(query);
            }
            return next(query);
          }

          // Practical scoring function
          function computeScore(results, _ref4) {
            let {
              ignoreFieldNorm = Config.ignoreFieldNorm
            } = _ref4;
            results.forEach(result => {
              let totalScore = 1;
              result.matches.forEach(_ref5 => {
                let {
                  key,
                  norm,
                  score
                } = _ref5;
                const weight = key ? key.weight : null;
                totalScore *= Math.pow(score === 0 && weight ? Number.EPSILON : score, (weight || 1) * (ignoreFieldNorm ? 1 : norm));
              });
              result.score = totalScore;
            });
          }
          function transformMatches(result, data) {
            const matches = result.matches;
            data.matches = [];
            if (!isDefined(matches)) {
              return;
            }
            matches.forEach(match => {
              if (!isDefined(match.indices) || !match.indices.length) {
                return;
              }
              const {
                indices,
                value
              } = match;
              let obj = {
                indices,
                value
              };
              if (match.key) {
                obj.key = match.key.src;
              }
              if (match.idx > -1) {
                obj.refIndex = match.idx;
              }
              data.matches.push(obj);
            });
          }
          function transformScore(result, data) {
            data.score = result.score;
          }
          function format(results, docs) {
            let {
              includeMatches = Config.includeMatches,
              includeScore = Config.includeScore
            } = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
            const transformers = [];
            if (includeMatches) transformers.push(transformMatches);
            if (includeScore) transformers.push(transformScore);
            return results.map(result => {
              const {
                idx
              } = result;
              const data = {
                item: docs[idx],
                refIndex: idx
              };
              if (transformers.length) {
                transformers.forEach(transformer => {
                  transformer(result, data);
                });
              }
              return data;
            });
          }
          class Fuse {
            constructor(docs) {
              let options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
              let index = arguments.length > 2 ? arguments[2] : undefined;
              this.options = {
                ...Config,
                ...options
              };
              if (this.options.useExtendedSearch && !true) {}
              this._keyStore = new KeyStore(this.options.keys);
              this.setCollection(docs, index);
            }
            setCollection(docs, index) {
              this._docs = docs;
              if (index && !(index instanceof FuseIndex)) {
                throw new Error(INCORRECT_INDEX_TYPE);
              }
              this._myIndex = index || createIndex(this.options.keys, this._docs, {
                getFn: this.options.getFn,
                fieldNormWeight: this.options.fieldNormWeight
              });
            }
            add(doc) {
              if (!isDefined(doc)) {
                return;
              }
              this._docs.push(doc);
              this._myIndex.add(doc);
            }
            remove() {
              let predicate = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : ( /* doc, idx */) => false;
              const results = [];
              for (let i = 0, len = this._docs.length; i < len; i += 1) {
                const doc = this._docs[i];
                if (predicate(doc, i)) {
                  this.removeAt(i);
                  i -= 1;
                  len -= 1;
                  results.push(doc);
                }
              }
              return results;
            }
            removeAt(idx) {
              this._docs.splice(idx, 1);
              this._myIndex.removeAt(idx);
            }
            getIndex() {
              return this._myIndex;
            }
            search(query) {
              let {
                limit = -1
              } = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
              const {
                includeMatches,
                includeScore,
                shouldSort,
                sortFn,
                ignoreFieldNorm
              } = this.options;
              let results = isString(query) ? isString(this._docs[0]) ? this._searchStringList(query) : this._searchObjectList(query) : this._searchLogical(query);
              computeScore(results, {
                ignoreFieldNorm
              });
              if (shouldSort) {
                results.sort(sortFn);
              }
              if (isNumber(limit) && limit > -1) {
                results = results.slice(0, limit);
              }
              return format(results, this._docs, {
                includeMatches,
                includeScore
              });
            }
            _searchStringList(query) {
              const searcher = createSearcher(query, this.options);
              const {
                records
              } = this._myIndex;
              const results = [];

              // Iterate over every string in the index
              records.forEach(_ref6 => {
                let {
                  v: text,
                  i: idx,
                  n: norm
                } = _ref6;
                if (!isDefined(text)) {
                  return;
                }
                const {
                  isMatch,
                  score,
                  indices
                } = searcher.searchIn(text);
                if (isMatch) {
                  results.push({
                    item: text,
                    idx,
                    matches: [{
                      score,
                      value: text,
                      norm,
                      indices
                    }]
                  });
                }
              });
              return results;
            }
            _searchLogical(query) {
              const expression = parse(query, this.options);
              const evaluate = (node, item, idx) => {
                if (!node.children) {
                  const {
                    keyId,
                    searcher
                  } = node;
                  const matches = this._findMatches({
                    key: this._keyStore.get(keyId),
                    value: this._myIndex.getValueForItemAtKeyId(item, keyId),
                    searcher
                  });
                  if (matches && matches.length) {
                    return [{
                      idx,
                      item,
                      matches
                    }];
                  }
                  return [];
                }
                const res = [];
                for (let i = 0, len = node.children.length; i < len; i += 1) {
                  const child = node.children[i];
                  const result = evaluate(child, item, idx);
                  if (result.length) {
                    res.push(...result);
                  } else if (node.operator === LogicalOperator.AND) {
                    return [];
                  }
                }
                return res;
              };
              const records = this._myIndex.records;
              const resultMap = {};
              const results = [];
              records.forEach(_ref7 => {
                let {
                  $: item,
                  i: idx
                } = _ref7;
                if (isDefined(item)) {
                  let expResults = evaluate(expression, item, idx);
                  if (expResults.length) {
                    // Dedupe when adding
                    if (!resultMap[idx]) {
                      resultMap[idx] = {
                        idx,
                        item,
                        matches: []
                      };
                      results.push(resultMap[idx]);
                    }
                    expResults.forEach(_ref8 => {
                      let {
                        matches
                      } = _ref8;
                      resultMap[idx].matches.push(...matches);
                    });
                  }
                }
              });
              return results;
            }
            _searchObjectList(query) {
              const searcher = createSearcher(query, this.options);
              const {
                keys,
                records
              } = this._myIndex;
              const results = [];

              // List is Array<Object>
              records.forEach(_ref9 => {
                let {
                  $: item,
                  i: idx
                } = _ref9;
                if (!isDefined(item)) {
                  return;
                }
                let matches = [];

                // Iterate over every key (i.e, path), and fetch the value at that key
                keys.forEach((key, keyIndex) => {
                  matches.push(...this._findMatches({
                    key,
                    value: item[keyIndex],
                    searcher
                  }));
                });
                if (matches.length) {
                  results.push({
                    idx,
                    item,
                    matches
                  });
                }
              });
              return results;
            }
            _findMatches(_ref10) {
              let {
                key,
                value,
                searcher
              } = _ref10;
              if (!isDefined(value)) {
                return [];
              }
              let matches = [];
              if (isArray(value)) {
                value.forEach(_ref11 => {
                  let {
                    v: text,
                    i: idx,
                    n: norm
                  } = _ref11;
                  if (!isDefined(text)) {
                    return;
                  }
                  const {
                    isMatch,
                    score,
                    indices
                  } = searcher.searchIn(text);
                  if (isMatch) {
                    matches.push({
                      score,
                      key,
                      value: text,
                      idx,
                      norm,
                      indices
                    });
                  }
                });
              } else {
                const {
                  v: text,
                  n: norm
                } = value;
                const {
                  isMatch,
                  score,
                  indices
                } = searcher.searchIn(text);
                if (isMatch) {
                  matches.push({
                    score,
                    key,
                    value: text,
                    norm,
                    indices
                  });
                }
              }
              return matches;
            }
          }
          Fuse.version = '6.5.3';
          Fuse.createIndex = createIndex;
          Fuse.parseIndex = parseIndex;
          Fuse.config = Config;
          {
            Fuse.parseQuery = parse;
          }
          {
            register(ExtendedSearch);
          }

          /***/
        },

        /***/857: /***/function (__unused_webpack_module, __webpack_exports__, __nested_webpack_require_233852__) {
          // ESM COMPAT FLAG
          __nested_webpack_require_233852__.r(__webpack_exports__);

          // EXPORTS
          __nested_webpack_require_233852__.d(__webpack_exports__, {
            "__DO_NOT_USE__ActionTypes": function () {
              return (/* binding */ActionTypes
              );
            },
            "applyMiddleware": function () {
              return (/* binding */applyMiddleware
              );
            },
            "bindActionCreators": function () {
              return (/* binding */bindActionCreators
              );
            },
            "combineReducers": function () {
              return (/* binding */combineReducers
              );
            },
            "compose": function () {
              return (/* binding */compose
              );
            },
            "createStore": function () {
              return (/* binding */createStore
              );
            }
          });
          ; // CONCATENATED MODULE: ./node_modules/@babel/runtime/helpers/esm/defineProperty.js
          function _defineProperty(obj, key, value) {
            if (key in obj) {
              Object.defineProperty(obj, key, {
                value: value,
                enumerable: true,
                configurable: true,
                writable: true
              });
            } else {
              obj[key] = value;
            }
            return obj;
          }
          ; // CONCATENATED MODULE: ./node_modules/@babel/runtime/helpers/esm/objectSpread2.js

          function ownKeys(object, enumerableOnly) {
            var keys = Object.keys(object);
            if (Object.getOwnPropertySymbols) {
              var symbols = Object.getOwnPropertySymbols(object);
              enumerableOnly && (symbols = symbols.filter(function (sym) {
                return Object.getOwnPropertyDescriptor(object, sym).enumerable;
              })), keys.push.apply(keys, symbols);
            }
            return keys;
          }
          function _objectSpread2(target) {
            for (var i = 1; i < arguments.length; i++) {
              var source = null != arguments[i] ? arguments[i] : {};
              i % 2 ? ownKeys(Object(source), !0).forEach(function (key) {
                _defineProperty(target, key, source[key]);
              }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) {
                Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
              });
            }
            return target;
          }
          ; // CONCATENATED MODULE: ./node_modules/redux/es/redux.js

          /**
           * Adapted from React: https://github.com/facebook/react/blob/master/packages/shared/formatProdErrorMessage.js
           *
           * Do not require this module directly! Use normal throw error calls. These messages will be replaced with error codes
           * during build.
           * @param {number} code
           */
          function formatProdErrorMessage(code) {
            return "Minified Redux error #" + code + "; visit https://redux.js.org/Errors?code=" + code + " for the full message or " + 'use the non-minified dev environment for full errors. ';
          }

          // Inlined version of the `symbol-observable` polyfill
          var $$observable = function () {
            return typeof Symbol === 'function' && Symbol.observable || '@@observable';
          }();

          /**
           * These are private action types reserved by Redux.
           * For any unknown actions, you must return the current state.
           * If the current state is undefined, you must return the initial state.
           * Do not reference these action types directly in your code.
           */
          var randomString = function randomString() {
            return Math.random().toString(36).substring(7).split('').join('.');
          };
          var ActionTypes = {
            INIT: "@@redux/INIT" + randomString(),
            REPLACE: "@@redux/REPLACE" + randomString(),
            PROBE_UNKNOWN_ACTION: function PROBE_UNKNOWN_ACTION() {
              return "@@redux/PROBE_UNKNOWN_ACTION" + randomString();
            }
          };

          /**
           * @param {any} obj The object to inspect.
           * @returns {boolean} True if the argument appears to be a plain object.
           */
          function isPlainObject(obj) {
            if (typeof obj !== 'object' || obj === null) return false;
            var proto = obj;
            while (Object.getPrototypeOf(proto) !== null) {
              proto = Object.getPrototypeOf(proto);
            }
            return Object.getPrototypeOf(obj) === proto;
          }

          // Inlined / shortened version of `kindOf` from https://github.com/jonschlinkert/kind-of
          function miniKindOf(val) {
            if (val === void 0) return 'undefined';
            if (val === null) return 'null';
            var type = typeof val;
            switch (type) {
              case 'boolean':
              case 'string':
              case 'number':
              case 'symbol':
              case 'function':
                {
                  return type;
                }
            }
            if (Array.isArray(val)) return 'array';
            if (isDate(val)) return 'date';
            if (isError(val)) return 'error';
            var constructorName = ctorName(val);
            switch (constructorName) {
              case 'Symbol':
              case 'Promise':
              case 'WeakMap':
              case 'WeakSet':
              case 'Map':
              case 'Set':
                return constructorName;
            } // other

            return type.slice(8, -1).toLowerCase().replace(/\s/g, '');
          }
          function ctorName(val) {
            return typeof val.constructor === 'function' ? val.constructor.name : null;
          }
          function isError(val) {
            return val instanceof Error || typeof val.message === 'string' && val.constructor && typeof val.constructor.stackTraceLimit === 'number';
          }
          function isDate(val) {
            if (val instanceof Date) return true;
            return typeof val.toDateString === 'function' && typeof val.getDate === 'function' && typeof val.setDate === 'function';
          }
          function kindOf(val) {
            var typeOfVal = typeof val;
            if (false) {}
            return typeOfVal;
          }

          /**
           * Creates a Redux store that holds the state tree.
           * The only way to change the data in the store is to call `dispatch()` on it.
           *
           * There should only be a single store in your app. To specify how different
           * parts of the state tree respond to actions, you may combine several reducers
           * into a single reducer function by using `combineReducers`.
           *
           * @param {Function} reducer A function that returns the next state tree, given
           * the current state tree and the action to handle.
           *
           * @param {any} [preloadedState] The initial state. You may optionally specify it
           * to hydrate the state from the server in universal apps, or to restore a
           * previously serialized user session.
           * If you use `combineReducers` to produce the root reducer function, this must be
           * an object with the same shape as `combineReducers` keys.
           *
           * @param {Function} [enhancer] The store enhancer. You may optionally specify it
           * to enhance the store with third-party capabilities such as middleware,
           * time travel, persistence, etc. The only store enhancer that ships with Redux
           * is `applyMiddleware()`.
           *
           * @returns {Store} A Redux store that lets you read the state, dispatch actions
           * and subscribe to changes.
           */

          function createStore(reducer, preloadedState, enhancer) {
            var _ref2;
            if (typeof preloadedState === 'function' && typeof enhancer === 'function' || typeof enhancer === 'function' && typeof arguments[3] === 'function') {
              throw new Error( true ? formatProdErrorMessage(0) : 0);
            }
            if (typeof preloadedState === 'function' && typeof enhancer === 'undefined') {
              enhancer = preloadedState;
              preloadedState = undefined;
            }
            if (typeof enhancer !== 'undefined') {
              if (typeof enhancer !== 'function') {
                throw new Error( true ? formatProdErrorMessage(1) : 0);
              }
              return enhancer(createStore)(reducer, preloadedState);
            }
            if (typeof reducer !== 'function') {
              throw new Error( true ? formatProdErrorMessage(2) : 0);
            }
            var currentReducer = reducer;
            var currentState = preloadedState;
            var currentListeners = [];
            var nextListeners = currentListeners;
            var isDispatching = false;
            /**
             * This makes a shallow copy of currentListeners so we can use
             * nextListeners as a temporary list while dispatching.
             *
             * This prevents any bugs around consumers calling
             * subscribe/unsubscribe in the middle of a dispatch.
             */

            function ensureCanMutateNextListeners() {
              if (nextListeners === currentListeners) {
                nextListeners = currentListeners.slice();
              }
            }
            /**
             * Reads the state tree managed by the store.
             *
             * @returns {any} The current state tree of your application.
             */

            function getState() {
              if (isDispatching) {
                throw new Error( true ? formatProdErrorMessage(3) : 0);
              }
              return currentState;
            }
            /**
             * Adds a change listener. It will be called any time an action is dispatched,
             * and some part of the state tree may potentially have changed. You may then
             * call `getState()` to read the current state tree inside the callback.
             *
             * You may call `dispatch()` from a change listener, with the following
             * caveats:
             *
             * 1. The subscriptions are snapshotted just before every `dispatch()` call.
             * If you subscribe or unsubscribe while the listeners are being invoked, this
             * will not have any effect on the `dispatch()` that is currently in progress.
             * However, the next `dispatch()` call, whether nested or not, will use a more
             * recent snapshot of the subscription list.
             *
             * 2. The listener should not expect to see all state changes, as the state
             * might have been updated multiple times during a nested `dispatch()` before
             * the listener is called. It is, however, guaranteed that all subscribers
             * registered before the `dispatch()` started will be called with the latest
             * state by the time it exits.
             *
             * @param {Function} listener A callback to be invoked on every dispatch.
             * @returns {Function} A function to remove this change listener.
             */

            function subscribe(listener) {
              if (typeof listener !== 'function') {
                throw new Error( true ? formatProdErrorMessage(4) : 0);
              }
              if (isDispatching) {
                throw new Error( true ? formatProdErrorMessage(5) : 0);
              }
              var isSubscribed = true;
              ensureCanMutateNextListeners();
              nextListeners.push(listener);
              return function unsubscribe() {
                if (!isSubscribed) {
                  return;
                }
                if (isDispatching) {
                  throw new Error( true ? formatProdErrorMessage(6) : 0);
                }
                isSubscribed = false;
                ensureCanMutateNextListeners();
                var index = nextListeners.indexOf(listener);
                nextListeners.splice(index, 1);
                currentListeners = null;
              };
            }
            /**
             * Dispatches an action. It is the only way to trigger a state change.
             *
             * The `reducer` function, used to create the store, will be called with the
             * current state tree and the given `action`. Its return value will
             * be considered the **next** state of the tree, and the change listeners
             * will be notified.
             *
             * The base implementation only supports plain object actions. If you want to
             * dispatch a Promise, an Observable, a thunk, or something else, you need to
             * wrap your store creating function into the corresponding middleware. For
             * example, see the documentation for the `redux-thunk` package. Even the
             * middleware will eventually dispatch plain object actions using this method.
             *
             * @param {Object} action A plain object representing “what changed”. It is
             * a good idea to keep actions serializable so you can record and replay user
             * sessions, or use the time travelling `redux-devtools`. An action must have
             * a `type` property which may not be `undefined`. It is a good idea to use
             * string constants for action types.
             *
             * @returns {Object} For convenience, the same action object you dispatched.
             *
             * Note that, if you use a custom middleware, it may wrap `dispatch()` to
             * return something else (for example, a Promise you can await).
             */

            function dispatch(action) {
              if (!isPlainObject(action)) {
                throw new Error( true ? formatProdErrorMessage(7) : 0);
              }
              if (typeof action.type === 'undefined') {
                throw new Error( true ? formatProdErrorMessage(8) : 0);
              }
              if (isDispatching) {
                throw new Error( true ? formatProdErrorMessage(9) : 0);
              }
              try {
                isDispatching = true;
                currentState = currentReducer(currentState, action);
              } finally {
                isDispatching = false;
              }
              var listeners = currentListeners = nextListeners;
              for (var i = 0; i < listeners.length; i++) {
                var listener = listeners[i];
                listener();
              }
              return action;
            }
            /**
             * Replaces the reducer currently used by the store to calculate the state.
             *
             * You might need this if your app implements code splitting and you want to
             * load some of the reducers dynamically. You might also need this if you
             * implement a hot reloading mechanism for Redux.
             *
             * @param {Function} nextReducer The reducer for the store to use instead.
             * @returns {void}
             */

            function replaceReducer(nextReducer) {
              if (typeof nextReducer !== 'function') {
                throw new Error( true ? formatProdErrorMessage(10) : 0);
              }
              currentReducer = nextReducer; // This action has a similiar effect to ActionTypes.INIT.
              // Any reducers that existed in both the new and old rootReducer
              // will receive the previous state. This effectively populates
              // the new state tree with any relevant data from the old one.

              dispatch({
                type: ActionTypes.REPLACE
              });
            }
            /**
             * Interoperability point for observable/reactive libraries.
             * @returns {observable} A minimal observable of state changes.
             * For more information, see the observable proposal:
             * https://github.com/tc39/proposal-observable
             */

            function observable() {
              var _ref;
              var outerSubscribe = subscribe;
              return _ref = {
                /**
                 * The minimal observable subscription method.
                 * @param {Object} observer Any object that can be used as an observer.
                 * The observer object should have a `next` method.
                 * @returns {subscription} An object with an `unsubscribe` method that can
                 * be used to unsubscribe the observable from the store, and prevent further
                 * emission of values from the observable.
                 */
                subscribe: function subscribe(observer) {
                  if (typeof observer !== 'object' || observer === null) {
                    throw new Error( true ? formatProdErrorMessage(11) : 0);
                  }
                  function observeState() {
                    if (observer.next) {
                      observer.next(getState());
                    }
                  }
                  observeState();
                  var unsubscribe = outerSubscribe(observeState);
                  return {
                    unsubscribe: unsubscribe
                  };
                }
              }, _ref[$$observable] = function () {
                return this;
              }, _ref;
            } // When a store is created, an "INIT" action is dispatched so that every
            // reducer returns their initial state. This effectively populates
            // the initial state tree.

            dispatch({
              type: ActionTypes.INIT
            });
            return _ref2 = {
              dispatch: dispatch,
              subscribe: subscribe,
              getState: getState,
              replaceReducer: replaceReducer
            }, _ref2[$$observable] = observable, _ref2;
          }

          /**
           * Prints a warning in the console if it exists.
           *
           * @param {String} message The warning message.
           * @returns {void}
           */
          function warning(message) {
            /* eslint-disable no-console */
            if (typeof console !== 'undefined' && typeof console.error === 'function') {
              console.error(message);
            }
            /* eslint-enable no-console */

            try {
              // This error was thrown as a convenience so that if you enable
              // "break on all exceptions" in your console,
              // it would pause the execution at this line.
              throw new Error(message);
            } catch (e) {} // eslint-disable-line no-empty
          }

          function getUnexpectedStateShapeWarningMessage(inputState, reducers, action, unexpectedKeyCache) {
            var reducerKeys = Object.keys(reducers);
            var argumentName = action && action.type === ActionTypes.INIT ? 'preloadedState argument passed to createStore' : 'previous state received by the reducer';
            if (reducerKeys.length === 0) {
              return 'Store does not have a valid reducer. Make sure the argument passed ' + 'to combineReducers is an object whose values are reducers.';
            }
            if (!isPlainObject(inputState)) {
              return "The " + argumentName + " has unexpected type of \"" + kindOf(inputState) + "\". Expected argument to be an object with the following " + ("keys: \"" + reducerKeys.join('", "') + "\"");
            }
            var unexpectedKeys = Object.keys(inputState).filter(function (key) {
              return !reducers.hasOwnProperty(key) && !unexpectedKeyCache[key];
            });
            unexpectedKeys.forEach(function (key) {
              unexpectedKeyCache[key] = true;
            });
            if (action && action.type === ActionTypes.REPLACE) return;
            if (unexpectedKeys.length > 0) {
              return "Unexpected " + (unexpectedKeys.length > 1 ? 'keys' : 'key') + " " + ("\"" + unexpectedKeys.join('", "') + "\" found in " + argumentName + ". ") + "Expected to find one of the known reducer keys instead: " + ("\"" + reducerKeys.join('", "') + "\". Unexpected keys will be ignored.");
            }
          }
          function assertReducerShape(reducers) {
            Object.keys(reducers).forEach(function (key) {
              var reducer = reducers[key];
              var initialState = reducer(undefined, {
                type: ActionTypes.INIT
              });
              if (typeof initialState === 'undefined') {
                throw new Error( true ? formatProdErrorMessage(12) : 0);
              }
              if (typeof reducer(undefined, {
                type: ActionTypes.PROBE_UNKNOWN_ACTION()
              }) === 'undefined') {
                throw new Error( true ? formatProdErrorMessage(13) : 0);
              }
            });
          }
          /**
           * Turns an object whose values are different reducer functions, into a single
           * reducer function. It will call every child reducer, and gather their results
           * into a single state object, whose keys correspond to the keys of the passed
           * reducer functions.
           *
           * @param {Object} reducers An object whose values correspond to different
           * reducer functions that need to be combined into one. One handy way to obtain
           * it is to use ES6 `import * as reducers` syntax. The reducers may never return
           * undefined for any action. Instead, they should return their initial state
           * if the state passed to them was undefined, and the current state for any
           * unrecognized action.
           *
           * @returns {Function} A reducer function that invokes every reducer inside the
           * passed object, and builds a state object with the same shape.
           */

          function combineReducers(reducers) {
            var reducerKeys = Object.keys(reducers);
            var finalReducers = {};
            for (var i = 0; i < reducerKeys.length; i++) {
              var key = reducerKeys[i];
              if (false) {}
              if (typeof reducers[key] === 'function') {
                finalReducers[key] = reducers[key];
              }
            }
            var finalReducerKeys = Object.keys(finalReducers); // This is used to make sure we don't warn about the same
            // keys multiple times.

            var unexpectedKeyCache;
            if (false) {}
            var shapeAssertionError;
            try {
              assertReducerShape(finalReducers);
            } catch (e) {
              shapeAssertionError = e;
            }
            return function combination(state, action) {
              if (state === void 0) {
                state = {};
              }
              if (shapeAssertionError) {
                throw shapeAssertionError;
              }
              if (false) { var warningMessage; }
              var hasChanged = false;
              var nextState = {};
              for (var _i = 0; _i < finalReducerKeys.length; _i++) {
                var _key = finalReducerKeys[_i];
                var reducer = finalReducers[_key];
                var previousStateForKey = state[_key];
                var nextStateForKey = reducer(previousStateForKey, action);
                if (typeof nextStateForKey === 'undefined') {
                  var actionType = action && action.type;
                  throw new Error( true ? formatProdErrorMessage(14) : 0);
                }
                nextState[_key] = nextStateForKey;
                hasChanged = hasChanged || nextStateForKey !== previousStateForKey;
              }
              hasChanged = hasChanged || finalReducerKeys.length !== Object.keys(state).length;
              return hasChanged ? nextState : state;
            };
          }
          function bindActionCreator(actionCreator, dispatch) {
            return function () {
              return dispatch(actionCreator.apply(this, arguments));
            };
          }
          /**
           * Turns an object whose values are action creators, into an object with the
           * same keys, but with every function wrapped into a `dispatch` call so they
           * may be invoked directly. This is just a convenience method, as you can call
           * `store.dispatch(MyActionCreators.doSomething())` yourself just fine.
           *
           * For convenience, you can also pass an action creator as the first argument,
           * and get a dispatch wrapped function in return.
           *
           * @param {Function|Object} actionCreators An object whose values are action
           * creator functions. One handy way to obtain it is to use ES6 `import * as`
           * syntax. You may also pass a single function.
           *
           * @param {Function} dispatch The `dispatch` function available on your Redux
           * store.
           *
           * @returns {Function|Object} The object mimicking the original object, but with
           * every action creator wrapped into the `dispatch` call. If you passed a
           * function as `actionCreators`, the return value will also be a single
           * function.
           */

          function bindActionCreators(actionCreators, dispatch) {
            if (typeof actionCreators === 'function') {
              return bindActionCreator(actionCreators, dispatch);
            }
            if (typeof actionCreators !== 'object' || actionCreators === null) {
              throw new Error( true ? formatProdErrorMessage(16) : 0);
            }
            var boundActionCreators = {};
            for (var key in actionCreators) {
              var actionCreator = actionCreators[key];
              if (typeof actionCreator === 'function') {
                boundActionCreators[key] = bindActionCreator(actionCreator, dispatch);
              }
            }
            return boundActionCreators;
          }

          /**
           * Composes single-argument functions from right to left. The rightmost
           * function can take multiple arguments as it provides the signature for
           * the resulting composite function.
           *
           * @param {...Function} funcs The functions to compose.
           * @returns {Function} A function obtained by composing the argument functions
           * from right to left. For example, compose(f, g, h) is identical to doing
           * (...args) => f(g(h(...args))).
           */
          function compose() {
            for (var _len = arguments.length, funcs = new Array(_len), _key = 0; _key < _len; _key++) {
              funcs[_key] = arguments[_key];
            }
            if (funcs.length === 0) {
              return function (arg) {
                return arg;
              };
            }
            if (funcs.length === 1) {
              return funcs[0];
            }
            return funcs.reduce(function (a, b) {
              return function () {
                return a(b.apply(void 0, arguments));
              };
            });
          }

          /**
           * Creates a store enhancer that applies middleware to the dispatch method
           * of the Redux store. This is handy for a variety of tasks, such as expressing
           * asynchronous actions in a concise manner, or logging every action payload.
           *
           * See `redux-thunk` package as an example of the Redux middleware.
           *
           * Because middleware is potentially asynchronous, this should be the first
           * store enhancer in the composition chain.
           *
           * Note that each middleware will be given the `dispatch` and `getState` functions
           * as named arguments.
           *
           * @param {...Function} middlewares The middleware chain to be applied.
           * @returns {Function} A store enhancer applying the middleware.
           */

          function applyMiddleware() {
            for (var _len = arguments.length, middlewares = new Array(_len), _key = 0; _key < _len; _key++) {
              middlewares[_key] = arguments[_key];
            }
            return function (createStore) {
              return function () {
                var store = createStore.apply(void 0, arguments);
                var _dispatch = function dispatch() {
                  throw new Error( true ? formatProdErrorMessage(15) : 0);
                };
                var middlewareAPI = {
                  getState: store.getState,
                  dispatch: function dispatch() {
                    return _dispatch.apply(void 0, arguments);
                  }
                };
                var chain = middlewares.map(function (middleware) {
                  return middleware(middlewareAPI);
                });
                _dispatch = compose.apply(void 0, chain)(store.dispatch);
                return _objectSpread2(_objectSpread2({}, store), {}, {
                  dispatch: _dispatch
                });
              };
            };
          }

          /*
           * This is a dummy function to check if the function name has been altered by minification.
           * If the function has been minified and NODE_ENV !== 'production', warn the user.
           */

          function isCrushed() {}
          if (false) {}

          /***/
        }

        /******/
      };
      /************************************************************************/
      /******/ // The module cache
      /******/
      var __webpack_module_cache__ = {};
      /******/
      /******/ // The require function
      /******/
      function __nested_webpack_require_263999__(moduleId) {
        /******/ // Check if module is in cache
        /******/var cachedModule = __webpack_module_cache__[moduleId];
        /******/
        if (cachedModule !== undefined) {
          /******/return cachedModule.exports;
          /******/
        }
        /******/ // Create a new module (and put it into the cache)
        /******/
        var module = __webpack_module_cache__[moduleId] = {
          /******/ // no module.id needed
          /******/ // no module.loaded needed
          /******/exports: {}
          /******/
        };
        /******/
        /******/ // Execute the module function
        /******/
        __webpack_modules__[moduleId].call(module.exports, module, module.exports, __nested_webpack_require_263999__);
        /******/
        /******/ // Return the exports of the module
        /******/
        return module.exports;
        /******/
      }
      /******/
      /************************************************************************/
      /******/ /* webpack/runtime/compat get default export */
      /******/
      !function () {
        /******/ // getDefaultExport function for compatibility with non-harmony modules
        /******/__nested_webpack_require_263999__.n = function (module) {
          /******/var getter = module && module.__esModule ? /******/function () {
            return module['default'];
          } : /******/function () {
            return module;
          };
          /******/
          __nested_webpack_require_263999__.d(getter, {
            a: getter
          });
          /******/
          return getter;
          /******/
        };
        /******/
      }();
      /******/
      /******/ /* webpack/runtime/define property getters */
      /******/
      !function () {
        /******/ // define getter functions for harmony exports
        /******/__nested_webpack_require_263999__.d = function (exports, definition) {
          /******/for (var key in definition) {
            /******/if (__nested_webpack_require_263999__.o(definition, key) && !__nested_webpack_require_263999__.o(exports, key)) {
              /******/Object.defineProperty(exports, key, {
                enumerable: true,
                get: definition[key]
              });
              /******/
            }
            /******/
          }
          /******/
        };
        /******/
      }();
      /******/
      /******/ /* webpack/runtime/hasOwnProperty shorthand */
      /******/
      !function () {
        /******/__nested_webpack_require_263999__.o = function (obj, prop) {
          return Object.prototype.hasOwnProperty.call(obj, prop);
        };
        /******/
      }();
      /******/
      /******/ /* webpack/runtime/make namespace object */
      /******/
      !function () {
        /******/ // define __esModule on exports
        /******/__nested_webpack_require_263999__.r = function (exports) {
          /******/if (typeof Symbol !== 'undefined' && Symbol.toStringTag) {
            /******/Object.defineProperty(exports, Symbol.toStringTag, {
              value: 'Module'
            });
            /******/
          }
          /******/
          Object.defineProperty(exports, '__esModule', {
            value: true
          });
          /******/
        };
        /******/
      }();
      /******/
      /************************************************************************/
      var __webpack_exports__ = {};
      // This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
      !function () {
        /* harmony import */var _scripts_choices__WEBPACK_IMPORTED_MODULE_0__ = __nested_webpack_require_263999__(373);
        /* harmony import */
        var _scripts_choices__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__nested_webpack_require_263999__.n(_scripts_choices__WEBPACK_IMPORTED_MODULE_0__);
        /* harmony import */
        var _scripts_interfaces__WEBPACK_IMPORTED_MODULE_1__ = __nested_webpack_require_263999__(187);
        /* harmony import */
        var _scripts_interfaces__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__nested_webpack_require_263999__.n(_scripts_interfaces__WEBPACK_IMPORTED_MODULE_1__);
        /* harmony import */
        var _scripts_constants__WEBPACK_IMPORTED_MODULE_2__ = __nested_webpack_require_263999__(883);
        /* harmony import */
        var _scripts_defaults__WEBPACK_IMPORTED_MODULE_3__ = __nested_webpack_require_263999__(789);
        /* harmony import */
        var _scripts_templates__WEBPACK_IMPORTED_MODULE_4__ = __nested_webpack_require_263999__(686);

        /* harmony default export */
        __webpack_exports__["default"] = _scripts_choices__WEBPACK_IMPORTED_MODULE_0___default();
      }();
      __webpack_exports__ = __webpack_exports__["default"];
      /******/
      return __webpack_exports__;
      /******/
    }()
  );
});

/***/ }),

/***/ "./source/js/vendor/focus-visible.js":
/*!*******************************************!*\
  !*** ./source/js/vendor/focus-visible.js ***!
  \*******************************************/
/***/ (function() {

/**
 * Applies the :focus-visible polyfill at the given scope.
 * A scope in this case is either the top-level Document or a Shadow Root.
 *
 * @param {(Document|ShadowRoot)} scope
 * @see https://github.com/WICG/focus-visible
 */
function applyFocusVisiblePolyfill(scope) {
  var hadKeyboardEvent = true;
  var hadFocusVisibleRecently = false;
  var hadFocusVisibleRecentlyTimeout = null;
  var inputTypesAllowlist = {
    text: true,
    search: true,
    url: true,
    tel: true,
    email: true,
    password: true,
    number: true,
    date: true,
    month: true,
    week: true,
    time: true,
    datetime: true,
    'datetime-local': true
  };

  /**
   * Helper function for legacy browsers and iframes which sometimes focus
   * elements like document, body, and non-interactive SVG.
   * @param {Element} el
   */
  function isValidFocusTarget(el) {
    if (el && el !== document && el.nodeName !== 'HTML' && el.nodeName !== 'BODY' && 'classList' in el && 'contains' in el.classList) {
      return true;
    }
    return false;
  }

  /**
   * Computes whether the given element should automatically trigger the
   * `focus-visible` class being added, i.e. whether it should always match
   * `:focus-visible` when focused.
   * @param {Element} el
   * @return {boolean}
   */
  function focusTriggersKeyboardModality(el) {
    var type = el.type;
    var tagName = el.tagName;
    if (tagName === 'INPUT' && inputTypesAllowlist[type] && !el.readOnly) {
      return true;
    }
    if (tagName === 'TEXTAREA' && !el.readOnly) {
      return true;
    }
    if (el.isContentEditable) {
      return true;
    }
    return false;
  }

  /**
   * Add the `focus-visible` class to the given element if it was not added by
   * the author.
   * @param {Element} el
   */
  function addFocusVisibleClass(el) {
    if (el.classList.contains('focus-visible')) {
      return;
    }
    el.classList.add('focus-visible');
    el.setAttribute('data-focus-visible-added', '');
  }

  /**
   * Remove the `focus-visible` class from the given element if it was not
   * originally added by the author.
   * @param {Element} el
   */
  function removeFocusVisibleClass(el) {
    if (!el.hasAttribute('data-focus-visible-added')) {
      return;
    }
    el.classList.remove('focus-visible');
    el.removeAttribute('data-focus-visible-added');
  }

  /**
   * If the most recent user interaction was via the keyboard;
   * and the key press did not include a meta, alt/option, or control key;
   * then the modality is keyboard. Otherwise, the modality is not keyboard.
   * Apply `focus-visible` to any current active element and keep track
   * of our keyboard modality state with `hadKeyboardEvent`.
   * @param {KeyboardEvent} e
   */
  function onKeyDown(e) {
    if (e.metaKey || e.altKey || e.ctrlKey) {
      return;
    }
    if (isValidFocusTarget(scope.activeElement)) {
      addFocusVisibleClass(scope.activeElement);
    }
    hadKeyboardEvent = true;
  }

  /**
   * If at any point a user clicks with a pointing device, ensure that we change
   * the modality away from keyboard.
   * This avoids the situation where a user presses a key on an already focused
   * element, and then clicks on a different element, focusing it with a
   * pointing device, while we still think we're in keyboard modality.
   * @param {Event} e
   */
  function onPointerDown(e) {
    hadKeyboardEvent = false;
  }

  /**
   * On `focus`, add the `focus-visible` class to the target if:
   * - the target received focus as a result of keyboard navigation, or
   * - the event target is an element that will likely require interaction
   *   via the keyboard (e.g. a text box)
   * @param {Event} e
   */
  function onFocus(e) {
    // Prevent IE from focusing the document or HTML element.
    if (!isValidFocusTarget(e.target)) {
      return;
    }
    if (hadKeyboardEvent || focusTriggersKeyboardModality(e.target)) {
      addFocusVisibleClass(e.target);
    }
  }

  /**
   * On `blur`, remove the `focus-visible` class from the target.
   * @param {Event} e
   */
  function onBlur(e) {
    if (!isValidFocusTarget(e.target)) {
      return;
    }
    if (e.target.classList.contains('focus-visible') || e.target.hasAttribute('data-focus-visible-added')) {
      // To detect a tab/window switch, we look for a blur event followed
      // rapidly by a visibility change.
      // If we don't see a visibility change within 100ms, it's probably a
      // regular focus change.
      hadFocusVisibleRecently = true;
      window.clearTimeout(hadFocusVisibleRecentlyTimeout);
      hadFocusVisibleRecentlyTimeout = window.setTimeout(function () {
        hadFocusVisibleRecently = false;
      }, 100);
      removeFocusVisibleClass(e.target);
    }
  }

  /**
   * If the user changes tabs, keep track of whether or not the previously
   * focused element had .focus-visible.
   * @param {Event} e
   */
  function onVisibilityChange(e) {
    if (document.visibilityState === 'hidden') {
      // If the tab becomes active again, the browser will handle calling focus
      // on the element (Safari actually calls it twice).
      // If this tab change caused a blur on an element with focus-visible,
      // re-apply the class when the user switches back to the tab.
      if (hadFocusVisibleRecently) {
        hadKeyboardEvent = true;
      }
      addInitialPointerMoveListeners();
    }
  }

  /**
   * Add a group of listeners to detect usage of any pointing devices.
   * These listeners will be added when the polyfill first loads, and anytime
   * the window is blurred, so that they are active when the window regains
   * focus.
   */
  function addInitialPointerMoveListeners() {
    document.addEventListener('mousemove', onInitialPointerMove);
    document.addEventListener('mousedown', onInitialPointerMove);
    document.addEventListener('mouseup', onInitialPointerMove);
    document.addEventListener('pointermove', onInitialPointerMove);
    document.addEventListener('pointerdown', onInitialPointerMove);
    document.addEventListener('pointerup', onInitialPointerMove);
    document.addEventListener('touchmove', onInitialPointerMove);
    document.addEventListener('touchstart', onInitialPointerMove);
    document.addEventListener('touchend', onInitialPointerMove);
  }
  function removeInitialPointerMoveListeners() {
    document.removeEventListener('mousemove', onInitialPointerMove);
    document.removeEventListener('mousedown', onInitialPointerMove);
    document.removeEventListener('mouseup', onInitialPointerMove);
    document.removeEventListener('pointermove', onInitialPointerMove);
    document.removeEventListener('pointerdown', onInitialPointerMove);
    document.removeEventListener('pointerup', onInitialPointerMove);
    document.removeEventListener('touchmove', onInitialPointerMove);
    document.removeEventListener('touchstart', onInitialPointerMove);
    document.removeEventListener('touchend', onInitialPointerMove);
  }

  /**
   * When the polfyill first loads, assume the user is in keyboard modality.
   * If any event is received from a pointing device (e.g. mouse, pointer,
   * touch), turn off keyboard modality.
   * This accounts for situations where focus enters the page from the URL bar.
   * @param {Event} e
   */
  function onInitialPointerMove(e) {
    // Work around a Safari quirk that fires a mousemove on <html> whenever the
    // window blurs, even if you're tabbing out of the page. ¯\_(ツ)_/¯
    if (e.target.nodeName && e.target.nodeName.toLowerCase() === 'html') {
      return;
    }
    hadKeyboardEvent = false;
    removeInitialPointerMoveListeners();
  }

  // For some kinds of state, we are interested in changes at the global scope
  // only. For example, global pointer input, global key presses and global
  // visibility change should affect the state at every scope:
  document.addEventListener('keydown', onKeyDown, true);
  document.addEventListener('mousedown', onPointerDown, true);
  document.addEventListener('pointerdown', onPointerDown, true);
  document.addEventListener('touchstart', onPointerDown, true);
  document.addEventListener('visibilitychange', onVisibilityChange, true);
  addInitialPointerMoveListeners();

  // For focus and blur, we specifically care about state changes in the local
  // scope. This is because focus / blur events that originate from within a
  // shadow root are not re-dispatched from the host element if it was already
  // the active element in its own scope:
  scope.addEventListener('focus', onFocus, true);
  scope.addEventListener('blur', onBlur, true);

  // We detect that a node is a ShadowRoot by ensuring that it is a
  // DocumentFragment and also has a host property. This check covers native
  // implementation and polyfill implementation transparently. If we only cared
  // about the native implementation, we could just check if the scope was
  // an instance of a ShadowRoot.
  if (scope.nodeType === Node.DOCUMENT_FRAGMENT_NODE && scope.host) {
    // Since a ShadowRoot is a special kind of DocumentFragment, it does not
    // have a root element to add a class to. So, we add this attribute to the
    // host element instead:
    scope.host.setAttribute('data-js-focus-visible', '');
  } else if (scope.nodeType === Node.DOCUMENT_NODE) {
    document.documentElement.classList.add('js-focus-visible');
    document.documentElement.setAttribute('data-js-focus-visible', '');
  }
}

// It is important to wrap all references to global window and document in
// these checks to support server-side rendering use cases
// @see https://github.com/WICG/focus-visible/issues/199
if (typeof window !== 'undefined' && typeof document !== 'undefined') {
  // Make the polyfill helper globally available. This can be used as a signal
  // to interested libraries that wish to coordinate with the polyfill for e.g.,
  // applying the polyfill to a shadow root:
  window.applyFocusVisiblePolyfill = applyFocusVisiblePolyfill;

  // Notify interested libraries of the polyfill's presence, in case the
  // polyfill was loaded lazily:
  var event;
  try {
    event = new CustomEvent('focus-visible-polyfill-ready');
  } catch (error) {
    // IE11 does not support using CustomEvent as a constructor directly:
    event = document.createEvent('CustomEvent');
    event.initCustomEvent('focus-visible-polyfill-ready', false, false, {});
  }
  window.dispatchEvent(event);
}
if (typeof document !== 'undefined') {
  // Apply the polyfill to the global document, so that no JavaScript
  // coordination is required to use the polyfill in the top-level document:
  applyFocusVisiblePolyfill(document);
}

/***/ }),

/***/ "./source/js/vendor/picturefill.js":
/*!*****************************************!*\
  !*** ./source/js/vendor/picturefill.js ***!
  \*****************************************/
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_RESULT__;/*! picturefill - v3.0.2 - 2016-02-12
 * https://scottjehl.github.io/picturefill/
 * Copyright (c) 2016 https://github.com/scottjehl/picturefill/blob/master/Authors.txt; Licensed MIT
 */
/*! Gecko-Picture - v1.0
 * https://github.com/scottjehl/picturefill/tree/3.0/src/plugins/gecko-picture
 * Firefox's early picture implementation (prior to FF41) is static and does
 * not react to viewport changes. This tiny module fixes this.
 */
!function (e) {
  var t,
    s,
    r,
    i,
    n,
    c,
    a,
    u = navigator.userAgent;
  e.HTMLPictureElement && /ecko/.test(u) && u.match(/rv\:(\d+)/) && RegExp.$1 < 45 && addEventListener("resize", (s = document.createElement("source"), r = function (e) {
    var t,
      r,
      i = e.parentNode;
    "PICTURE" === i.nodeName.toUpperCase() ? (t = s.cloneNode(), i.insertBefore(t, i.firstElementChild), setTimeout(function () {
      i.removeChild(t);
    })) : (!e._pfLastSize || e.offsetWidth > e._pfLastSize) && (e._pfLastSize = e.offsetWidth, r = e.sizes, e.sizes += ",100vw", setTimeout(function () {
      e.sizes = r;
    }));
  }, i = function () {
    var e,
      t = document.querySelectorAll("picture > img, img[srcset][sizes]");
    for (e = 0; e < t.length; e++) r(t[e]);
  }, n = function () {
    clearTimeout(t), t = setTimeout(i, 99);
  }, c = e.matchMedia && matchMedia("(orientation: landscape)"), a = function () {
    n(), c && c.addListener && c.addListener(n);
  }, s.srcset = "data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==", /^[c|i]|d$/.test(document.readyState || "") ? a() : document.addEventListener("DOMContentLoaded", a), n));
}(window),
/*! Picturefill - v3.0.2
 * http://scottjehl.github.io/picturefill
 * Copyright (c) 2015 https://github.com/scottjehl/picturefill/blob/master/Authors.txt;
 *  License: MIT
 */
function (e, t, s) {
  "use strict";

  var r, i, n;
  t.createElement("picture");
  var c = {},
    a = !1,
    u = function () {},
    o = t.createElement("img"),
    l = o.getAttribute,
    f = o.setAttribute,
    d = o.removeAttribute,
    p = t.documentElement,
    A = {},
    m = {
      algorithm: ""
    },
    h = navigator.userAgent,
    g = /rident/.test(h) || /ecko/.test(h) && h.match(/rv\:(\d+)/) && RegExp.$1 > 35,
    v = "currentSrc",
    w = /\s+\+?\d+(e\d+)?w/,
    S = /(\([^)]+\))?\s*(.+)/,
    x = e.picturefillCFG,
    y = "font-size:100%!important;",
    E = !0,
    z = {},
    b = {},
    T = e.devicePixelRatio,
    C = {
      px: 1,
      in: 96
    },
    R = t.createElement("a"),
    L = !1,
    M = /^[ \t\n\r\u000c]+/,
    P = /^[, \t\n\r\u000c]+/,
    D = /^[^ \t\n\r\u000c]+/,
    B = /[,]+$/,
    I = /^\d+$/,
    U = /^-?(?:[0-9]+|[0-9]*\.[0-9]+)(?:[eE][+-]?[0-9]+)?$/,
    $ = function (e, t, s, r) {
      e.addEventListener ? e.addEventListener(t, s, r || !1) : e.attachEvent && e.attachEvent("on" + t, s);
    },
    k = function (e) {
      var t = {};
      return function (s) {
        return s in t || (t[s] = e(s)), t[s];
      };
    };
  function W(e) {
    return " " === e || "\t" === e || "\n" === e || "\f" === e || "\r" === e;
  }
  var Q,
    G,
    H,
    F,
    N,
    O,
    q,
    j,
    V,
    _,
    K,
    J,
    X,
    Y,
    Z,
    ee,
    te = (Q = /^([\d\.]+)(em|vw|px)$/, G = k(function (e) {
      return "return " + function () {
        for (var e = arguments, t = 0, s = e[0]; (++t in e);) s = s.replace(e[t], e[++t]);
        return s;
      }((e || "").toLowerCase(), /\band\b/g, "&&", /,/g, "||", /min-([a-z-\s]+):/g, "e.$1>=", /max-([a-z-\s]+):/g, "e.$1<=", /calc([^)]+)/g, "($1)", /(\d+[\.]*[\d]*)([a-z]+)/g, "($1 * e.$2)", /^(?!(e.[a-z]|[0-9\.&=|><\+\-\*\(\)\/])).*/gi, "") + ";";
    }), function (e, t) {
      var s;
      if (!(e in z)) if (z[e] = !1, t && (s = e.match(Q))) z[e] = s[1] * C[s[2]];else try {
        z[e] = new Function("e", G(e))(C);
      } catch (e) {}
      return z[e];
    }),
    se = function (e, t) {
      return e.w ? (e.cWidth = c.calcListLength(t || "100vw"), e.res = e.w / e.cWidth) : e.res = e.d, e;
    },
    re = function (e) {
      if (a) {
        var s,
          r,
          i,
          n = e || {};
        if (n.elements && 1 === n.elements.nodeType && ("IMG" === n.elements.nodeName.toUpperCase() ? n.elements = [n.elements] : (n.context = n.elements, n.elements = null)), i = (s = n.elements || c.qsa(n.context || t, n.reevaluate || n.reselect ? c.sel : c.selShort)).length) {
          for (c.setupRun(n), L = !0, r = 0; r < i; r++) c.fillImg(s[r], n);
          c.teardownRun(n);
        }
      }
    };
  function ie(e, t) {
    return e.res - t.res;
  }
  function ne(e, t) {
    var s, r, i;
    if (e && t) for (i = c.parseSet(t), e = c.makeUrl(e), s = 0; s < i.length; s++) if (e === c.makeUrl(i[s].url)) {
      r = i[s];
      break;
    }
    return r;
  }
  e.console && console.warn, v in o || (v = "src"), A["image/jpeg"] = !0, A["image/gif"] = !0, A["image/png"] = !0, A["image/svg+xml"] = t.implementation.hasFeature("http://www.w3.org/TR/SVG11/feature#Image", "1.1"), c.ns = ("pf" + new Date().getTime()).substr(0, 9), c.supSrcset = "srcset" in o, c.supSizes = "sizes" in o, c.supPicture = !!e.HTMLPictureElement, c.supSrcset && c.supPicture && !c.supSizes && (H = t.createElement("img"), o.srcset = "data:,a", H.src = "data:,a", c.supSrcset = o.complete === H.complete, c.supPicture = c.supSrcset && c.supPicture), c.supSrcset && !c.supSizes ? (F = "data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==", N = t.createElement("img"), O = function () {
    2 === N.width && (c.supSizes = !0), i = c.supSrcset && !c.supSizes, a = !0, setTimeout(re);
  }, N.onload = O, N.onerror = O, N.setAttribute("sizes", "9px"), N.srcset = F + " 1w,data:image/gif;base64,R0lGODlhAgABAPAAAP///wAAACH5BAAAAAAALAAAAAACAAEAAAICBAoAOw== 9w", N.src = F) : a = !0, c.selShort = "picture>img,img[srcset]", c.sel = c.selShort, c.cfg = m, c.DPR = T || 1, c.u = C, c.types = A, c.setSize = u, c.makeUrl = k(function (e) {
    return R.href = e, R.href;
  }), c.qsa = function (e, t) {
    return "querySelector" in e ? e.querySelectorAll(t) : [];
  }, c.matchesMedia = function () {
    return e.matchMedia && (matchMedia("(min-width: 0.1em)") || {}).matches ? c.matchesMedia = function (e) {
      return !e || matchMedia(e).matches;
    } : c.matchesMedia = c.mMQ, c.matchesMedia.apply(this, arguments);
  }, c.mMQ = function (e) {
    return !e || te(e);
  }, c.calcLength = function (e) {
    var t = te(e, !0) || !1;
    return t < 0 && (t = !1), t;
  }, c.supportsType = function (e) {
    return !e || A[e];
  }, c.parseSize = k(function (e) {
    var t = (e || "").match(S);
    return {
      media: t && t[1],
      length: t && t[2]
    };
  }), c.parseSet = function (e) {
    return e.cands || (e.cands = function (e, t) {
      function s(t) {
        var s,
          r = t.exec(e.substring(o));
        if (r) return s = r[0], o += s.length, s;
      }
      var r,
        i,
        n,
        c,
        a,
        u = e.length,
        o = 0,
        l = [];
      function f() {
        var e,
          s,
          n,
          c,
          a,
          u,
          o,
          f,
          d,
          p = !1,
          A = {};
        for (c = 0; c < i.length; c++) u = (a = i[c])[a.length - 1], o = a.substring(0, a.length - 1), f = parseInt(o, 10), d = parseFloat(o), I.test(o) && "w" === u ? ((e || s) && (p = !0), 0 === f ? p = !0 : e = f) : U.test(o) && "x" === u ? ((e || s || n) && (p = !0), d < 0 ? p = !0 : s = d) : I.test(o) && "h" === u ? ((n || s) && (p = !0), 0 === f ? p = !0 : n = f) : p = !0;
        p || (A.url = r, e && (A.w = e), s && (A.d = s), n && (A.h = n), n || s || e || (A.d = 1), 1 === A.d && (t.has1x = !0), A.set = t, l.push(A));
      }
      function d() {
        for (s(M), n = "", c = "in descriptor";;) {
          if (a = e.charAt(o), "in descriptor" === c) {
            if (W(a)) n && (i.push(n), n = "", c = "after descriptor");else {
              if ("," === a) return o += 1, n && i.push(n), void f();
              if ("(" === a) n += a, c = "in parens";else {
                if ("" === a) return n && i.push(n), void f();
                n += a;
              }
            }
          } else if ("in parens" === c) {
            if (")" === a) n += a, c = "in descriptor";else {
              if ("" === a) return i.push(n), void f();
              n += a;
            }
          } else if ("after descriptor" === c) if (W(a)) ;else {
            if ("" === a) return void f();
            c = "in descriptor", o -= 1;
          }
          o += 1;
        }
      }
      for (;;) {
        if (s(P), o >= u) return l;
        r = s(D), i = [], "," === r.slice(-1) ? (r = r.replace(B, ""), f()) : d();
      }
    }(e.srcset, e)), e.cands;
  }, c.getEmValue = function () {
    var e;
    if (!r && (e = t.body)) {
      var s = t.createElement("div"),
        i = p.style.cssText,
        n = e.style.cssText;
      s.style.cssText = "position:absolute;left:0;visibility:hidden;display:block;padding:0;border:none;font-size:1em;width:1em;overflow:hidden;clip:rect(0px, 0px, 0px, 0px)", p.style.cssText = y, e.style.cssText = y, e.appendChild(s), r = s.offsetWidth, e.removeChild(s), r = parseFloat(r, 10), p.style.cssText = i, e.style.cssText = n;
    }
    return r || 16;
  }, c.calcListLength = function (e) {
    if (!(e in b) || m.uT) {
      var t = c.calcLength(function (e) {
        var t,
          s,
          r,
          i,
          n,
          a,
          u,
          o = /^(?:[+-]?[0-9]+|[0-9]*\.[0-9]+)(?:[eE][+-]?[0-9]+)?(?:ch|cm|em|ex|in|mm|pc|pt|px|rem|vh|vmin|vmax|vw)$/i,
          l = /^calc\((?:[0-9a-z \.\+\-\*\/\(\)]+)\)$/i;
        for (r = (s = function (e) {
          var t,
            s = "",
            r = [],
            i = [],
            n = 0,
            c = 0,
            a = !1;
          function u() {
            s && (r.push(s), s = "");
          }
          function o() {
            r[0] && (i.push(r), r = []);
          }
          for (;;) {
            if ("" === (t = e.charAt(c))) return u(), o(), i;
            if (a) {
              if ("*" === t && "/" === e[c + 1]) {
                a = !1, c += 2, u();
                continue;
              }
              c += 1;
            } else {
              if (W(t)) {
                if (e.charAt(c - 1) && W(e.charAt(c - 1)) || !s) {
                  c += 1;
                  continue;
                }
                if (0 === n) {
                  u(), c += 1;
                  continue;
                }
                t = " ";
              } else if ("(" === t) n += 1;else if (")" === t) n -= 1;else {
                if ("," === t) {
                  u(), o(), c += 1;
                  continue;
                }
                if ("/" === t && "*" === e.charAt(c + 1)) {
                  a = !0, c += 2;
                  continue;
                }
              }
              s += t, c += 1;
            }
          }
        }(e)).length, t = 0; t < r; t++) if (n = (i = s[t])[i.length - 1], u = n, o.test(u) && parseFloat(u) >= 0 || l.test(u) || "0" === u || "-0" === u || "+0" === u) {
          if (a = n, i.pop(), 0 === i.length) return a;
          if (i = i.join(" "), c.matchesMedia(i)) return a;
        }
        return "100vw";
      }(e));
      b[e] = t || C.width;
    }
    return b[e];
  }, c.setRes = function (e) {
    var t;
    if (e) for (var s = 0, r = (t = c.parseSet(e)).length; s < r; s++) se(t[s], e.sizes);
    return t;
  }, c.setRes.res = se, c.applySetCandidate = function (e, t) {
    if (e.length) {
      var s,
        r,
        i,
        n,
        a,
        u,
        o,
        l,
        f,
        d,
        p,
        A,
        h,
        w,
        S,
        x,
        y = t[c.ns],
        E = c.DPR;
      if (u = y.curSrc || t[v], (o = y.curCan || function (e, t, s) {
        var r;
        return !s && t && (s = (s = e[c.ns].sets) && s[s.length - 1]), (r = ne(t, s)) && (t = c.makeUrl(t), e[c.ns].curSrc = t, e[c.ns].curCan = r, r.res || se(r, r.set.sizes)), r;
      }(t, u, e[0].set)) && o.set === e[0].set && ((f = g && !t.complete && o.res - .1 > E) || (o.cached = !0, o.res >= E && (a = o))), !a) for (e.sort(ie), a = e[(n = e.length) - 1], r = 0; r < n; r++) if ((s = e[r]).res >= E) {
        a = e[i = r - 1] && (f || u !== c.makeUrl(s.url)) && (d = e[i].res, p = s.res, A = E, h = e[i].cached, w = void 0, S = void 0, x = void 0, "saveData" === m.algorithm ? d > 2.7 ? x = A + 1 : (S = (p - A) * (w = Math.pow(d - .6, 1.5)), h && (S += .1 * w), x = d + S) : x = A > 1 ? Math.sqrt(d * p) : d, x > A) ? e[i] : s;
        break;
      }
      a && (l = c.makeUrl(a.url), y.curSrc = l, y.curCan = a, l !== u && c.setSrc(t, a), c.setSize(t));
    }
  }, c.setSrc = function (e, t) {
    var s;
    e.src = t.url, "image/svg+xml" === t.set.type && (s = e.style.width, e.style.width = e.offsetWidth + 1 + "px", e.offsetWidth + 1 && (e.style.width = s));
  }, c.getSet = function (e) {
    var t,
      s,
      r,
      i = !1,
      n = e[c.ns].sets;
    for (t = 0; t < n.length && !i; t++) if ((s = n[t]).srcset && c.matchesMedia(s.media) && (r = c.supportsType(s.type))) {
      "pending" === r && (s = r), i = s;
      break;
    }
    return i;
  }, c.parseSets = function (e, t, s) {
    var r,
      n,
      a,
      u,
      o = t && "PICTURE" === t.nodeName.toUpperCase(),
      p = e[c.ns];
    (void 0 === p.src || s.src) && (p.src = l.call(e, "src"), p.src ? f.call(e, "data-pfsrc", p.src) : d.call(e, "data-pfsrc")), (void 0 === p.srcset || s.srcset || !c.supSrcset || e.srcset) && (r = l.call(e, "srcset"), p.srcset = r, u = !0), p.sets = [], o && (p.pic = !0, function (e, t) {
      var s,
        r,
        i,
        n,
        a = e.getElementsByTagName("source");
      for (s = 0, r = a.length; s < r; s++) (i = a[s])[c.ns] = !0, (n = i.getAttribute("srcset")) && t.push({
        srcset: n,
        media: i.getAttribute("media"),
        type: i.getAttribute("type"),
        sizes: i.getAttribute("sizes")
      });
    }(t, p.sets)), p.srcset ? (n = {
      srcset: p.srcset,
      sizes: l.call(e, "sizes")
    }, p.sets.push(n), (a = (i || p.src) && w.test(p.srcset || "")) || !p.src || ne(p.src, n) || n.has1x || (n.srcset += ", " + p.src, n.cands.push({
      url: p.src,
      d: 1,
      set: n
    }))) : p.src && p.sets.push({
      srcset: p.src,
      sizes: null
    }), p.curCan = null, p.curSrc = void 0, p.supported = !(o || n && !c.supSrcset || a && !c.supSizes), u && c.supSrcset && !p.supported && (r ? (f.call(e, "data-pfsrcset", r), e.srcset = "") : d.call(e, "data-pfsrcset")), p.supported && !p.srcset && (!p.src && e.src || e.src !== c.makeUrl(p.src)) && (null === p.src ? e.removeAttribute("src") : e.src = p.src), p.parsed = !0;
  }, c.fillImg = function (e, t) {
    var s,
      r = t.reselect || t.reevaluate;
    e[c.ns] || (e[c.ns] = {}), s = e[c.ns], (r || s.evaled !== n) && (s.parsed && !t.reevaluate || c.parseSets(e, e.parentNode, t), s.supported ? s.evaled = n : function (e) {
      var t,
        s = c.getSet(e),
        r = !1;
      "pending" !== s && (r = n, s && (t = c.setRes(s), c.applySetCandidate(t, e))), e[c.ns].evaled = r;
    }(e));
  }, c.setupRun = function () {
    L && !E && T === e.devicePixelRatio || (E = !1, T = e.devicePixelRatio, z = {}, b = {}, c.DPR = T || 1, C.width = Math.max(e.innerWidth || 0, p.clientWidth), C.height = Math.max(e.innerHeight || 0, p.clientHeight), C.vw = C.width / 100, C.vh = C.height / 100, n = [C.height, C.width, T].join("-"), C.em = c.getEmValue(), C.rem = C.em);
  }, c.supPicture ? (re = u, c.fillImg = u) : (X = e.attachEvent ? /d$|^c/ : /d$|^c|^i/, Y = function () {
    var e = t.readyState || "";
    Z = setTimeout(Y, "loading" === e ? 200 : 999), t.body && (c.fillImgs(), (q = q || X.test(e)) && clearTimeout(Z));
  }, Z = setTimeout(Y, t.body ? 9 : 99), ee = p.clientHeight, $(e, "resize", (j = function () {
    E = Math.max(e.innerWidth || 0, p.clientWidth) !== C.width || p.clientHeight !== ee, ee = p.clientHeight, E && c.fillImgs();
  }, V = 99, J = function () {
    var e = new Date() - K;
    e < V ? _ = setTimeout(J, V - e) : (_ = null, j());
  }, function () {
    K = new Date(), _ || (_ = setTimeout(J, V));
  })), $(t, "readystatechange", Y)), c.picturefill = re, c.fillImgs = re, c.teardownRun = u, re._ = c, e.picturefillCFG = {
    pf: c,
    push: function (e) {
      var t = e.shift();
      "function" == typeof c[t] ? c[t].apply(c, e) : (m[t] = e[0], L && c.fillImgs({
        reselect: !0
      }));
    }
  };
  for (; x && x.length;) e.picturefillCFG.push(x.shift());
  e.picturefill = re,  true && "object" == typeof module.exports ? module.exports = re :  true && !(__WEBPACK_AMD_DEFINE_RESULT__ = (function () {
    return re;
  }).call(exports, __webpack_require__, exports, module),
		__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__)), c.supPicture || (A["image/webp"] = function (t, s) {
    var r = new e.Image();
    return r.onerror = function () {
      A[t] = !1, re();
    }, r.onload = function () {
      A[t] = 1 === r.width, re();
    }, r.src = s, "pending";
  }("image/webp", "data:image/webp;base64,UklGRkoAAABXRUJQVlA4WAoAAAAQAAAAAAAAAAAAQUxQSAwAAAABBxAR/Q9ERP8DAABWUDggGAAAADABAJ0BKgEAAQADADQlpAADcAD++/1QAA=="));
}(window, document);

/***/ }),

/***/ "./source/js/vendor/swiper.js":
/*!************************************!*\
  !*** ./source/js/vendor/swiper.js ***!
  \************************************/
/***/ (function(module) {

!function (e, t) {
   true ? module.exports = t() : 0;
}(this, function () {
  "use strict";

  function e(e, t) {
    for (var i = 0; i < t.length; i++) {
      var s = t[i];
      s.enumerable = s.enumerable || !1, s.configurable = !0, "value" in s && (s.writable = !0), Object.defineProperty(e, s.key, s);
    }
  }
  function t() {
    return (t = Object.assign || function (e) {
      for (var t = 1; t < arguments.length; t++) {
        var i = arguments[t];
        for (var s in i) Object.prototype.hasOwnProperty.call(i, s) && (e[s] = i[s]);
      }
      return e;
    }).apply(this, arguments);
  }
  function i(e) {
    return null !== e && "object" == typeof e && "constructor" in e && e.constructor === Object;
  }
  function s(e, t) {
    void 0 === e && (e = {}), void 0 === t && (t = {}), Object.keys(t).forEach(function (a) {
      void 0 === e[a] ? e[a] = t[a] : i(t[a]) && i(e[a]) && Object.keys(t[a]).length > 0 && s(e[a], t[a]);
    });
  }
  var a = {
    body: {},
    addEventListener: function () {},
    removeEventListener: function () {},
    activeElement: {
      blur: function () {},
      nodeName: ""
    },
    querySelector: function () {
      return null;
    },
    querySelectorAll: function () {
      return [];
    },
    getElementById: function () {
      return null;
    },
    createEvent: function () {
      return {
        initEvent: function () {}
      };
    },
    createElement: function () {
      return {
        children: [],
        childNodes: [],
        style: {},
        setAttribute: function () {},
        getElementsByTagName: function () {
          return [];
        }
      };
    },
    createElementNS: function () {
      return {};
    },
    importNode: function () {
      return null;
    },
    location: {
      hash: "",
      host: "",
      hostname: "",
      href: "",
      origin: "",
      pathname: "",
      protocol: "",
      search: ""
    }
  };
  function r() {
    var e = "undefined" != typeof document ? document : {};
    return s(e, a), e;
  }
  var n = {
    document: a,
    navigator: {
      userAgent: ""
    },
    location: {
      hash: "",
      host: "",
      hostname: "",
      href: "",
      origin: "",
      pathname: "",
      protocol: "",
      search: ""
    },
    history: {
      replaceState: function () {},
      pushState: function () {},
      go: function () {},
      back: function () {}
    },
    CustomEvent: function () {
      return this;
    },
    addEventListener: function () {},
    removeEventListener: function () {},
    getComputedStyle: function () {
      return {
        getPropertyValue: function () {
          return "";
        }
      };
    },
    Image: function () {},
    Date: function () {},
    screen: {},
    setTimeout: function () {},
    clearTimeout: function () {},
    matchMedia: function () {
      return {};
    },
    requestAnimationFrame: function (e) {
      return "undefined" == typeof setTimeout ? (e(), null) : setTimeout(e, 0);
    },
    cancelAnimationFrame: function (e) {
      "undefined" != typeof setTimeout && clearTimeout(e);
    }
  };
  function l() {
    var e = "undefined" != typeof window ? window : {};
    return s(e, n), e;
  }
  function o(e) {
    return (o = Object.setPrototypeOf ? Object.getPrototypeOf : function (e) {
      return e.__proto__ || Object.getPrototypeOf(e);
    })(e);
  }
  function d(e, t) {
    return (d = Object.setPrototypeOf || function (e, t) {
      return e.__proto__ = t, e;
    })(e, t);
  }
  function h() {
    if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
    if (Reflect.construct.sham) return !1;
    if ("function" == typeof Proxy) return !0;
    try {
      return Date.prototype.toString.call(Reflect.construct(Date, [], function () {})), !0;
    } catch (e) {
      return !1;
    }
  }
  function p(e, t, i) {
    return (p = h() ? Reflect.construct : function (e, t, i) {
      var s = [null];
      s.push.apply(s, t);
      var a = new (Function.bind.apply(e, s))();
      return i && d(a, i.prototype), a;
    }).apply(null, arguments);
  }
  function u(e) {
    var t = "function" == typeof Map ? new Map() : void 0;
    return (u = function (e) {
      if (null === e || (i = e, -1 === Function.toString.call(i).indexOf("[native code]"))) return e;
      var i;
      if ("function" != typeof e) throw new TypeError("Super expression must either be null or a function");
      if (void 0 !== t) {
        if (t.has(e)) return t.get(e);
        t.set(e, s);
      }
      function s() {
        return p(e, arguments, o(this).constructor);
      }
      return s.prototype = Object.create(e.prototype, {
        constructor: {
          value: s,
          enumerable: !1,
          writable: !0,
          configurable: !0
        }
      }), d(s, e);
    })(e);
  }
  var c = function (e) {
    var t, i;
    function s(t) {
      var i, s, a;
      return i = e.call.apply(e, [this].concat(t)) || this, s = function (e) {
        if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        return e;
      }(i), a = s.__proto__, Object.defineProperty(s, "__proto__", {
        get: function () {
          return a;
        },
        set: function (e) {
          a.__proto__ = e;
        }
      }), i;
    }
    return i = e, (t = s).prototype = Object.create(i.prototype), t.prototype.constructor = t, t.__proto__ = i, s;
  }(u(Array));
  function f(e) {
    void 0 === e && (e = []);
    var t = [];
    return e.forEach(function (e) {
      Array.isArray(e) ? t.push.apply(t, f(e)) : t.push(e);
    }), t;
  }
  function v(e, t) {
    return Array.prototype.filter.call(e, t);
  }
  function m(e, t) {
    var i = l(),
      s = r(),
      a = [];
    if (!t && e instanceof c) return e;
    if (!e) return new c(a);
    if ("string" == typeof e) {
      var n = e.trim();
      if (n.indexOf("<") >= 0 && n.indexOf(">") >= 0) {
        var o = "div";
        0 === n.indexOf("<li") && (o = "ul"), 0 === n.indexOf("<tr") && (o = "tbody"), 0 !== n.indexOf("<td") && 0 !== n.indexOf("<th") || (o = "tr"), 0 === n.indexOf("<tbody") && (o = "table"), 0 === n.indexOf("<option") && (o = "select");
        var d = s.createElement(o);
        d.innerHTML = n;
        for (var h = 0; h < d.childNodes.length; h += 1) a.push(d.childNodes[h]);
      } else a = function (e, t) {
        if ("string" != typeof e) return [e];
        for (var i = [], s = t.querySelectorAll(e), a = 0; a < s.length; a += 1) i.push(s[a]);
        return i;
      }(e.trim(), t || s);
    } else if (e.nodeType || e === i || e === s) a.push(e);else if (Array.isArray(e)) {
      if (e instanceof c) return e;
      a = e;
    }
    return new c(function (e) {
      for (var t = [], i = 0; i < e.length; i += 1) -1 === t.indexOf(e[i]) && t.push(e[i]);
      return t;
    }(a));
  }
  m.fn = c.prototype;
  var g,
    w,
    y,
    b = {
      addClass: function () {
        for (var e = arguments.length, t = new Array(e), i = 0; i < e; i++) t[i] = arguments[i];
        var s = f(t.map(function (e) {
          return e.split(" ");
        }));
        return this.forEach(function (e) {
          var t;
          (t = e.classList).add.apply(t, s);
        }), this;
      },
      removeClass: function () {
        for (var e = arguments.length, t = new Array(e), i = 0; i < e; i++) t[i] = arguments[i];
        var s = f(t.map(function (e) {
          return e.split(" ");
        }));
        return this.forEach(function (e) {
          var t;
          (t = e.classList).remove.apply(t, s);
        }), this;
      },
      hasClass: function () {
        for (var e = arguments.length, t = new Array(e), i = 0; i < e; i++) t[i] = arguments[i];
        var s = f(t.map(function (e) {
          return e.split(" ");
        }));
        return v(this, function (e) {
          return s.filter(function (t) {
            return e.classList.contains(t);
          }).length > 0;
        }).length > 0;
      },
      toggleClass: function () {
        for (var e = arguments.length, t = new Array(e), i = 0; i < e; i++) t[i] = arguments[i];
        var s = f(t.map(function (e) {
          return e.split(" ");
        }));
        this.forEach(function (e) {
          s.forEach(function (t) {
            e.classList.toggle(t);
          });
        });
      },
      attr: function (e, t) {
        if (1 === arguments.length && "string" == typeof e) return this[0] ? this[0].getAttribute(e) : void 0;
        for (var i = 0; i < this.length; i += 1) if (2 === arguments.length) this[i].setAttribute(e, t);else for (var s in e) this[i][s] = e[s], this[i].setAttribute(s, e[s]);
        return this;
      },
      removeAttr: function (e) {
        for (var t = 0; t < this.length; t += 1) this[t].removeAttribute(e);
        return this;
      },
      transform: function (e) {
        for (var t = 0; t < this.length; t += 1) this[t].style.transform = e;
        return this;
      },
      transition: function (e) {
        for (var t = 0; t < this.length; t += 1) this[t].style.transition = "string" != typeof e ? e + "ms" : e;
        return this;
      },
      on: function () {
        for (var e = arguments.length, t = new Array(e), i = 0; i < e; i++) t[i] = arguments[i];
        var s = t[0],
          a = t[1],
          r = t[2],
          n = t[3];
        function l(e) {
          var t = e.target;
          if (t) {
            var i = e.target.dom7EventData || [];
            if (i.indexOf(e) < 0 && i.unshift(e), m(t).is(a)) r.apply(t, i);else for (var s = m(t).parents(), n = 0; n < s.length; n += 1) m(s[n]).is(a) && r.apply(s[n], i);
          }
        }
        function o(e) {
          var t = e && e.target && e.target.dom7EventData || [];
          t.indexOf(e) < 0 && t.unshift(e), r.apply(this, t);
        }
        "function" == typeof t[1] && (s = t[0], r = t[1], n = t[2], a = void 0), n || (n = !1);
        for (var d, h = s.split(" "), p = 0; p < this.length; p += 1) {
          var u = this[p];
          if (a) for (d = 0; d < h.length; d += 1) {
            var c = h[d];
            u.dom7LiveListeners || (u.dom7LiveListeners = {}), u.dom7LiveListeners[c] || (u.dom7LiveListeners[c] = []), u.dom7LiveListeners[c].push({
              listener: r,
              proxyListener: l
            }), u.addEventListener(c, l, n);
          } else for (d = 0; d < h.length; d += 1) {
            var f = h[d];
            u.dom7Listeners || (u.dom7Listeners = {}), u.dom7Listeners[f] || (u.dom7Listeners[f] = []), u.dom7Listeners[f].push({
              listener: r,
              proxyListener: o
            }), u.addEventListener(f, o, n);
          }
        }
        return this;
      },
      off: function () {
        for (var e = arguments.length, t = new Array(e), i = 0; i < e; i++) t[i] = arguments[i];
        var s = t[0],
          a = t[1],
          r = t[2],
          n = t[3];
        "function" == typeof t[1] && (s = t[0], r = t[1], n = t[2], a = void 0), n || (n = !1);
        for (var l = s.split(" "), o = 0; o < l.length; o += 1) for (var d = l[o], h = 0; h < this.length; h += 1) {
          var p = this[h],
            u = void 0;
          if (!a && p.dom7Listeners ? u = p.dom7Listeners[d] : a && p.dom7LiveListeners && (u = p.dom7LiveListeners[d]), u && u.length) for (var c = u.length - 1; c >= 0; c -= 1) {
            var f = u[c];
            r && f.listener === r || r && f.listener && f.listener.dom7proxy && f.listener.dom7proxy === r ? (p.removeEventListener(d, f.proxyListener, n), u.splice(c, 1)) : r || (p.removeEventListener(d, f.proxyListener, n), u.splice(c, 1));
          }
        }
        return this;
      },
      trigger: function () {
        for (var e = l(), t = arguments.length, i = new Array(t), s = 0; s < t; s++) i[s] = arguments[s];
        for (var a = i[0].split(" "), r = i[1], n = 0; n < a.length; n += 1) for (var o = a[n], d = 0; d < this.length; d += 1) {
          var h = this[d];
          if (e.CustomEvent) {
            var p = new e.CustomEvent(o, {
              detail: r,
              bubbles: !0,
              cancelable: !0
            });
            h.dom7EventData = i.filter(function (e, t) {
              return t > 0;
            }), h.dispatchEvent(p), h.dom7EventData = [], delete h.dom7EventData;
          }
        }
        return this;
      },
      transitionEnd: function (e) {
        var t = this;
        return e && t.on("transitionend", function i(s) {
          s.target === this && (e.call(this, s), t.off("transitionend", i));
        }), this;
      },
      outerWidth: function (e) {
        if (this.length > 0) {
          if (e) {
            var t = this.styles();
            return this[0].offsetWidth + parseFloat(t.getPropertyValue("margin-right")) + parseFloat(t.getPropertyValue("margin-left"));
          }
          return this[0].offsetWidth;
        }
        return null;
      },
      outerHeight: function (e) {
        if (this.length > 0) {
          if (e) {
            var t = this.styles();
            return this[0].offsetHeight + parseFloat(t.getPropertyValue("margin-top")) + parseFloat(t.getPropertyValue("margin-bottom"));
          }
          return this[0].offsetHeight;
        }
        return null;
      },
      styles: function () {
        var e = l();
        return this[0] ? e.getComputedStyle(this[0], null) : {};
      },
      offset: function () {
        if (this.length > 0) {
          var e = l(),
            t = r(),
            i = this[0],
            s = i.getBoundingClientRect(),
            a = t.body,
            n = i.clientTop || a.clientTop || 0,
            o = i.clientLeft || a.clientLeft || 0,
            d = i === e ? e.scrollY : i.scrollTop,
            h = i === e ? e.scrollX : i.scrollLeft;
          return {
            top: s.top + d - n,
            left: s.left + h - o
          };
        }
        return null;
      },
      css: function (e, t) {
        var i,
          s = l();
        if (1 === arguments.length) {
          if ("string" != typeof e) {
            for (i = 0; i < this.length; i += 1) for (var a in e) this[i].style[a] = e[a];
            return this;
          }
          if (this[0]) return s.getComputedStyle(this[0], null).getPropertyValue(e);
        }
        if (2 === arguments.length && "string" == typeof e) {
          for (i = 0; i < this.length; i += 1) this[i].style[e] = t;
          return this;
        }
        return this;
      },
      each: function (e) {
        return e ? (this.forEach(function (t, i) {
          e.apply(t, [t, i]);
        }), this) : this;
      },
      html: function (e) {
        if (void 0 === e) return this[0] ? this[0].innerHTML : null;
        for (var t = 0; t < this.length; t += 1) this[t].innerHTML = e;
        return this;
      },
      text: function (e) {
        if (void 0 === e) return this[0] ? this[0].textContent.trim() : null;
        for (var t = 0; t < this.length; t += 1) this[t].textContent = e;
        return this;
      },
      is: function (e) {
        var t,
          i,
          s = l(),
          a = r(),
          n = this[0];
        if (!n || void 0 === e) return !1;
        if ("string" == typeof e) {
          if (n.matches) return n.matches(e);
          if (n.webkitMatchesSelector) return n.webkitMatchesSelector(e);
          if (n.msMatchesSelector) return n.msMatchesSelector(e);
          for (t = m(e), i = 0; i < t.length; i += 1) if (t[i] === n) return !0;
          return !1;
        }
        if (e === a) return n === a;
        if (e === s) return n === s;
        if (e.nodeType || e instanceof c) {
          for (t = e.nodeType ? [e] : e, i = 0; i < t.length; i += 1) if (t[i] === n) return !0;
          return !1;
        }
        return !1;
      },
      index: function () {
        var e,
          t = this[0];
        if (t) {
          for (e = 0; null !== (t = t.previousSibling);) 1 === t.nodeType && (e += 1);
          return e;
        }
      },
      eq: function (e) {
        if (void 0 === e) return this;
        var t = this.length;
        if (e > t - 1) return m([]);
        if (e < 0) {
          var i = t + e;
          return m(i < 0 ? [] : [this[i]]);
        }
        return m([this[e]]);
      },
      append: function () {
        for (var e, t = r(), i = 0; i < arguments.length; i += 1) {
          e = i < 0 || arguments.length <= i ? void 0 : arguments[i];
          for (var s = 0; s < this.length; s += 1) if ("string" == typeof e) {
            var a = t.createElement("div");
            for (a.innerHTML = e; a.firstChild;) this[s].appendChild(a.firstChild);
          } else if (e instanceof c) for (var n = 0; n < e.length; n += 1) this[s].appendChild(e[n]);else this[s].appendChild(e);
        }
        return this;
      },
      prepend: function (e) {
        var t,
          i,
          s = r();
        for (t = 0; t < this.length; t += 1) if ("string" == typeof e) {
          var a = s.createElement("div");
          for (a.innerHTML = e, i = a.childNodes.length - 1; i >= 0; i -= 1) this[t].insertBefore(a.childNodes[i], this[t].childNodes[0]);
        } else if (e instanceof c) for (i = 0; i < e.length; i += 1) this[t].insertBefore(e[i], this[t].childNodes[0]);else this[t].insertBefore(e, this[t].childNodes[0]);
        return this;
      },
      next: function (e) {
        return this.length > 0 ? e ? this[0].nextElementSibling && m(this[0].nextElementSibling).is(e) ? m([this[0].nextElementSibling]) : m([]) : this[0].nextElementSibling ? m([this[0].nextElementSibling]) : m([]) : m([]);
      },
      nextAll: function (e) {
        var t = [],
          i = this[0];
        if (!i) return m([]);
        for (; i.nextElementSibling;) {
          var s = i.nextElementSibling;
          e ? m(s).is(e) && t.push(s) : t.push(s), i = s;
        }
        return m(t);
      },
      prev: function (e) {
        if (this.length > 0) {
          var t = this[0];
          return e ? t.previousElementSibling && m(t.previousElementSibling).is(e) ? m([t.previousElementSibling]) : m([]) : t.previousElementSibling ? m([t.previousElementSibling]) : m([]);
        }
        return m([]);
      },
      prevAll: function (e) {
        var t = [],
          i = this[0];
        if (!i) return m([]);
        for (; i.previousElementSibling;) {
          var s = i.previousElementSibling;
          e ? m(s).is(e) && t.push(s) : t.push(s), i = s;
        }
        return m(t);
      },
      parent: function (e) {
        for (var t = [], i = 0; i < this.length; i += 1) null !== this[i].parentNode && (e ? m(this[i].parentNode).is(e) && t.push(this[i].parentNode) : t.push(this[i].parentNode));
        return m(t);
      },
      parents: function (e) {
        for (var t = [], i = 0; i < this.length; i += 1) for (var s = this[i].parentNode; s;) e ? m(s).is(e) && t.push(s) : t.push(s), s = s.parentNode;
        return m(t);
      },
      closest: function (e) {
        var t = this;
        return void 0 === e ? m([]) : (t.is(e) || (t = t.parents(e).eq(0)), t);
      },
      find: function (e) {
        for (var t = [], i = 0; i < this.length; i += 1) for (var s = this[i].querySelectorAll(e), a = 0; a < s.length; a += 1) t.push(s[a]);
        return m(t);
      },
      children: function (e) {
        for (var t = [], i = 0; i < this.length; i += 1) for (var s = this[i].children, a = 0; a < s.length; a += 1) e && !m(s[a]).is(e) || t.push(s[a]);
        return m(t);
      },
      filter: function (e) {
        return m(v(this, e));
      },
      remove: function () {
        for (var e = 0; e < this.length; e += 1) this[e].parentNode && this[e].parentNode.removeChild(this[e]);
        return this;
      }
    };
  function E(e, t) {
    return void 0 === t && (t = 0), setTimeout(e, t);
  }
  function x() {
    return Date.now();
  }
  function T(e, t) {
    void 0 === t && (t = "x");
    var i,
      s,
      a,
      r = l(),
      n = r.getComputedStyle(e, null);
    return r.WebKitCSSMatrix ? ((s = n.transform || n.webkitTransform).split(",").length > 6 && (s = s.split(", ").map(function (e) {
      return e.replace(",", ".");
    }).join(", ")), a = new r.WebKitCSSMatrix("none" === s ? "" : s)) : i = (a = n.MozTransform || n.OTransform || n.MsTransform || n.msTransform || n.transform || n.getPropertyValue("transform").replace("translate(", "matrix(1, 0, 0, 1,")).toString().split(","), "x" === t && (s = r.WebKitCSSMatrix ? a.m41 : 16 === i.length ? parseFloat(i[12]) : parseFloat(i[4])), "y" === t && (s = r.WebKitCSSMatrix ? a.m42 : 16 === i.length ? parseFloat(i[13]) : parseFloat(i[5])), s || 0;
  }
  function C(e) {
    return "object" == typeof e && null !== e && e.constructor && e.constructor === Object;
  }
  function S() {
    for (var e = Object(arguments.length <= 0 ? void 0 : arguments[0]), t = 1; t < arguments.length; t += 1) {
      var i = t < 0 || arguments.length <= t ? void 0 : arguments[t];
      if (null != i) for (var s = Object.keys(Object(i)), a = 0, r = s.length; a < r; a += 1) {
        var n = s[a],
          l = Object.getOwnPropertyDescriptor(i, n);
        void 0 !== l && l.enumerable && (C(e[n]) && C(i[n]) ? S(e[n], i[n]) : !C(e[n]) && C(i[n]) ? (e[n] = {}, S(e[n], i[n])) : e[n] = i[n]);
      }
    }
    return e;
  }
  function M(e, t) {
    Object.keys(t).forEach(function (i) {
      C(t[i]) && Object.keys(t[i]).forEach(function (s) {
        "function" == typeof t[i][s] && (t[i][s] = t[i][s].bind(e));
      }), e[i] = t[i];
    });
  }
  function z() {
    return g || (g = function () {
      var e = l(),
        t = r();
      return {
        touch: !!("ontouchstart" in e || e.DocumentTouch && t instanceof e.DocumentTouch),
        pointerEvents: !!e.PointerEvent && "maxTouchPoints" in e.navigator && e.navigator.maxTouchPoints >= 0,
        observer: "MutationObserver" in e || "WebkitMutationObserver" in e,
        passiveListener: function () {
          var t = !1;
          try {
            var i = Object.defineProperty({}, "passive", {
              get: function () {
                t = !0;
              }
            });
            e.addEventListener("testPassiveListener", null, i);
          } catch (e) {}
          return t;
        }(),
        gestures: "ongesturestart" in e
      };
    }()), g;
  }
  function P(e) {
    return void 0 === e && (e = {}), w || (w = function (e) {
      var t = (void 0 === e ? {} : e).userAgent,
        i = z(),
        s = l(),
        a = s.navigator.platform,
        r = t || s.navigator.userAgent,
        n = {
          ios: !1,
          android: !1
        },
        o = s.screen.width,
        d = s.screen.height,
        h = r.match(/(Android);?[\s\/]+([\d.]+)?/),
        p = r.match(/(iPad).*OS\s([\d_]+)/),
        u = r.match(/(iPod)(.*OS\s([\d_]+))?/),
        c = !p && r.match(/(iPhone\sOS|iOS)\s([\d_]+)/),
        f = "Win32" === a,
        v = "MacIntel" === a;
      return !p && v && i.touch && ["1024x1366", "1366x1024", "834x1194", "1194x834", "834x1112", "1112x834", "768x1024", "1024x768", "820x1180", "1180x820", "810x1080", "1080x810"].indexOf(o + "x" + d) >= 0 && ((p = r.match(/(Version)\/([\d.]+)/)) || (p = [0, 1, "13_0_0"]), v = !1), h && !f && (n.os = "android", n.android = !0), (p || c || u) && (n.os = "ios", n.ios = !0), n;
    }(e)), w;
  }
  function k() {
    return y || (y = function () {
      var e,
        t = l();
      return {
        isEdge: !!t.navigator.userAgent.match(/Edge/g),
        isSafari: (e = t.navigator.userAgent.toLowerCase(), e.indexOf("safari") >= 0 && e.indexOf("chrome") < 0 && e.indexOf("android") < 0),
        isWebView: /(iPhone|iPod|iPad).*AppleWebKit(?!.*Safari)/i.test(t.navigator.userAgent)
      };
    }()), y;
  }
  Object.keys(b).forEach(function (e) {
    m.fn[e] = b[e];
  });
  var $ = {
      name: "resize",
      create: function () {
        var e = this;
        S(e, {
          resize: {
            resizeHandler: function () {
              e && !e.destroyed && e.initialized && (e.emit("beforeResize"), e.emit("resize"));
            },
            orientationChangeHandler: function () {
              e && !e.destroyed && e.initialized && e.emit("orientationchange");
            }
          }
        });
      },
      on: {
        init: function (e) {
          var t = l();
          t.addEventListener("resize", e.resize.resizeHandler), t.addEventListener("orientationchange", e.resize.orientationChangeHandler);
        },
        destroy: function (e) {
          var t = l();
          t.removeEventListener("resize", e.resize.resizeHandler), t.removeEventListener("orientationchange", e.resize.orientationChangeHandler);
        }
      }
    },
    L = {
      attach: function (e, t) {
        void 0 === t && (t = {});
        var i = l(),
          s = this,
          a = new (i.MutationObserver || i.WebkitMutationObserver)(function (e) {
            if (1 !== e.length) {
              var t = function () {
                s.emit("observerUpdate", e[0]);
              };
              i.requestAnimationFrame ? i.requestAnimationFrame(t) : i.setTimeout(t, 0);
            } else s.emit("observerUpdate", e[0]);
          });
        a.observe(e, {
          attributes: void 0 === t.attributes || t.attributes,
          childList: void 0 === t.childList || t.childList,
          characterData: void 0 === t.characterData || t.characterData
        }), s.observer.observers.push(a);
      },
      init: function () {
        if (this.support.observer && this.params.observer) {
          if (this.params.observeParents) for (var e = this.$el.parents(), t = 0; t < e.length; t += 1) this.observer.attach(e[t]);
          this.observer.attach(this.$el[0], {
            childList: this.params.observeSlideChildren
          }), this.observer.attach(this.$wrapperEl[0], {
            attributes: !1
          });
        }
      },
      destroy: function () {
        this.observer.observers.forEach(function (e) {
          e.disconnect();
        }), this.observer.observers = [];
      }
    },
    I = {
      name: "observer",
      params: {
        observer: !1,
        observeParents: !1,
        observeSlideChildren: !1
      },
      create: function () {
        M(this, {
          observer: t(t({}, L), {}, {
            observers: []
          })
        });
      },
      on: {
        init: function (e) {
          e.observer.init();
        },
        destroy: function (e) {
          e.observer.destroy();
        }
      }
    };
  function O(e) {
    var t = r(),
      i = l(),
      s = this.touchEventsData,
      a = this.params,
      n = this.touches;
    if (!this.animating || !a.preventInteractionOnTransition) {
      var o = e;
      o.originalEvent && (o = o.originalEvent);
      var d = m(o.target);
      if ("wrapper" !== a.touchEventsTarget || d.closest(this.wrapperEl).length) if (s.isTouchEvent = "touchstart" === o.type, s.isTouchEvent || !("which" in o) || 3 !== o.which) if (!(!s.isTouchEvent && "button" in o && o.button > 0)) if (!s.isTouched || !s.isMoved) if (!!a.noSwipingClass && "" !== a.noSwipingClass && o.target && o.target.shadowRoot && e.path && e.path[0] && (d = m(e.path[0])), a.noSwiping && d.closest(a.noSwipingSelector ? a.noSwipingSelector : "." + a.noSwipingClass)[0]) this.allowClick = !0;else if (!a.swipeHandler || d.closest(a.swipeHandler)[0]) {
        n.currentX = "touchstart" === o.type ? o.targetTouches[0].pageX : o.pageX, n.currentY = "touchstart" === o.type ? o.targetTouches[0].pageY : o.pageY;
        var h = n.currentX,
          p = n.currentY,
          u = a.edgeSwipeDetection || a.iOSEdgeSwipeDetection,
          c = a.edgeSwipeThreshold || a.iOSEdgeSwipeThreshold;
        if (!u || !(h <= c || h >= i.screen.width - c)) {
          if (S(s, {
            isTouched: !0,
            isMoved: !1,
            allowTouchCallbacks: !0,
            isScrolling: void 0,
            startMoving: void 0
          }), n.startX = h, n.startY = p, s.touchStartTime = x(), this.allowClick = !0, this.updateSize(), this.swipeDirection = void 0, a.threshold > 0 && (s.allowThresholdMove = !1), "touchstart" !== o.type) {
            var f = !0;
            d.is(s.formElements) && (f = !1), t.activeElement && m(t.activeElement).is(s.formElements) && t.activeElement !== d[0] && t.activeElement.blur();
            var v = f && this.allowTouchMove && a.touchStartPreventDefault;
            (a.touchStartForcePreventDefault || v) && o.preventDefault();
          }
          this.emit("touchStart", o);
        }
      }
    }
  }
  function A(e) {
    var t = r(),
      i = this.touchEventsData,
      s = this.params,
      a = this.touches,
      n = this.rtlTranslate,
      l = e;
    if (l.originalEvent && (l = l.originalEvent), i.isTouched) {
      if (!i.isTouchEvent || "touchmove" === l.type) {
        var o = "touchmove" === l.type && l.targetTouches && (l.targetTouches[0] || l.changedTouches[0]),
          d = "touchmove" === l.type ? o.pageX : l.pageX,
          h = "touchmove" === l.type ? o.pageY : l.pageY;
        if (l.preventedByNestedSwiper) return a.startX = d, void (a.startY = h);
        if (!this.allowTouchMove) return this.allowClick = !1, void (i.isTouched && (S(a, {
          startX: d,
          startY: h,
          currentX: d,
          currentY: h
        }), i.touchStartTime = x()));
        if (i.isTouchEvent && s.touchReleaseOnEdges && !s.loop) if (this.isVertical()) {
          if (h < a.startY && this.translate <= this.maxTranslate() || h > a.startY && this.translate >= this.minTranslate()) return i.isTouched = !1, void (i.isMoved = !1);
        } else if (d < a.startX && this.translate <= this.maxTranslate() || d > a.startX && this.translate >= this.minTranslate()) return;
        if (i.isTouchEvent && t.activeElement && l.target === t.activeElement && m(l.target).is(i.formElements)) return i.isMoved = !0, void (this.allowClick = !1);
        if (i.allowTouchCallbacks && this.emit("touchMove", l), !(l.targetTouches && l.targetTouches.length > 1)) {
          a.currentX = d, a.currentY = h;
          var p = a.currentX - a.startX,
            u = a.currentY - a.startY;
          if (!(this.params.threshold && Math.sqrt(Math.pow(p, 2) + Math.pow(u, 2)) < this.params.threshold)) {
            var c;
            if (void 0 === i.isScrolling) this.isHorizontal() && a.currentY === a.startY || this.isVertical() && a.currentX === a.startX ? i.isScrolling = !1 : p * p + u * u >= 25 && (c = 180 * Math.atan2(Math.abs(u), Math.abs(p)) / Math.PI, i.isScrolling = this.isHorizontal() ? c > s.touchAngle : 90 - c > s.touchAngle);
            if (i.isScrolling && this.emit("touchMoveOpposite", l), void 0 === i.startMoving && (a.currentX === a.startX && a.currentY === a.startY || (i.startMoving = !0)), i.isScrolling) i.isTouched = !1;else if (i.startMoving) {
              this.allowClick = !1, !s.cssMode && l.cancelable && l.preventDefault(), s.touchMoveStopPropagation && !s.nested && l.stopPropagation(), i.isMoved || (s.loop && this.loopFix(), i.startTranslate = this.getTranslate(), this.setTransition(0), this.animating && this.$wrapperEl.trigger("webkitTransitionEnd transitionend"), i.allowMomentumBounce = !1, !s.grabCursor || !0 !== this.allowSlideNext && !0 !== this.allowSlidePrev || this.setGrabCursor(!0), this.emit("sliderFirstMove", l)), this.emit("sliderMove", l), i.isMoved = !0;
              var f = this.isHorizontal() ? p : u;
              a.diff = f, f *= s.touchRatio, n && (f = -f), this.swipeDirection = f > 0 ? "prev" : "next", i.currentTranslate = f + i.startTranslate;
              var v = !0,
                g = s.resistanceRatio;
              if (s.touchReleaseOnEdges && (g = 0), f > 0 && i.currentTranslate > this.minTranslate() ? (v = !1, s.resistance && (i.currentTranslate = this.minTranslate() - 1 + Math.pow(-this.minTranslate() + i.startTranslate + f, g))) : f < 0 && i.currentTranslate < this.maxTranslate() && (v = !1, s.resistance && (i.currentTranslate = this.maxTranslate() + 1 - Math.pow(this.maxTranslate() - i.startTranslate - f, g))), v && (l.preventedByNestedSwiper = !0), !this.allowSlideNext && "next" === this.swipeDirection && i.currentTranslate < i.startTranslate && (i.currentTranslate = i.startTranslate), !this.allowSlidePrev && "prev" === this.swipeDirection && i.currentTranslate > i.startTranslate && (i.currentTranslate = i.startTranslate), s.threshold > 0) {
                if (!(Math.abs(f) > s.threshold || i.allowThresholdMove)) return void (i.currentTranslate = i.startTranslate);
                if (!i.allowThresholdMove) return i.allowThresholdMove = !0, a.startX = a.currentX, a.startY = a.currentY, i.currentTranslate = i.startTranslate, void (a.diff = this.isHorizontal() ? a.currentX - a.startX : a.currentY - a.startY);
              }
              s.followFinger && !s.cssMode && ((s.freeMode || s.watchSlidesProgress || s.watchSlidesVisibility) && (this.updateActiveIndex(), this.updateSlidesClasses()), s.freeMode && (0 === i.velocities.length && i.velocities.push({
                position: a[this.isHorizontal() ? "startX" : "startY"],
                time: i.touchStartTime
              }), i.velocities.push({
                position: a[this.isHorizontal() ? "currentX" : "currentY"],
                time: x()
              })), this.updateProgress(i.currentTranslate), this.setTranslate(i.currentTranslate));
            }
          }
        }
      }
    } else i.startMoving && i.isScrolling && this.emit("touchMoveOpposite", l);
  }
  function D(e) {
    var t = this,
      i = t.touchEventsData,
      s = t.params,
      a = t.touches,
      r = t.rtlTranslate,
      n = t.$wrapperEl,
      l = t.slidesGrid,
      o = t.snapGrid,
      d = e;
    if (d.originalEvent && (d = d.originalEvent), i.allowTouchCallbacks && t.emit("touchEnd", d), i.allowTouchCallbacks = !1, !i.isTouched) return i.isMoved && s.grabCursor && t.setGrabCursor(!1), i.isMoved = !1, void (i.startMoving = !1);
    s.grabCursor && i.isMoved && i.isTouched && (!0 === t.allowSlideNext || !0 === t.allowSlidePrev) && t.setGrabCursor(!1);
    var h,
      p = x(),
      u = p - i.touchStartTime;
    if (t.allowClick && (t.updateClickedSlide(d), t.emit("tap click", d), u < 300 && p - i.lastClickTime < 300 && t.emit("doubleTap doubleClick", d)), i.lastClickTime = x(), E(function () {
      t.destroyed || (t.allowClick = !0);
    }), !i.isTouched || !i.isMoved || !t.swipeDirection || 0 === a.diff || i.currentTranslate === i.startTranslate) return i.isTouched = !1, i.isMoved = !1, void (i.startMoving = !1);
    if (i.isTouched = !1, i.isMoved = !1, i.startMoving = !1, h = s.followFinger ? r ? t.translate : -t.translate : -i.currentTranslate, !s.cssMode) if (s.freeMode) {
      if (h < -t.minTranslate()) return void t.slideTo(t.activeIndex);
      if (h > -t.maxTranslate()) return void (t.slides.length < o.length ? t.slideTo(o.length - 1) : t.slideTo(t.slides.length - 1));
      if (s.freeModeMomentum) {
        if (i.velocities.length > 1) {
          var c = i.velocities.pop(),
            f = i.velocities.pop(),
            v = c.position - f.position,
            m = c.time - f.time;
          t.velocity = v / m, t.velocity /= 2, Math.abs(t.velocity) < s.freeModeMinimumVelocity && (t.velocity = 0), (m > 150 || x() - c.time > 300) && (t.velocity = 0);
        } else t.velocity = 0;
        t.velocity *= s.freeModeMomentumVelocityRatio, i.velocities.length = 0;
        var g = 1e3 * s.freeModeMomentumRatio,
          w = t.velocity * g,
          y = t.translate + w;
        r && (y = -y);
        var b,
          T,
          C = !1,
          S = 20 * Math.abs(t.velocity) * s.freeModeMomentumBounceRatio;
        if (y < t.maxTranslate()) s.freeModeMomentumBounce ? (y + t.maxTranslate() < -S && (y = t.maxTranslate() - S), b = t.maxTranslate(), C = !0, i.allowMomentumBounce = !0) : y = t.maxTranslate(), s.loop && s.centeredSlides && (T = !0);else if (y > t.minTranslate()) s.freeModeMomentumBounce ? (y - t.minTranslate() > S && (y = t.minTranslate() + S), b = t.minTranslate(), C = !0, i.allowMomentumBounce = !0) : y = t.minTranslate(), s.loop && s.centeredSlides && (T = !0);else if (s.freeModeSticky) {
          for (var M, z = 0; z < o.length; z += 1) if (o[z] > -y) {
            M = z;
            break;
          }
          y = -(y = Math.abs(o[M] - y) < Math.abs(o[M - 1] - y) || "next" === t.swipeDirection ? o[M] : o[M - 1]);
        }
        if (T && t.once("transitionEnd", function () {
          t.loopFix();
        }), 0 !== t.velocity) {
          if (g = r ? Math.abs((-y - t.translate) / t.velocity) : Math.abs((y - t.translate) / t.velocity), s.freeModeSticky) {
            var P = Math.abs((r ? -y : y) - t.translate),
              k = t.slidesSizesGrid[t.activeIndex];
            g = P < k ? s.speed : P < 2 * k ? 1.5 * s.speed : 2.5 * s.speed;
          }
        } else if (s.freeModeSticky) return void t.slideToClosest();
        s.freeModeMomentumBounce && C ? (t.updateProgress(b), t.setTransition(g), t.setTranslate(y), t.transitionStart(!0, t.swipeDirection), t.animating = !0, n.transitionEnd(function () {
          t && !t.destroyed && i.allowMomentumBounce && (t.emit("momentumBounce"), t.setTransition(s.speed), setTimeout(function () {
            t.setTranslate(b), n.transitionEnd(function () {
              t && !t.destroyed && t.transitionEnd();
            });
          }, 0));
        })) : t.velocity ? (t.updateProgress(y), t.setTransition(g), t.setTranslate(y), t.transitionStart(!0, t.swipeDirection), t.animating || (t.animating = !0, n.transitionEnd(function () {
          t && !t.destroyed && t.transitionEnd();
        }))) : t.updateProgress(y), t.updateActiveIndex(), t.updateSlidesClasses();
      } else if (s.freeModeSticky) return void t.slideToClosest();
      (!s.freeModeMomentum || u >= s.longSwipesMs) && (t.updateProgress(), t.updateActiveIndex(), t.updateSlidesClasses());
    } else {
      for (var $ = 0, L = t.slidesSizesGrid[0], I = 0; I < l.length; I += I < s.slidesPerGroupSkip ? 1 : s.slidesPerGroup) {
        var O = I < s.slidesPerGroupSkip - 1 ? 1 : s.slidesPerGroup;
        void 0 !== l[I + O] ? h >= l[I] && h < l[I + O] && ($ = I, L = l[I + O] - l[I]) : h >= l[I] && ($ = I, L = l[l.length - 1] - l[l.length - 2]);
      }
      var A = (h - l[$]) / L,
        D = $ < s.slidesPerGroupSkip - 1 ? 1 : s.slidesPerGroup;
      if (u > s.longSwipesMs) {
        if (!s.longSwipes) return void t.slideTo(t.activeIndex);
        "next" === t.swipeDirection && (A >= s.longSwipesRatio ? t.slideTo($ + D) : t.slideTo($)), "prev" === t.swipeDirection && (A > 1 - s.longSwipesRatio ? t.slideTo($ + D) : t.slideTo($));
      } else {
        if (!s.shortSwipes) return void t.slideTo(t.activeIndex);
        t.navigation && (d.target === t.navigation.nextEl || d.target === t.navigation.prevEl) ? d.target === t.navigation.nextEl ? t.slideTo($ + D) : t.slideTo($) : ("next" === t.swipeDirection && t.slideTo($ + D), "prev" === t.swipeDirection && t.slideTo($));
      }
    }
  }
  function G() {
    var e = this.params,
      t = this.el;
    if (!t || 0 !== t.offsetWidth) {
      e.breakpoints && this.setBreakpoint();
      var i = this.allowSlideNext,
        s = this.allowSlidePrev,
        a = this.snapGrid;
      this.allowSlideNext = !0, this.allowSlidePrev = !0, this.updateSize(), this.updateSlides(), this.updateSlidesClasses(), ("auto" === e.slidesPerView || e.slidesPerView > 1) && this.isEnd && !this.isBeginning && !this.params.centeredSlides ? this.slideTo(this.slides.length - 1, 0, !1, !0) : this.slideTo(this.activeIndex, 0, !1, !0), this.autoplay && this.autoplay.running && this.autoplay.paused && this.autoplay.run(), this.allowSlidePrev = s, this.allowSlideNext = i, this.params.watchOverflow && a !== this.snapGrid && this.checkOverflow();
    }
  }
  function N(e) {
    this.allowClick || (this.params.preventClicks && e.preventDefault(), this.params.preventClicksPropagation && this.animating && (e.stopPropagation(), e.stopImmediatePropagation()));
  }
  function B() {
    var e = this.wrapperEl,
      t = this.rtlTranslate;
    this.previousTranslate = this.translate, this.isHorizontal() ? this.translate = t ? e.scrollWidth - e.offsetWidth - e.scrollLeft : -e.scrollLeft : this.translate = -e.scrollTop, -0 === this.translate && (this.translate = 0), this.updateActiveIndex(), this.updateSlidesClasses();
    var i = this.maxTranslate() - this.minTranslate();
    (0 === i ? 0 : (this.translate - this.minTranslate()) / i) !== this.progress && this.updateProgress(t ? -this.translate : this.translate), this.emit("setTranslate", this.translate, !1);
  }
  var H = !1;
  function X() {}
  var Y = {
      init: !0,
      direction: "horizontal",
      touchEventsTarget: "container",
      initialSlide: 0,
      speed: 300,
      cssMode: !1,
      updateOnWindowResize: !0,
      nested: !1,
      width: null,
      height: null,
      preventInteractionOnTransition: !1,
      userAgent: null,
      url: null,
      edgeSwipeDetection: !1,
      edgeSwipeThreshold: 20,
      freeMode: !1,
      freeModeMomentum: !0,
      freeModeMomentumRatio: 1,
      freeModeMomentumBounce: !0,
      freeModeMomentumBounceRatio: 1,
      freeModeMomentumVelocityRatio: 1,
      freeModeSticky: !1,
      freeModeMinimumVelocity: .02,
      autoHeight: !1,
      setWrapperSize: !1,
      virtualTranslate: !1,
      effect: "slide",
      breakpoints: void 0,
      spaceBetween: 0,
      slidesPerView: 1,
      slidesPerColumn: 1,
      slidesPerColumnFill: "column",
      slidesPerGroup: 1,
      slidesPerGroupSkip: 0,
      centeredSlides: !1,
      centeredSlidesBounds: !1,
      slidesOffsetBefore: 0,
      slidesOffsetAfter: 0,
      normalizeSlideIndex: !0,
      centerInsufficientSlides: !1,
      watchOverflow: !1,
      roundLengths: !1,
      touchRatio: 1,
      touchAngle: 45,
      simulateTouch: !0,
      shortSwipes: !0,
      longSwipes: !0,
      longSwipesRatio: .5,
      longSwipesMs: 300,
      followFinger: !0,
      allowTouchMove: !0,
      threshold: 0,
      touchMoveStopPropagation: !1,
      touchStartPreventDefault: !0,
      touchStartForcePreventDefault: !1,
      touchReleaseOnEdges: !1,
      uniqueNavElements: !0,
      resistance: !0,
      resistanceRatio: .85,
      watchSlidesProgress: !1,
      watchSlidesVisibility: !1,
      grabCursor: !1,
      preventClicks: !0,
      preventClicksPropagation: !0,
      slideToClickedSlide: !1,
      preloadImages: !0,
      updateOnImagesReady: !0,
      loop: !1,
      loopAdditionalSlides: 0,
      loopedSlides: null,
      loopFillGroupWithBlank: !1,
      loopPreventsSlide: !0,
      allowSlidePrev: !0,
      allowSlideNext: !0,
      swipeHandler: null,
      noSwiping: !0,
      noSwipingClass: "swiper-no-swiping",
      noSwipingSelector: null,
      passiveListeners: !0,
      containerModifierClass: "swiper-container-",
      slideClass: "swiper-slide",
      slideBlankClass: "swiper-slide-invisible-blank",
      slideActiveClass: "swiper-slide-active",
      slideDuplicateActiveClass: "swiper-slide-duplicate-active",
      slideVisibleClass: "swiper-slide-visible",
      slideDuplicateClass: "swiper-slide-duplicate",
      slideNextClass: "swiper-slide-next",
      slideDuplicateNextClass: "swiper-slide-duplicate-next",
      slidePrevClass: "swiper-slide-prev",
      slideDuplicatePrevClass: "swiper-slide-duplicate-prev",
      wrapperClass: "swiper-wrapper",
      runCallbacksOnInit: !0,
      _emitClasses: !1
    },
    V = {
      modular: {
        useParams: function (e) {
          var t = this;
          t.modules && Object.keys(t.modules).forEach(function (i) {
            var s = t.modules[i];
            s.params && S(e, s.params);
          });
        },
        useModules: function (e) {
          void 0 === e && (e = {});
          var t = this;
          t.modules && Object.keys(t.modules).forEach(function (i) {
            var s = t.modules[i],
              a = e[i] || {};
            s.on && t.on && Object.keys(s.on).forEach(function (e) {
              t.on(e, s.on[e]);
            }), s.create && s.create.bind(t)(a);
          });
        }
      },
      eventsEmitter: {
        on: function (e, t, i) {
          var s = this;
          if ("function" != typeof t) return s;
          var a = i ? "unshift" : "push";
          return e.split(" ").forEach(function (e) {
            s.eventsListeners[e] || (s.eventsListeners[e] = []), s.eventsListeners[e][a](t);
          }), s;
        },
        once: function (e, t, i) {
          var s = this;
          if ("function" != typeof t) return s;
          function a() {
            s.off(e, a), a.__emitterProxy && delete a.__emitterProxy;
            for (var i = arguments.length, r = new Array(i), n = 0; n < i; n++) r[n] = arguments[n];
            t.apply(s, r);
          }
          return a.__emitterProxy = t, s.on(e, a, i);
        },
        onAny: function (e, t) {
          if ("function" != typeof e) return this;
          var i = t ? "unshift" : "push";
          return this.eventsAnyListeners.indexOf(e) < 0 && this.eventsAnyListeners[i](e), this;
        },
        offAny: function (e) {
          if (!this.eventsAnyListeners) return this;
          var t = this.eventsAnyListeners.indexOf(e);
          return t >= 0 && this.eventsAnyListeners.splice(t, 1), this;
        },
        off: function (e, t) {
          var i = this;
          return i.eventsListeners ? (e.split(" ").forEach(function (e) {
            void 0 === t ? i.eventsListeners[e] = [] : i.eventsListeners[e] && i.eventsListeners[e].forEach(function (s, a) {
              (s === t || s.__emitterProxy && s.__emitterProxy === t) && i.eventsListeners[e].splice(a, 1);
            });
          }), i) : i;
        },
        emit: function () {
          var e,
            t,
            i,
            s = this;
          if (!s.eventsListeners) return s;
          for (var a = arguments.length, r = new Array(a), n = 0; n < a; n++) r[n] = arguments[n];
          "string" == typeof r[0] || Array.isArray(r[0]) ? (e = r[0], t = r.slice(1, r.length), i = s) : (e = r[0].events, t = r[0].data, i = r[0].context || s), t.unshift(i);
          var l = Array.isArray(e) ? e : e.split(" ");
          return l.forEach(function (e) {
            if (s.eventsAnyListeners && s.eventsAnyListeners.length && s.eventsAnyListeners.forEach(function (s) {
              s.apply(i, [e].concat(t));
            }), s.eventsListeners && s.eventsListeners[e]) {
              var a = [];
              s.eventsListeners[e].forEach(function (e) {
                a.push(e);
              }), a.forEach(function (e) {
                e.apply(i, t);
              });
            }
          }), s;
        }
      },
      update: {
        updateSize: function () {
          var e,
            t,
            i = this.$el;
          e = void 0 !== this.params.width && null !== this.params.width ? this.params.width : i[0].clientWidth, t = void 0 !== this.params.height && null !== this.params.width ? this.params.height : i[0].clientHeight, 0 === e && this.isHorizontal() || 0 === t && this.isVertical() || (e = e - parseInt(i.css("padding-left") || 0, 10) - parseInt(i.css("padding-right") || 0, 10), t = t - parseInt(i.css("padding-top") || 0, 10) - parseInt(i.css("padding-bottom") || 0, 10), Number.isNaN(e) && (e = 0), Number.isNaN(t) && (t = 0), S(this, {
            width: e,
            height: t,
            size: this.isHorizontal() ? e : t
          }));
        },
        updateSlides: function () {
          var e = l(),
            t = this.params,
            i = this.$wrapperEl,
            s = this.size,
            a = this.rtlTranslate,
            r = this.wrongRTL,
            n = this.virtual && t.virtual.enabled,
            o = n ? this.virtual.slides.length : this.slides.length,
            d = i.children("." + this.params.slideClass),
            h = n ? this.virtual.slides.length : d.length,
            p = [],
            u = [],
            c = [];
          function f(e, i) {
            return !t.cssMode || i !== d.length - 1;
          }
          var v = t.slidesOffsetBefore;
          "function" == typeof v && (v = t.slidesOffsetBefore.call(this));
          var m = t.slidesOffsetAfter;
          "function" == typeof m && (m = t.slidesOffsetAfter.call(this));
          var g = this.snapGrid.length,
            w = this.snapGrid.length,
            y = t.spaceBetween,
            b = -v,
            E = 0,
            x = 0;
          if (void 0 !== s) {
            var T, C;
            "string" == typeof y && y.indexOf("%") >= 0 && (y = parseFloat(y.replace("%", "")) / 100 * s), this.virtualSize = -y, a ? d.css({
              marginLeft: "",
              marginTop: ""
            }) : d.css({
              marginRight: "",
              marginBottom: ""
            }), t.slidesPerColumn > 1 && (T = Math.floor(h / t.slidesPerColumn) === h / this.params.slidesPerColumn ? h : Math.ceil(h / t.slidesPerColumn) * t.slidesPerColumn, "auto" !== t.slidesPerView && "row" === t.slidesPerColumnFill && (T = Math.max(T, t.slidesPerView * t.slidesPerColumn)));
            for (var M, z = t.slidesPerColumn, P = T / z, k = Math.floor(h / t.slidesPerColumn), $ = 0; $ < h; $ += 1) {
              C = 0;
              var L = d.eq($);
              if (t.slidesPerColumn > 1) {
                var I = void 0,
                  O = void 0,
                  A = void 0;
                if ("row" === t.slidesPerColumnFill && t.slidesPerGroup > 1) {
                  var D = Math.floor($ / (t.slidesPerGroup * t.slidesPerColumn)),
                    G = $ - t.slidesPerColumn * t.slidesPerGroup * D,
                    N = 0 === D ? t.slidesPerGroup : Math.min(Math.ceil((h - D * z * t.slidesPerGroup) / z), t.slidesPerGroup);
                  I = (O = G - (A = Math.floor(G / N)) * N + D * t.slidesPerGroup) + A * T / z, L.css({
                    "-webkit-box-ordinal-group": I,
                    "-moz-box-ordinal-group": I,
                    "-ms-flex-order": I,
                    "-webkit-order": I,
                    order: I
                  });
                } else "column" === t.slidesPerColumnFill ? (A = $ - (O = Math.floor($ / z)) * z, (O > k || O === k && A === z - 1) && (A += 1) >= z && (A = 0, O += 1)) : O = $ - (A = Math.floor($ / P)) * P;
                L.css("margin-" + (this.isHorizontal() ? "top" : "left"), 0 !== A && t.spaceBetween && t.spaceBetween + "px");
              }
              if ("none" !== L.css("display")) {
                if ("auto" === t.slidesPerView) {
                  var B = e.getComputedStyle(L[0], null),
                    H = L[0].style.transform,
                    X = L[0].style.webkitTransform;
                  if (H && (L[0].style.transform = "none"), X && (L[0].style.webkitTransform = "none"), t.roundLengths) C = this.isHorizontal() ? L.outerWidth(!0) : L.outerHeight(!0);else if (this.isHorizontal()) {
                    var Y = parseFloat(B.getPropertyValue("width") || 0),
                      V = parseFloat(B.getPropertyValue("padding-left") || 0),
                      F = parseFloat(B.getPropertyValue("padding-right") || 0),
                      R = parseFloat(B.getPropertyValue("margin-left") || 0),
                      W = parseFloat(B.getPropertyValue("margin-right") || 0),
                      q = B.getPropertyValue("box-sizing");
                    if (q && "border-box" === q) C = Y + R + W;else {
                      var j = L[0],
                        _ = j.clientWidth;
                      C = Y + V + F + R + W + (j.offsetWidth - _);
                    }
                  } else {
                    var U = parseFloat(B.getPropertyValue("height") || 0),
                      K = parseFloat(B.getPropertyValue("padding-top") || 0),
                      Z = parseFloat(B.getPropertyValue("padding-bottom") || 0),
                      J = parseFloat(B.getPropertyValue("margin-top") || 0),
                      Q = parseFloat(B.getPropertyValue("margin-bottom") || 0),
                      ee = B.getPropertyValue("box-sizing");
                    if (ee && "border-box" === ee) C = U + J + Q;else {
                      var te = L[0],
                        ie = te.clientHeight;
                      C = U + K + Z + J + Q + (te.offsetHeight - ie);
                    }
                  }
                  H && (L[0].style.transform = H), X && (L[0].style.webkitTransform = X), t.roundLengths && (C = Math.floor(C));
                } else C = (s - (t.slidesPerView - 1) * y) / t.slidesPerView, t.roundLengths && (C = Math.floor(C)), d[$] && (this.isHorizontal() ? d[$].style.width = C + "px" : d[$].style.height = C + "px");
                d[$] && (d[$].swiperSlideSize = C), c.push(C), t.centeredSlides ? (b = b + C / 2 + E / 2 + y, 0 === E && 0 !== $ && (b = b - s / 2 - y), 0 === $ && (b = b - s / 2 - y), Math.abs(b) < .001 && (b = 0), t.roundLengths && (b = Math.floor(b)), x % t.slidesPerGroup == 0 && p.push(b), u.push(b)) : (t.roundLengths && (b = Math.floor(b)), (x - Math.min(this.params.slidesPerGroupSkip, x)) % this.params.slidesPerGroup == 0 && p.push(b), u.push(b), b = b + C + y), this.virtualSize += C + y, E = C, x += 1;
              }
            }
            if (this.virtualSize = Math.max(this.virtualSize, s) + m, a && r && ("slide" === t.effect || "coverflow" === t.effect) && i.css({
              width: this.virtualSize + t.spaceBetween + "px"
            }), t.setWrapperSize && (this.isHorizontal() ? i.css({
              width: this.virtualSize + t.spaceBetween + "px"
            }) : i.css({
              height: this.virtualSize + t.spaceBetween + "px"
            })), t.slidesPerColumn > 1 && (this.virtualSize = (C + t.spaceBetween) * T, this.virtualSize = Math.ceil(this.virtualSize / t.slidesPerColumn) - t.spaceBetween, this.isHorizontal() ? i.css({
              width: this.virtualSize + t.spaceBetween + "px"
            }) : i.css({
              height: this.virtualSize + t.spaceBetween + "px"
            }), t.centeredSlides)) {
              M = [];
              for (var se = 0; se < p.length; se += 1) {
                var ae = p[se];
                t.roundLengths && (ae = Math.floor(ae)), p[se] < this.virtualSize + p[0] && M.push(ae);
              }
              p = M;
            }
            if (!t.centeredSlides) {
              M = [];
              for (var re = 0; re < p.length; re += 1) {
                var ne = p[re];
                t.roundLengths && (ne = Math.floor(ne)), p[re] <= this.virtualSize - s && M.push(ne);
              }
              p = M, Math.floor(this.virtualSize - s) - Math.floor(p[p.length - 1]) > 1 && p.push(this.virtualSize - s);
            }
            if (0 === p.length && (p = [0]), 0 !== t.spaceBetween && (this.isHorizontal() ? a ? d.filter(f).css({
              marginLeft: y + "px"
            }) : d.filter(f).css({
              marginRight: y + "px"
            }) : d.filter(f).css({
              marginBottom: y + "px"
            })), t.centeredSlides && t.centeredSlidesBounds) {
              var le = 0;
              c.forEach(function (e) {
                le += e + (t.spaceBetween ? t.spaceBetween : 0);
              });
              var oe = (le -= t.spaceBetween) - s;
              p = p.map(function (e) {
                return e < 0 ? -v : e > oe ? oe + m : e;
              });
            }
            if (t.centerInsufficientSlides) {
              var de = 0;
              if (c.forEach(function (e) {
                de += e + (t.spaceBetween ? t.spaceBetween : 0);
              }), (de -= t.spaceBetween) < s) {
                var he = (s - de) / 2;
                p.forEach(function (e, t) {
                  p[t] = e - he;
                }), u.forEach(function (e, t) {
                  u[t] = e + he;
                });
              }
            }
            S(this, {
              slides: d,
              snapGrid: p,
              slidesGrid: u,
              slidesSizesGrid: c
            }), h !== o && this.emit("slidesLengthChange"), p.length !== g && (this.params.watchOverflow && this.checkOverflow(), this.emit("snapGridLengthChange")), u.length !== w && this.emit("slidesGridLengthChange"), (t.watchSlidesProgress || t.watchSlidesVisibility) && this.updateSlidesOffset();
          }
        },
        updateAutoHeight: function (e) {
          var t,
            i = [],
            s = 0;
          if ("number" == typeof e ? this.setTransition(e) : !0 === e && this.setTransition(this.params.speed), "auto" !== this.params.slidesPerView && this.params.slidesPerView > 1) {
            if (this.params.centeredSlides) this.visibleSlides.each(function (e) {
              i.push(e);
            });else for (t = 0; t < Math.ceil(this.params.slidesPerView); t += 1) {
              var a = this.activeIndex + t;
              if (a > this.slides.length) break;
              i.push(this.slides.eq(a)[0]);
            }
          } else i.push(this.slides.eq(this.activeIndex)[0]);
          for (t = 0; t < i.length; t += 1) if (void 0 !== i[t]) {
            var r = i[t].offsetHeight;
            s = r > s ? r : s;
          }
          s && this.$wrapperEl.css("height", s + "px");
        },
        updateSlidesOffset: function () {
          for (var e = this.slides, t = 0; t < e.length; t += 1) e[t].swiperSlideOffset = this.isHorizontal() ? e[t].offsetLeft : e[t].offsetTop;
        },
        updateSlidesProgress: function (e) {
          void 0 === e && (e = this && this.translate || 0);
          var t = this.params,
            i = this.slides,
            s = this.rtlTranslate;
          if (0 !== i.length) {
            void 0 === i[0].swiperSlideOffset && this.updateSlidesOffset();
            var a = -e;
            s && (a = e), i.removeClass(t.slideVisibleClass), this.visibleSlidesIndexes = [], this.visibleSlides = [];
            for (var r = 0; r < i.length; r += 1) {
              var n = i[r],
                l = (a + (t.centeredSlides ? this.minTranslate() : 0) - n.swiperSlideOffset) / (n.swiperSlideSize + t.spaceBetween);
              if (t.watchSlidesVisibility || t.centeredSlides && t.autoHeight) {
                var o = -(a - n.swiperSlideOffset),
                  d = o + this.slidesSizesGrid[r];
                (o >= 0 && o < this.size - 1 || d > 1 && d <= this.size || o <= 0 && d >= this.size) && (this.visibleSlides.push(n), this.visibleSlidesIndexes.push(r), i.eq(r).addClass(t.slideVisibleClass));
              }
              n.progress = s ? -l : l;
            }
            this.visibleSlides = m(this.visibleSlides);
          }
        },
        updateProgress: function (e) {
          if (void 0 === e) {
            var t = this.rtlTranslate ? -1 : 1;
            e = this && this.translate && this.translate * t || 0;
          }
          var i = this.params,
            s = this.maxTranslate() - this.minTranslate(),
            a = this.progress,
            r = this.isBeginning,
            n = this.isEnd,
            l = r,
            o = n;
          0 === s ? (a = 0, r = !0, n = !0) : (r = (a = (e - this.minTranslate()) / s) <= 0, n = a >= 1), S(this, {
            progress: a,
            isBeginning: r,
            isEnd: n
          }), (i.watchSlidesProgress || i.watchSlidesVisibility || i.centeredSlides && i.autoHeight) && this.updateSlidesProgress(e), r && !l && this.emit("reachBeginning toEdge"), n && !o && this.emit("reachEnd toEdge"), (l && !r || o && !n) && this.emit("fromEdge"), this.emit("progress", a);
        },
        updateSlidesClasses: function () {
          var e,
            t = this.slides,
            i = this.params,
            s = this.$wrapperEl,
            a = this.activeIndex,
            r = this.realIndex,
            n = this.virtual && i.virtual.enabled;
          t.removeClass(i.slideActiveClass + " " + i.slideNextClass + " " + i.slidePrevClass + " " + i.slideDuplicateActiveClass + " " + i.slideDuplicateNextClass + " " + i.slideDuplicatePrevClass), (e = n ? this.$wrapperEl.find("." + i.slideClass + '[data-swiper-slide-index="' + a + '"]') : t.eq(a)).addClass(i.slideActiveClass), i.loop && (e.hasClass(i.slideDuplicateClass) ? s.children("." + i.slideClass + ":not(." + i.slideDuplicateClass + ')[data-swiper-slide-index="' + r + '"]').addClass(i.slideDuplicateActiveClass) : s.children("." + i.slideClass + "." + i.slideDuplicateClass + '[data-swiper-slide-index="' + r + '"]').addClass(i.slideDuplicateActiveClass));
          var l = e.nextAll("." + i.slideClass).eq(0).addClass(i.slideNextClass);
          i.loop && 0 === l.length && (l = t.eq(0)).addClass(i.slideNextClass);
          var o = e.prevAll("." + i.slideClass).eq(0).addClass(i.slidePrevClass);
          i.loop && 0 === o.length && (o = t.eq(-1)).addClass(i.slidePrevClass), i.loop && (l.hasClass(i.slideDuplicateClass) ? s.children("." + i.slideClass + ":not(." + i.slideDuplicateClass + ')[data-swiper-slide-index="' + l.attr("data-swiper-slide-index") + '"]').addClass(i.slideDuplicateNextClass) : s.children("." + i.slideClass + "." + i.slideDuplicateClass + '[data-swiper-slide-index="' + l.attr("data-swiper-slide-index") + '"]').addClass(i.slideDuplicateNextClass), o.hasClass(i.slideDuplicateClass) ? s.children("." + i.slideClass + ":not(." + i.slideDuplicateClass + ')[data-swiper-slide-index="' + o.attr("data-swiper-slide-index") + '"]').addClass(i.slideDuplicatePrevClass) : s.children("." + i.slideClass + "." + i.slideDuplicateClass + '[data-swiper-slide-index="' + o.attr("data-swiper-slide-index") + '"]').addClass(i.slideDuplicatePrevClass)), this.emitSlidesClasses();
        },
        updateActiveIndex: function (e) {
          var t,
            i = this.rtlTranslate ? this.translate : -this.translate,
            s = this.slidesGrid,
            a = this.snapGrid,
            r = this.params,
            n = this.activeIndex,
            l = this.realIndex,
            o = this.snapIndex,
            d = e;
          if (void 0 === d) {
            for (var h = 0; h < s.length; h += 1) void 0 !== s[h + 1] ? i >= s[h] && i < s[h + 1] - (s[h + 1] - s[h]) / 2 ? d = h : i >= s[h] && i < s[h + 1] && (d = h + 1) : i >= s[h] && (d = h);
            r.normalizeSlideIndex && (d < 0 || void 0 === d) && (d = 0);
          }
          if (a.indexOf(i) >= 0) t = a.indexOf(i);else {
            var p = Math.min(r.slidesPerGroupSkip, d);
            t = p + Math.floor((d - p) / r.slidesPerGroup);
          }
          if (t >= a.length && (t = a.length - 1), d !== n) {
            var u = parseInt(this.slides.eq(d).attr("data-swiper-slide-index") || d, 10);
            S(this, {
              snapIndex: t,
              realIndex: u,
              previousIndex: n,
              activeIndex: d
            }), this.emit("activeIndexChange"), this.emit("snapIndexChange"), l !== u && this.emit("realIndexChange"), (this.initialized || this.params.runCallbacksOnInit) && this.emit("slideChange");
          } else t !== o && (this.snapIndex = t, this.emit("snapIndexChange"));
        },
        updateClickedSlide: function (e) {
          var t = this.params,
            i = m(e.target).closest("." + t.slideClass)[0],
            s = !1;
          if (i) for (var a = 0; a < this.slides.length; a += 1) this.slides[a] === i && (s = !0);
          if (!i || !s) return this.clickedSlide = void 0, void (this.clickedIndex = void 0);
          this.clickedSlide = i, this.virtual && this.params.virtual.enabled ? this.clickedIndex = parseInt(m(i).attr("data-swiper-slide-index"), 10) : this.clickedIndex = m(i).index(), t.slideToClickedSlide && void 0 !== this.clickedIndex && this.clickedIndex !== this.activeIndex && this.slideToClickedSlide();
        }
      },
      translate: {
        getTranslate: function (e) {
          void 0 === e && (e = this.isHorizontal() ? "x" : "y");
          var t = this.params,
            i = this.rtlTranslate,
            s = this.translate,
            a = this.$wrapperEl;
          if (t.virtualTranslate) return i ? -s : s;
          if (t.cssMode) return s;
          var r = T(a[0], e);
          return i && (r = -r), r || 0;
        },
        setTranslate: function (e, t) {
          var i = this.rtlTranslate,
            s = this.params,
            a = this.$wrapperEl,
            r = this.wrapperEl,
            n = this.progress,
            l = 0,
            o = 0;
          this.isHorizontal() ? l = i ? -e : e : o = e, s.roundLengths && (l = Math.floor(l), o = Math.floor(o)), s.cssMode ? r[this.isHorizontal() ? "scrollLeft" : "scrollTop"] = this.isHorizontal() ? -l : -o : s.virtualTranslate || a.transform("translate3d(" + l + "px, " + o + "px, 0px)"), this.previousTranslate = this.translate, this.translate = this.isHorizontal() ? l : o;
          var d = this.maxTranslate() - this.minTranslate();
          (0 === d ? 0 : (e - this.minTranslate()) / d) !== n && this.updateProgress(e), this.emit("setTranslate", this.translate, t);
        },
        minTranslate: function () {
          return -this.snapGrid[0];
        },
        maxTranslate: function () {
          return -this.snapGrid[this.snapGrid.length - 1];
        },
        translateTo: function (e, t, i, s, a) {
          void 0 === e && (e = 0), void 0 === t && (t = this.params.speed), void 0 === i && (i = !0), void 0 === s && (s = !0);
          var r = this,
            n = r.params,
            l = r.wrapperEl;
          if (r.animating && n.preventInteractionOnTransition) return !1;
          var o,
            d = r.minTranslate(),
            h = r.maxTranslate();
          if (o = s && e > d ? d : s && e < h ? h : e, r.updateProgress(o), n.cssMode) {
            var p,
              u = r.isHorizontal();
            if (0 === t) l[u ? "scrollLeft" : "scrollTop"] = -o;else if (l.scrollTo) l.scrollTo(((p = {})[u ? "left" : "top"] = -o, p.behavior = "smooth", p));else l[u ? "scrollLeft" : "scrollTop"] = -o;
            return !0;
          }
          return 0 === t ? (r.setTransition(0), r.setTranslate(o), i && (r.emit("beforeTransitionStart", t, a), r.emit("transitionEnd"))) : (r.setTransition(t), r.setTranslate(o), i && (r.emit("beforeTransitionStart", t, a), r.emit("transitionStart")), r.animating || (r.animating = !0, r.onTranslateToWrapperTransitionEnd || (r.onTranslateToWrapperTransitionEnd = function (e) {
            r && !r.destroyed && e.target === this && (r.$wrapperEl[0].removeEventListener("transitionend", r.onTranslateToWrapperTransitionEnd), r.$wrapperEl[0].removeEventListener("webkitTransitionEnd", r.onTranslateToWrapperTransitionEnd), r.onTranslateToWrapperTransitionEnd = null, delete r.onTranslateToWrapperTransitionEnd, i && r.emit("transitionEnd"));
          }), r.$wrapperEl[0].addEventListener("transitionend", r.onTranslateToWrapperTransitionEnd), r.$wrapperEl[0].addEventListener("webkitTransitionEnd", r.onTranslateToWrapperTransitionEnd))), !0;
        }
      },
      transition: {
        setTransition: function (e, t) {
          this.params.cssMode || this.$wrapperEl.transition(e), this.emit("setTransition", e, t);
        },
        transitionStart: function (e, t) {
          void 0 === e && (e = !0);
          var i = this.activeIndex,
            s = this.params,
            a = this.previousIndex;
          if (!s.cssMode) {
            s.autoHeight && this.updateAutoHeight();
            var r = t;
            if (r || (r = i > a ? "next" : i < a ? "prev" : "reset"), this.emit("transitionStart"), e && i !== a) {
              if ("reset" === r) return void this.emit("slideResetTransitionStart");
              this.emit("slideChangeTransitionStart"), "next" === r ? this.emit("slideNextTransitionStart") : this.emit("slidePrevTransitionStart");
            }
          }
        },
        transitionEnd: function (e, t) {
          void 0 === e && (e = !0);
          var i = this.activeIndex,
            s = this.previousIndex,
            a = this.params;
          if (this.animating = !1, !a.cssMode) {
            this.setTransition(0);
            var r = t;
            if (r || (r = i > s ? "next" : i < s ? "prev" : "reset"), this.emit("transitionEnd"), e && i !== s) {
              if ("reset" === r) return void this.emit("slideResetTransitionEnd");
              this.emit("slideChangeTransitionEnd"), "next" === r ? this.emit("slideNextTransitionEnd") : this.emit("slidePrevTransitionEnd");
            }
          }
        }
      },
      slide: {
        slideTo: function (e, t, i, s) {
          if (void 0 === e && (e = 0), void 0 === t && (t = this.params.speed), void 0 === i && (i = !0), "number" != typeof e && "string" != typeof e) throw new Error("The 'index' argument cannot have type other than 'number' or 'string'. [" + typeof e + "] given.");
          if ("string" == typeof e) {
            var a = parseInt(e, 10);
            if (!isFinite(a)) throw new Error("The passed-in 'index' (string) couldn't be converted to 'number'. [" + e + "] given.");
            e = a;
          }
          var r = this,
            n = e;
          n < 0 && (n = 0);
          var l = r.params,
            o = r.snapGrid,
            d = r.slidesGrid,
            h = r.previousIndex,
            p = r.activeIndex,
            u = r.rtlTranslate,
            c = r.wrapperEl;
          if (r.animating && l.preventInteractionOnTransition) return !1;
          var f = Math.min(r.params.slidesPerGroupSkip, n),
            v = f + Math.floor((n - f) / r.params.slidesPerGroup);
          v >= o.length && (v = o.length - 1), (p || l.initialSlide || 0) === (h || 0) && i && r.emit("beforeSlideChangeStart");
          var m,
            g = -o[v];
          if (r.updateProgress(g), l.normalizeSlideIndex) for (var w = 0; w < d.length; w += 1) -Math.floor(100 * g) >= Math.floor(100 * d[w]) && (n = w);
          if (r.initialized && n !== p) {
            if (!r.allowSlideNext && g < r.translate && g < r.minTranslate()) return !1;
            if (!r.allowSlidePrev && g > r.translate && g > r.maxTranslate() && (p || 0) !== n) return !1;
          }
          if (m = n > p ? "next" : n < p ? "prev" : "reset", u && -g === r.translate || !u && g === r.translate) return r.updateActiveIndex(n), l.autoHeight && r.updateAutoHeight(), r.updateSlidesClasses(), "slide" !== l.effect && r.setTranslate(g), "reset" !== m && (r.transitionStart(i, m), r.transitionEnd(i, m)), !1;
          if (l.cssMode) {
            var y,
              b = r.isHorizontal(),
              E = -g;
            if (u && (E = c.scrollWidth - c.offsetWidth - E), 0 === t) c[b ? "scrollLeft" : "scrollTop"] = E;else if (c.scrollTo) c.scrollTo(((y = {})[b ? "left" : "top"] = E, y.behavior = "smooth", y));else c[b ? "scrollLeft" : "scrollTop"] = E;
            return !0;
          }
          return 0 === t ? (r.setTransition(0), r.setTranslate(g), r.updateActiveIndex(n), r.updateSlidesClasses(), r.emit("beforeTransitionStart", t, s), r.transitionStart(i, m), r.transitionEnd(i, m)) : (r.setTransition(t), r.setTranslate(g), r.updateActiveIndex(n), r.updateSlidesClasses(), r.emit("beforeTransitionStart", t, s), r.transitionStart(i, m), r.animating || (r.animating = !0, r.onSlideToWrapperTransitionEnd || (r.onSlideToWrapperTransitionEnd = function (e) {
            r && !r.destroyed && e.target === this && (r.$wrapperEl[0].removeEventListener("transitionend", r.onSlideToWrapperTransitionEnd), r.$wrapperEl[0].removeEventListener("webkitTransitionEnd", r.onSlideToWrapperTransitionEnd), r.onSlideToWrapperTransitionEnd = null, delete r.onSlideToWrapperTransitionEnd, r.transitionEnd(i, m));
          }), r.$wrapperEl[0].addEventListener("transitionend", r.onSlideToWrapperTransitionEnd), r.$wrapperEl[0].addEventListener("webkitTransitionEnd", r.onSlideToWrapperTransitionEnd))), !0;
        },
        slideToLoop: function (e, t, i, s) {
          void 0 === e && (e = 0), void 0 === t && (t = this.params.speed), void 0 === i && (i = !0);
          var a = e;
          return this.params.loop && (a += this.loopedSlides), this.slideTo(a, t, i, s);
        },
        slideNext: function (e, t, i) {
          void 0 === e && (e = this.params.speed), void 0 === t && (t = !0);
          var s = this.params,
            a = this.animating,
            r = this.activeIndex < s.slidesPerGroupSkip ? 1 : s.slidesPerGroup;
          if (s.loop) {
            if (a && s.loopPreventsSlide) return !1;
            this.loopFix(), this._clientLeft = this.$wrapperEl[0].clientLeft;
          }
          return this.slideTo(this.activeIndex + r, e, t, i);
        },
        slidePrev: function (e, t, i) {
          void 0 === e && (e = this.params.speed), void 0 === t && (t = !0);
          var s = this.params,
            a = this.animating,
            r = this.snapGrid,
            n = this.slidesGrid,
            l = this.rtlTranslate;
          if (s.loop) {
            if (a && s.loopPreventsSlide) return !1;
            this.loopFix(), this._clientLeft = this.$wrapperEl[0].clientLeft;
          }
          function o(e) {
            return e < 0 ? -Math.floor(Math.abs(e)) : Math.floor(e);
          }
          var d,
            h = o(l ? this.translate : -this.translate),
            p = r.map(function (e) {
              return o(e);
            }),
            u = (r[p.indexOf(h)], r[p.indexOf(h) - 1]);
          return void 0 === u && s.cssMode && r.forEach(function (e) {
            !u && h >= e && (u = e);
          }), void 0 !== u && (d = n.indexOf(u)) < 0 && (d = this.activeIndex - 1), this.slideTo(d, e, t, i);
        },
        slideReset: function (e, t, i) {
          return void 0 === e && (e = this.params.speed), void 0 === t && (t = !0), this.slideTo(this.activeIndex, e, t, i);
        },
        slideToClosest: function (e, t, i, s) {
          void 0 === e && (e = this.params.speed), void 0 === t && (t = !0), void 0 === s && (s = .5);
          var a = this.activeIndex,
            r = Math.min(this.params.slidesPerGroupSkip, a),
            n = r + Math.floor((a - r) / this.params.slidesPerGroup),
            l = this.rtlTranslate ? this.translate : -this.translate;
          if (l >= this.snapGrid[n]) {
            var o = this.snapGrid[n];
            l - o > (this.snapGrid[n + 1] - o) * s && (a += this.params.slidesPerGroup);
          } else {
            var d = this.snapGrid[n - 1];
            l - d <= (this.snapGrid[n] - d) * s && (a -= this.params.slidesPerGroup);
          }
          return a = Math.max(a, 0), a = Math.min(a, this.slidesGrid.length - 1), this.slideTo(a, e, t, i);
        },
        slideToClickedSlide: function () {
          var e,
            t = this,
            i = t.params,
            s = t.$wrapperEl,
            a = "auto" === i.slidesPerView ? t.slidesPerViewDynamic() : i.slidesPerView,
            r = t.clickedIndex;
          if (i.loop) {
            if (t.animating) return;
            e = parseInt(m(t.clickedSlide).attr("data-swiper-slide-index"), 10), i.centeredSlides ? r < t.loopedSlides - a / 2 || r > t.slides.length - t.loopedSlides + a / 2 ? (t.loopFix(), r = s.children("." + i.slideClass + '[data-swiper-slide-index="' + e + '"]:not(.' + i.slideDuplicateClass + ")").eq(0).index(), E(function () {
              t.slideTo(r);
            })) : t.slideTo(r) : r > t.slides.length - a ? (t.loopFix(), r = s.children("." + i.slideClass + '[data-swiper-slide-index="' + e + '"]:not(.' + i.slideDuplicateClass + ")").eq(0).index(), E(function () {
              t.slideTo(r);
            })) : t.slideTo(r);
          } else t.slideTo(r);
        }
      },
      loop: {
        loopCreate: function () {
          var e = this,
            t = r(),
            i = e.params,
            s = e.$wrapperEl;
          s.children("." + i.slideClass + "." + i.slideDuplicateClass).remove();
          var a = s.children("." + i.slideClass);
          if (i.loopFillGroupWithBlank) {
            var n = i.slidesPerGroup - a.length % i.slidesPerGroup;
            if (n !== i.slidesPerGroup) {
              for (var l = 0; l < n; l += 1) {
                var o = m(t.createElement("div")).addClass(i.slideClass + " " + i.slideBlankClass);
                s.append(o);
              }
              a = s.children("." + i.slideClass);
            }
          }
          "auto" !== i.slidesPerView || i.loopedSlides || (i.loopedSlides = a.length), e.loopedSlides = Math.ceil(parseFloat(i.loopedSlides || i.slidesPerView, 10)), e.loopedSlides += i.loopAdditionalSlides, e.loopedSlides > a.length && (e.loopedSlides = a.length);
          var d = [],
            h = [];
          a.each(function (t, i) {
            var s = m(t);
            i < e.loopedSlides && h.push(t), i < a.length && i >= a.length - e.loopedSlides && d.push(t), s.attr("data-swiper-slide-index", i);
          });
          for (var p = 0; p < h.length; p += 1) s.append(m(h[p].cloneNode(!0)).addClass(i.slideDuplicateClass));
          for (var u = d.length - 1; u >= 0; u -= 1) s.prepend(m(d[u].cloneNode(!0)).addClass(i.slideDuplicateClass));
        },
        loopFix: function () {
          this.emit("beforeLoopFix");
          var e,
            t = this.activeIndex,
            i = this.slides,
            s = this.loopedSlides,
            a = this.allowSlidePrev,
            r = this.allowSlideNext,
            n = this.snapGrid,
            l = this.rtlTranslate;
          this.allowSlidePrev = !0, this.allowSlideNext = !0;
          var o = -n[t] - this.getTranslate();
          if (t < s) e = i.length - 3 * s + t, e += s, this.slideTo(e, 0, !1, !0) && 0 !== o && this.setTranslate((l ? -this.translate : this.translate) - o);else if (t >= i.length - s) {
            e = -i.length + t + s, e += s, this.slideTo(e, 0, !1, !0) && 0 !== o && this.setTranslate((l ? -this.translate : this.translate) - o);
          }
          this.allowSlidePrev = a, this.allowSlideNext = r, this.emit("loopFix");
        },
        loopDestroy: function () {
          var e = this.$wrapperEl,
            t = this.params,
            i = this.slides;
          e.children("." + t.slideClass + "." + t.slideDuplicateClass + ",." + t.slideClass + "." + t.slideBlankClass).remove(), i.removeAttr("data-swiper-slide-index");
        }
      },
      grabCursor: {
        setGrabCursor: function (e) {
          if (!(this.support.touch || !this.params.simulateTouch || this.params.watchOverflow && this.isLocked || this.params.cssMode)) {
            var t = this.el;
            t.style.cursor = "move", t.style.cursor = e ? "-webkit-grabbing" : "-webkit-grab", t.style.cursor = e ? "-moz-grabbin" : "-moz-grab", t.style.cursor = e ? "grabbing" : "grab";
          }
        },
        unsetGrabCursor: function () {
          this.support.touch || this.params.watchOverflow && this.isLocked || this.params.cssMode || (this.el.style.cursor = "");
        }
      },
      manipulation: {
        appendSlide: function (e) {
          var t = this.$wrapperEl,
            i = this.params;
          if (i.loop && this.loopDestroy(), "object" == typeof e && "length" in e) for (var s = 0; s < e.length; s += 1) e[s] && t.append(e[s]);else t.append(e);
          i.loop && this.loopCreate(), i.observer && this.support.observer || this.update();
        },
        prependSlide: function (e) {
          var t = this.params,
            i = this.$wrapperEl,
            s = this.activeIndex;
          t.loop && this.loopDestroy();
          var a = s + 1;
          if ("object" == typeof e && "length" in e) {
            for (var r = 0; r < e.length; r += 1) e[r] && i.prepend(e[r]);
            a = s + e.length;
          } else i.prepend(e);
          t.loop && this.loopCreate(), t.observer && this.support.observer || this.update(), this.slideTo(a, 0, !1);
        },
        addSlide: function (e, t) {
          var i = this.$wrapperEl,
            s = this.params,
            a = this.activeIndex;
          s.loop && (a -= this.loopedSlides, this.loopDestroy(), this.slides = i.children("." + s.slideClass));
          var r = this.slides.length;
          if (e <= 0) this.prependSlide(t);else if (e >= r) this.appendSlide(t);else {
            for (var n = a > e ? a + 1 : a, l = [], o = r - 1; o >= e; o -= 1) {
              var d = this.slides.eq(o);
              d.remove(), l.unshift(d);
            }
            if ("object" == typeof t && "length" in t) {
              for (var h = 0; h < t.length; h += 1) t[h] && i.append(t[h]);
              n = a > e ? a + t.length : a;
            } else i.append(t);
            for (var p = 0; p < l.length; p += 1) i.append(l[p]);
            s.loop && this.loopCreate(), s.observer && this.support.observer || this.update(), s.loop ? this.slideTo(n + this.loopedSlides, 0, !1) : this.slideTo(n, 0, !1);
          }
        },
        removeSlide: function (e) {
          var t = this.params,
            i = this.$wrapperEl,
            s = this.activeIndex;
          t.loop && (s -= this.loopedSlides, this.loopDestroy(), this.slides = i.children("." + t.slideClass));
          var a,
            r = s;
          if ("object" == typeof e && "length" in e) {
            for (var n = 0; n < e.length; n += 1) a = e[n], this.slides[a] && this.slides.eq(a).remove(), a < r && (r -= 1);
            r = Math.max(r, 0);
          } else a = e, this.slides[a] && this.slides.eq(a).remove(), a < r && (r -= 1), r = Math.max(r, 0);
          t.loop && this.loopCreate(), t.observer && this.support.observer || this.update(), t.loop ? this.slideTo(r + this.loopedSlides, 0, !1) : this.slideTo(r, 0, !1);
        },
        removeAllSlides: function () {
          for (var e = [], t = 0; t < this.slides.length; t += 1) e.push(t);
          this.removeSlide(e);
        }
      },
      events: {
        attachEvents: function () {
          var e = r(),
            t = this.params,
            i = this.touchEvents,
            s = this.el,
            a = this.wrapperEl,
            n = this.device,
            l = this.support;
          this.onTouchStart = O.bind(this), this.onTouchMove = A.bind(this), this.onTouchEnd = D.bind(this), t.cssMode && (this.onScroll = B.bind(this)), this.onClick = N.bind(this);
          var o = !!t.nested;
          if (!l.touch && l.pointerEvents) s.addEventListener(i.start, this.onTouchStart, !1), e.addEventListener(i.move, this.onTouchMove, o), e.addEventListener(i.end, this.onTouchEnd, !1);else {
            if (l.touch) {
              var d = !("touchstart" !== i.start || !l.passiveListener || !t.passiveListeners) && {
                passive: !0,
                capture: !1
              };
              s.addEventListener(i.start, this.onTouchStart, d), s.addEventListener(i.move, this.onTouchMove, l.passiveListener ? {
                passive: !1,
                capture: o
              } : o), s.addEventListener(i.end, this.onTouchEnd, d), i.cancel && s.addEventListener(i.cancel, this.onTouchEnd, d), H || (e.addEventListener("touchstart", X), H = !0);
            }
            (t.simulateTouch && !n.ios && !n.android || t.simulateTouch && !l.touch && n.ios) && (s.addEventListener("mousedown", this.onTouchStart, !1), e.addEventListener("mousemove", this.onTouchMove, o), e.addEventListener("mouseup", this.onTouchEnd, !1));
          }
          (t.preventClicks || t.preventClicksPropagation) && s.addEventListener("click", this.onClick, !0), t.cssMode && a.addEventListener("scroll", this.onScroll), t.updateOnWindowResize ? this.on(n.ios || n.android ? "resize orientationchange observerUpdate" : "resize observerUpdate", G, !0) : this.on("observerUpdate", G, !0);
        },
        detachEvents: function () {
          var e = r(),
            t = this.params,
            i = this.touchEvents,
            s = this.el,
            a = this.wrapperEl,
            n = this.device,
            l = this.support,
            o = !!t.nested;
          if (!l.touch && l.pointerEvents) s.removeEventListener(i.start, this.onTouchStart, !1), e.removeEventListener(i.move, this.onTouchMove, o), e.removeEventListener(i.end, this.onTouchEnd, !1);else {
            if (l.touch) {
              var d = !("onTouchStart" !== i.start || !l.passiveListener || !t.passiveListeners) && {
                passive: !0,
                capture: !1
              };
              s.removeEventListener(i.start, this.onTouchStart, d), s.removeEventListener(i.move, this.onTouchMove, o), s.removeEventListener(i.end, this.onTouchEnd, d), i.cancel && s.removeEventListener(i.cancel, this.onTouchEnd, d);
            }
            (t.simulateTouch && !n.ios && !n.android || t.simulateTouch && !l.touch && n.ios) && (s.removeEventListener("mousedown", this.onTouchStart, !1), e.removeEventListener("mousemove", this.onTouchMove, o), e.removeEventListener("mouseup", this.onTouchEnd, !1));
          }
          (t.preventClicks || t.preventClicksPropagation) && s.removeEventListener("click", this.onClick, !0), t.cssMode && a.removeEventListener("scroll", this.onScroll), this.off(n.ios || n.android ? "resize orientationchange observerUpdate" : "resize observerUpdate", G);
        }
      },
      breakpoints: {
        setBreakpoint: function () {
          var e = this.activeIndex,
            t = this.initialized,
            i = this.loopedSlides,
            s = void 0 === i ? 0 : i,
            a = this.params,
            r = this.$el,
            n = a.breakpoints;
          if (n && (!n || 0 !== Object.keys(n).length)) {
            var l = this.getBreakpoint(n);
            if (l && this.currentBreakpoint !== l) {
              var o = l in n ? n[l] : void 0;
              o && ["slidesPerView", "spaceBetween", "slidesPerGroup", "slidesPerGroupSkip", "slidesPerColumn"].forEach(function (e) {
                var t = o[e];
                void 0 !== t && (o[e] = "slidesPerView" !== e || "AUTO" !== t && "auto" !== t ? "slidesPerView" === e ? parseFloat(t) : parseInt(t, 10) : "auto");
              });
              var d = o || this.originalParams,
                h = a.slidesPerColumn > 1,
                p = d.slidesPerColumn > 1;
              h && !p ? (r.removeClass(a.containerModifierClass + "multirow " + a.containerModifierClass + "multirow-column"), this.emitContainerClasses()) : !h && p && (r.addClass(a.containerModifierClass + "multirow"), "column" === d.slidesPerColumnFill && r.addClass(a.containerModifierClass + "multirow-column"), this.emitContainerClasses());
              var u = d.direction && d.direction !== a.direction,
                c = a.loop && (d.slidesPerView !== a.slidesPerView || u);
              u && t && this.changeDirection(), S(this.params, d), S(this, {
                allowTouchMove: this.params.allowTouchMove,
                allowSlideNext: this.params.allowSlideNext,
                allowSlidePrev: this.params.allowSlidePrev
              }), this.currentBreakpoint = l, this.emit("_beforeBreakpoint", d), c && t && (this.loopDestroy(), this.loopCreate(), this.updateSlides(), this.slideTo(e - s + this.loopedSlides, 0, !1)), this.emit("breakpoint", d);
            }
          }
        },
        getBreakpoint: function (e) {
          var t = l();
          if (e) {
            var i = !1,
              s = Object.keys(e).map(function (e) {
                if ("string" == typeof e && 0 === e.indexOf("@")) {
                  var i = parseFloat(e.substr(1));
                  return {
                    value: t.innerHeight * i,
                    point: e
                  };
                }
                return {
                  value: e,
                  point: e
                };
              });
            s.sort(function (e, t) {
              return parseInt(e.value, 10) - parseInt(t.value, 10);
            });
            for (var a = 0; a < s.length; a += 1) {
              var r = s[a],
                n = r.point;
              r.value <= t.innerWidth && (i = n);
            }
            return i || "max";
          }
        }
      },
      checkOverflow: {
        checkOverflow: function () {
          var e = this.params,
            t = this.isLocked,
            i = this.slides.length > 0 && e.slidesOffsetBefore + e.spaceBetween * (this.slides.length - 1) + this.slides[0].offsetWidth * this.slides.length;
          e.slidesOffsetBefore && e.slidesOffsetAfter && i ? this.isLocked = i <= this.size : this.isLocked = 1 === this.snapGrid.length, this.allowSlideNext = !this.isLocked, this.allowSlidePrev = !this.isLocked, t !== this.isLocked && this.emit(this.isLocked ? "lock" : "unlock"), t && t !== this.isLocked && (this.isEnd = !1, this.navigation && this.navigation.update());
        }
      },
      classes: {
        addClasses: function () {
          var e = this.classNames,
            t = this.params,
            i = this.rtl,
            s = this.$el,
            a = this.device,
            r = [];
          r.push("initialized"), r.push(t.direction), t.freeMode && r.push("free-mode"), t.autoHeight && r.push("autoheight"), i && r.push("rtl"), t.slidesPerColumn > 1 && (r.push("multirow"), "column" === t.slidesPerColumnFill && r.push("multirow-column")), a.android && r.push("android"), a.ios && r.push("ios"), t.cssMode && r.push("css-mode"), r.forEach(function (i) {
            e.push(t.containerModifierClass + i);
          }), s.addClass(e.join(" ")), this.emitContainerClasses();
        },
        removeClasses: function () {
          var e = this.$el,
            t = this.classNames;
          e.removeClass(t.join(" ")), this.emitContainerClasses();
        }
      },
      images: {
        loadImage: function (e, t, i, s, a, r) {
          var n,
            o = l();
          function d() {
            r && r();
          }
          m(e).parent("picture")[0] || e.complete && a ? d() : t ? ((n = new o.Image()).onload = d, n.onerror = d, s && (n.sizes = s), i && (n.srcset = i), t && (n.src = t)) : d();
        },
        preloadImages: function () {
          var e = this;
          function t() {
            null != e && e && !e.destroyed && (void 0 !== e.imagesLoaded && (e.imagesLoaded += 1), e.imagesLoaded === e.imagesToLoad.length && (e.params.updateOnImagesReady && e.update(), e.emit("imagesReady")));
          }
          e.imagesToLoad = e.$el.find("img");
          for (var i = 0; i < e.imagesToLoad.length; i += 1) {
            var s = e.imagesToLoad[i];
            e.loadImage(s, s.currentSrc || s.getAttribute("src"), s.srcset || s.getAttribute("srcset"), s.sizes || s.getAttribute("sizes"), !0, t);
          }
        }
      }
    },
    F = {},
    R = function () {
      function t() {
        for (var e, i, s = arguments.length, a = new Array(s), r = 0; r < s; r++) a[r] = arguments[r];
        1 === a.length && a[0].constructor && a[0].constructor === Object ? i = a[0] : (e = a[0], i = a[1]), i || (i = {}), i = S({}, i), e && !i.el && (i.el = e);
        var n = this;
        n.support = z(), n.device = P({
          userAgent: i.userAgent
        }), n.browser = k(), n.eventsListeners = {}, n.eventsAnyListeners = [], void 0 === n.modules && (n.modules = {}), Object.keys(n.modules).forEach(function (e) {
          var t = n.modules[e];
          if (t.params) {
            var s = Object.keys(t.params)[0],
              a = t.params[s];
            if ("object" != typeof a || null === a) return;
            if (!(s in i) || !("enabled" in a)) return;
            !0 === i[s] && (i[s] = {
              enabled: !0
            }), "object" != typeof i[s] || "enabled" in i[s] || (i[s].enabled = !0), i[s] || (i[s] = {
              enabled: !1
            });
          }
        });
        var l = S({}, Y);
        n.useParams(l), n.params = S({}, l, F, i), n.originalParams = S({}, n.params), n.passedParams = S({}, i), n.params && n.params.on && Object.keys(n.params.on).forEach(function (e) {
          n.on(e, n.params.on[e]);
        }), n.params && n.params.onAny && n.onAny(n.params.onAny), n.$ = m;
        var o = m(n.params.el);
        if (e = o[0]) {
          if (o.length > 1) {
            var d = [];
            return o.each(function (e) {
              var s = S({}, i, {
                el: e
              });
              d.push(new t(s));
            }), d;
          }
          var h, p, u;
          return e.swiper = n, e && e.shadowRoot && e.shadowRoot.querySelector ? (h = m(e.shadowRoot.querySelector("." + n.params.wrapperClass))).children = function (e) {
            return o.children(e);
          } : h = o.children("." + n.params.wrapperClass), S(n, {
            $el: o,
            el: e,
            $wrapperEl: h,
            wrapperEl: h[0],
            classNames: [],
            slides: m(),
            slidesGrid: [],
            snapGrid: [],
            slidesSizesGrid: [],
            isHorizontal: function () {
              return "horizontal" === n.params.direction;
            },
            isVertical: function () {
              return "vertical" === n.params.direction;
            },
            rtl: "rtl" === e.dir.toLowerCase() || "rtl" === o.css("direction"),
            rtlTranslate: "horizontal" === n.params.direction && ("rtl" === e.dir.toLowerCase() || "rtl" === o.css("direction")),
            wrongRTL: "-webkit-box" === h.css("display"),
            activeIndex: 0,
            realIndex: 0,
            isBeginning: !0,
            isEnd: !1,
            translate: 0,
            previousTranslate: 0,
            progress: 0,
            velocity: 0,
            animating: !1,
            allowSlideNext: n.params.allowSlideNext,
            allowSlidePrev: n.params.allowSlidePrev,
            touchEvents: (p = ["touchstart", "touchmove", "touchend", "touchcancel"], u = ["mousedown", "mousemove", "mouseup"], n.support.pointerEvents && (u = ["pointerdown", "pointermove", "pointerup"]), n.touchEventsTouch = {
              start: p[0],
              move: p[1],
              end: p[2],
              cancel: p[3]
            }, n.touchEventsDesktop = {
              start: u[0],
              move: u[1],
              end: u[2]
            }, n.support.touch || !n.params.simulateTouch ? n.touchEventsTouch : n.touchEventsDesktop),
            touchEventsData: {
              isTouched: void 0,
              isMoved: void 0,
              allowTouchCallbacks: void 0,
              touchStartTime: void 0,
              isScrolling: void 0,
              currentTranslate: void 0,
              startTranslate: void 0,
              allowThresholdMove: void 0,
              formElements: "input, select, option, textarea, button, video, label",
              lastClickTime: x(),
              clickTimeout: void 0,
              velocities: [],
              allowMomentumBounce: void 0,
              isTouchEvent: void 0,
              startMoving: void 0
            },
            allowClick: !0,
            allowTouchMove: n.params.allowTouchMove,
            touches: {
              startX: 0,
              startY: 0,
              currentX: 0,
              currentY: 0,
              diff: 0
            },
            imagesToLoad: [],
            imagesLoaded: 0
          }), n.useModules(), n.emit("_swiper"), n.params.init && n.init(), n;
        }
      }
      var i,
        s,
        a,
        r = t.prototype;
      return r.emitContainerClasses = function () {
        var e = this;
        if (e.params._emitClasses && e.el) {
          var t = e.el.className.split(" ").filter(function (t) {
            return 0 === t.indexOf("swiper-container") || 0 === t.indexOf(e.params.containerModifierClass);
          });
          e.emit("_containerClasses", t.join(" "));
        }
      }, r.getSlideClasses = function (e) {
        var t = this;
        return e.className.split(" ").filter(function (e) {
          return 0 === e.indexOf("swiper-slide") || 0 === e.indexOf(t.params.slideClass);
        }).join(" ");
      }, r.emitSlidesClasses = function () {
        var e = this;
        e.params._emitClasses && e.el && e.slides.each(function (t) {
          var i = e.getSlideClasses(t);
          e.emit("_slideClass", t, i);
        });
      }, r.slidesPerViewDynamic = function () {
        var e = this.params,
          t = this.slides,
          i = this.slidesGrid,
          s = this.size,
          a = this.activeIndex,
          r = 1;
        if (e.centeredSlides) {
          for (var n, l = t[a].swiperSlideSize, o = a + 1; o < t.length; o += 1) t[o] && !n && (r += 1, (l += t[o].swiperSlideSize) > s && (n = !0));
          for (var d = a - 1; d >= 0; d -= 1) t[d] && !n && (r += 1, (l += t[d].swiperSlideSize) > s && (n = !0));
        } else for (var h = a + 1; h < t.length; h += 1) i[h] - i[a] < s && (r += 1);
        return r;
      }, r.update = function () {
        var e = this;
        if (e && !e.destroyed) {
          var t = e.snapGrid,
            i = e.params;
          i.breakpoints && e.setBreakpoint(), e.updateSize(), e.updateSlides(), e.updateProgress(), e.updateSlidesClasses(), e.params.freeMode ? (s(), e.params.autoHeight && e.updateAutoHeight()) : (("auto" === e.params.slidesPerView || e.params.slidesPerView > 1) && e.isEnd && !e.params.centeredSlides ? e.slideTo(e.slides.length - 1, 0, !1, !0) : e.slideTo(e.activeIndex, 0, !1, !0)) || s(), i.watchOverflow && t !== e.snapGrid && e.checkOverflow(), e.emit("update");
        }
        function s() {
          var t = e.rtlTranslate ? -1 * e.translate : e.translate,
            i = Math.min(Math.max(t, e.maxTranslate()), e.minTranslate());
          e.setTranslate(i), e.updateActiveIndex(), e.updateSlidesClasses();
        }
      }, r.changeDirection = function (e, t) {
        void 0 === t && (t = !0);
        var i = this.params.direction;
        return e || (e = "horizontal" === i ? "vertical" : "horizontal"), e === i || "horizontal" !== e && "vertical" !== e || (this.$el.removeClass("" + this.params.containerModifierClass + i).addClass("" + this.params.containerModifierClass + e), this.emitContainerClasses(), this.params.direction = e, this.slides.each(function (t) {
          "vertical" === e ? t.style.width = "" : t.style.height = "";
        }), this.emit("changeDirection"), t && this.update()), this;
      }, r.init = function () {
        this.initialized || (this.emit("beforeInit"), this.params.breakpoints && this.setBreakpoint(), this.addClasses(), this.params.loop && this.loopCreate(), this.updateSize(), this.updateSlides(), this.params.watchOverflow && this.checkOverflow(), this.params.grabCursor && this.setGrabCursor(), this.params.preloadImages && this.preloadImages(), this.params.loop ? this.slideTo(this.params.initialSlide + this.loopedSlides, 0, this.params.runCallbacksOnInit) : this.slideTo(this.params.initialSlide, 0, this.params.runCallbacksOnInit), this.attachEvents(), this.initialized = !0, this.emit("init"), this.emit("afterInit"));
      }, r.destroy = function (e, t) {
        void 0 === e && (e = !0), void 0 === t && (t = !0);
        var i,
          s = this,
          a = s.params,
          r = s.$el,
          n = s.$wrapperEl,
          l = s.slides;
        return void 0 === s.params || s.destroyed || (s.emit("beforeDestroy"), s.initialized = !1, s.detachEvents(), a.loop && s.loopDestroy(), t && (s.removeClasses(), r.removeAttr("style"), n.removeAttr("style"), l && l.length && l.removeClass([a.slideVisibleClass, a.slideActiveClass, a.slideNextClass, a.slidePrevClass].join(" ")).removeAttr("style").removeAttr("data-swiper-slide-index")), s.emit("destroy"), Object.keys(s.eventsListeners).forEach(function (e) {
          s.off(e);
        }), !1 !== e && (s.$el[0].swiper = null, i = s, Object.keys(i).forEach(function (e) {
          try {
            i[e] = null;
          } catch (e) {}
          try {
            delete i[e];
          } catch (e) {}
        })), s.destroyed = !0), null;
      }, t.extendDefaults = function (e) {
        S(F, e);
      }, t.installModule = function (e) {
        t.prototype.modules || (t.prototype.modules = {});
        var i = e.name || Object.keys(t.prototype.modules).length + "_" + x();
        t.prototype.modules[i] = e;
      }, t.use = function (e) {
        return Array.isArray(e) ? (e.forEach(function (e) {
          return t.installModule(e);
        }), t) : (t.installModule(e), t);
      }, i = t, a = [{
        key: "extendedDefaults",
        get: function () {
          return F;
        }
      }, {
        key: "defaults",
        get: function () {
          return Y;
        }
      }], (s = null) && e(i.prototype, s), a && e(i, a), t;
    }();
  Object.keys(V).forEach(function (e) {
    Object.keys(V[e]).forEach(function (t) {
      R.prototype[t] = V[e][t];
    });
  }), R.use([$, I]);
  var W = {
      update: function (e) {
        var t = this,
          i = t.params,
          s = i.slidesPerView,
          a = i.slidesPerGroup,
          r = i.centeredSlides,
          n = t.params.virtual,
          l = n.addSlidesBefore,
          o = n.addSlidesAfter,
          d = t.virtual,
          h = d.from,
          p = d.to,
          u = d.slides,
          c = d.slidesGrid,
          f = d.renderSlide,
          v = d.offset;
        t.updateActiveIndex();
        var m,
          g,
          w,
          y = t.activeIndex || 0;
        m = t.rtlTranslate ? "right" : t.isHorizontal() ? "left" : "top", r ? (g = Math.floor(s / 2) + a + o, w = Math.floor(s / 2) + a + l) : (g = s + (a - 1) + o, w = a + l);
        var b = Math.max((y || 0) - w, 0),
          E = Math.min((y || 0) + g, u.length - 1),
          x = (t.slidesGrid[b] || 0) - (t.slidesGrid[0] || 0);
        function T() {
          t.updateSlides(), t.updateProgress(), t.updateSlidesClasses(), t.lazy && t.params.lazy.enabled && t.lazy.load();
        }
        if (S(t.virtual, {
          from: b,
          to: E,
          offset: x,
          slidesGrid: t.slidesGrid
        }), h === b && p === E && !e) return t.slidesGrid !== c && x !== v && t.slides.css(m, x + "px"), void t.updateProgress();
        if (t.params.virtual.renderExternal) return t.params.virtual.renderExternal.call(t, {
          offset: x,
          from: b,
          to: E,
          slides: function () {
            for (var e = [], t = b; t <= E; t += 1) e.push(u[t]);
            return e;
          }()
        }), void (t.params.virtual.renderExternalUpdate && T());
        var C = [],
          M = [];
        if (e) t.$wrapperEl.find("." + t.params.slideClass).remove();else for (var z = h; z <= p; z += 1) (z < b || z > E) && t.$wrapperEl.find("." + t.params.slideClass + '[data-swiper-slide-index="' + z + '"]').remove();
        for (var P = 0; P < u.length; P += 1) P >= b && P <= E && (void 0 === p || e ? M.push(P) : (P > p && M.push(P), P < h && C.push(P)));
        M.forEach(function (e) {
          t.$wrapperEl.append(f(u[e], e));
        }), C.sort(function (e, t) {
          return t - e;
        }).forEach(function (e) {
          t.$wrapperEl.prepend(f(u[e], e));
        }), t.$wrapperEl.children(".swiper-slide").css(m, x + "px"), T();
      },
      renderSlide: function (e, t) {
        var i = this.params.virtual;
        if (i.cache && this.virtual.cache[t]) return this.virtual.cache[t];
        var s = i.renderSlide ? m(i.renderSlide.call(this, e, t)) : m('<div class="' + this.params.slideClass + '" data-swiper-slide-index="' + t + '">' + e + "</div>");
        return s.attr("data-swiper-slide-index") || s.attr("data-swiper-slide-index", t), i.cache && (this.virtual.cache[t] = s), s;
      },
      appendSlide: function (e) {
        if ("object" == typeof e && "length" in e) for (var t = 0; t < e.length; t += 1) e[t] && this.virtual.slides.push(e[t]);else this.virtual.slides.push(e);
        this.virtual.update(!0);
      },
      prependSlide: function (e) {
        var t = this.activeIndex,
          i = t + 1,
          s = 1;
        if (Array.isArray(e)) {
          for (var a = 0; a < e.length; a += 1) e[a] && this.virtual.slides.unshift(e[a]);
          i = t + e.length, s = e.length;
        } else this.virtual.slides.unshift(e);
        if (this.params.virtual.cache) {
          var r = this.virtual.cache,
            n = {};
          Object.keys(r).forEach(function (e) {
            var t = r[e],
              i = t.attr("data-swiper-slide-index");
            i && t.attr("data-swiper-slide-index", parseInt(i, 10) + 1), n[parseInt(e, 10) + s] = t;
          }), this.virtual.cache = n;
        }
        this.virtual.update(!0), this.slideTo(i, 0);
      },
      removeSlide: function (e) {
        if (null != e) {
          var t = this.activeIndex;
          if (Array.isArray(e)) for (var i = e.length - 1; i >= 0; i -= 1) this.virtual.slides.splice(e[i], 1), this.params.virtual.cache && delete this.virtual.cache[e[i]], e[i] < t && (t -= 1), t = Math.max(t, 0);else this.virtual.slides.splice(e, 1), this.params.virtual.cache && delete this.virtual.cache[e], e < t && (t -= 1), t = Math.max(t, 0);
          this.virtual.update(!0), this.slideTo(t, 0);
        }
      },
      removeAllSlides: function () {
        this.virtual.slides = [], this.params.virtual.cache && (this.virtual.cache = {}), this.virtual.update(!0), this.slideTo(0, 0);
      }
    },
    q = {
      name: "virtual",
      params: {
        virtual: {
          enabled: !1,
          slides: [],
          cache: !0,
          renderSlide: null,
          renderExternal: null,
          renderExternalUpdate: !0,
          addSlidesBefore: 0,
          addSlidesAfter: 0
        }
      },
      create: function () {
        M(this, {
          virtual: t(t({}, W), {}, {
            slides: this.params.virtual.slides,
            cache: {}
          })
        });
      },
      on: {
        beforeInit: function (e) {
          if (e.params.virtual.enabled) {
            e.classNames.push(e.params.containerModifierClass + "virtual");
            var t = {
              watchSlidesProgress: !0
            };
            S(e.params, t), S(e.originalParams, t), e.params.initialSlide || e.virtual.update();
          }
        },
        setTranslate: function (e) {
          e.params.virtual.enabled && e.virtual.update();
        }
      }
    },
    j = {
      handle: function (e) {
        var t = l(),
          i = r(),
          s = this.rtlTranslate,
          a = e;
        a.originalEvent && (a = a.originalEvent);
        var n = a.keyCode || a.charCode,
          o = this.params.keyboard.pageUpDown,
          d = o && 33 === n,
          h = o && 34 === n,
          p = 37 === n,
          u = 39 === n,
          c = 38 === n,
          f = 40 === n;
        if (!this.allowSlideNext && (this.isHorizontal() && u || this.isVertical() && f || h)) return !1;
        if (!this.allowSlidePrev && (this.isHorizontal() && p || this.isVertical() && c || d)) return !1;
        if (!(a.shiftKey || a.altKey || a.ctrlKey || a.metaKey || i.activeElement && i.activeElement.nodeName && ("input" === i.activeElement.nodeName.toLowerCase() || "textarea" === i.activeElement.nodeName.toLowerCase()))) {
          if (this.params.keyboard.onlyInViewport && (d || h || p || u || c || f)) {
            var v = !1;
            if (this.$el.parents("." + this.params.slideClass).length > 0 && 0 === this.$el.parents("." + this.params.slideActiveClass).length) return;
            var m = t.innerWidth,
              g = t.innerHeight,
              w = this.$el.offset();
            s && (w.left -= this.$el[0].scrollLeft);
            for (var y = [[w.left, w.top], [w.left + this.width, w.top], [w.left, w.top + this.height], [w.left + this.width, w.top + this.height]], b = 0; b < y.length; b += 1) {
              var E = y[b];
              E[0] >= 0 && E[0] <= m && E[1] >= 0 && E[1] <= g && (v = !0);
            }
            if (!v) return;
          }
          this.isHorizontal() ? ((d || h || p || u) && (a.preventDefault ? a.preventDefault() : a.returnValue = !1), ((h || u) && !s || (d || p) && s) && this.slideNext(), ((d || p) && !s || (h || u) && s) && this.slidePrev()) : ((d || h || c || f) && (a.preventDefault ? a.preventDefault() : a.returnValue = !1), (h || f) && this.slideNext(), (d || c) && this.slidePrev()), this.emit("keyPress", n);
        }
      },
      enable: function () {
        var e = r();
        this.keyboard.enabled || (m(e).on("keydown", this.keyboard.handle), this.keyboard.enabled = !0);
      },
      disable: function () {
        var e = r();
        this.keyboard.enabled && (m(e).off("keydown", this.keyboard.handle), this.keyboard.enabled = !1);
      }
    },
    _ = {
      name: "keyboard",
      params: {
        keyboard: {
          enabled: !1,
          onlyInViewport: !0,
          pageUpDown: !0
        }
      },
      create: function () {
        M(this, {
          keyboard: t({
            enabled: !1
          }, j)
        });
      },
      on: {
        init: function (e) {
          e.params.keyboard.enabled && e.keyboard.enable();
        },
        destroy: function (e) {
          e.keyboard.enabled && e.keyboard.disable();
        }
      }
    };
  var U = {
      lastScrollTime: x(),
      lastEventBeforeSnap: void 0,
      recentWheelEvents: [],
      event: function () {
        return l().navigator.userAgent.indexOf("firefox") > -1 ? "DOMMouseScroll" : function () {
          var e = r(),
            t = ("onwheel" in e);
          if (!t) {
            var i = e.createElement("div");
            i.setAttribute("onwheel", "return;"), t = "function" == typeof i.onwheel;
          }
          return !t && e.implementation && e.implementation.hasFeature && !0 !== e.implementation.hasFeature("", "") && (t = e.implementation.hasFeature("Events.wheel", "3.0")), t;
        }() ? "wheel" : "mousewheel";
      },
      normalize: function (e) {
        var t = 0,
          i = 0,
          s = 0,
          a = 0;
        return "detail" in e && (i = e.detail), "wheelDelta" in e && (i = -e.wheelDelta / 120), "wheelDeltaY" in e && (i = -e.wheelDeltaY / 120), "wheelDeltaX" in e && (t = -e.wheelDeltaX / 120), "axis" in e && e.axis === e.HORIZONTAL_AXIS && (t = i, i = 0), s = 10 * t, a = 10 * i, "deltaY" in e && (a = e.deltaY), "deltaX" in e && (s = e.deltaX), e.shiftKey && !s && (s = a, a = 0), (s || a) && e.deltaMode && (1 === e.deltaMode ? (s *= 40, a *= 40) : (s *= 800, a *= 800)), s && !t && (t = s < 1 ? -1 : 1), a && !i && (i = a < 1 ? -1 : 1), {
          spinX: t,
          spinY: i,
          pixelX: s,
          pixelY: a
        };
      },
      handleMouseEnter: function () {
        this.mouseEntered = !0;
      },
      handleMouseLeave: function () {
        this.mouseEntered = !1;
      },
      handle: function (e) {
        var t = e,
          i = this,
          s = i.params.mousewheel;
        i.params.cssMode && t.preventDefault();
        var a = i.$el;
        if ("container" !== i.params.mousewheel.eventsTarget && (a = m(i.params.mousewheel.eventsTarget)), !i.mouseEntered && !a[0].contains(t.target) && !s.releaseOnEdges) return !0;
        t.originalEvent && (t = t.originalEvent);
        var r = 0,
          n = i.rtlTranslate ? -1 : 1,
          l = U.normalize(t);
        if (s.forceToAxis) {
          if (i.isHorizontal()) {
            if (!(Math.abs(l.pixelX) > Math.abs(l.pixelY))) return !0;
            r = -l.pixelX * n;
          } else {
            if (!(Math.abs(l.pixelY) > Math.abs(l.pixelX))) return !0;
            r = -l.pixelY;
          }
        } else r = Math.abs(l.pixelX) > Math.abs(l.pixelY) ? -l.pixelX * n : -l.pixelY;
        if (0 === r) return !0;
        if (s.invert && (r = -r), i.params.freeMode) {
          var o = {
              time: x(),
              delta: Math.abs(r),
              direction: Math.sign(r)
            },
            d = i.mousewheel.lastEventBeforeSnap,
            h = d && o.time < d.time + 500 && o.delta <= d.delta && o.direction === d.direction;
          if (!h) {
            i.mousewheel.lastEventBeforeSnap = void 0, i.params.loop && i.loopFix();
            var p = i.getTranslate() + r * s.sensitivity,
              u = i.isBeginning,
              c = i.isEnd;
            if (p >= i.minTranslate() && (p = i.minTranslate()), p <= i.maxTranslate() && (p = i.maxTranslate()), i.setTransition(0), i.setTranslate(p), i.updateProgress(), i.updateActiveIndex(), i.updateSlidesClasses(), (!u && i.isBeginning || !c && i.isEnd) && i.updateSlidesClasses(), i.params.freeModeSticky) {
              clearTimeout(i.mousewheel.timeout), i.mousewheel.timeout = void 0;
              var f = i.mousewheel.recentWheelEvents;
              f.length >= 15 && f.shift();
              var v = f.length ? f[f.length - 1] : void 0,
                g = f[0];
              if (f.push(o), v && (o.delta > v.delta || o.direction !== v.direction)) f.splice(0);else if (f.length >= 15 && o.time - g.time < 500 && g.delta - o.delta >= 1 && o.delta <= 6) {
                var w = r > 0 ? .8 : .2;
                i.mousewheel.lastEventBeforeSnap = o, f.splice(0), i.mousewheel.timeout = E(function () {
                  i.slideToClosest(i.params.speed, !0, void 0, w);
                }, 0);
              }
              i.mousewheel.timeout || (i.mousewheel.timeout = E(function () {
                i.mousewheel.lastEventBeforeSnap = o, f.splice(0), i.slideToClosest(i.params.speed, !0, void 0, .5);
              }, 500));
            }
            if (h || i.emit("scroll", t), i.params.autoplay && i.params.autoplayDisableOnInteraction && i.autoplay.stop(), p === i.minTranslate() || p === i.maxTranslate()) return !0;
          }
        } else {
          var y = {
              time: x(),
              delta: Math.abs(r),
              direction: Math.sign(r),
              raw: e
            },
            b = i.mousewheel.recentWheelEvents;
          b.length >= 2 && b.shift();
          var T = b.length ? b[b.length - 1] : void 0;
          if (b.push(y), T ? (y.direction !== T.direction || y.delta > T.delta || y.time > T.time + 150) && i.mousewheel.animateSlider(y) : i.mousewheel.animateSlider(y), i.mousewheel.releaseScroll(y)) return !0;
        }
        return t.preventDefault ? t.preventDefault() : t.returnValue = !1, !1;
      },
      animateSlider: function (e) {
        var t = l();
        return !(this.params.mousewheel.thresholdDelta && e.delta < this.params.mousewheel.thresholdDelta) && !(this.params.mousewheel.thresholdTime && x() - this.mousewheel.lastScrollTime < this.params.mousewheel.thresholdTime) && (e.delta >= 6 && x() - this.mousewheel.lastScrollTime < 60 || (e.direction < 0 ? this.isEnd && !this.params.loop || this.animating || (this.slideNext(), this.emit("scroll", e.raw)) : this.isBeginning && !this.params.loop || this.animating || (this.slidePrev(), this.emit("scroll", e.raw)), this.mousewheel.lastScrollTime = new t.Date().getTime(), !1));
      },
      releaseScroll: function (e) {
        var t = this.params.mousewheel;
        if (e.direction < 0) {
          if (this.isEnd && !this.params.loop && t.releaseOnEdges) return !0;
        } else if (this.isBeginning && !this.params.loop && t.releaseOnEdges) return !0;
        return !1;
      },
      enable: function () {
        var e = U.event();
        if (this.params.cssMode) return this.wrapperEl.removeEventListener(e, this.mousewheel.handle), !0;
        if (!e) return !1;
        if (this.mousewheel.enabled) return !1;
        var t = this.$el;
        return "container" !== this.params.mousewheel.eventsTarget && (t = m(this.params.mousewheel.eventsTarget)), t.on("mouseenter", this.mousewheel.handleMouseEnter), t.on("mouseleave", this.mousewheel.handleMouseLeave), t.on(e, this.mousewheel.handle), this.mousewheel.enabled = !0, !0;
      },
      disable: function () {
        var e = U.event();
        if (this.params.cssMode) return this.wrapperEl.addEventListener(e, this.mousewheel.handle), !0;
        if (!e) return !1;
        if (!this.mousewheel.enabled) return !1;
        var t = this.$el;
        return "container" !== this.params.mousewheel.eventsTarget && (t = m(this.params.mousewheel.eventsTarget)), t.off(e, this.mousewheel.handle), this.mousewheel.enabled = !1, !0;
      }
    },
    K = {
      update: function () {
        var e = this.params.navigation;
        if (!this.params.loop) {
          var t = this.navigation,
            i = t.$nextEl,
            s = t.$prevEl;
          s && s.length > 0 && (this.isBeginning ? s.addClass(e.disabledClass) : s.removeClass(e.disabledClass), s[this.params.watchOverflow && this.isLocked ? "addClass" : "removeClass"](e.lockClass)), i && i.length > 0 && (this.isEnd ? i.addClass(e.disabledClass) : i.removeClass(e.disabledClass), i[this.params.watchOverflow && this.isLocked ? "addClass" : "removeClass"](e.lockClass));
        }
      },
      onPrevClick: function (e) {
        e.preventDefault(), this.isBeginning && !this.params.loop || this.slidePrev();
      },
      onNextClick: function (e) {
        e.preventDefault(), this.isEnd && !this.params.loop || this.slideNext();
      },
      init: function () {
        var e,
          t,
          i = this.params.navigation;
        (i.nextEl || i.prevEl) && (i.nextEl && (e = m(i.nextEl), this.params.uniqueNavElements && "string" == typeof i.nextEl && e.length > 1 && 1 === this.$el.find(i.nextEl).length && (e = this.$el.find(i.nextEl))), i.prevEl && (t = m(i.prevEl), this.params.uniqueNavElements && "string" == typeof i.prevEl && t.length > 1 && 1 === this.$el.find(i.prevEl).length && (t = this.$el.find(i.prevEl))), e && e.length > 0 && e.on("click", this.navigation.onNextClick), t && t.length > 0 && t.on("click", this.navigation.onPrevClick), S(this.navigation, {
          $nextEl: e,
          nextEl: e && e[0],
          $prevEl: t,
          prevEl: t && t[0]
        }));
      },
      destroy: function () {
        var e = this.navigation,
          t = e.$nextEl,
          i = e.$prevEl;
        t && t.length && (t.off("click", this.navigation.onNextClick), t.removeClass(this.params.navigation.disabledClass)), i && i.length && (i.off("click", this.navigation.onPrevClick), i.removeClass(this.params.navigation.disabledClass));
      }
    },
    Z = {
      update: function () {
        var e = this.rtl,
          t = this.params.pagination;
        if (t.el && this.pagination.el && this.pagination.$el && 0 !== this.pagination.$el.length) {
          var i,
            s = this.virtual && this.params.virtual.enabled ? this.virtual.slides.length : this.slides.length,
            a = this.pagination.$el,
            r = this.params.loop ? Math.ceil((s - 2 * this.loopedSlides) / this.params.slidesPerGroup) : this.snapGrid.length;
          if (this.params.loop ? ((i = Math.ceil((this.activeIndex - this.loopedSlides) / this.params.slidesPerGroup)) > s - 1 - 2 * this.loopedSlides && (i -= s - 2 * this.loopedSlides), i > r - 1 && (i -= r), i < 0 && "bullets" !== this.params.paginationType && (i = r + i)) : i = void 0 !== this.snapIndex ? this.snapIndex : this.activeIndex || 0, "bullets" === t.type && this.pagination.bullets && this.pagination.bullets.length > 0) {
            var n,
              l,
              o,
              d = this.pagination.bullets;
            if (t.dynamicBullets && (this.pagination.bulletSize = d.eq(0)[this.isHorizontal() ? "outerWidth" : "outerHeight"](!0), a.css(this.isHorizontal() ? "width" : "height", this.pagination.bulletSize * (t.dynamicMainBullets + 4) + "px"), t.dynamicMainBullets > 1 && void 0 !== this.previousIndex && (this.pagination.dynamicBulletIndex += i - this.previousIndex, this.pagination.dynamicBulletIndex > t.dynamicMainBullets - 1 ? this.pagination.dynamicBulletIndex = t.dynamicMainBullets - 1 : this.pagination.dynamicBulletIndex < 0 && (this.pagination.dynamicBulletIndex = 0)), n = i - this.pagination.dynamicBulletIndex, o = ((l = n + (Math.min(d.length, t.dynamicMainBullets) - 1)) + n) / 2), d.removeClass(t.bulletActiveClass + " " + t.bulletActiveClass + "-next " + t.bulletActiveClass + "-next-next " + t.bulletActiveClass + "-prev " + t.bulletActiveClass + "-prev-prev " + t.bulletActiveClass + "-main"), a.length > 1) d.each(function (e) {
              var s = m(e),
                a = s.index();
              a === i && s.addClass(t.bulletActiveClass), t.dynamicBullets && (a >= n && a <= l && s.addClass(t.bulletActiveClass + "-main"), a === n && s.prev().addClass(t.bulletActiveClass + "-prev").prev().addClass(t.bulletActiveClass + "-prev-prev"), a === l && s.next().addClass(t.bulletActiveClass + "-next").next().addClass(t.bulletActiveClass + "-next-next"));
            });else {
              var h = d.eq(i),
                p = h.index();
              if (h.addClass(t.bulletActiveClass), t.dynamicBullets) {
                for (var u = d.eq(n), c = d.eq(l), f = n; f <= l; f += 1) d.eq(f).addClass(t.bulletActiveClass + "-main");
                if (this.params.loop) {
                  if (p >= d.length - t.dynamicMainBullets) {
                    for (var v = t.dynamicMainBullets; v >= 0; v -= 1) d.eq(d.length - v).addClass(t.bulletActiveClass + "-main");
                    d.eq(d.length - t.dynamicMainBullets - 1).addClass(t.bulletActiveClass + "-prev");
                  } else u.prev().addClass(t.bulletActiveClass + "-prev").prev().addClass(t.bulletActiveClass + "-prev-prev"), c.next().addClass(t.bulletActiveClass + "-next").next().addClass(t.bulletActiveClass + "-next-next");
                } else u.prev().addClass(t.bulletActiveClass + "-prev").prev().addClass(t.bulletActiveClass + "-prev-prev"), c.next().addClass(t.bulletActiveClass + "-next").next().addClass(t.bulletActiveClass + "-next-next");
              }
            }
            if (t.dynamicBullets) {
              var g = Math.min(d.length, t.dynamicMainBullets + 4),
                w = (this.pagination.bulletSize * g - this.pagination.bulletSize) / 2 - o * this.pagination.bulletSize,
                y = e ? "right" : "left";
              d.css(this.isHorizontal() ? y : "top", w + "px");
            }
          }
          if ("fraction" === t.type && (a.find("." + t.currentClass).text(t.formatFractionCurrent(i + 1)), a.find("." + t.totalClass).text(t.formatFractionTotal(r))), "progressbar" === t.type) {
            var b;
            b = t.progressbarOpposite ? this.isHorizontal() ? "vertical" : "horizontal" : this.isHorizontal() ? "horizontal" : "vertical";
            var E = (i + 1) / r,
              x = 1,
              T = 1;
            "horizontal" === b ? x = E : T = E, a.find("." + t.progressbarFillClass).transform("translate3d(0,0,0) scaleX(" + x + ") scaleY(" + T + ")").transition(this.params.speed);
          }
          "custom" === t.type && t.renderCustom ? (a.html(t.renderCustom(this, i + 1, r)), this.emit("paginationRender", a[0])) : this.emit("paginationUpdate", a[0]), a[this.params.watchOverflow && this.isLocked ? "addClass" : "removeClass"](t.lockClass);
        }
      },
      render: function () {
        var e = this.params.pagination;
        if (e.el && this.pagination.el && this.pagination.$el && 0 !== this.pagination.$el.length) {
          var t = this.virtual && this.params.virtual.enabled ? this.virtual.slides.length : this.slides.length,
            i = this.pagination.$el,
            s = "";
          if ("bullets" === e.type) {
            for (var a = this.params.loop ? Math.ceil((t - 2 * this.loopedSlides) / this.params.slidesPerGroup) : this.snapGrid.length, r = 0; r < a; r += 1) e.renderBullet ? s += e.renderBullet.call(this, r, e.bulletClass) : s += "<" + e.bulletElement + ' class="' + e.bulletClass + '"></' + e.bulletElement + ">";
            i.html(s), this.pagination.bullets = i.find("." + e.bulletClass);
          }
          "fraction" === e.type && (s = e.renderFraction ? e.renderFraction.call(this, e.currentClass, e.totalClass) : '<span class="' + e.currentClass + '"></span> / <span class="' + e.totalClass + '"></span>', i.html(s)), "progressbar" === e.type && (s = e.renderProgressbar ? e.renderProgressbar.call(this, e.progressbarFillClass) : '<span class="' + e.progressbarFillClass + '"></span>', i.html(s)), "custom" !== e.type && this.emit("paginationRender", this.pagination.$el[0]);
        }
      },
      init: function () {
        var e = this,
          t = e.params.pagination;
        if (t.el) {
          var i = m(t.el);
          0 !== i.length && (e.params.uniqueNavElements && "string" == typeof t.el && i.length > 1 && (i = e.$el.find(t.el)), "bullets" === t.type && t.clickable && i.addClass(t.clickableClass), i.addClass(t.modifierClass + t.type), "bullets" === t.type && t.dynamicBullets && (i.addClass("" + t.modifierClass + t.type + "-dynamic"), e.pagination.dynamicBulletIndex = 0, t.dynamicMainBullets < 1 && (t.dynamicMainBullets = 1)), "progressbar" === t.type && t.progressbarOpposite && i.addClass(t.progressbarOppositeClass), t.clickable && i.on("click", "." + t.bulletClass, function (t) {
            t.preventDefault();
            var i = m(this).index() * e.params.slidesPerGroup;
            e.params.loop && (i += e.loopedSlides), e.slideTo(i);
          }), S(e.pagination, {
            $el: i,
            el: i[0]
          }));
        }
      },
      destroy: function () {
        var e = this.params.pagination;
        if (e.el && this.pagination.el && this.pagination.$el && 0 !== this.pagination.$el.length) {
          var t = this.pagination.$el;
          t.removeClass(e.hiddenClass), t.removeClass(e.modifierClass + e.type), this.pagination.bullets && this.pagination.bullets.removeClass(e.bulletActiveClass), e.clickable && t.off("click", "." + e.bulletClass);
        }
      }
    },
    J = {
      setTranslate: function () {
        if (this.params.scrollbar.el && this.scrollbar.el) {
          var e = this.scrollbar,
            t = this.rtlTranslate,
            i = this.progress,
            s = e.dragSize,
            a = e.trackSize,
            r = e.$dragEl,
            n = e.$el,
            l = this.params.scrollbar,
            o = s,
            d = (a - s) * i;
          t ? (d = -d) > 0 ? (o = s - d, d = 0) : -d + s > a && (o = a + d) : d < 0 ? (o = s + d, d = 0) : d + s > a && (o = a - d), this.isHorizontal() ? (r.transform("translate3d(" + d + "px, 0, 0)"), r[0].style.width = o + "px") : (r.transform("translate3d(0px, " + d + "px, 0)"), r[0].style.height = o + "px"), l.hide && (clearTimeout(this.scrollbar.timeout), n[0].style.opacity = 1, this.scrollbar.timeout = setTimeout(function () {
            n[0].style.opacity = 0, n.transition(400);
          }, 1e3));
        }
      },
      setTransition: function (e) {
        this.params.scrollbar.el && this.scrollbar.el && this.scrollbar.$dragEl.transition(e);
      },
      updateSize: function () {
        if (this.params.scrollbar.el && this.scrollbar.el) {
          var e = this.scrollbar,
            t = e.$dragEl,
            i = e.$el;
          t[0].style.width = "", t[0].style.height = "";
          var s,
            a = this.isHorizontal() ? i[0].offsetWidth : i[0].offsetHeight,
            r = this.size / this.virtualSize,
            n = r * (a / this.size);
          s = "auto" === this.params.scrollbar.dragSize ? a * r : parseInt(this.params.scrollbar.dragSize, 10), this.isHorizontal() ? t[0].style.width = s + "px" : t[0].style.height = s + "px", i[0].style.display = r >= 1 ? "none" : "", this.params.scrollbar.hide && (i[0].style.opacity = 0), S(e, {
            trackSize: a,
            divider: r,
            moveDivider: n,
            dragSize: s
          }), e.$el[this.params.watchOverflow && this.isLocked ? "addClass" : "removeClass"](this.params.scrollbar.lockClass);
        }
      },
      getPointerPosition: function (e) {
        return this.isHorizontal() ? "touchstart" === e.type || "touchmove" === e.type ? e.targetTouches[0].clientX : e.clientX : "touchstart" === e.type || "touchmove" === e.type ? e.targetTouches[0].clientY : e.clientY;
      },
      setDragPosition: function (e) {
        var t,
          i = this.scrollbar,
          s = this.rtlTranslate,
          a = i.$el,
          r = i.dragSize,
          n = i.trackSize,
          l = i.dragStartPos;
        t = (i.getPointerPosition(e) - a.offset()[this.isHorizontal() ? "left" : "top"] - (null !== l ? l : r / 2)) / (n - r), t = Math.max(Math.min(t, 1), 0), s && (t = 1 - t);
        var o = this.minTranslate() + (this.maxTranslate() - this.minTranslate()) * t;
        this.updateProgress(o), this.setTranslate(o), this.updateActiveIndex(), this.updateSlidesClasses();
      },
      onDragStart: function (e) {
        var t = this.params.scrollbar,
          i = this.scrollbar,
          s = this.$wrapperEl,
          a = i.$el,
          r = i.$dragEl;
        this.scrollbar.isTouched = !0, this.scrollbar.dragStartPos = e.target === r[0] || e.target === r ? i.getPointerPosition(e) - e.target.getBoundingClientRect()[this.isHorizontal() ? "left" : "top"] : null, e.preventDefault(), e.stopPropagation(), s.transition(100), r.transition(100), i.setDragPosition(e), clearTimeout(this.scrollbar.dragTimeout), a.transition(0), t.hide && a.css("opacity", 1), this.params.cssMode && this.$wrapperEl.css("scroll-snap-type", "none"), this.emit("scrollbarDragStart", e);
      },
      onDragMove: function (e) {
        var t = this.scrollbar,
          i = this.$wrapperEl,
          s = t.$el,
          a = t.$dragEl;
        this.scrollbar.isTouched && (e.preventDefault ? e.preventDefault() : e.returnValue = !1, t.setDragPosition(e), i.transition(0), s.transition(0), a.transition(0), this.emit("scrollbarDragMove", e));
      },
      onDragEnd: function (e) {
        var t = this.params.scrollbar,
          i = this.scrollbar,
          s = this.$wrapperEl,
          a = i.$el;
        this.scrollbar.isTouched && (this.scrollbar.isTouched = !1, this.params.cssMode && (this.$wrapperEl.css("scroll-snap-type", ""), s.transition("")), t.hide && (clearTimeout(this.scrollbar.dragTimeout), this.scrollbar.dragTimeout = E(function () {
          a.css("opacity", 0), a.transition(400);
        }, 1e3)), this.emit("scrollbarDragEnd", e), t.snapOnRelease && this.slideToClosest());
      },
      enableDraggable: function () {
        if (this.params.scrollbar.el) {
          var e = r(),
            t = this.scrollbar,
            i = this.touchEventsTouch,
            s = this.touchEventsDesktop,
            a = this.params,
            n = this.support,
            l = t.$el[0],
            o = !(!n.passiveListener || !a.passiveListeners) && {
              passive: !1,
              capture: !1
            },
            d = !(!n.passiveListener || !a.passiveListeners) && {
              passive: !0,
              capture: !1
            };
          n.touch ? (l.addEventListener(i.start, this.scrollbar.onDragStart, o), l.addEventListener(i.move, this.scrollbar.onDragMove, o), l.addEventListener(i.end, this.scrollbar.onDragEnd, d)) : (l.addEventListener(s.start, this.scrollbar.onDragStart, o), e.addEventListener(s.move, this.scrollbar.onDragMove, o), e.addEventListener(s.end, this.scrollbar.onDragEnd, d));
        }
      },
      disableDraggable: function () {
        if (this.params.scrollbar.el) {
          var e = r(),
            t = this.scrollbar,
            i = this.touchEventsTouch,
            s = this.touchEventsDesktop,
            a = this.params,
            n = this.support,
            l = t.$el[0],
            o = !(!n.passiveListener || !a.passiveListeners) && {
              passive: !1,
              capture: !1
            },
            d = !(!n.passiveListener || !a.passiveListeners) && {
              passive: !0,
              capture: !1
            };
          n.touch ? (l.removeEventListener(i.start, this.scrollbar.onDragStart, o), l.removeEventListener(i.move, this.scrollbar.onDragMove, o), l.removeEventListener(i.end, this.scrollbar.onDragEnd, d)) : (l.removeEventListener(s.start, this.scrollbar.onDragStart, o), e.removeEventListener(s.move, this.scrollbar.onDragMove, o), e.removeEventListener(s.end, this.scrollbar.onDragEnd, d));
        }
      },
      init: function () {
        if (this.params.scrollbar.el) {
          var e = this.scrollbar,
            t = this.$el,
            i = this.params.scrollbar,
            s = m(i.el);
          this.params.uniqueNavElements && "string" == typeof i.el && s.length > 1 && 1 === t.find(i.el).length && (s = t.find(i.el));
          var a = s.find("." + this.params.scrollbar.dragClass);
          0 === a.length && (a = m('<div class="' + this.params.scrollbar.dragClass + '"></div>'), s.append(a)), S(e, {
            $el: s,
            el: s[0],
            $dragEl: a,
            dragEl: a[0]
          }), i.draggable && e.enableDraggable();
        }
      },
      destroy: function () {
        this.scrollbar.disableDraggable();
      }
    },
    Q = {
      setTransform: function (e, t) {
        var i = this.rtl,
          s = m(e),
          a = i ? -1 : 1,
          r = s.attr("data-swiper-parallax") || "0",
          n = s.attr("data-swiper-parallax-x"),
          l = s.attr("data-swiper-parallax-y"),
          o = s.attr("data-swiper-parallax-scale"),
          d = s.attr("data-swiper-parallax-opacity");
        if (n || l ? (n = n || "0", l = l || "0") : this.isHorizontal() ? (n = r, l = "0") : (l = r, n = "0"), n = n.indexOf("%") >= 0 ? parseInt(n, 10) * t * a + "%" : n * t * a + "px", l = l.indexOf("%") >= 0 ? parseInt(l, 10) * t + "%" : l * t + "px", null != d) {
          var h = d - (d - 1) * (1 - Math.abs(t));
          s[0].style.opacity = h;
        }
        if (null == o) s.transform("translate3d(" + n + ", " + l + ", 0px)");else {
          var p = o - (o - 1) * (1 - Math.abs(t));
          s.transform("translate3d(" + n + ", " + l + ", 0px) scale(" + p + ")");
        }
      },
      setTranslate: function () {
        var e = this,
          t = e.$el,
          i = e.slides,
          s = e.progress,
          a = e.snapGrid;
        t.children("[data-swiper-parallax], [data-swiper-parallax-x], [data-swiper-parallax-y], [data-swiper-parallax-opacity], [data-swiper-parallax-scale]").each(function (t) {
          e.parallax.setTransform(t, s);
        }), i.each(function (t, i) {
          var r = t.progress;
          e.params.slidesPerGroup > 1 && "auto" !== e.params.slidesPerView && (r += Math.ceil(i / 2) - s * (a.length - 1)), r = Math.min(Math.max(r, -1), 1), m(t).find("[data-swiper-parallax], [data-swiper-parallax-x], [data-swiper-parallax-y], [data-swiper-parallax-opacity], [data-swiper-parallax-scale]").each(function (t) {
            e.parallax.setTransform(t, r);
          });
        });
      },
      setTransition: function (e) {
        void 0 === e && (e = this.params.speed);
        this.$el.find("[data-swiper-parallax], [data-swiper-parallax-x], [data-swiper-parallax-y], [data-swiper-parallax-opacity], [data-swiper-parallax-scale]").each(function (t) {
          var i = m(t),
            s = parseInt(i.attr("data-swiper-parallax-duration"), 10) || e;
          0 === e && (s = 0), i.transition(s);
        });
      }
    },
    ee = {
      getDistanceBetweenTouches: function (e) {
        if (e.targetTouches.length < 2) return 1;
        var t = e.targetTouches[0].pageX,
          i = e.targetTouches[0].pageY,
          s = e.targetTouches[1].pageX,
          a = e.targetTouches[1].pageY;
        return Math.sqrt(Math.pow(s - t, 2) + Math.pow(a - i, 2));
      },
      onGestureStart: function (e) {
        var t = this.support,
          i = this.params.zoom,
          s = this.zoom,
          a = s.gesture;
        if (s.fakeGestureTouched = !1, s.fakeGestureMoved = !1, !t.gestures) {
          if ("touchstart" !== e.type || "touchstart" === e.type && e.targetTouches.length < 2) return;
          s.fakeGestureTouched = !0, a.scaleStart = ee.getDistanceBetweenTouches(e);
        }
        a.$slideEl && a.$slideEl.length || (a.$slideEl = m(e.target).closest("." + this.params.slideClass), 0 === a.$slideEl.length && (a.$slideEl = this.slides.eq(this.activeIndex)), a.$imageEl = a.$slideEl.find("img, svg, canvas, picture, .swiper-zoom-target"), a.$imageWrapEl = a.$imageEl.parent("." + i.containerClass), a.maxRatio = a.$imageWrapEl.attr("data-swiper-zoom") || i.maxRatio, 0 !== a.$imageWrapEl.length) ? (a.$imageEl && a.$imageEl.transition(0), this.zoom.isScaling = !0) : a.$imageEl = void 0;
      },
      onGestureChange: function (e) {
        var t = this.support,
          i = this.params.zoom,
          s = this.zoom,
          a = s.gesture;
        if (!t.gestures) {
          if ("touchmove" !== e.type || "touchmove" === e.type && e.targetTouches.length < 2) return;
          s.fakeGestureMoved = !0, a.scaleMove = ee.getDistanceBetweenTouches(e);
        }
        a.$imageEl && 0 !== a.$imageEl.length ? (t.gestures ? s.scale = e.scale * s.currentScale : s.scale = a.scaleMove / a.scaleStart * s.currentScale, s.scale > a.maxRatio && (s.scale = a.maxRatio - 1 + Math.pow(s.scale - a.maxRatio + 1, .5)), s.scale < i.minRatio && (s.scale = i.minRatio + 1 - Math.pow(i.minRatio - s.scale + 1, .5)), a.$imageEl.transform("translate3d(0,0,0) scale(" + s.scale + ")")) : "gesturechange" === e.type && s.onGestureStart(e);
      },
      onGestureEnd: function (e) {
        var t = this.device,
          i = this.support,
          s = this.params.zoom,
          a = this.zoom,
          r = a.gesture;
        if (!i.gestures) {
          if (!a.fakeGestureTouched || !a.fakeGestureMoved) return;
          if ("touchend" !== e.type || "touchend" === e.type && e.changedTouches.length < 2 && !t.android) return;
          a.fakeGestureTouched = !1, a.fakeGestureMoved = !1;
        }
        r.$imageEl && 0 !== r.$imageEl.length && (a.scale = Math.max(Math.min(a.scale, r.maxRatio), s.minRatio), r.$imageEl.transition(this.params.speed).transform("translate3d(0,0,0) scale(" + a.scale + ")"), a.currentScale = a.scale, a.isScaling = !1, 1 === a.scale && (r.$slideEl = void 0));
      },
      onTouchStart: function (e) {
        var t = this.device,
          i = this.zoom,
          s = i.gesture,
          a = i.image;
        s.$imageEl && 0 !== s.$imageEl.length && (a.isTouched || (t.android && e.cancelable && e.preventDefault(), a.isTouched = !0, a.touchesStart.x = "touchstart" === e.type ? e.targetTouches[0].pageX : e.pageX, a.touchesStart.y = "touchstart" === e.type ? e.targetTouches[0].pageY : e.pageY));
      },
      onTouchMove: function (e) {
        var t = this.zoom,
          i = t.gesture,
          s = t.image,
          a = t.velocity;
        if (i.$imageEl && 0 !== i.$imageEl.length && (this.allowClick = !1, s.isTouched && i.$slideEl)) {
          s.isMoved || (s.width = i.$imageEl[0].offsetWidth, s.height = i.$imageEl[0].offsetHeight, s.startX = T(i.$imageWrapEl[0], "x") || 0, s.startY = T(i.$imageWrapEl[0], "y") || 0, i.slideWidth = i.$slideEl[0].offsetWidth, i.slideHeight = i.$slideEl[0].offsetHeight, i.$imageWrapEl.transition(0), this.rtl && (s.startX = -s.startX, s.startY = -s.startY));
          var r = s.width * t.scale,
            n = s.height * t.scale;
          if (!(r < i.slideWidth && n < i.slideHeight)) {
            if (s.minX = Math.min(i.slideWidth / 2 - r / 2, 0), s.maxX = -s.minX, s.minY = Math.min(i.slideHeight / 2 - n / 2, 0), s.maxY = -s.minY, s.touchesCurrent.x = "touchmove" === e.type ? e.targetTouches[0].pageX : e.pageX, s.touchesCurrent.y = "touchmove" === e.type ? e.targetTouches[0].pageY : e.pageY, !s.isMoved && !t.isScaling) {
              if (this.isHorizontal() && (Math.floor(s.minX) === Math.floor(s.startX) && s.touchesCurrent.x < s.touchesStart.x || Math.floor(s.maxX) === Math.floor(s.startX) && s.touchesCurrent.x > s.touchesStart.x)) return void (s.isTouched = !1);
              if (!this.isHorizontal() && (Math.floor(s.minY) === Math.floor(s.startY) && s.touchesCurrent.y < s.touchesStart.y || Math.floor(s.maxY) === Math.floor(s.startY) && s.touchesCurrent.y > s.touchesStart.y)) return void (s.isTouched = !1);
            }
            e.cancelable && e.preventDefault(), e.stopPropagation(), s.isMoved = !0, s.currentX = s.touchesCurrent.x - s.touchesStart.x + s.startX, s.currentY = s.touchesCurrent.y - s.touchesStart.y + s.startY, s.currentX < s.minX && (s.currentX = s.minX + 1 - Math.pow(s.minX - s.currentX + 1, .8)), s.currentX > s.maxX && (s.currentX = s.maxX - 1 + Math.pow(s.currentX - s.maxX + 1, .8)), s.currentY < s.minY && (s.currentY = s.minY + 1 - Math.pow(s.minY - s.currentY + 1, .8)), s.currentY > s.maxY && (s.currentY = s.maxY - 1 + Math.pow(s.currentY - s.maxY + 1, .8)), a.prevPositionX || (a.prevPositionX = s.touchesCurrent.x), a.prevPositionY || (a.prevPositionY = s.touchesCurrent.y), a.prevTime || (a.prevTime = Date.now()), a.x = (s.touchesCurrent.x - a.prevPositionX) / (Date.now() - a.prevTime) / 2, a.y = (s.touchesCurrent.y - a.prevPositionY) / (Date.now() - a.prevTime) / 2, Math.abs(s.touchesCurrent.x - a.prevPositionX) < 2 && (a.x = 0), Math.abs(s.touchesCurrent.y - a.prevPositionY) < 2 && (a.y = 0), a.prevPositionX = s.touchesCurrent.x, a.prevPositionY = s.touchesCurrent.y, a.prevTime = Date.now(), i.$imageWrapEl.transform("translate3d(" + s.currentX + "px, " + s.currentY + "px,0)");
          }
        }
      },
      onTouchEnd: function () {
        var e = this.zoom,
          t = e.gesture,
          i = e.image,
          s = e.velocity;
        if (t.$imageEl && 0 !== t.$imageEl.length) {
          if (!i.isTouched || !i.isMoved) return i.isTouched = !1, void (i.isMoved = !1);
          i.isTouched = !1, i.isMoved = !1;
          var a = 300,
            r = 300,
            n = s.x * a,
            l = i.currentX + n,
            o = s.y * r,
            d = i.currentY + o;
          0 !== s.x && (a = Math.abs((l - i.currentX) / s.x)), 0 !== s.y && (r = Math.abs((d - i.currentY) / s.y));
          var h = Math.max(a, r);
          i.currentX = l, i.currentY = d;
          var p = i.width * e.scale,
            u = i.height * e.scale;
          i.minX = Math.min(t.slideWidth / 2 - p / 2, 0), i.maxX = -i.minX, i.minY = Math.min(t.slideHeight / 2 - u / 2, 0), i.maxY = -i.minY, i.currentX = Math.max(Math.min(i.currentX, i.maxX), i.minX), i.currentY = Math.max(Math.min(i.currentY, i.maxY), i.minY), t.$imageWrapEl.transition(h).transform("translate3d(" + i.currentX + "px, " + i.currentY + "px,0)");
        }
      },
      onTransitionEnd: function () {
        var e = this.zoom,
          t = e.gesture;
        t.$slideEl && this.previousIndex !== this.activeIndex && (t.$imageEl && t.$imageEl.transform("translate3d(0,0,0) scale(1)"), t.$imageWrapEl && t.$imageWrapEl.transform("translate3d(0,0,0)"), e.scale = 1, e.currentScale = 1, t.$slideEl = void 0, t.$imageEl = void 0, t.$imageWrapEl = void 0);
      },
      toggle: function (e) {
        var t = this.zoom;
        t.scale && 1 !== t.scale ? t.out() : t.in(e);
      },
      in: function (e) {
        var t,
          i,
          s,
          a,
          r,
          n,
          l,
          o,
          d,
          h,
          p,
          u,
          c,
          f,
          v,
          m,
          g = this.zoom,
          w = this.params.zoom,
          y = g.gesture,
          b = g.image;
        (y.$slideEl || (this.params.virtual && this.params.virtual.enabled && this.virtual ? y.$slideEl = this.$wrapperEl.children("." + this.params.slideActiveClass) : y.$slideEl = this.slides.eq(this.activeIndex), y.$imageEl = y.$slideEl.find("img, svg, canvas, picture, .swiper-zoom-target"), y.$imageWrapEl = y.$imageEl.parent("." + w.containerClass)), y.$imageEl && 0 !== y.$imageEl.length) && (y.$slideEl.addClass("" + w.zoomedSlideClass), void 0 === b.touchesStart.x && e ? (t = "touchend" === e.type ? e.changedTouches[0].pageX : e.pageX, i = "touchend" === e.type ? e.changedTouches[0].pageY : e.pageY) : (t = b.touchesStart.x, i = b.touchesStart.y), g.scale = y.$imageWrapEl.attr("data-swiper-zoom") || w.maxRatio, g.currentScale = y.$imageWrapEl.attr("data-swiper-zoom") || w.maxRatio, e ? (v = y.$slideEl[0].offsetWidth, m = y.$slideEl[0].offsetHeight, s = y.$slideEl.offset().left + v / 2 - t, a = y.$slideEl.offset().top + m / 2 - i, l = y.$imageEl[0].offsetWidth, o = y.$imageEl[0].offsetHeight, d = l * g.scale, h = o * g.scale, c = -(p = Math.min(v / 2 - d / 2, 0)), f = -(u = Math.min(m / 2 - h / 2, 0)), (r = s * g.scale) < p && (r = p), r > c && (r = c), (n = a * g.scale) < u && (n = u), n > f && (n = f)) : (r = 0, n = 0), y.$imageWrapEl.transition(300).transform("translate3d(" + r + "px, " + n + "px,0)"), y.$imageEl.transition(300).transform("translate3d(0,0,0) scale(" + g.scale + ")"));
      },
      out: function () {
        var e = this.zoom,
          t = this.params.zoom,
          i = e.gesture;
        i.$slideEl || (this.params.virtual && this.params.virtual.enabled && this.virtual ? i.$slideEl = this.$wrapperEl.children("." + this.params.slideActiveClass) : i.$slideEl = this.slides.eq(this.activeIndex), i.$imageEl = i.$slideEl.find("img, svg, canvas, picture, .swiper-zoom-target"), i.$imageWrapEl = i.$imageEl.parent("." + t.containerClass)), i.$imageEl && 0 !== i.$imageEl.length && (e.scale = 1, e.currentScale = 1, i.$imageWrapEl.transition(300).transform("translate3d(0,0,0)"), i.$imageEl.transition(300).transform("translate3d(0,0,0) scale(1)"), i.$slideEl.removeClass("" + t.zoomedSlideClass), i.$slideEl = void 0);
      },
      toggleGestures: function (e) {
        var t = this.zoom,
          i = t.slideSelector,
          s = t.passiveListener;
        this.$wrapperEl[e]("gesturestart", i, t.onGestureStart, s), this.$wrapperEl[e]("gesturechange", i, t.onGestureChange, s), this.$wrapperEl[e]("gestureend", i, t.onGestureEnd, s);
      },
      enableGestures: function () {
        this.zoom.gesturesEnabled || (this.zoom.gesturesEnabled = !0, this.zoom.toggleGestures("on"));
      },
      disableGestures: function () {
        this.zoom.gesturesEnabled && (this.zoom.gesturesEnabled = !1, this.zoom.toggleGestures("off"));
      },
      enable: function () {
        var e = this.support,
          t = this.zoom;
        if (!t.enabled) {
          t.enabled = !0;
          var i = !("touchstart" !== this.touchEvents.start || !e.passiveListener || !this.params.passiveListeners) && {
              passive: !0,
              capture: !1
            },
            s = !e.passiveListener || {
              passive: !1,
              capture: !0
            },
            a = "." + this.params.slideClass;
          this.zoom.passiveListener = i, this.zoom.slideSelector = a, e.gestures ? (this.$wrapperEl.on(this.touchEvents.start, this.zoom.enableGestures, i), this.$wrapperEl.on(this.touchEvents.end, this.zoom.disableGestures, i)) : "touchstart" === this.touchEvents.start && (this.$wrapperEl.on(this.touchEvents.start, a, t.onGestureStart, i), this.$wrapperEl.on(this.touchEvents.move, a, t.onGestureChange, s), this.$wrapperEl.on(this.touchEvents.end, a, t.onGestureEnd, i), this.touchEvents.cancel && this.$wrapperEl.on(this.touchEvents.cancel, a, t.onGestureEnd, i)), this.$wrapperEl.on(this.touchEvents.move, "." + this.params.zoom.containerClass, t.onTouchMove, s);
        }
      },
      disable: function () {
        var e = this.zoom;
        if (e.enabled) {
          var t = this.support;
          this.zoom.enabled = !1;
          var i = !("touchstart" !== this.touchEvents.start || !t.passiveListener || !this.params.passiveListeners) && {
              passive: !0,
              capture: !1
            },
            s = !t.passiveListener || {
              passive: !1,
              capture: !0
            },
            a = "." + this.params.slideClass;
          t.gestures ? (this.$wrapperEl.off(this.touchEvents.start, this.zoom.enableGestures, i), this.$wrapperEl.off(this.touchEvents.end, this.zoom.disableGestures, i)) : "touchstart" === this.touchEvents.start && (this.$wrapperEl.off(this.touchEvents.start, a, e.onGestureStart, i), this.$wrapperEl.off(this.touchEvents.move, a, e.onGestureChange, s), this.$wrapperEl.off(this.touchEvents.end, a, e.onGestureEnd, i), this.touchEvents.cancel && this.$wrapperEl.off(this.touchEvents.cancel, a, e.onGestureEnd, i)), this.$wrapperEl.off(this.touchEvents.move, "." + this.params.zoom.containerClass, e.onTouchMove, s);
        }
      }
    },
    te = {
      loadInSlide: function (e, t) {
        void 0 === t && (t = !0);
        var i = this,
          s = i.params.lazy;
        if (void 0 !== e && 0 !== i.slides.length) {
          var a = i.virtual && i.params.virtual.enabled ? i.$wrapperEl.children("." + i.params.slideClass + '[data-swiper-slide-index="' + e + '"]') : i.slides.eq(e),
            r = a.find("." + s.elementClass + ":not(." + s.loadedClass + "):not(." + s.loadingClass + ")");
          !a.hasClass(s.elementClass) || a.hasClass(s.loadedClass) || a.hasClass(s.loadingClass) || r.push(a[0]), 0 !== r.length && r.each(function (e) {
            var r = m(e);
            r.addClass(s.loadingClass);
            var n = r.attr("data-background"),
              l = r.attr("data-src"),
              o = r.attr("data-srcset"),
              d = r.attr("data-sizes"),
              h = r.parent("picture");
            i.loadImage(r[0], l || n, o, d, !1, function () {
              if (null != i && i && (!i || i.params) && !i.destroyed) {
                if (n ? (r.css("background-image", 'url("' + n + '")'), r.removeAttr("data-background")) : (o && (r.attr("srcset", o), r.removeAttr("data-srcset")), d && (r.attr("sizes", d), r.removeAttr("data-sizes")), h.length && h.children("source").each(function (e) {
                  var t = m(e);
                  t.attr("data-srcset") && (t.attr("srcset", t.attr("data-srcset")), t.removeAttr("data-srcset"));
                }), l && (r.attr("src", l), r.removeAttr("data-src"))), r.addClass(s.loadedClass).removeClass(s.loadingClass), a.find("." + s.preloaderClass).remove(), i.params.loop && t) {
                  var e = a.attr("data-swiper-slide-index");
                  if (a.hasClass(i.params.slideDuplicateClass)) {
                    var p = i.$wrapperEl.children('[data-swiper-slide-index="' + e + '"]:not(.' + i.params.slideDuplicateClass + ")");
                    i.lazy.loadInSlide(p.index(), !1);
                  } else {
                    var u = i.$wrapperEl.children("." + i.params.slideDuplicateClass + '[data-swiper-slide-index="' + e + '"]');
                    i.lazy.loadInSlide(u.index(), !1);
                  }
                }
                i.emit("lazyImageReady", a[0], r[0]), i.params.autoHeight && i.updateAutoHeight();
              }
            }), i.emit("lazyImageLoad", a[0], r[0]);
          });
        }
      },
      load: function () {
        var e = this,
          t = e.$wrapperEl,
          i = e.params,
          s = e.slides,
          a = e.activeIndex,
          r = e.virtual && i.virtual.enabled,
          n = i.lazy,
          l = i.slidesPerView;
        function o(e) {
          if (r) {
            if (t.children("." + i.slideClass + '[data-swiper-slide-index="' + e + '"]').length) return !0;
          } else if (s[e]) return !0;
          return !1;
        }
        function d(e) {
          return r ? m(e).attr("data-swiper-slide-index") : m(e).index();
        }
        if ("auto" === l && (l = 0), e.lazy.initialImageLoaded || (e.lazy.initialImageLoaded = !0), e.params.watchSlidesVisibility) t.children("." + i.slideVisibleClass).each(function (t) {
          var i = r ? m(t).attr("data-swiper-slide-index") : m(t).index();
          e.lazy.loadInSlide(i);
        });else if (l > 1) for (var h = a; h < a + l; h += 1) o(h) && e.lazy.loadInSlide(h);else e.lazy.loadInSlide(a);
        if (n.loadPrevNext) if (l > 1 || n.loadPrevNextAmount && n.loadPrevNextAmount > 1) {
          for (var p = n.loadPrevNextAmount, u = l, c = Math.min(a + u + Math.max(p, u), s.length), f = Math.max(a - Math.max(u, p), 0), v = a + l; v < c; v += 1) o(v) && e.lazy.loadInSlide(v);
          for (var g = f; g < a; g += 1) o(g) && e.lazy.loadInSlide(g);
        } else {
          var w = t.children("." + i.slideNextClass);
          w.length > 0 && e.lazy.loadInSlide(d(w));
          var y = t.children("." + i.slidePrevClass);
          y.length > 0 && e.lazy.loadInSlide(d(y));
        }
      }
    },
    ie = {
      LinearSpline: function (e, t) {
        var i,
          s,
          a,
          r,
          n,
          l = function (e, t) {
            for (s = -1, i = e.length; i - s > 1;) e[a = i + s >> 1] <= t ? s = a : i = a;
            return i;
          };
        return this.x = e, this.y = t, this.lastIndex = e.length - 1, this.interpolate = function (e) {
          return e ? (n = l(this.x, e), r = n - 1, (e - this.x[r]) * (this.y[n] - this.y[r]) / (this.x[n] - this.x[r]) + this.y[r]) : 0;
        }, this;
      },
      getInterpolateFunction: function (e) {
        this.controller.spline || (this.controller.spline = this.params.loop ? new ie.LinearSpline(this.slidesGrid, e.slidesGrid) : new ie.LinearSpline(this.snapGrid, e.snapGrid));
      },
      setTranslate: function (e, t) {
        var i,
          s,
          a = this,
          r = a.controller.control,
          n = a.constructor;
        function l(e) {
          var t = a.rtlTranslate ? -a.translate : a.translate;
          "slide" === a.params.controller.by && (a.controller.getInterpolateFunction(e), s = -a.controller.spline.interpolate(-t)), s && "container" !== a.params.controller.by || (i = (e.maxTranslate() - e.minTranslate()) / (a.maxTranslate() - a.minTranslate()), s = (t - a.minTranslate()) * i + e.minTranslate()), a.params.controller.inverse && (s = e.maxTranslate() - s), e.updateProgress(s), e.setTranslate(s, a), e.updateActiveIndex(), e.updateSlidesClasses();
        }
        if (Array.isArray(r)) for (var o = 0; o < r.length; o += 1) r[o] !== t && r[o] instanceof n && l(r[o]);else r instanceof n && t !== r && l(r);
      },
      setTransition: function (e, t) {
        var i,
          s = this,
          a = s.constructor,
          r = s.controller.control;
        function n(t) {
          t.setTransition(e, s), 0 !== e && (t.transitionStart(), t.params.autoHeight && E(function () {
            t.updateAutoHeight();
          }), t.$wrapperEl.transitionEnd(function () {
            r && (t.params.loop && "slide" === s.params.controller.by && t.loopFix(), t.transitionEnd());
          }));
        }
        if (Array.isArray(r)) for (i = 0; i < r.length; i += 1) r[i] !== t && r[i] instanceof a && n(r[i]);else r instanceof a && t !== r && n(r);
      }
    },
    se = {
      getRandomNumber: function (e) {
        void 0 === e && (e = 16);
        return "x".repeat(e).replace(/x/g, function () {
          return Math.round(16 * Math.random()).toString(16);
        });
      },
      makeElFocusable: function (e) {
        return e.attr("tabIndex", "0"), e;
      },
      makeElNotFocusable: function (e) {
        return e.attr("tabIndex", "-1"), e;
      },
      addElRole: function (e, t) {
        return e.attr("role", t), e;
      },
      addElRoleDescription: function (e, t) {
        return e.attr("aria-role-description", t), e;
      },
      addElControls: function (e, t) {
        return e.attr("aria-controls", t), e;
      },
      addElLabel: function (e, t) {
        return e.attr("aria-label", t), e;
      },
      addElId: function (e, t) {
        return e.attr("id", t), e;
      },
      addElLive: function (e, t) {
        return e.attr("aria-live", t), e;
      },
      disableEl: function (e) {
        return e.attr("aria-disabled", !0), e;
      },
      enableEl: function (e) {
        return e.attr("aria-disabled", !1), e;
      },
      onEnterKey: function (e) {
        var t = this.params.a11y;
        if (13 === e.keyCode) {
          var i = m(e.target);
          this.navigation && this.navigation.$nextEl && i.is(this.navigation.$nextEl) && (this.isEnd && !this.params.loop || this.slideNext(), this.isEnd ? this.a11y.notify(t.lastSlideMessage) : this.a11y.notify(t.nextSlideMessage)), this.navigation && this.navigation.$prevEl && i.is(this.navigation.$prevEl) && (this.isBeginning && !this.params.loop || this.slidePrev(), this.isBeginning ? this.a11y.notify(t.firstSlideMessage) : this.a11y.notify(t.prevSlideMessage)), this.pagination && i.is("." + this.params.pagination.bulletClass) && i[0].click();
        }
      },
      notify: function (e) {
        var t = this.a11y.liveRegion;
        0 !== t.length && (t.html(""), t.html(e));
      },
      updateNavigation: function () {
        if (!this.params.loop && this.navigation) {
          var e = this.navigation,
            t = e.$nextEl,
            i = e.$prevEl;
          i && i.length > 0 && (this.isBeginning ? (this.a11y.disableEl(i), this.a11y.makeElNotFocusable(i)) : (this.a11y.enableEl(i), this.a11y.makeElFocusable(i))), t && t.length > 0 && (this.isEnd ? (this.a11y.disableEl(t), this.a11y.makeElNotFocusable(t)) : (this.a11y.enableEl(t), this.a11y.makeElFocusable(t)));
        }
      },
      updatePagination: function () {
        var e = this,
          t = e.params.a11y;
        e.pagination && e.params.pagination.clickable && e.pagination.bullets && e.pagination.bullets.length && e.pagination.bullets.each(function (i) {
          var s = m(i);
          e.a11y.makeElFocusable(s), e.params.pagination.renderBullet || (e.a11y.addElRole(s, "button"), e.a11y.addElLabel(s, t.paginationBulletMessage.replace(/\{\{index\}\}/, s.index() + 1)));
        });
      },
      init: function () {
        var e = this,
          t = e.params.a11y;
        e.$el.append(e.a11y.liveRegion);
        var i = e.$el;
        t.containerRoleDescriptionMessage && e.a11y.addElRoleDescription(i, t.containerRoleDescriptionMessage), t.containerMessage && e.a11y.addElLabel(i, t.containerMessage);
        var s,
          a,
          r,
          n = e.$wrapperEl,
          l = n.attr("id") || "swiper-wrapper-" + e.a11y.getRandomNumber(16);
        e.a11y.addElId(n, l), s = e.params.autoplay && e.params.autoplay.enabled ? "off" : "polite", e.a11y.addElLive(n, s), t.itemRoleDescriptionMessage && e.a11y.addElRoleDescription(m(e.slides), t.itemRoleDescriptionMessage), e.a11y.addElRole(m(e.slides), "group"), e.slides.each(function (t) {
          var i = m(t);
          e.a11y.addElLabel(i, i.index() + 1 + " / " + e.slides.length);
        }), e.navigation && e.navigation.$nextEl && (a = e.navigation.$nextEl), e.navigation && e.navigation.$prevEl && (r = e.navigation.$prevEl), a && a.length && (e.a11y.makeElFocusable(a), "BUTTON" !== a[0].tagName && (e.a11y.addElRole(a, "button"), a.on("keydown", e.a11y.onEnterKey)), e.a11y.addElLabel(a, t.nextSlideMessage), e.a11y.addElControls(a, l)), r && r.length && (e.a11y.makeElFocusable(r), "BUTTON" !== r[0].tagName && (e.a11y.addElRole(r, "button"), r.on("keydown", e.a11y.onEnterKey)), e.a11y.addElLabel(r, t.prevSlideMessage), e.a11y.addElControls(r, l)), e.pagination && e.params.pagination.clickable && e.pagination.bullets && e.pagination.bullets.length && e.pagination.$el.on("keydown", "." + e.params.pagination.bulletClass, e.a11y.onEnterKey);
      },
      destroy: function () {
        var e, t;
        this.a11y.liveRegion && this.a11y.liveRegion.length > 0 && this.a11y.liveRegion.remove(), this.navigation && this.navigation.$nextEl && (e = this.navigation.$nextEl), this.navigation && this.navigation.$prevEl && (t = this.navigation.$prevEl), e && e.off("keydown", this.a11y.onEnterKey), t && t.off("keydown", this.a11y.onEnterKey), this.pagination && this.params.pagination.clickable && this.pagination.bullets && this.pagination.bullets.length && this.pagination.$el.off("keydown", "." + this.params.pagination.bulletClass, this.a11y.onEnterKey);
      }
    },
    ae = {
      init: function () {
        var e = l();
        if (this.params.history) {
          if (!e.history || !e.history.pushState) return this.params.history.enabled = !1, void (this.params.hashNavigation.enabled = !0);
          var t = this.history;
          t.initialized = !0, t.paths = ae.getPathValues(this.params.url), (t.paths.key || t.paths.value) && (t.scrollToSlide(0, t.paths.value, this.params.runCallbacksOnInit), this.params.history.replaceState || e.addEventListener("popstate", this.history.setHistoryPopState));
        }
      },
      destroy: function () {
        var e = l();
        this.params.history.replaceState || e.removeEventListener("popstate", this.history.setHistoryPopState);
      },
      setHistoryPopState: function () {
        this.history.paths = ae.getPathValues(this.params.url), this.history.scrollToSlide(this.params.speed, this.history.paths.value, !1);
      },
      getPathValues: function (e) {
        var t = l(),
          i = (e ? new URL(e) : t.location).pathname.slice(1).split("/").filter(function (e) {
            return "" !== e;
          }),
          s = i.length;
        return {
          key: i[s - 2],
          value: i[s - 1]
        };
      },
      setHistory: function (e, t) {
        var i = l();
        if (this.history.initialized && this.params.history.enabled) {
          var s;
          s = this.params.url ? new URL(this.params.url) : i.location;
          var a = this.slides.eq(t),
            r = ae.slugify(a.attr("data-history"));
          s.pathname.includes(e) || (r = e + "/" + r);
          var n = i.history.state;
          n && n.value === r || (this.params.history.replaceState ? i.history.replaceState({
            value: r
          }, null, r) : i.history.pushState({
            value: r
          }, null, r));
        }
      },
      slugify: function (e) {
        return e.toString().replace(/\s+/g, "-").replace(/[^\w-]+/g, "").replace(/--+/g, "-").replace(/^-+/, "").replace(/-+$/, "");
      },
      scrollToSlide: function (e, t, i) {
        if (t) for (var s = 0, a = this.slides.length; s < a; s += 1) {
          var r = this.slides.eq(s);
          if (ae.slugify(r.attr("data-history")) === t && !r.hasClass(this.params.slideDuplicateClass)) {
            var n = r.index();
            this.slideTo(n, e, i);
          }
        } else this.slideTo(0, e, i);
      }
    },
    re = {
      onHashCange: function () {
        var e = r();
        this.emit("hashChange");
        var t = e.location.hash.replace("#", "");
        if (t !== this.slides.eq(this.activeIndex).attr("data-hash")) {
          var i = this.$wrapperEl.children("." + this.params.slideClass + '[data-hash="' + t + '"]').index();
          if (void 0 === i) return;
          this.slideTo(i);
        }
      },
      setHash: function () {
        var e = l(),
          t = r();
        if (this.hashNavigation.initialized && this.params.hashNavigation.enabled) if (this.params.hashNavigation.replaceState && e.history && e.history.replaceState) e.history.replaceState(null, null, "#" + this.slides.eq(this.activeIndex).attr("data-hash") || 0), this.emit("hashSet");else {
          var i = this.slides.eq(this.activeIndex),
            s = i.attr("data-hash") || i.attr("data-history");
          t.location.hash = s || "", this.emit("hashSet");
        }
      },
      init: function () {
        var e = r(),
          t = l();
        if (!(!this.params.hashNavigation.enabled || this.params.history && this.params.history.enabled)) {
          this.hashNavigation.initialized = !0;
          var i = e.location.hash.replace("#", "");
          if (i) for (var s = 0, a = this.slides.length; s < a; s += 1) {
            var n = this.slides.eq(s);
            if ((n.attr("data-hash") || n.attr("data-history")) === i && !n.hasClass(this.params.slideDuplicateClass)) {
              var o = n.index();
              this.slideTo(o, 0, this.params.runCallbacksOnInit, !0);
            }
          }
          this.params.hashNavigation.watchState && m(t).on("hashchange", this.hashNavigation.onHashCange);
        }
      },
      destroy: function () {
        var e = l();
        this.params.hashNavigation.watchState && m(e).off("hashchange", this.hashNavigation.onHashCange);
      }
    },
    ne = {
      run: function () {
        var e = this,
          t = e.slides.eq(e.activeIndex),
          i = e.params.autoplay.delay;
        t.attr("data-swiper-autoplay") && (i = t.attr("data-swiper-autoplay") || e.params.autoplay.delay), clearTimeout(e.autoplay.timeout), e.autoplay.timeout = E(function () {
          var t;
          e.params.autoplay.reverseDirection ? e.params.loop ? (e.loopFix(), t = e.slidePrev(e.params.speed, !0, !0), e.emit("autoplay")) : e.isBeginning ? e.params.autoplay.stopOnLastSlide ? e.autoplay.stop() : (t = e.slideTo(e.slides.length - 1, e.params.speed, !0, !0), e.emit("autoplay")) : (t = e.slidePrev(e.params.speed, !0, !0), e.emit("autoplay")) : e.params.loop ? (e.loopFix(), t = e.slideNext(e.params.speed, !0, !0), e.emit("autoplay")) : e.isEnd ? e.params.autoplay.stopOnLastSlide ? e.autoplay.stop() : (t = e.slideTo(0, e.params.speed, !0, !0), e.emit("autoplay")) : (t = e.slideNext(e.params.speed, !0, !0), e.emit("autoplay")), (e.params.cssMode && e.autoplay.running || !1 === t) && e.autoplay.run();
        }, i);
      },
      start: function () {
        return void 0 === this.autoplay.timeout && !this.autoplay.running && (this.autoplay.running = !0, this.emit("autoplayStart"), this.autoplay.run(), !0);
      },
      stop: function () {
        return !!this.autoplay.running && void 0 !== this.autoplay.timeout && (this.autoplay.timeout && (clearTimeout(this.autoplay.timeout), this.autoplay.timeout = void 0), this.autoplay.running = !1, this.emit("autoplayStop"), !0);
      },
      pause: function (e) {
        this.autoplay.running && (this.autoplay.paused || (this.autoplay.timeout && clearTimeout(this.autoplay.timeout), this.autoplay.paused = !0, 0 !== e && this.params.autoplay.waitForTransition ? (this.$wrapperEl[0].addEventListener("transitionend", this.autoplay.onTransitionEnd), this.$wrapperEl[0].addEventListener("webkitTransitionEnd", this.autoplay.onTransitionEnd)) : (this.autoplay.paused = !1, this.autoplay.run())));
      },
      onVisibilityChange: function () {
        var e = r();
        "hidden" === e.visibilityState && this.autoplay.running && this.autoplay.pause(), "visible" === e.visibilityState && this.autoplay.paused && (this.autoplay.run(), this.autoplay.paused = !1);
      },
      onTransitionEnd: function (e) {
        this && !this.destroyed && this.$wrapperEl && e.target === this.$wrapperEl[0] && (this.$wrapperEl[0].removeEventListener("transitionend", this.autoplay.onTransitionEnd), this.$wrapperEl[0].removeEventListener("webkitTransitionEnd", this.autoplay.onTransitionEnd), this.autoplay.paused = !1, this.autoplay.running ? this.autoplay.run() : this.autoplay.stop());
      }
    },
    le = {
      setTranslate: function () {
        for (var e = this.slides, t = 0; t < e.length; t += 1) {
          var i = this.slides.eq(t),
            s = -i[0].swiperSlideOffset;
          this.params.virtualTranslate || (s -= this.translate);
          var a = 0;
          this.isHorizontal() || (a = s, s = 0);
          var r = this.params.fadeEffect.crossFade ? Math.max(1 - Math.abs(i[0].progress), 0) : 1 + Math.min(Math.max(i[0].progress, -1), 0);
          i.css({
            opacity: r
          }).transform("translate3d(" + s + "px, " + a + "px, 0px)");
        }
      },
      setTransition: function (e) {
        var t = this,
          i = t.slides,
          s = t.$wrapperEl;
        if (i.transition(e), t.params.virtualTranslate && 0 !== e) {
          var a = !1;
          i.transitionEnd(function () {
            if (!a && t && !t.destroyed) {
              a = !0, t.animating = !1;
              for (var e = ["webkitTransitionEnd", "transitionend"], i = 0; i < e.length; i += 1) s.trigger(e[i]);
            }
          });
        }
      }
    },
    oe = {
      setTranslate: function () {
        var e,
          t = this.$el,
          i = this.$wrapperEl,
          s = this.slides,
          a = this.width,
          r = this.height,
          n = this.rtlTranslate,
          l = this.size,
          o = this.browser,
          d = this.params.cubeEffect,
          h = this.isHorizontal(),
          p = this.virtual && this.params.virtual.enabled,
          u = 0;
        d.shadow && (h ? (0 === (e = i.find(".swiper-cube-shadow")).length && (e = m('<div class="swiper-cube-shadow"></div>'), i.append(e)), e.css({
          height: a + "px"
        })) : 0 === (e = t.find(".swiper-cube-shadow")).length && (e = m('<div class="swiper-cube-shadow"></div>'), t.append(e)));
        for (var c = 0; c < s.length; c += 1) {
          var f = s.eq(c),
            v = c;
          p && (v = parseInt(f.attr("data-swiper-slide-index"), 10));
          var g = 90 * v,
            w = Math.floor(g / 360);
          n && (g = -g, w = Math.floor(-g / 360));
          var y = Math.max(Math.min(f[0].progress, 1), -1),
            b = 0,
            E = 0,
            x = 0;
          v % 4 == 0 ? (b = 4 * -w * l, x = 0) : (v - 1) % 4 == 0 ? (b = 0, x = 4 * -w * l) : (v - 2) % 4 == 0 ? (b = l + 4 * w * l, x = l) : (v - 3) % 4 == 0 && (b = -l, x = 3 * l + 4 * l * w), n && (b = -b), h || (E = b, b = 0);
          var T = "rotateX(" + (h ? 0 : -g) + "deg) rotateY(" + (h ? g : 0) + "deg) translate3d(" + b + "px, " + E + "px, " + x + "px)";
          if (y <= 1 && y > -1 && (u = 90 * v + 90 * y, n && (u = 90 * -v - 90 * y)), f.transform(T), d.slideShadows) {
            var C = h ? f.find(".swiper-slide-shadow-left") : f.find(".swiper-slide-shadow-top"),
              S = h ? f.find(".swiper-slide-shadow-right") : f.find(".swiper-slide-shadow-bottom");
            0 === C.length && (C = m('<div class="swiper-slide-shadow-' + (h ? "left" : "top") + '"></div>'), f.append(C)), 0 === S.length && (S = m('<div class="swiper-slide-shadow-' + (h ? "right" : "bottom") + '"></div>'), f.append(S)), C.length && (C[0].style.opacity = Math.max(-y, 0)), S.length && (S[0].style.opacity = Math.max(y, 0));
          }
        }
        if (i.css({
          "-webkit-transform-origin": "50% 50% -" + l / 2 + "px",
          "-moz-transform-origin": "50% 50% -" + l / 2 + "px",
          "-ms-transform-origin": "50% 50% -" + l / 2 + "px",
          "transform-origin": "50% 50% -" + l / 2 + "px"
        }), d.shadow) if (h) e.transform("translate3d(0px, " + (a / 2 + d.shadowOffset) + "px, " + -a / 2 + "px) rotateX(90deg) rotateZ(0deg) scale(" + d.shadowScale + ")");else {
          var M = Math.abs(u) - 90 * Math.floor(Math.abs(u) / 90),
            z = 1.5 - (Math.sin(2 * M * Math.PI / 360) / 2 + Math.cos(2 * M * Math.PI / 360) / 2),
            P = d.shadowScale,
            k = d.shadowScale / z,
            $ = d.shadowOffset;
          e.transform("scale3d(" + P + ", 1, " + k + ") translate3d(0px, " + (r / 2 + $) + "px, " + -r / 2 / k + "px) rotateX(-90deg)");
        }
        var L = o.isSafari || o.isWebView ? -l / 2 : 0;
        i.transform("translate3d(0px,0," + L + "px) rotateX(" + (this.isHorizontal() ? 0 : u) + "deg) rotateY(" + (this.isHorizontal() ? -u : 0) + "deg)");
      },
      setTransition: function (e) {
        var t = this.$el;
        this.slides.transition(e).find(".swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left").transition(e), this.params.cubeEffect.shadow && !this.isHorizontal() && t.find(".swiper-cube-shadow").transition(e);
      }
    },
    de = {
      setTranslate: function () {
        for (var e = this.slides, t = this.rtlTranslate, i = 0; i < e.length; i += 1) {
          var s = e.eq(i),
            a = s[0].progress;
          this.params.flipEffect.limitRotation && (a = Math.max(Math.min(s[0].progress, 1), -1));
          var r = -180 * a,
            n = 0,
            l = -s[0].swiperSlideOffset,
            o = 0;
          if (this.isHorizontal() ? t && (r = -r) : (o = l, l = 0, n = -r, r = 0), s[0].style.zIndex = -Math.abs(Math.round(a)) + e.length, this.params.flipEffect.slideShadows) {
            var d = this.isHorizontal() ? s.find(".swiper-slide-shadow-left") : s.find(".swiper-slide-shadow-top"),
              h = this.isHorizontal() ? s.find(".swiper-slide-shadow-right") : s.find(".swiper-slide-shadow-bottom");
            0 === d.length && (d = m('<div class="swiper-slide-shadow-' + (this.isHorizontal() ? "left" : "top") + '"></div>'), s.append(d)), 0 === h.length && (h = m('<div class="swiper-slide-shadow-' + (this.isHorizontal() ? "right" : "bottom") + '"></div>'), s.append(h)), d.length && (d[0].style.opacity = Math.max(-a, 0)), h.length && (h[0].style.opacity = Math.max(a, 0));
          }
          s.transform("translate3d(" + l + "px, " + o + "px, 0px) rotateX(" + n + "deg) rotateY(" + r + "deg)");
        }
      },
      setTransition: function (e) {
        var t = this,
          i = t.slides,
          s = t.activeIndex,
          a = t.$wrapperEl;
        if (i.transition(e).find(".swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left").transition(e), t.params.virtualTranslate && 0 !== e) {
          var r = !1;
          i.eq(s).transitionEnd(function () {
            if (!r && t && !t.destroyed) {
              r = !0, t.animating = !1;
              for (var e = ["webkitTransitionEnd", "transitionend"], i = 0; i < e.length; i += 1) a.trigger(e[i]);
            }
          });
        }
      }
    },
    he = {
      setTranslate: function () {
        for (var e = this.width, t = this.height, i = this.slides, s = this.slidesSizesGrid, a = this.params.coverflowEffect, r = this.isHorizontal(), n = this.translate, l = r ? e / 2 - n : t / 2 - n, o = r ? a.rotate : -a.rotate, d = a.depth, h = 0, p = i.length; h < p; h += 1) {
          var u = i.eq(h),
            c = s[h],
            f = (l - u[0].swiperSlideOffset - c / 2) / c * a.modifier,
            v = r ? o * f : 0,
            g = r ? 0 : o * f,
            w = -d * Math.abs(f),
            y = a.stretch;
          "string" == typeof y && -1 !== y.indexOf("%") && (y = parseFloat(a.stretch) / 100 * c);
          var b = r ? 0 : y * f,
            E = r ? y * f : 0,
            x = 1 - (1 - a.scale) * Math.abs(f);
          Math.abs(E) < .001 && (E = 0), Math.abs(b) < .001 && (b = 0), Math.abs(w) < .001 && (w = 0), Math.abs(v) < .001 && (v = 0), Math.abs(g) < .001 && (g = 0), Math.abs(x) < .001 && (x = 0);
          var T = "translate3d(" + E + "px," + b + "px," + w + "px)  rotateX(" + g + "deg) rotateY(" + v + "deg) scale(" + x + ")";
          if (u.transform(T), u[0].style.zIndex = 1 - Math.abs(Math.round(f)), a.slideShadows) {
            var C = r ? u.find(".swiper-slide-shadow-left") : u.find(".swiper-slide-shadow-top"),
              S = r ? u.find(".swiper-slide-shadow-right") : u.find(".swiper-slide-shadow-bottom");
            0 === C.length && (C = m('<div class="swiper-slide-shadow-' + (r ? "left" : "top") + '"></div>'), u.append(C)), 0 === S.length && (S = m('<div class="swiper-slide-shadow-' + (r ? "right" : "bottom") + '"></div>'), u.append(S)), C.length && (C[0].style.opacity = f > 0 ? f : 0), S.length && (S[0].style.opacity = -f > 0 ? -f : 0);
          }
        }
      },
      setTransition: function (e) {
        this.slides.transition(e).find(".swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left").transition(e);
      }
    },
    pe = {
      init: function () {
        var e = this.params.thumbs;
        if (this.thumbs.initialized) return !1;
        this.thumbs.initialized = !0;
        var t = this.constructor;
        return e.swiper instanceof t ? (this.thumbs.swiper = e.swiper, S(this.thumbs.swiper.originalParams, {
          watchSlidesProgress: !0,
          slideToClickedSlide: !1
        }), S(this.thumbs.swiper.params, {
          watchSlidesProgress: !0,
          slideToClickedSlide: !1
        })) : C(e.swiper) && (this.thumbs.swiper = new t(S({}, e.swiper, {
          watchSlidesVisibility: !0,
          watchSlidesProgress: !0,
          slideToClickedSlide: !1
        })), this.thumbs.swiperCreated = !0), this.thumbs.swiper.$el.addClass(this.params.thumbs.thumbsContainerClass), this.thumbs.swiper.on("tap", this.thumbs.onThumbClick), !0;
      },
      onThumbClick: function () {
        var e = this.thumbs.swiper;
        if (e) {
          var t = e.clickedIndex,
            i = e.clickedSlide;
          if (!(i && m(i).hasClass(this.params.thumbs.slideThumbActiveClass) || null == t)) {
            var s;
            if (s = e.params.loop ? parseInt(m(e.clickedSlide).attr("data-swiper-slide-index"), 10) : t, this.params.loop) {
              var a = this.activeIndex;
              this.slides.eq(a).hasClass(this.params.slideDuplicateClass) && (this.loopFix(), this._clientLeft = this.$wrapperEl[0].clientLeft, a = this.activeIndex);
              var r = this.slides.eq(a).prevAll('[data-swiper-slide-index="' + s + '"]').eq(0).index(),
                n = this.slides.eq(a).nextAll('[data-swiper-slide-index="' + s + '"]').eq(0).index();
              s = void 0 === r ? n : void 0 === n ? r : n - a < a - r ? n : r;
            }
            this.slideTo(s);
          }
        }
      },
      update: function (e) {
        var t = this.thumbs.swiper;
        if (t) {
          var i = "auto" === t.params.slidesPerView ? t.slidesPerViewDynamic() : t.params.slidesPerView,
            s = this.params.thumbs.autoScrollOffset,
            a = s && !t.params.loop;
          if (this.realIndex !== t.realIndex || a) {
            var r,
              n,
              l = t.activeIndex;
            if (t.params.loop) {
              t.slides.eq(l).hasClass(t.params.slideDuplicateClass) && (t.loopFix(), t._clientLeft = t.$wrapperEl[0].clientLeft, l = t.activeIndex);
              var o = t.slides.eq(l).prevAll('[data-swiper-slide-index="' + this.realIndex + '"]').eq(0).index(),
                d = t.slides.eq(l).nextAll('[data-swiper-slide-index="' + this.realIndex + '"]').eq(0).index();
              r = void 0 === o ? d : void 0 === d ? o : d - l == l - o ? l : d - l < l - o ? d : o, n = this.activeIndex > this.previousIndex ? "next" : "prev";
            } else n = (r = this.realIndex) > this.previousIndex ? "next" : "prev";
            a && (r += "next" === n ? s : -1 * s), t.visibleSlidesIndexes && t.visibleSlidesIndexes.indexOf(r) < 0 && (t.params.centeredSlides ? r = r > l ? r - Math.floor(i / 2) + 1 : r + Math.floor(i / 2) - 1 : r > l && (r = r - i + 1), t.slideTo(r, e ? 0 : void 0));
          }
          var h = 1,
            p = this.params.thumbs.slideThumbActiveClass;
          if (this.params.slidesPerView > 1 && !this.params.centeredSlides && (h = this.params.slidesPerView), this.params.thumbs.multipleActiveThumbs || (h = 1), h = Math.floor(h), t.slides.removeClass(p), t.params.loop || t.params.virtual && t.params.virtual.enabled) for (var u = 0; u < h; u += 1) t.$wrapperEl.children('[data-swiper-slide-index="' + (this.realIndex + u) + '"]').addClass(p);else for (var c = 0; c < h; c += 1) t.slides.eq(this.realIndex + c).addClass(p);
        }
      }
    },
    ue = [q, _, {
      name: "mousewheel",
      params: {
        mousewheel: {
          enabled: !1,
          releaseOnEdges: !1,
          invert: !1,
          forceToAxis: !1,
          sensitivity: 1,
          eventsTarget: "container",
          thresholdDelta: null,
          thresholdTime: null
        }
      },
      create: function () {
        M(this, {
          mousewheel: {
            enabled: !1,
            lastScrollTime: x(),
            lastEventBeforeSnap: void 0,
            recentWheelEvents: [],
            enable: U.enable,
            disable: U.disable,
            handle: U.handle,
            handleMouseEnter: U.handleMouseEnter,
            handleMouseLeave: U.handleMouseLeave,
            animateSlider: U.animateSlider,
            releaseScroll: U.releaseScroll
          }
        });
      },
      on: {
        init: function (e) {
          !e.params.mousewheel.enabled && e.params.cssMode && e.mousewheel.disable(), e.params.mousewheel.enabled && e.mousewheel.enable();
        },
        destroy: function (e) {
          e.params.cssMode && e.mousewheel.enable(), e.mousewheel.enabled && e.mousewheel.disable();
        }
      }
    }, {
      name: "navigation",
      params: {
        navigation: {
          nextEl: null,
          prevEl: null,
          hideOnClick: !1,
          disabledClass: "swiper-button-disabled",
          hiddenClass: "swiper-button-hidden",
          lockClass: "swiper-button-lock"
        }
      },
      create: function () {
        M(this, {
          navigation: t({}, K)
        });
      },
      on: {
        init: function (e) {
          e.navigation.init(), e.navigation.update();
        },
        toEdge: function (e) {
          e.navigation.update();
        },
        fromEdge: function (e) {
          e.navigation.update();
        },
        destroy: function (e) {
          e.navigation.destroy();
        },
        click: function (e, t) {
          var i,
            s = e.navigation,
            a = s.$nextEl,
            r = s.$prevEl;
          !e.params.navigation.hideOnClick || m(t.target).is(r) || m(t.target).is(a) || (a ? i = a.hasClass(e.params.navigation.hiddenClass) : r && (i = r.hasClass(e.params.navigation.hiddenClass)), !0 === i ? e.emit("navigationShow") : e.emit("navigationHide"), a && a.toggleClass(e.params.navigation.hiddenClass), r && r.toggleClass(e.params.navigation.hiddenClass));
        }
      }
    }, {
      name: "pagination",
      params: {
        pagination: {
          el: null,
          bulletElement: "span",
          clickable: !1,
          hideOnClick: !1,
          renderBullet: null,
          renderProgressbar: null,
          renderFraction: null,
          renderCustom: null,
          progressbarOpposite: !1,
          type: "bullets",
          dynamicBullets: !1,
          dynamicMainBullets: 1,
          formatFractionCurrent: function (e) {
            return e;
          },
          formatFractionTotal: function (e) {
            return e;
          },
          bulletClass: "swiper-pagination-bullet",
          bulletActiveClass: "swiper-pagination-bullet-active",
          modifierClass: "swiper-pagination-",
          currentClass: "swiper-pagination-current",
          totalClass: "swiper-pagination-total",
          hiddenClass: "swiper-pagination-hidden",
          progressbarFillClass: "swiper-pagination-progressbar-fill",
          progressbarOppositeClass: "swiper-pagination-progressbar-opposite",
          clickableClass: "swiper-pagination-clickable",
          lockClass: "swiper-pagination-lock"
        }
      },
      create: function () {
        M(this, {
          pagination: t({
            dynamicBulletIndex: 0
          }, Z)
        });
      },
      on: {
        init: function (e) {
          e.pagination.init(), e.pagination.render(), e.pagination.update();
        },
        activeIndexChange: function (e) {
          (e.params.loop || void 0 === e.snapIndex) && e.pagination.update();
        },
        snapIndexChange: function (e) {
          e.params.loop || e.pagination.update();
        },
        slidesLengthChange: function (e) {
          e.params.loop && (e.pagination.render(), e.pagination.update());
        },
        snapGridLengthChange: function (e) {
          e.params.loop || (e.pagination.render(), e.pagination.update());
        },
        destroy: function (e) {
          e.pagination.destroy();
        },
        click: function (e, t) {
          e.params.pagination.el && e.params.pagination.hideOnClick && e.pagination.$el.length > 0 && !m(t.target).hasClass(e.params.pagination.bulletClass) && (!0 === e.pagination.$el.hasClass(e.params.pagination.hiddenClass) ? e.emit("paginationShow") : e.emit("paginationHide"), e.pagination.$el.toggleClass(e.params.pagination.hiddenClass));
        }
      }
    }, {
      name: "scrollbar",
      params: {
        scrollbar: {
          el: null,
          dragSize: "auto",
          hide: !1,
          draggable: !1,
          snapOnRelease: !0,
          lockClass: "swiper-scrollbar-lock",
          dragClass: "swiper-scrollbar-drag"
        }
      },
      create: function () {
        M(this, {
          scrollbar: t({
            isTouched: !1,
            timeout: null,
            dragTimeout: null
          }, J)
        });
      },
      on: {
        init: function (e) {
          e.scrollbar.init(), e.scrollbar.updateSize(), e.scrollbar.setTranslate();
        },
        update: function (e) {
          e.scrollbar.updateSize();
        },
        resize: function (e) {
          e.scrollbar.updateSize();
        },
        observerUpdate: function (e) {
          e.scrollbar.updateSize();
        },
        setTranslate: function (e) {
          e.scrollbar.setTranslate();
        },
        setTransition: function (e, t) {
          e.scrollbar.setTransition(t);
        },
        destroy: function (e) {
          e.scrollbar.destroy();
        }
      }
    }, {
      name: "parallax",
      params: {
        parallax: {
          enabled: !1
        }
      },
      create: function () {
        M(this, {
          parallax: t({}, Q)
        });
      },
      on: {
        beforeInit: function (e) {
          e.params.parallax.enabled && (e.params.watchSlidesProgress = !0, e.originalParams.watchSlidesProgress = !0);
        },
        init: function (e) {
          e.params.parallax.enabled && e.parallax.setTranslate();
        },
        setTranslate: function (e) {
          e.params.parallax.enabled && e.parallax.setTranslate();
        },
        setTransition: function (e, t) {
          e.params.parallax.enabled && e.parallax.setTransition(t);
        }
      }
    }, {
      name: "zoom",
      params: {
        zoom: {
          enabled: !1,
          maxRatio: 3,
          minRatio: 1,
          toggle: !0,
          containerClass: "swiper-zoom-container",
          zoomedSlideClass: "swiper-slide-zoomed"
        }
      },
      create: function () {
        var e = this;
        M(e, {
          zoom: t({
            enabled: !1,
            scale: 1,
            currentScale: 1,
            isScaling: !1,
            gesture: {
              $slideEl: void 0,
              slideWidth: void 0,
              slideHeight: void 0,
              $imageEl: void 0,
              $imageWrapEl: void 0,
              maxRatio: 3
            },
            image: {
              isTouched: void 0,
              isMoved: void 0,
              currentX: void 0,
              currentY: void 0,
              minX: void 0,
              minY: void 0,
              maxX: void 0,
              maxY: void 0,
              width: void 0,
              height: void 0,
              startX: void 0,
              startY: void 0,
              touchesStart: {},
              touchesCurrent: {}
            },
            velocity: {
              x: void 0,
              y: void 0,
              prevPositionX: void 0,
              prevPositionY: void 0,
              prevTime: void 0
            }
          }, ee)
        });
        var i = 1;
        Object.defineProperty(e.zoom, "scale", {
          get: function () {
            return i;
          },
          set: function (t) {
            if (i !== t) {
              var s = e.zoom.gesture.$imageEl ? e.zoom.gesture.$imageEl[0] : void 0,
                a = e.zoom.gesture.$slideEl ? e.zoom.gesture.$slideEl[0] : void 0;
              e.emit("zoomChange", t, s, a);
            }
            i = t;
          }
        });
      },
      on: {
        init: function (e) {
          e.params.zoom.enabled && e.zoom.enable();
        },
        destroy: function (e) {
          e.zoom.disable();
        },
        touchStart: function (e, t) {
          e.zoom.enabled && e.zoom.onTouchStart(t);
        },
        touchEnd: function (e, t) {
          e.zoom.enabled && e.zoom.onTouchEnd(t);
        },
        doubleTap: function (e, t) {
          e.params.zoom.enabled && e.zoom.enabled && e.params.zoom.toggle && e.zoom.toggle(t);
        },
        transitionEnd: function (e) {
          e.zoom.enabled && e.params.zoom.enabled && e.zoom.onTransitionEnd();
        },
        slideChange: function (e) {
          e.zoom.enabled && e.params.zoom.enabled && e.params.cssMode && e.zoom.onTransitionEnd();
        }
      }
    }, {
      name: "lazy",
      params: {
        lazy: {
          enabled: !1,
          loadPrevNext: !1,
          loadPrevNextAmount: 1,
          loadOnTransitionStart: !1,
          elementClass: "swiper-lazy",
          loadingClass: "swiper-lazy-loading",
          loadedClass: "swiper-lazy-loaded",
          preloaderClass: "swiper-lazy-preloader"
        }
      },
      create: function () {
        M(this, {
          lazy: t({
            initialImageLoaded: !1
          }, te)
        });
      },
      on: {
        beforeInit: function (e) {
          e.params.lazy.enabled && e.params.preloadImages && (e.params.preloadImages = !1);
        },
        init: function (e) {
          e.params.lazy.enabled && !e.params.loop && 0 === e.params.initialSlide && e.lazy.load();
        },
        scroll: function (e) {
          e.params.freeMode && !e.params.freeModeSticky && e.lazy.load();
        },
        resize: function (e) {
          e.params.lazy.enabled && e.lazy.load();
        },
        scrollbarDragMove: function (e) {
          e.params.lazy.enabled && e.lazy.load();
        },
        transitionStart: function (e) {
          e.params.lazy.enabled && (e.params.lazy.loadOnTransitionStart || !e.params.lazy.loadOnTransitionStart && !e.lazy.initialImageLoaded) && e.lazy.load();
        },
        transitionEnd: function (e) {
          e.params.lazy.enabled && !e.params.lazy.loadOnTransitionStart && e.lazy.load();
        },
        slideChange: function (e) {
          e.params.lazy.enabled && e.params.cssMode && e.lazy.load();
        }
      }
    }, {
      name: "controller",
      params: {
        controller: {
          control: void 0,
          inverse: !1,
          by: "slide"
        }
      },
      create: function () {
        M(this, {
          controller: t({
            control: this.params.controller.control
          }, ie)
        });
      },
      on: {
        update: function (e) {
          e.controller.control && e.controller.spline && (e.controller.spline = void 0, delete e.controller.spline);
        },
        resize: function (e) {
          e.controller.control && e.controller.spline && (e.controller.spline = void 0, delete e.controller.spline);
        },
        observerUpdate: function (e) {
          e.controller.control && e.controller.spline && (e.controller.spline = void 0, delete e.controller.spline);
        },
        setTranslate: function (e, t, i) {
          e.controller.control && e.controller.setTranslate(t, i);
        },
        setTransition: function (e, t, i) {
          e.controller.control && e.controller.setTransition(t, i);
        }
      }
    }, {
      name: "a11y",
      params: {
        a11y: {
          enabled: !0,
          notificationClass: "swiper-notification",
          prevSlideMessage: "Previous slide",
          nextSlideMessage: "Next slide",
          firstSlideMessage: "This is the first slide",
          lastSlideMessage: "This is the last slide",
          paginationBulletMessage: "Go to slide {{index}}",
          containerMessage: null,
          containerRoleDescriptionMessage: null,
          itemRoleDescriptionMessage: null
        }
      },
      create: function () {
        M(this, {
          a11y: t(t({}, se), {}, {
            liveRegion: m('<span class="' + this.params.a11y.notificationClass + '" aria-live="assertive" aria-atomic="true"></span>')
          })
        });
      },
      on: {
        afterInit: function (e) {
          e.params.a11y.enabled && (e.a11y.init(), e.a11y.updateNavigation());
        },
        toEdge: function (e) {
          e.params.a11y.enabled && e.a11y.updateNavigation();
        },
        fromEdge: function (e) {
          e.params.a11y.enabled && e.a11y.updateNavigation();
        },
        paginationUpdate: function (e) {
          e.params.a11y.enabled && e.a11y.updatePagination();
        },
        destroy: function (e) {
          e.params.a11y.enabled && e.a11y.destroy();
        }
      }
    }, {
      name: "history",
      params: {
        history: {
          enabled: !1,
          replaceState: !1,
          key: "slides"
        }
      },
      create: function () {
        M(this, {
          history: t({}, ae)
        });
      },
      on: {
        init: function (e) {
          e.params.history.enabled && e.history.init();
        },
        destroy: function (e) {
          e.params.history.enabled && e.history.destroy();
        },
        transitionEnd: function (e) {
          e.history.initialized && e.history.setHistory(e.params.history.key, e.activeIndex);
        },
        slideChange: function (e) {
          e.history.initialized && e.params.cssMode && e.history.setHistory(e.params.history.key, e.activeIndex);
        }
      }
    }, {
      name: "hash-navigation",
      params: {
        hashNavigation: {
          enabled: !1,
          replaceState: !1,
          watchState: !1
        }
      },
      create: function () {
        M(this, {
          hashNavigation: t({
            initialized: !1
          }, re)
        });
      },
      on: {
        init: function (e) {
          e.params.hashNavigation.enabled && e.hashNavigation.init();
        },
        destroy: function (e) {
          e.params.hashNavigation.enabled && e.hashNavigation.destroy();
        },
        transitionEnd: function (e) {
          e.hashNavigation.initialized && e.hashNavigation.setHash();
        },
        slideChange: function (e) {
          e.hashNavigation.initialized && e.params.cssMode && e.hashNavigation.setHash();
        }
      }
    }, {
      name: "autoplay",
      params: {
        autoplay: {
          enabled: !1,
          delay: 3e3,
          waitForTransition: !0,
          disableOnInteraction: !0,
          stopOnLastSlide: !1,
          reverseDirection: !1
        }
      },
      create: function () {
        M(this, {
          autoplay: t(t({}, ne), {}, {
            running: !1,
            paused: !1
          })
        });
      },
      on: {
        init: function (e) {
          e.params.autoplay.enabled && (e.autoplay.start(), r().addEventListener("visibilitychange", e.autoplay.onVisibilityChange));
        },
        beforeTransitionStart: function (e, t, i) {
          e.autoplay.running && (i || !e.params.autoplay.disableOnInteraction ? e.autoplay.pause(t) : e.autoplay.stop());
        },
        sliderFirstMove: function (e) {
          e.autoplay.running && (e.params.autoplay.disableOnInteraction ? e.autoplay.stop() : e.autoplay.pause());
        },
        touchEnd: function (e) {
          e.params.cssMode && e.autoplay.paused && !e.params.autoplay.disableOnInteraction && e.autoplay.run();
        },
        destroy: function (e) {
          e.autoplay.running && e.autoplay.stop(), r().removeEventListener("visibilitychange", e.autoplay.onVisibilityChange);
        }
      }
    }, {
      name: "effect-fade",
      params: {
        fadeEffect: {
          crossFade: !1
        }
      },
      create: function () {
        M(this, {
          fadeEffect: t({}, le)
        });
      },
      on: {
        beforeInit: function (e) {
          if ("fade" === e.params.effect) {
            e.classNames.push(e.params.containerModifierClass + "fade");
            var t = {
              slidesPerView: 1,
              slidesPerColumn: 1,
              slidesPerGroup: 1,
              watchSlidesProgress: !0,
              spaceBetween: 0,
              virtualTranslate: !0
            };
            S(e.params, t), S(e.originalParams, t);
          }
        },
        setTranslate: function (e) {
          "fade" === e.params.effect && e.fadeEffect.setTranslate();
        },
        setTransition: function (e, t) {
          "fade" === e.params.effect && e.fadeEffect.setTransition(t);
        }
      }
    }, {
      name: "effect-cube",
      params: {
        cubeEffect: {
          slideShadows: !0,
          shadow: !0,
          shadowOffset: 20,
          shadowScale: .94
        }
      },
      create: function () {
        M(this, {
          cubeEffect: t({}, oe)
        });
      },
      on: {
        beforeInit: function (e) {
          if ("cube" === e.params.effect) {
            e.classNames.push(e.params.containerModifierClass + "cube"), e.classNames.push(e.params.containerModifierClass + "3d");
            var t = {
              slidesPerView: 1,
              slidesPerColumn: 1,
              slidesPerGroup: 1,
              watchSlidesProgress: !0,
              resistanceRatio: 0,
              spaceBetween: 0,
              centeredSlides: !1,
              virtualTranslate: !0
            };
            S(e.params, t), S(e.originalParams, t);
          }
        },
        setTranslate: function (e) {
          "cube" === e.params.effect && e.cubeEffect.setTranslate();
        },
        setTransition: function (e, t) {
          "cube" === e.params.effect && e.cubeEffect.setTransition(t);
        }
      }
    }, {
      name: "effect-flip",
      params: {
        flipEffect: {
          slideShadows: !0,
          limitRotation: !0
        }
      },
      create: function () {
        M(this, {
          flipEffect: t({}, de)
        });
      },
      on: {
        beforeInit: function (e) {
          if ("flip" === e.params.effect) {
            e.classNames.push(e.params.containerModifierClass + "flip"), e.classNames.push(e.params.containerModifierClass + "3d");
            var t = {
              slidesPerView: 1,
              slidesPerColumn: 1,
              slidesPerGroup: 1,
              watchSlidesProgress: !0,
              spaceBetween: 0,
              virtualTranslate: !0
            };
            S(e.params, t), S(e.originalParams, t);
          }
        },
        setTranslate: function (e) {
          "flip" === e.params.effect && e.flipEffect.setTranslate();
        },
        setTransition: function (e, t) {
          "flip" === e.params.effect && e.flipEffect.setTransition(t);
        }
      }
    }, {
      name: "effect-coverflow",
      params: {
        coverflowEffect: {
          rotate: 50,
          stretch: 0,
          depth: 100,
          scale: 1,
          modifier: 1,
          slideShadows: !0
        }
      },
      create: function () {
        M(this, {
          coverflowEffect: t({}, he)
        });
      },
      on: {
        beforeInit: function (e) {
          "coverflow" === e.params.effect && (e.classNames.push(e.params.containerModifierClass + "coverflow"), e.classNames.push(e.params.containerModifierClass + "3d"), e.params.watchSlidesProgress = !0, e.originalParams.watchSlidesProgress = !0);
        },
        setTranslate: function (e) {
          "coverflow" === e.params.effect && e.coverflowEffect.setTranslate();
        },
        setTransition: function (e, t) {
          "coverflow" === e.params.effect && e.coverflowEffect.setTransition(t);
        }
      }
    }, {
      name: "thumbs",
      params: {
        thumbs: {
          swiper: null,
          multipleActiveThumbs: !0,
          autoScrollOffset: 0,
          slideThumbActiveClass: "swiper-slide-thumb-active",
          thumbsContainerClass: "swiper-container-thumbs"
        }
      },
      create: function () {
        M(this, {
          thumbs: t({
            swiper: null,
            initialized: !1
          }, pe)
        });
      },
      on: {
        beforeInit: function (e) {
          var t = e.params.thumbs;
          t && t.swiper && (e.thumbs.init(), e.thumbs.update(!0));
        },
        slideChange: function (e) {
          e.thumbs.swiper && e.thumbs.update();
        },
        update: function (e) {
          e.thumbs.swiper && e.thumbs.update();
        },
        resize: function (e) {
          e.thumbs.swiper && e.thumbs.update();
        },
        observerUpdate: function (e) {
          e.thumbs.swiper && e.thumbs.update();
        },
        setTransition: function (e, t) {
          var i = e.thumbs.swiper;
          i && i.setTransition(t);
        },
        beforeDestroy: function (e) {
          var t = e.thumbs.swiper;
          t && e.thumbs.swiperCreated && t && t.destroy();
        }
      }
    }];
  return R.use(ue), R;
});

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	!function() {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = function(module) {
/******/ 			var getter = module && module.__esModule ?
/******/ 				function() { return module['default']; } :
/******/ 				function() { return module; };
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	!function() {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = function(exports, definition) {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	!function() {
/******/ 		__webpack_require__.o = function(obj, prop) { return Object.prototype.hasOwnProperty.call(obj, prop); }
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	!function() {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = function(exports) {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	}();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be in strict mode.
!function() {
"use strict";
/*!***************************!*\
  !*** ./source/js/main.js ***!
  \***************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _vendor__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_vendor */ "./source/js/_vendor.js");
/* harmony import */ var _components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./_components */ "./source/js/_components.js");

// import './_functions';

}();
/******/ })()
;
//# sourceMappingURL=main.js.map