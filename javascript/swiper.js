$(document).ready(function() {
  new Swiper(".home_swiper_mobile", {
    effect: "slide",
    autoHeight: true,
    speed: 1000,
    slidesPerView: 1,
    spaceBetween: -220,
    slidesPerGroup: 1,
    loop: false
  });

  new Swiper(".products_swiper_container", {
    effect: "slide",
    autoHeight: true,
    speed: 1000,
    slidesPerView: 3,
    spaceBetween: 0,
    slidesPerGroup: 1,
    loop: false,
    pagination: {
      el: ".swiper-pagination",
      clickable: true
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev"
    }
  });
});
