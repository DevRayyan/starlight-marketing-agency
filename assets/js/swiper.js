
var swiper = new Swiper(".mySwiper", {
    slidesPerView: "auto",
    centeredSlides: true,
    spaceBetween: 30,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
        mousewheel:true,
    keyboard: true,
  });
var swiper = new Swiper(".QuoteSwiper", {
    slidesPerView: 2,
    // centeredSlides: true,
    spaceBetween: 30,
     navigation: {
        prevEl: ".swiper-button-next",
        nextEl: ".swiper-button-prev",
      },
    // pagination: {
    //   el: ".swiper-pagination",
    //   clickable: true,
    // },
        mousewheel:true,
    keyboard: true,
  });