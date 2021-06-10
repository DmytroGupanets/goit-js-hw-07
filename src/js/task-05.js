const inputRef = document.querySelector('#name-input');
const spanRef = document.querySelector('#name-output');

inputRef.addEventListener('input', event => {
  if (!inputRef.value) {
    return (spanRef.textContent = 'незнакомец');
  }
  return (spanRef.textContent = event.currentTarget.value);
});
