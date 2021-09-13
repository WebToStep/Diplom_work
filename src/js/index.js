import { closeModal, openModal } from './modal/modal';
import { pageScroll, scrollHide } from './pageScroll/pageScroll';

document.addEventListener("DOMContentLoaded", () => {
    const offer = document.getElementById('offer'),
        overlay = document.querySelector('.overlay'),
        headerModal = document.querySelector('.header-modal');

    // вызов функций
    scrollHide('none');

    // делигирование
    document.addEventListener('click', event => {
        const target = event.target;
        // открытие модалки
        if (target.classList.contains('fancyboxModal')) {
            event.preventDefault();
            openModal([overlay, headerModal]);
        }
        //  закрытие модалки
        if (target.classList.contains('overlay') ||
        target.classList.contains('header-modal__close')) {
            closeModal([overlay, headerModal]);
        }
        // скрол to top
        if (target.classList.contains('smooth-scroll__img'))pageScroll();
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

