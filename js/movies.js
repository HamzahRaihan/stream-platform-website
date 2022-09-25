var swiper = new Swiper(".movies-poster", {
  slidesPerView: 1,
  spaceBetween: 20,
  loop: true,
  loopFillGroupWithBlank: true,

  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  breakpoints: {
    640: {
      slidesPerView: 2,
      spaceBetween: 20,
    },

    1024: {
      slidesPerView: 4,
      spaceBetween: 20,
    },
  },
});
