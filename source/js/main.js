import {iosVhFix} from './utils/ios-vh-fix';
import {Burger} from './modules/burger';
import {StickyHeader} from './modules/sticky-header';
import {NavigationChanger} from './utils/navigation-changer';
import {initModals} from './modules/modals/init-modals';
import {initSingleSlider} from './modules/single-slider';
import {initPhoneCheck} from './utils/phone-check';
import {initAccordions} from './modules/init-accordion';
import {initUpButton} from './modules/scroll-to-top';

// ---------------------------------

window.addEventListener('DOMContentLoaded', () => {

  // Utils
  // ---------------------------------

  iosVhFix();

  // Modules
  // ---------------------------------

  // все скрипты должны быть в обработчике 'DOMContentLoaded', но не все в 'load'
  // в load следует добавить скрипты, не участвующие в работе первого экрана
  window.addEventListener('load', () => {
    const burger = new Burger();
    burger.init();
    initAccordions();

    const stickyHeader = new StickyHeader();
    stickyHeader.init();

    const navigationChanger = new NavigationChanger();
    navigationChanger.init();

    initUpButton();
    initModals();
    initSingleSlider();
    initPhoneCheck();
  });
});

// ---------------------------------

// ❗❗❗ обязательно установите плагины eslint, stylelint, editorconfig в редактор кода.

// привязывайте js не на классы, а на дата атрибуты (data-validate)

// вместо модификаторов .block--active используем утилитарные классы
// .is-active || .is-open || .is-invalid и прочие (обязателен нейминг в два слова)
// .select.select--opened ❌ ---> [data-select].is-open ✅

// выносим все в дата атрибуты
// url до иконок пинов карты, настройки автопрокрутки слайдера, url к json и т.д.

// для адаптивного JS используется matchMedia и addListener
// const breakpoint = window.matchMedia(`(min-width:1024px)`);
// const breakpointChecker = () => {
//   if (breakpoint.matches) {
//   } else {
//   }
// };
// breakpoint.addListener(breakpointChecker);
// breakpointChecker();

// используйте .closest(el)
