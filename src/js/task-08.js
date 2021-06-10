const inputRef = document.querySelector('input');
const boxRef = document.querySelector('#boxes');
const renderButtonRef = document.querySelector('[data-action="render"]');
const destroyButtonRef = document.querySelector('[data-action="destroy"]');

let newBoxes = [];
let amount = 0;

function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}

inputRef.addEventListener('input', onInputGetValue);

function onInputGetValue(event) {
  amount = event.currentTarget.value;

  return amount;
}

renderButtonRef.addEventListener('click', createBoxes);

function createBoxes(event) {
  event.preventDefault();

  for (let i = 1; i <= amount; i += 1) {
    console.log(i);
    let box = document.createElement('div');
    box.classList.add(`.box-${i}`);
    box.style.width = `${i * 10 + 20}px`;
    box.style.height = `${i * 10 + 20}px`;
    box.style.backgroundColor = `rgb(${getRandomInt(0, 256)}, ${getRandomInt(
      0,
      256
    )}, ${getRandomInt(0, 256)})`;
    box.style.margin = '2px';
    box.style.borderRadius = '4px';
    newBoxes.push(box);
  }

  return boxRef.append(...newBoxes);
}

destroyButtonRef.addEventListener('click', destroyBoxes);

function destroyBoxes(event) {
  event.preventDefault();

  const selectToDestroy = boxRef.querySelectorAll('div');

  for (let elem of newBoxes) {
    elem.remove();
  }

  let resetBoxes = [];
  newBoxes = resetBoxes;
  return;
}
