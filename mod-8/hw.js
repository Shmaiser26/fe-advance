/*
 Напишите скрипт который реализует следующее поведение:

 + При нажатии на клавишу (не виртуальной клавиатуры) должно
  обрабатываться событие keydown.
  (Для обработки нажатия нажатия клавиш, повесьте слушателя на window.
  window.addEventListener("keydown", callback);)

 + Должны обрабатываться только те клавиши, которые присутствуют
  в разметке HTML (на виртуальной клавиатуре).

 + Звук нажатия на клавишу должен соответсвовать ноте, описанной
  в атрибуте button data-note.

 + Подсветку текущей клавиши реализуйте с помощью класса
  keyboard__btn--active.

 - Чекбокс Sound должен включать и выключать звук нажатия на клавиши.
*/

const playSound = note => {
    const audio = document.querySelector(`audio[data-note=${note}]`);
    audio.currentTime = 0;
    audio.play();
};

const buttons = Array.from(document.querySelectorAll("button"));
const keys = "qwertyuiop[]asdfghjkl;'zxcvbnm,./".split("");

const keyboard = document.querySelector(".keyboard");
const activeBtn = {
    node: null
};
const soundSwitch = document.querySelector("input");

window.addEventListener("keydown", setActive);
window.addEventListener("keydown", SoundOn);

function setActive(event) {
    let pressedKeyIndex = keys.indexOf(event.key);
    if (keys.indexOf(event.key) >= 0) {
        if (activeBtn.node) {
            activeBtn.node.classList.remove('keyboard__btn--active');
        } else {
            activeBtn.node = buttons[pressedKeyIndex];
            activeBtn.node.classList.add('keyboard__btn--active');
        }
        activeBtn.node = buttons[pressedKeyIndex];
        activeBtn.node.classList.add('keyboard__btn--active');
    } else {
        activeBtn.node.classList.remove('keyboard__btn--active');
    }

}

function SoundOn(event) {
      if (soundSwitch.checked) {
        let noteSound = activeBtn.node.dataset.note;
        playSound(noteSound);
      }
    }