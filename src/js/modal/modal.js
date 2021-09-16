export const openModal = el => el.forEach(element => {
    element.classList.add('show_block');
    element.classList.remove('hidden_block');
});

export const closeModal = el => {
    el[0].innerHTML = '';
    el.forEach(element => {
        element.classList.remove('show_block');
        element.classList.add('hidden_block');
    });
};
