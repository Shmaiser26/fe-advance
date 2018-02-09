//Task 1
/*
function createUserCard() {
  const body = document.querySelector("body");
  body.classList.add("main");

  const container = document.createElement("div");
  container.classList.add("container");
 

  const user_card = document.createElement("div");
  user_card.classList.add("user-card");

  const photo = document.createElement("img");
  photo.classList.add("user-photo");
  photo.setAttribute("src", "img/girl-scarf-portrait.jpg");
  photo.setAttribute("alt", "User photo");

  const info = document.createElement("div");
  info.classList.add("user-info");

  const name = document.createElement("span");
  name.classList.add("name");
  name.textContent = "Claudia Cardinale";

  const age = document.createElement("span");
  age.classList.add("age");
  age.textContent = "29";

  const dot = document.createElement("span");
  dot.classList.add("dot");
  dot.textContent = " · ";

  const adress = document.createElement("span");
  adress.classList.add("adress");
  adress.textContent = "Piladelphia, PA";

  const successes = document.createElement("div");
  successes.classList.add("successes");

  const strawberrys = document.createElement("span");
  strawberrys.classList.add("strawberrys");
  strawberrys.textContent = "19";

  const lemons = document.createElement("span");
  lemons.classList.add("lemons");
  lemons.textContent = "5";

  const link = document.createElement("a");
  link.setAttribute("href", "#");

  const enter = document.createElement("img");
  enter.classList.add("enter");
  enter.setAttribute("src", "img/003-pointing-right.png");
  enter.setAttribute("alt", "enter");

  body.append(container);
  container.append(user_card);
  user_card.append(photo, info);
  info.append(name, age, dot, adress, successes);
  successes.append(strawberrys, lemons, link);
  link.append(enter);
}

createUserCard();

// Task 2

function createUserCardTags() {
  const card = document.querySelector(".container");
  console.log(card.innerHTML);
}
createUserCardTags();
*/
/*

function User(img, name, age, location, strawberryes, lemons) {
  this.img = img;
  this.name = name;
  this.age = age;
  this.location = location;
  this.strawberryes = strawberryes;
  this.lemons = lemons;
}
*/

const claudia = {
  img: "https://loremflickr.com/320/320/dog",
  name: "Claudia Cardinale",
  age: 29,
  location: "Philadelphia, PA",
  strawberries: 19,
  lemons: 5
};

const hanna = {
  img: "https://loremflickr.com/320/320/dog",
  name: "Hanna Cardinale",
  age: 23,
  location: "Philadelphia, PA",
  strawberries: 32,
  lemons: 6
};

const moses = {
  img: "https://loremflickr.com/320/320/dog",
  name: "Moses",
  age: 100,
  location: "Philadelphia, PA",
  strawberries: 22,
  lemons: 22
};

function createUserCard(user, parent) {
  parent.insertAdjacentHTML(
    "afterbegin",
   `<div class="user-card"><img class="user-photo" src="${
      this.img
    }" alt="User photo"><div class="user-info"><span class="name">${
      this.name
    }</span><span class="age">${
      this.age
    }</span><span class="dot"> · </span><span class="adress">${
      this.location
    }</span><div class="successes"><span class="strawberrys">${
      this.strawberryes
    }</span><span class="lemons">${
      this.lemons
    }</span><a href="#"><img class="enter" src="img/003-pointing-right.png" alt="enter"></a></div></div></div>`  
    );
}
const body = document.querySelector("body");
body.classList.add("main");
const container = document.createElement("div");
container.classList.add("container");
body.append(container);

createUserCard(claudia, container);
createUserCard(hanna, container);
createUserCard(moses, container);
