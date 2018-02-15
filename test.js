const notes = ['do', 're', 'me', 'fa', 'sole', 'la', 'si'];
const noteList = document.querySelector('ul');
//напишите reduce , который подключит к ul конкатенацию строк вида '<li>' + notes[i] + '</li>'

function makeList () {
  const note = notes.reduce((n, i) => n +'<li>' + i + '</li>', '');
  noteList.innerHTML = note;
}
makeList();
//напишите map, который получит псевдомассив li и текст преобразует в текст с большой буквы Array.from() используйте

const lissss = noteList.querySelectorAll('li');
const listItmes = Array.from(lissss, el => el = el.textContent.charAt(0).toUpperCase());

console.log(listItmes);
