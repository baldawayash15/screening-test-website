const myCarouselElement = document.querySelector('#demo');
const carousel = new bootstrap.Carousel(myCarouselElement, {
  interval: 3000,
  wrap: true,
  pause: false,
  touch: true,
});

var swiper = new Swiper('.btnSwiper', {
  grabCursor: true,
  spaceBetween: 10,
  loop: true,
  slidesPerView: 3,
  freeMode: true,
  breakpoints: {
    // when window width is >= 480px
    480: {
      slidesPerView: 2,
      spaceBetween: 10,
    },
    // when window width is >= 640px
    640: {
      slidesPerView: 5,
      spaceBetween: 10,
    },
  },
});

var swiper2 = new Swiper('.instaSwiper, .gamesSwiper', {
  grabCursor: true,
  spaceBetween: 90,
  loop: true,
  slidesPerView: 3,
  freeMode: true,
  breakpoints: {
    // when window width is >= 480px
    480: {
      slidesPerView: 2,
      spaceBetween: 50,
    },
    // when window width is >= 640px
    640: {
      slidesPerView: 5,
      spaceBetween: 50,
    },
  },
});
