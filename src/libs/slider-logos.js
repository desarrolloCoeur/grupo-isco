import Swiper from 'swiper';
import 'swiper/css';


document.addEventListener( 'DOMContentLoaded', function() {
    const swiper3 = new Swiper('.mySwiper3', {
        spaceBetween: 30,
        autoplay: {
          delay: 3000,
          disableOnInteraction: false,
        },
        breakpoints: {
          640: {
            slidesPerView: 1,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 2,
            spaceBetween: 40,
          },
          1024: {
            slidesPerView: 3,
            spaceBetween: 50,
          },
          1500: {
            slidesPerView: 4,
            spaceBetween: 50,
          },
        },
      });
});