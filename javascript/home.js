// button
const collaBtn = document.querySelector(".colla_btn");
const slimBtn = document.querySelector(".slim_btn");
const perfectBtn = document.querySelector(".perfect_btn");
// colla
const collaBox = document.querySelector(".colla_box");
const collaOne = document.querySelector(".colla_1");
const collaTwo = document.querySelector(".colla_2");
const collaThree = document.querySelector(".colla_3");
const collaFour = document.querySelector(".colla_4");
// skin
const slimOne = document.querySelector(".slim_1");
const slimTwo = document.querySelector(".slim_2");
const slimThree = document.querySelector(".slim_3");
const slimFour = document.querySelector(".slim_4");
// perfect
const perfectOne = document.querySelector(".perfect_1");
const perfectTwo = document.querySelector(".perfect_3");
const perfectThree = document.querySelector(".perfect_2");
const perfectFour = document.querySelector(".perfect_4");

function collaCheck() {
  slimBtn.classList.remove("text_black");
  perfectBtn.classList.remove("text_black");
  collaBtn.classList.add("text_black");
  slimOne.classList.remove("show");
  slimTwo.classList.remove("show");
  slimThree.classList.remove("show");
  slimFour.classList.remove("show");
  perfectOne.classList.remove("show");
  perfectTwo.classList.remove("show");
  perfectThree.classList.remove("show");
  perfectFour.classList.remove("show");
  collaOne.classList.add("show");
  collaTwo.classList.add("show");
  collaThree.classList.add("show");
  collaFour.classList.add("show");
}
function slimCheck() {
  collaBtn.classList.remove("text_black");
  perfectBtn.classList.remove("text_black");
  slimBtn.classList.add("text_black");

  collaOne.classList.remove("show");
  collaTwo.classList.remove("show");
  collaThree.classList.remove("show");
  collaFour.classList.remove("show");
  perfectOne.classList.remove("show");
  perfectTwo.classList.remove("show");
  perfectThree.classList.remove("show");
  perfectFour.classList.remove("show");
  slimOne.classList.add("show");
  slimTwo.classList.add("show");
  slimThree.classList.add("show");
  slimFour.classList.add("show");
}

function perfectCheck() {
  collaBtn.classList.remove("text_black");
  slimBtn.classList.remove("text_black");
  perfectBtn.classList.add("text_black");
  collaOne.classList.remove("show");
  collaTwo.classList.remove("show");
  collaThree.classList.remove("show");
  collaFour.classList.remove("show");
  slimOne.classList.remove("show");
  slimTwo.classList.remove("show");
  slimThree.classList.remove("show");
  slimFour.classList.remove("show");
  perfectOne.classList.add("show");
  perfectTwo.classList.add("show");
  perfectThree.classList.add("show");
  perfectFour.classList.add("show");
}
function init() {
  collaOne.classList.add("show");
  collaBtn.addEventListener("mouseover", collaCheck);
  slimBtn.addEventListener("mouseover", slimCheck);
  perfectBtn.addEventListener("mouseover", perfectCheck);
}
init();
