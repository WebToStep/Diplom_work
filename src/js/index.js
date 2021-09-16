// необходимо для дороботок webpack
// import '../css/style.css';
// import '../css/animate.css';
// import '../css/bootstrap.min.css';
// import '../fonts/font.css';
// import '../index.html';
// import '../balkony.html';
// import '../kuhni.html';

import { SliderCarousel, SliderCarousel2 } from './carusel/carusel';
import { closeModal, openModal } from '../js/modal/modal';
import { pageScroll, scrollHide } from '../js/pageScroll/pageScroll';
import { countTimer, addDays } from '../js/timer/timer';
import { calc } from '../js/calc/calc';
import { sendForm } from '../js/sendForm/sendForm';
import { maskPhone } from '../js/plugins/maskPhone';
import { showImage } from '../js/showImage/showImage';

document.addEventListener("DOMContentLoaded", () => {
    const offer = document.getElementById('offer'),
        overlay = document.querySelector('.overlay'),
        headerModal = document.querySelector('.header-modal'),
        servicesModal = document.querySelector('.services-modal');

    // carousel
    const carousel = new SliderCarousel({
        main: '.benefits-inner',
        wrap: '.benefits-wrap',
        next: '.benefits__arrow--right',
        prev: '.benefits__arrow--left',
        slidesToShow: 3,
        infinity: true,
        responsive: [
            {
                breakpoint: 1024,
                slidesToShow: 3
            },
            {
                breakpoint: 576,
                slidesToShow: 1
            }],
    });
    carousel.init();
    const carousel2 = new SliderCarousel2({
        main: '.services-inner',
        wrap: '.services-wrap',
        next: '.services__arrow--right',
        prev: '.services__arrow--left',
        slidesToShow: 2,
        infinity: true,
        responsive: [
            {
                breakpoint: 1024,
                slidesToShow: 2
            },
            {
                breakpoint: 576,
                slidesToShow: 1
            }],
    });
    carousel2.init();

    // вызов функций
    scrollHide('none');
    sendForm();
    maskPhone('phone');

    // Таймер
    // Если клиент впервые на сайте то добавляем в storage дату
    if (localStorage.startTimer === undefined) {
        // вместо еденицы нужно передать срок дней акции после того как клиент зашел на сайт
        localStorage.startTimer = addDays(new Date(), 3);
        countTimer(localStorage.startTimer);
    } else {
        countTimer(localStorage.startTimer);
    }

    // делигирование
    document.addEventListener('click', event => {
        const target = event.target;
        const equality = el => el.trim().toLocaleLowerCase();
        if (target.classList.contains('fancyboxModal')) {
            // открытие модалок
            event.preventDefault();
            if (equality(target.innerText) === equality('ЗАКАЗАТЬ ЗВОНОК!') ||
            equality(target.innerText) === equality('УЗНАТЬ СВОЮ СКИДКУ')) {
                openModal([overlay, headerModal]);
            } else {
                openModal([overlay, servicesModal]);
            }
        }
        if (target.parentNode.classList.contains('sertificate-document')) {
            // открытие модалок
            event.preventDefault();
            showImage(target);
        }
        //  закрытие модалки 
        if (target.classList.contains('header-modal__close')) {
            closeModal([overlay, headerModal]);
        } else if (target.classList.contains('services-modal__close')) {
            closeModal([overlay, servicesModal]);
        }
        //  закрытие модалки по оверлею
        if (target.classList.contains('overlay')) {
            closeModal([overlay, headerModal]);
            closeModal([overlay, servicesModal]);
        }
        if (target.classList.contains('sertificate-in-modal__close')) {
            closeModal([overlay]);
        }
        // скрол to top
        if (target.classList.contains('smooth-scroll__img'))pageScroll();
    });
    document.addEventListener('input', event => {
        if (event.target.closest('#calc')) {
            calc();
        }
    });
    window.addEventListener('mouseover', event => {
        if (event.target.localName === 'html') return;
        if (event.target.parentNode.classList.contains('sertificate-document')) {
            event.target.style.opacity = 1;
        }
    });
    window.addEventListener('mouseout', event => {
        if (event.target.localName === 'html') return;
        if (event.target.parentNode.classList.contains('sertificate-document')) {
            event.target.style = '';
        }
    });
    window.addEventListener('scroll', () => {
        // появление скрол to top
        const offerY = offer.getBoundingClientRect().bottom;

        if (offerY < 0) {
            window.requestAnimationFrame(() => {
                scrollHide('block');
            });
        } else {
            window.requestAnimationFrame(() => {
                scrollHide('none');
            });
        }
    });
});
