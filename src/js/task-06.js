const inputRef = document.querySelector('#validation-input');
const reqDataLength = +inputRef.getAttribute('data-length');
let valueOfInput = '';

inputRef.addEventListener('input', onInputEvent);
inputRef.addEventListener('blur', onInputBlur);

function onInputEvent(event) {
  valueOfInput = event.currentTarget.value;
}

function onInputBlur() {
  if (valueOfInput.length !== reqDataLength) {
    return onInvalidInputValue('invalid', 'valid');
  }

  if (valueOfInput.length === reqDataLength) {
    return onValidInputValue('valid', 'invalid');
  }
}

function onValidInputValue(classToAdd, classToRemove) {
  inputRef.classList.remove(classToRemove);
  inputRef.classList.add(classToAdd);
}

function onInvalidInputValue(classToAdd, classToRemove) {
  inputRef.classList.remove(classToRemove);
  inputRef.classList.add(classToAdd);
}
