const categoriesRef = document.querySelector('#categories');
const categoriesItemsRef = categoriesRef.querySelectorAll('.item');

console.log(`В списке ${categoriesItemsRef.length} категории`);

categoriesItemsRef.forEach(element => {
  console.log(`Категория: ${element.querySelector('h2').textContent}`);
  console.log(`Количество элементов: ${element.querySelectorAll('li').length}`);
});
