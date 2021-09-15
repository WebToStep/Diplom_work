const overlay = document.querySelector('.overlay');

export const showImage = target => {
    const imgURL = target.parentNode.href;
    overlay.classList.add('show_block');

    const div = document.createElement('div');
    const close = document.createElement('div');

    div.className = 'sertificate-in-modal';
    div.innerHTML = `<img src="${imgURL}" class="img-responsive" alt="">`;
    close.innerHTML = `<span title="Close" class="sertificate-in-modal__close">X</span>`;
    close.style.cssText = `
    position: absolute;
    display: flex;
    justify-content: center;
    flex-direction: column;
    right: 10px;
    top: 10px;
    width: 30px;
    height: 30px;
    background: #666;
    border-radius: 50%;
    color: #fff;
    cursor: pointer;
    font-weight: 600;
    `;

    div.append(close);
    overlay.append(div);
};
