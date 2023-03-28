const tabs = document.querySelector('.tabs');
const tabsControls = document.querySelectorAll('.tabs__control-button');
const tabsContent = document.querySelectorAll('.tabs__item');

const stateHandler = (element, id) => {
  if (element.classList.contains('is-active')) {
    element.classList.remove('is-active');
  }
  if (element.dataset.tabsTarget === id) {
    element.classList.add('is-active');
  }
};

const initTabs = () => {
  if (tabs) {
    tabs.addEventListener('click', (evt) => {
      if (evt.target.classList.contains('tabs__control-button')) {
        const tabsPath = evt.target.dataset.tabsTarget;
        tabsControls.forEach((control) => {
          stateHandler(control, tabsPath);
        });
        tabsContent.forEach((item) => {
          stateHandler(item, tabsPath);
        });
      }
    });
  }
};

export {initTabs};
