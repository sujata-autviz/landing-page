var swiper = new Swiper(".about.mySwiper", {
  loop: true,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  // autoplay: {
  //   delay: 4000,
  //   speed: 1200,
  // },
  breakpoints: {
    767: {
      slidesPerView: 2,
      spaceBetween: 20
    },
    1024: {
      slidesPerView: 3,
      spaceBetween: 20
    }
  }
});

var swiper = new Swiper(".testimonial-slider.mySwiper", {
  loop: true,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  autoplay: {
    delay: 3000,
    speed: 1200,
  },
  breakpoints: {
    767: {
      slidesPerView: 2,
      spaceBetween: 20
    },
    1024: {
      slidesPerView: 3,
      spaceBetween: 20
    }
  }
});

var swiper = new Swiper(".home.mySwiper", {
  loop: true,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  autoplay: {
    delay: 3000,
    speed: 1200,
  },
  breakpoints: {
    767: {
      slidesPerView: 1,
      spaceBetween: 20
    },
    1024: {
      slidesPerView: 1,
      spaceBetween: 20
    }
  }
});