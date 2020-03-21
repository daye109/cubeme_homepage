$(document).ready(function() {
  let index = 0;
  let length = $(".mobile_img").length;

  autoplay();

  function autoplay() {
    setInterval(function() {
      index++;
      index = index % length;
      action(index);
    }, 3000);
  }

  function action(num) {
    $(".mobile_img")
      .removeClass("mobile_show")
      .eq(num)
      .addClass("mobile_show");
    $(".section1_mobile_li")
      .removeClass("mobile_block")
      .eq(num)
      .addClass("mobile_block");
  }
});
