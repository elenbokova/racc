import '../vendor/swiper.js';

const quotes = document.querySelector('[data-id="intro"]');
let swiper;

const initSingleSlider = () => {

  quotes.dataset.js = 'JS';

  swiper = new window.Swiper('.quotes__slider', {

    loop: true,
    watchOverflow: true,
    allowTouchMove: true,
    slidesPerView: 1,
    autoplay: {
      delay: 5500,
      disableOnInteraction: false,
    },

    // navigation: {
    //   nextEl: '.feedback__button-next',
    //   prevEl: '.feedback__button-prev',
    // },
  });
};

export {swiper, initSingleSlider};
