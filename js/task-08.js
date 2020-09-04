/*
Напиши скрипт создания и очистки коллекции элементов. 
Пользователь вводит количество элементов в input и нажимает кнопку Создать, 
после чего рендерится коллекция. При нажатии на кнопку Очистить, коллекция элементов очищается.

Создай функцию createBoxes(amount), которая принимает 1 параметр amount - число. 
Функция создает столько div, сколько указано в amount и добавляет их в div#boxes.

Каждый созданный div:
- Имеет случайный rgb цвет фона
- Размеры самого первого div - 30px на 30px
- Каждый следующий div после первого, должен быть шире и выше предыдущего на 10px

Создай функцию destroyBoxes(), которая очищает div#boxes.
*/

const inputRef = document.querySelector('#controls input');
const renderBtn = document.querySelector('#controls button[data-action="render"]');
const destroyBtn = document.querySelector('#controls button[data-action="destroy"]');
const boxesRef = document.querySelector('#boxes');

renderBtn.addEventListener('click', createBoxes)
destroyBtn.addEventListener('click', removeBoxes)

function createBoxes(amount) {
  amount = inputRef.value;
  let boxNumber = 0;
  let boxSideSize = 30;
  const boxList = document.createElement('div');
  do {
    const box = document.createElement('div');
    boxList.appendChild(box);
    boxNumber += 1;
    box.style.width = `${boxSideSize}px`;
    box.style.height = `${boxSideSize}px`;
    boxSideSize += 10;
    box.style.backgroundColor = `rgb(${randomColor()}, ${randomColor()}, ${randomColor()})`;
  } while (boxNumber < amount);
  boxesRef.append(...boxList.children);
};

function removeBoxes() {
  boxesRef.innerHTML = '';
};

function randomColor() { 
  return Math.floor(Math.random() * 255); 
};
