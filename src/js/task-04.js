const valueRef = document.querySelector('#value');

const decrementButtonRef = document.querySelector('[data-action="decrement"]');
const incrementButtonRef = document.querySelector('[data-action="increment"]');

let counterValue = 0;

decrementButtonRef.addEventListener('click', () => {
  counterValue -= 1;
  valueRef.textContent = counterValue;
});

incrementButtonRef.addEventListener('click', () => {
  counterValue += 1;
  valueRef.textContent = counterValue;
});

// ================ Reset counter button =================

const resetButtonRef = document.querySelector('[data-action="reset"]');

resetButtonRef.addEventListener('click', () => {
  counterValue = 0;
  valueRef.textContent = counterValue;
});
