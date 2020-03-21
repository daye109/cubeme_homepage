$(document).ready(function() {
  $(window).scroll(function() {
    const windowTop = $(window).scrollTop() + 400;
    const section4Top = $(".sec4_offtop1").offset().top;
    const section4Bottom = $(".sec4_offtop2").offset().top;

    if (windowTop >= section4Top) {
      $(".section4_skinimg").css({
        opacity: 1
      });
    }

    if (windowTop >= section4Bottom) {
      $(".section4_slimimg").css({
        opacity: 1
      });
    }
  });

  $(document).on("click", ".click_down", function() {
    const section1 = $("section")
      .eq(1)
      .offset().top;
    $("body, html").animate(
      {
        scrollTop: section1
      },
      {
        duration: 500,
        complete: function() {
          scrollEvent = false;
        }
      }
    );
  });
});
