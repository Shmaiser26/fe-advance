const body = document.querySelector('body');
body.classList.add("main");

const user_card = document.createElement('div');
user_card
    .classList
    .add("user-card");

const user_foto = document.createElement('img');
user_foto
    .classList
    .add("user-photo");

const user_name = document.createElement('span');
user_name
    .classList
    .add("name");
user_name.textContent = "Claudia Cardinale";

const user_info = document.createElement('span');
user_info
    .classList
    .add("adress");
user_info.textContent = "29 Philadellphia, PA";

const user_icons_block = document.createElement('ul');
const user_icons_block_icon = document.createElement('li');
body.append(user_card);
user_card.append(user_foto);
user_card.append(user_name);
user_card.append(user_info);
user_card.append(user_icons_block);
user_icons_block.append(user_icons_block_icon);

console.log(body);