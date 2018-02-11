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
  const row = document.createElement("div");
  row.classList.add("row");
  body.append(row);
  for (let i = 0, lm = str.length; i < lm; i += 1) {
    let button = `<li class ="button">${str.charAt(i)}</li>`;
    row.insertAdjacentHTML('beforeend', button);
  }
 
}
createLayout(topRow);
createLayout(middleRow);
createLayout(bottomRow);
