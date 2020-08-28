/* 
Напиши скрипт который, при наборе текста в инпуте input#name-input (событие input), 
подставляет его текущее значение в span#name-output. 
Если инпут пустой, в спане должна отображаться строка 'незнакомец'.
*/


const inputRef = document.querySelector('#name-input');
const userNameRef = document.querySelector('#name-output');

inputRef.addEventListener('input', handleInputChange);

function handleInputChange(event) {
  userNameRef.textContent = event.target.value;
  if (event.target.value === '') {
    userNameRef.textContent = 'незнакомец';
  };
};
