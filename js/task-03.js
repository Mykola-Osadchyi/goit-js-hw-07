/* 
Напиши скрипт для создания галлереи изображений по массиву данных.
В HTML есть список ul#gallery.

Используй массив объектов images для создания тегов img вложенных в li. 
Для создания разметки используй шаблонные строки и insertAdjacentHTML().

- Все элементы галереи должны добавляться в DOM за одну операцию вставки.
- Добавь минимальное оформление галереи флексбоксами или гридами через css-классы.
 */

const images = [
  {
    url:
      'https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'White and Black Long Fur Cat',
  },
  {
    url:
      'https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Orange and White Koi Fish Near Yellow Koi Fish',
  },
  {
    url:
      'https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Group of Horses Running',
  },
];

const photoList = document.querySelector('#gallery');

const doTagList = image => {
  const TegImg = document.createElement('img');
  TegImg.setAttribute("src", image.url);
  TegImg.setAttribute("alt", image.alt);
  TegImg.setAttribute("width", "420");
  TegImg.setAttribute("height", "280");
  const galleryItem = document.createElement('li');
  galleryItem.appendChild(TegImg);
  return galleryItem;
}

const photoGallery = images.map(image => doTagList(image))
photoList.append(...photoGallery)

