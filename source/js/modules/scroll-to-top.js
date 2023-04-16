/* eslint-disable no-console */
const upButton = document.querySelector('#button-up');

const show = (button) => {
  button.classList.remove('is-hidden');
};

const hide = (button) => {
  button.classList.add('is-hidden');
};

const onUpButtonClick = () => {
  window.scrollTo({
    top: 0,
    left: 0,
    behavior: 'smooth',
  });
};

const onScrollYShow = () => {
  const scrollY = window.scrollY || document.documentElement.scrollTop;
  if (scrollY > 400) {
    show(upButton);
  } else {
    hide(upButton);
  }
};

const initUpButton = () => {
  if (upButton) {
    window.addEventListener('scroll', onScrollYShow);
    upButton.addEventListener('click', onUpButtonClick);
  }
};

export {initUpButton};
