/* eslint-disable no-trailing-spaces */
export const sendForm = () => {
    //  отправка данных
    const postData = body => fetch('./server.php', {
        method: 'POST',
        headers: {
            //Заголовки в основном используются только для POST запросов
            'Content-Type': 'aplication/json'
        },
        body: JSON.stringify(body)
    });

    const forms = document.querySelectorAll('form');
    forms.forEach(item => {
        item.addEventListener('submit', event => {
            event.preventDefault();
            const helpBlock = event.target.parentNode.querySelector('.help-block'),
                name = event.target.querySelector('input[name="fio"]'),
                phone = event.target.querySelector('input[name="phone"]'),
                tempText = helpBlock.textContent;
         
            // сброс стилей инпута при ошибке
            event.target.querySelectorAll('input').forEach(el => el.addEventListener('focus', e => {
                e.target.style = '';
            }));

            const statusMessage = document.createElement('div');
            statusMessage.style.cssText = `font-size: 1.5rem;
                                          text-align: center;`;
            const errorMessage = 'Что то пошло не так...',
                successMessage = 'Спасибо! Мы скоро с вами свяжемся!',
                loader = document.createElement('section');
            loader.innerHTML = `<div class='sk-circle-bounce'>
                                       <div class='sk-child sk-circle-1'></div>
                                       <div class='sk-child sk-circle-2'></div>
                                       <div class='sk-child sk-circle-3'></div>
                                       <div class='sk-child sk-circle-4'></div>
                                       <div class='sk-child sk-circle-5'></div>
                                       <div class='sk-child sk-circle-6'></div>
                                       <div class='sk-child sk-circle-7'></div>
                                       <div class='sk-child sk-circle-8'></div>
                                       <div class='sk-child sk-circle-9'></div>
                                       <div class='sk-child sk-circle-10'></div>
                                       <div class='sk-child sk-circle-11'></div>
                                       <div class='sk-child sk-circle-12'></div>
                                   </div>`;

            //   проверка валидности и оповещение пользователя
            const valuesCheckered = () => {
                let timer;
                if (phone.value === '' && name.value === '') {
                    phone.style.border = '1px solid red';
                    name.style.border = '1px solid red';
                    helpBlock.textContent = '';
                    helpBlock.append(statusMessage);
                    statusMessage.textContent = 'Заполните все поля!';
                    statusMessage.style.cssText = `
                    font-size: 1.5rem;
                    text-align: center;
                    color: red`;
                  //   timer = setTimeout(() => {
                  //       helpBlock.textContent = tempText;
                  //       statusMessage.remove();
                  //   }, 5000);
                } else if (!name.value.match(/[а-я a-z]{2,}/ig)) {
                    name.style.border = '1px solid red';
                    helpBlock.textContent = '';
                    helpBlock.append(statusMessage);
                    statusMessage.textContent = 'Ошибка в поле Ваше имя!';
                    statusMessage.style.cssText = `
                       font-size: 1.5rem;
                       text-align: center;
                       color: red`;
                  //   timer = setTimeout(() => {
                  //       helpBlock.textContent = tempText;
                  //       statusMessage.remove();
                  //   }, 5000);
                } else if (!phone.value.match(/[0-9()-]{9}/)) {
                    phone.style.border = '1px solid red';
                    helpBlock.textContent = '';
                    helpBlock.append(statusMessage);
                    statusMessage.textContent = 'Ошибка в поле номер телефона!';
                    statusMessage.style.cssText = `
                        font-size: 1.5rem;
                        text-align: center;
                        color: red`;
                  //   timer = setTimeout(() => {
                  //       helpBlock.textContent = tempText;
                  //       statusMessage.remove();
                  //    }, 5000);
                  } else {
                     // statusMessage.textContent = '';
                     statusMessage.remove();
                  //   clearTimeout(timer);
                    statusMessage.style.cssText = `
                        font-size: 1.5rem;
                        text-align: center;
                        color: #666666`;
                    return true;
                }
                return false;            
            };

            // формирование данных для отправки
            if (valuesCheckered()) {
                helpBlock.textContent = '';
                helpBlock.append(statusMessage);
                statusMessage.append(loader);
                
                const formData = new FormData(item);
                const body = {};

                // Если клиент использовал калькулятор то добавляем значение
                if (localStorage.calc !== undefined)body['calc-total'] = localStorage.calc;

                formData.forEach((val, key) => body[key] = val);

                console.log('body: ', body);
                postData(body)
                    .then(response => {
                        if (response.status !== 200) {
                            throw new Error(response.status);
                        }
                        statusMessage.textContent = successMessage;
                    }).catch(error => {
                        statusMessage.textContent = errorMessage;
                        console.error(error);
                    });

                event.target.querySelectorAll('input').forEach(elem => elem.value = '');
                 setTimeout(() => {
                    statusMessage.remove();
                    helpBlock.innerHTML = tempText;
                  }, 5000);
            }
        });
    });
};
