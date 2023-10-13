const work_with_us_slider = document.querySelector('.work-with-us-slider')
if (work_with_us_slider) {
   new Swiper(work_with_us_slider, {
      slidesPerView: 2,
      slidesPerGroup: 1,
      watchOverflow: true,
      spaceBetween: 22,
      loop: true,
      speed: 800,
      effect: 'slide',
      preloadImages: false,
      lazy: {
         loadPrevNext: true,
         loadOnTransitionStart: true
      },
      watchSlidesProgress: true,
      watchSlidesVisibility: true,
      breakpoints: {
         0: {
            slidesPerView: 1,
         },
         401: {
            slidesPerView: 2,
         }
      }
   });
}