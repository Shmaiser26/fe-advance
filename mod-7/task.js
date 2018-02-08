const body = document.querySelector('body');
body.classList.add("main");

const container = document.createElement('div');
container.classList.add('container');

const user_card = document.createElement('div');
user_card.classList.add('user-card');

const image = document.createElement('img');
image.classList.add('image');

const name = document.createElement('span');
name.classList.add('text');

const adress = document.createElement('span');
adress.classList.add('text');

const icons_block = document.createElement('ul');
icons_block.classList.add('icons-block');

const icon_a = document.createElement('li');
icon_a.classList.add('icons');
icon_a.classList.add('icon-a::before');

const icon_b = document.createElement('li');
icon_b.classList.add('icons');
icon_b.classList.add('icon-b::before');

const icon_c = document.createElement('li');
icon_c.classList.add('icons');
icon_c.classList.add('icon-c::before');

body.appendChild(container);
container.appendChild(user_card);
user_card.appendChild(image, name, adress, icons_block);
icons_block.append(icon_a, icon_b, icon_c);
console.log(body);