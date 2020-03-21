$(document).ready(function() {
  $(document).scroll(function() {
    const h = $(document).scrollTop();
    if (0 != h) {
      $(".header").addClass("header_size");
    } else {
      $(".header").removeClass("header_size");
    }
  });
});
