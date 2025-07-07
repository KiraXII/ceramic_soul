import Swiper from 'swiper';
import { Navigation, Pagination } from 'swiper/modules';

import 'purecss/build/grids-min.css';
import 'purecss/build/grids-responsive-min.css';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import '/src/sass/style.scss';

try {
  new Swiper('.works__slider', {
    slidesPerView: 1,
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
    navigation: {
      nextEl: '.icon-right',
      prevEl: '.icon-left',
    },
    loop: true,
    breakpoints: {
      1280: {
        slidesPerView: 3,
        spaceBetween: 5,
      },
      1920: {
        slidesPerView: 3,
        spaceBetween: 35,
      },
    },
    modules: [Navigation, Pagination],
  });
} catch (e) {}
