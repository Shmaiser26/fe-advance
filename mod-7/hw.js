/*
Визуализируем клавиатуру.

    Написать метод createLayout() который создает клавиатуру состоящую из 3-х строк, в каждой строке такое кол-во кнопок как длины topRow/middleRow и bottomRow полей.
    Можно использовать либо createElement либо создавать строку из тегов и вешать через insertAdjacentHTML или innerHTML.
    Добавить минимальное оформление на свой вкус.
*/

const topRow = "qwertyuiop[]";
const middleRow = "asdfghjkl;'";
const bottomRow = "zxcvbnm,./";
const body = document.querySelector("body");


function createLayout(str) {
  const row = document.createElement("ul");
  row.classList.add("row");
  body.append(row);
  
  const buttons = str.split('').reduce((n, i) => n + '<li>' + i + '</li>', '');
    row.insertAdjacentHTML('beforeend', buttons);


}


createLayout(topRow);
createLayout(middleRow);
createLayout(bottomRow);
