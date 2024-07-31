import Swiper from 'swiper';
import 'swiper/css';

const swiper = new Swiper('.swiper', {
  direction: 'horizontal',
  loop: true,
  spaceBetween: 20,
  slidesPerView: 3,

  breakpoints: {
    1440: {
      spaceBetween: 70,
    },
  },
});
