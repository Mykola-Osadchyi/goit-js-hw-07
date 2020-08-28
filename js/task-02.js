/* 
Напиши скрипт, который для каждого элемента массива ingredients 
создаст отдельный li, после чего вставит все li за одну операцию 
в список ul.ingredients. Для создания DOM-узлов используй document.createElement().

В HTML есть пустой список ul#ingredients.
 */

// В JS есть массив строк.
const ingredients = [
  'Картошка',
  'Грибы',
  'Чеснок',
  'Помидоры',
  'Зелень',
  'Приправы',
];

const ingredientList = ingredients.reduce((arrayOfTags, ingredient) => {
  const listItem = document.createElement('li');
  listItem.textContent = ingredient;
  arrayOfTags.push(listItem);
  return arrayOfTags;
}, []);


const ingredientsRef = document.querySelector("#ingredients");
ingredientsRef.append(...ingredientList);





