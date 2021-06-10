const ingredients = [
  'Картошка',
  'Грибы',
  'Чеснок',
  'Помидоры',
  'Зелень',
  'Приправы',
];

const makeItemList = elements => {
  return elements.map(element => {
    const elementItemRef = document.createElement('li');
    elementItemRef.textContent = element;
    return elementItemRef;
  });
};

const elements = makeItemList(ingredients);

const ingredientsRef = document.querySelector('#ingredients');

ingredientsRef.append(...elements);
