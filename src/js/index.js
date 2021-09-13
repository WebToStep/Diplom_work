import { openModal } from './modal/modal';
import { closeModal } from './modal/modal';

const overlay = document.querySelector('.overlay');
const headerModal = document.querySelector('.header-modal');

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
});

