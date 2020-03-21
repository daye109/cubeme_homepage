const mobileLang = document.querySelector(".mobile_lang_btn");
const mobileUpBtn = document.querySelector("#mobile_up");
const mobileDownBtn = document.querySelector("#mobile_down");
const mobileLangChoose = document.querySelector(".mobile_lang_box");

const smallEng = document.querySelector("#small_eng");
const smallKor = document.querySelector("#small_kor");
const smallChn = document.querySelector("#small_chn");
const mobileText = document.querySelector(".mobile_lang_text");

function mobileToggle() {
  mobileUpBtn.classList.toggle("disnone");
  mobileDownBtn.classList.toggle("disnone");
  mobileLangChoose.classList.toggle("disnone");
}

function init() {
  mobileLang.addEventListener("click", mobileToggle);
  smallChn.addEventListener("click", function() {
    mobileText.innerHTML = "CHN";
  });
  smallEng.addEventListener("click", function() {
    mobileText.innerHTML = "ENG";
  });
  smallKor.addEventListener("click", function() {
    mobileText.innerHTML = "KOR";
  });
}

init();
