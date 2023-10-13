new Swiper('#numbers-blocks-slider', {
   slidesPerView: 'auto',
   slidesPerGroup: 1,
   watchOverflow: true,
   autoHeight: true,
   spaceBetween: 25,
   speed: 800,
   effect: 'slide',
   loop: true,
   preloadImages: false,
   lazy: {
      loadPrevNext: false,
      loadOnTransitionStart: false
   },
   watchSlidesProgress: true,
   watchSlidesVisibility: true,
   pagination: {
      el: '.numbers-blocks-slider__pagination',

      type: 'fraction',
      renderFraction: function (currentClass, totalClass) {
         return '<span class="' + currentClass + '"></span>' + ' - ' + '<span class="' + totalClass + '"></span>';
      }
   },
   simulateTouch: true,
   touchRation: 1,
   touchAngle: 45,
   grabCursor: true,
   breakpoints: {
      0: {
         //slidesPerView: 1.2,
         slidesPerGroup: 1,
         spaceBetween: 20,
         slidesPerView: 'auto',
         //loop: true,
      },
      481: {
         //slidesPerView: 2,
         slidesPerGroup: 1,
         spaceBetween: 20,
         slidesPerView: 'auto',
         //loop: true,
      },
      801: {
         //loop: true,
         slidesPerGroup: 1,
         spaceBetween: 20,
         slidesPerView: 'auto',
      },
      1025: {
         slidesPerGroup: 1,
         spaceBetween: 25,
         loop: true,
         slidesPerView: 'auto',
      }
   }
});

new Swiper('#in-their-words-slider', {
   slidesPerView: '2.3',
   slidesPerGroup: 1,
   watchOverflow: true,
   autoHeight: true,
   spaceBetween: 40,
   speed: 800,
   effect: 'slide',
   pagination: {
      el: '.reviews__pagination',

      type: 'fraction',
      renderFraction: function (currentClass, totalClass) {
         return '<span class="' + currentClass + '"></span>' + ' - ' + '<span class="' + totalClass + '"></span>';
      }
   },
   simulateTouch: true,
   touchRation: 1,
   touchAngle: 45,
   grabCursor: true,
   breakpoints: {
      0: {
         slidesPerGroup: 1,
         spaceBetween: 20,
         slidesPerView: '1.2',
      },
      481: {
         slidesPerGroup: 1,
         spaceBetween: 20,
         slidesPerView: '1.3',
      },
      801: {
         slidesPerGroup: 1,
         spaceBetween: 20,
         slidesPerView: '2.3',
      },
      1025: {
         slidesPerGroup: 1,
         spaceBetween: 25,
         slidesPerView: '2.2',
      }
   }
});