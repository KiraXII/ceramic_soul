import Swiper from 'swiper';
import { Navigation, Pagination } from 'swiper/modules';

import 'purecss/build/grids-min.css';
import 'purecss/build/grids-responsive-min.css';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import '/src/sass/style.scss';

const burger = document.querySelector('.burger'),
  close = document.querySelector('.header__menu-close'),
  menu = document.querySelector('.header__menu');

burger.addEventListener('click', () => {
  menu.classList.add('header__menu_active');
  document.body.style.overflow = 'hidden';
});

close.addEventListener('click', () => {
  menu.classList.remove('header__menu_active');
  document.body.style.overflow = '';
});

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

try {
  const tabs = document.querySelectorAll('.catalog__tab');
  const contents = document.querySelectorAll('.catalog__content__wrapper');

  tabs.forEach((tab, index) => {
    tab.addEventListener('click', () => {
      //удаляем активный класс у всех табов и контента
      tabs.forEach((t) => t.classList.remove('catalog__tab_active'));
      contents.forEach((c) => (c.style.display = 'none'));

      // добавляем активный класс к нажатому табу и показываем соответствующий контент
      tab.classList.add('catalog__tab_active');
      contents[index].style.display = 'block';
    });
  });

  //показываем первый контент при загрузке

  contents.forEach((c, i) => (c.style.display = i === 0 ? 'block' : 'none'));
} catch (e) {}
