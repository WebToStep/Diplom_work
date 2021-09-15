// необходимо для дороботок webpack
// import '../css/style.css';
// import '../css/animate.css';
// import '../css/bootstrap.min.css';
// import '../fonts/font.css';
// import '../index.html';
// import '../balkony.html';
// import '../kuhni.html';

import { closeModal, openModal } from '../js/modal/modal';
import { pageScroll, scrollHide } from '../js/pageScroll/pageScroll';
import { countTimer, addDays } from '../js/timer/timer';
import { calc } from '../js/calc/calc';
import { sendForm } from '../js/sendForm/sendForm';
import {maskPhone} from '../js/plugins/maskPhone';

document.addEventListener("DOMContentLoaded", () => {
    const offer = document.getElementById('offer'),
        overlay = document.querySelector('.overlay'),
        headerModal = document.querySelector('.header-modal'),
        servicesModal = document.querySelector('.services-modal');

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
        // скрол to top
        if (target.classList.contains('smooth-scroll__img'))pageScroll();
    });

    document.addEventListener('input', event => {
        if (event.target.closest('#calc')) {
            calc();
        }
    });
    // появление скрол to top
    window.addEventListener('scroll', () => {
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
