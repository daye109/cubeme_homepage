$(window).scroll(function() {
  const windowTop2 = $(window).scrollTop();
  const brandsec2 = $(".brand_sec2").offset().top;

  if (windowTop2 >= brandsec2) {
    $(".wellness_img").css({
      opacity: 1
    });
  }
});
