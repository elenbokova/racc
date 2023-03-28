const phoneInputs = document.querySelectorAll('input[data-phone-input]');

const getInputNumbersValue = (input) => {
  return input.value.replace(/\D/g, '');
};

const onPhoneInput = (evt) => {
  let input = evt.target;
  let inputNumbersValue = getInputNumbersValue(input);
  let formattedInputValue = '';

  if (!inputNumbersValue) {
    input.value = '';
    return input.value;
  }

  if (['7', '8', '9'].indexOf(inputNumbersValue[0]) > -1) {

    let firstSymbols = '+7';
    formattedInputValue = firstSymbols + '';

    if (inputNumbersValue.length > 1) {
      formattedInputValue += '(' + inputNumbersValue.substring(1, 4);
    }

    if (inputNumbersValue.length >= 5) {
      formattedInputValue += ')' + inputNumbersValue.substring(4, 7);
    }

    if (inputNumbersValue.length >= 8) {
      formattedInputValue += '-' + inputNumbersValue.substring(7, 9);
    }

    if (inputNumbersValue.length >= 10) {
      formattedInputValue += '-' + inputNumbersValue.substring(9, 11);
    }
  } else {
    // Not Russian phone number
    formattedInputValue = '+' + inputNumbersValue.substring(0, 16);
  }

  if (formattedInputValue.length < 11) {
    input.setCustomValidity('Пожалуйста, введите номер телефона');
  } else {
    input.setCustomValidity('');
  }

  return (input.value = formattedInputValue);
};

const onPhonePaste = (evt) => {
  let input = evt.target;
  let inputNumbersValue = getInputNumbersValue(input);
  let pasted = evt.clipboardData || window.clipboardData;

  if (pasted) {
    let pastedText = pasted.getData('Text');
    if (/\D/g.test(pastedText)) {
      input.value = inputNumbersValue;
      return;
    }
  }
};

const initPhoneCheck = () => {

  phoneInputs.forEach((el) => {
    el.addEventListener('input', onPhoneInput);
    el.addEventListener('input', onPhonePaste);
  });
};

export {initPhoneCheck};
