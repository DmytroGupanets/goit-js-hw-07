const inputRef = document.querySelector('#validation-input');
let valueOfInput = '';

inputRef.addEventListener('input', onInputEvent);
inputRef.addEventListener('blur', onInputBlur);

function onInputEvent(event) {
  valueOfInput = event.currentTarget.value;
}

function onInputBlur() {
  if (valueOfInput.length >= inputRef.getAttribute('data-length')) {
    inputRef.classList.remove('invalid');
    inputRef.classList.add('valid');
  } else {
    inputRef.classList.remove('valid');
    inputRef.classList.add('invalid');
  }
}

console.log(valueOfInput);
