const workSlider = new Swiper(".work__slider", {
  slidesPerView: 2,
  spaceBetween: 30,
  initialSlide: 1,
  navigation: {
    nextEl: ".work .swiper-button-next",
    prevEl: ".work .swiper-button-prev",
  },
});
if (document.querySelector(".review__slider")) {
  const review = new Swiper(".review__slider", {
    slidesPerView: 2,
    spaceBetween: 30,
    pagination: {
      el: '.review .swiper-pagination',
      type: 'fraction',
    },
    navigation: {
      nextEl: ".review .swiper-button-next",
      prevEl: ".review .swiper-button-prev",
    },
  });
}
