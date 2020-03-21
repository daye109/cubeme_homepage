const navBtn = document.querySelector(".header_nav_btn");
const btnBar1 = document.querySelector(".btn_bar1");
const btnBar2 = document.querySelector(".btn_bar2");
const btnBar3 = document.querySelector(".btn_bar3");

const navShow = document.querySelector(".header_nav");

const bigEng = document.querySelector("#big_eng");
const bigKor = document.querySelector("#big_kor");
const bigChn = document.querySelector("#big_chn");

function clickHam() {
  btnBar1.classList.toggle("btn_rotate_top");
  btnBar2.classList.toggle("disnone");
  btnBar3.classList.toggle("btn_rotate_bottom");
  navShow.classList.toggle("nav_show");
}

function clickEng() {
  bigKor.classList.remove("lang_deco");
  bigChn.classList.remove("lang_deco");
  bigEng.classList.add("lang_deco");
}

function clickKor() {
  bigEng.classList.remove("lang_deco");
  bigChn.classList.remove("lang_deco");
  bigKor.classList.add("lang_deco");
}

function clickChn() {
  bigKor.classList.remove("lang_deco");
  bigEng.classList.remove("lang_deco");
  bigChn.classList.add("lang_deco");
}

function init() {
  navBtn.addEventListener("click", clickHam);
  bigEng.addEventListener("click", clickEng);
  bigKor.addEventListener("click", clickKor);
  bigChn.addEventListener("click", clickChn);
}

init();

