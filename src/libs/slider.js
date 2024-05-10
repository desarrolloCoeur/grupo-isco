import Swiper from 'swiper';
import { Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';


document.addEventListener( 'DOMContentLoaded', function() {
    const swiper2 = new Swiper('.mySwiper2', {
        modules: [Navigation, Pagination],
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        },
        pagination: {
            el: ".swiper-pagination",
            clickable: true,
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