import Swiper from "../vendor/swiper";
import vars from "../_vars";
import { throttle } from "../functions/throttle";
import { even } from "../functions/customFunctions";

const { mainSlider, programBox } = vars;

new Swiper(mainSlider, {
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
    delay: 2000,
  },
});


const navigationContent = [
  {
    name: 'Bonus 1',
    descr: 'Connect Wallet',
    class:'orange',
    iconName: 'icon.svg'
  },
  {
    name: 'level 1',
    descr: 'Bring your friends',
    class:'purpure',
    iconName: 'icon2.svg'
  },
  {
    name: 'level 2',
    descr: "Get 5% from your friend's referral",
    class:'red',
    iconName: 'icon3.svg'
  },

]

const mySwiper = new Swiper(programBox.querySelector('.program-slider'), {
  slidesPerView: 'auto',
  spaceBetween: 40,
  loop: true,
  observer: true,
  watchOverflow: true,
  observeParents: true,
  allowTouchMove: true,
  speed: 2500,
  autoplay: {
    delay: 3000,
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
      },

  },

});


