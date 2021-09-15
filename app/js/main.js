/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./js/calc/calc.js":
/*!*************************!*\
  !*** ./js/calc/calc.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"calc\": () => (/* binding */ calc)\n/* harmony export */ });\nconst Type = document.getElementById('calc-type'),\r\n    Material = document.getElementById('calc-type-material'),\r\n    Input = document.getElementById('calc-input'),\r\n    Total = document.getElementById('calc-total');\r\n\r\nconst calc = () => {\r\n    if (Number(Type.value) && Number(Material.value) && Number(Input.value)) {\r\n        const result = Math.floor(Type.value * Material.value * Input.value * 1000);\r\n        Total.value = result;\r\n        localStorage.setItem('calc', result);\r\n    }\r\n};\r\n\n\n//# sourceURL=webpack:///./js/calc/calc.js?");

/***/ }),

/***/ "./js/index.js":
/*!*********************!*\
  !*** ./js/index.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _js_modal_modal__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../js/modal/modal */ \"./js/modal/modal.js\");\n/* harmony import */ var _js_pageScroll_pageScroll__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../js/pageScroll/pageScroll */ \"./js/pageScroll/pageScroll.js\");\n/* harmony import */ var _js_timer_timer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../js/timer/timer */ \"./js/timer/timer.js\");\n/* harmony import */ var _js_calc_calc__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../js/calc/calc */ \"./js/calc/calc.js\");\n/* harmony import */ var _js_sendForm_sendForm__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../js/sendForm/sendForm */ \"./js/sendForm/sendForm.js\");\n/* harmony import */ var _js_plugins_maskPhone__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../js/plugins/maskPhone */ \"./js/plugins/maskPhone.js\");\n// необходимо для дороботок webpack\r\n// import '../css/style.css';\r\n// import '../css/animate.css';\r\n// import '../css/bootstrap.min.css';\r\n// import '../fonts/font.css';\r\n// import '../index.html';\r\n// import '../balkony.html';\r\n// import '../kuhni.html';\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\ndocument.addEventListener(\"DOMContentLoaded\", () => {\r\n    const offer = document.getElementById('offer'),\r\n        overlay = document.querySelector('.overlay'),\r\n        headerModal = document.querySelector('.header-modal'),\r\n        servicesModal = document.querySelector('.services-modal');\r\n\r\n    // вызов функций\r\n    (0,_js_pageScroll_pageScroll__WEBPACK_IMPORTED_MODULE_1__.scrollHide)('none');\r\n    (0,_js_sendForm_sendForm__WEBPACK_IMPORTED_MODULE_4__.sendForm)();\r\n    (0,_js_plugins_maskPhone__WEBPACK_IMPORTED_MODULE_5__.maskPhone)('phone');\r\n\r\n    // Таймер\r\n    // Если клиент впервые на сайте то добавляем в storage дату\r\n    if (localStorage.startTimer === undefined) {\r\n        // вместо еденицы нужно передать срок дней акции после того как клиент зашел на сайт\r\n        localStorage.startTimer = (0,_js_timer_timer__WEBPACK_IMPORTED_MODULE_2__.addDays)(new Date(), 3);\r\n        (0,_js_timer_timer__WEBPACK_IMPORTED_MODULE_2__.countTimer)(localStorage.startTimer);\r\n    } else {\r\n        (0,_js_timer_timer__WEBPACK_IMPORTED_MODULE_2__.countTimer)(localStorage.startTimer);\r\n    }\r\n\r\n    // делигирование\r\n    document.addEventListener('click', event => {\r\n        const target = event.target;\r\n        const equality = el => el.trim().toLocaleLowerCase();\r\n        if (target.classList.contains('fancyboxModal')) {\r\n            // открытие модалок\r\n            event.preventDefault();\r\n            if (equality(target.innerText) === equality('ЗАКАЗАТЬ ЗВОНОК!') ||\r\n            equality(target.innerText) === equality('УЗНАТЬ СВОЮ СКИДКУ')) {\r\n                (0,_js_modal_modal__WEBPACK_IMPORTED_MODULE_0__.openModal)([overlay, headerModal]);\r\n            } else {\r\n                (0,_js_modal_modal__WEBPACK_IMPORTED_MODULE_0__.openModal)([overlay, servicesModal]);\r\n            }\r\n        }\r\n        //  закрытие модалки\r\n        if (target.classList.contains('header-modal__close')) {\r\n            (0,_js_modal_modal__WEBPACK_IMPORTED_MODULE_0__.closeModal)([overlay, headerModal]);\r\n        } else if (target.classList.contains('services-modal__close')) {\r\n            (0,_js_modal_modal__WEBPACK_IMPORTED_MODULE_0__.closeModal)([overlay, servicesModal]);\r\n        }\r\n        //  закрытие модалки по оверлею\r\n        if (target.classList.contains('overlay')) {\r\n            (0,_js_modal_modal__WEBPACK_IMPORTED_MODULE_0__.closeModal)([overlay, headerModal]);\r\n            (0,_js_modal_modal__WEBPACK_IMPORTED_MODULE_0__.closeModal)([overlay, servicesModal]);\r\n        }\r\n        // скрол to top\r\n        if (target.classList.contains('smooth-scroll__img'))(0,_js_pageScroll_pageScroll__WEBPACK_IMPORTED_MODULE_1__.pageScroll)();\r\n    });\r\n\r\n    document.addEventListener('input', event => {\r\n        if (event.target.closest('#calc')) {\r\n            (0,_js_calc_calc__WEBPACK_IMPORTED_MODULE_3__.calc)();\r\n        }\r\n    });\r\n    // появление скрол to top\r\n    window.addEventListener('scroll', () => {\r\n        const offerY = offer.getBoundingClientRect().bottom;\r\n\r\n        if (offerY < 0) {\r\n            window.requestAnimationFrame(() => {\r\n                (0,_js_pageScroll_pageScroll__WEBPACK_IMPORTED_MODULE_1__.scrollHide)('block');\r\n            });\r\n        } else {\r\n            window.requestAnimationFrame(() => {\r\n                (0,_js_pageScroll_pageScroll__WEBPACK_IMPORTED_MODULE_1__.scrollHide)('none');\r\n            });\r\n        }\r\n    });\r\n});\r\n\n\n//# sourceURL=webpack:///./js/index.js?");

/***/ }),

/***/ "./js/modal/modal.js":
/*!***************************!*\
  !*** ./js/modal/modal.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"openModal\": () => (/* binding */ openModal),\n/* harmony export */   \"closeModal\": () => (/* binding */ closeModal)\n/* harmony export */ });\nconst openModal = el => el.forEach(element => {\r\n    element.classList.add('show_block');\r\n    element.classList.remove('hidden_block');\r\n});\r\n\r\nconst closeModal = el => el.forEach(element => {\r\n    element.classList.remove('show_block');\r\n    element.classList.add('hidden_block');\r\n});\r\n\n\n//# sourceURL=webpack:///./js/modal/modal.js?");

/***/ }),

/***/ "./js/pageScroll/pageScroll.js":
/*!*************************************!*\
  !*** ./js/pageScroll/pageScroll.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"scrollHide\": () => (/* binding */ scrollHide),\n/* harmony export */   \"pageScroll\": () => (/* binding */ pageScroll)\n/* harmony export */ });\nconst smoothScroll = document.querySelector('.smooth-scroll');\r\n\r\nconst scrollHide = visibility => smoothScroll.style.display = visibility;\r\nconst pageScroll = () => window.scrollTo({ top: 0, behavior: 'smooth' });\r\n\n\n//# sourceURL=webpack:///./js/pageScroll/pageScroll.js?");

/***/ }),

/***/ "./js/plugins/maskPhone.js":
/*!*********************************!*\
  !*** ./js/plugins/maskPhone.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"maskPhone\": () => (/* binding */ maskPhone)\n/* harmony export */ });\nfunction maskPhone(selector, masked = '+7 (___) ___-__-__') {\n    const elems = document.querySelectorAll(`input[name=\"${selector}\"]`);\n\n    function mask(event) {\n        const keyCode = event.keyCode;\n        const template = masked,\n            def = template.replace(/\\D/g, \"\"),\n            val = this.value.replace(/\\D/g, \"\");\n        let i = 0,\n            newValue = template.replace(/[_\\d]/g, a => (i < val.length ? val.charAt(i++) || def.charAt(i) : a));\n        i = newValue.indexOf(\"_\");\n        if (i != -1) {\n            newValue = newValue.slice(0, i);\n        }\n        let reg = template.substr(0, this.value.length).replace(/_+/g,\n            a => \"\\\\d{1,\" + a.length + \"}\").replace(/[+()]/g, \"\\\\$&\");\n        reg = new RegExp(\"^\" + reg + \"$\");\n        if (!reg.test(this.value) || this.value.length < 5 || keyCode > 47 && keyCode < 58) {\n            this.value = newValue;\n        }\n        if (event.type == \"blur\" && this.value.length < 5) {\n            this.value = \"\";\n        }\n\n    }\n\n    for (const elem of elems) {\n        elem.addEventListener(\"input\", mask);\n        elem.addEventListener(\"focus\", mask);\n        elem.addEventListener(\"blur\", mask);\n    }\n\n}\n\n// use\n\nmaskPhone('селектор элементов', 'маска, если маску не передать то будет работать стандартная +7 (___) ___-__-__');\n\n\n//# sourceURL=webpack:///./js/plugins/maskPhone.js?");

/***/ }),

/***/ "./js/sendForm/sendForm.js":
/*!*********************************!*\
  !*** ./js/sendForm/sendForm.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"sendForm\": () => (/* binding */ sendForm)\n/* harmony export */ });\n/* eslint-disable no-trailing-spaces */\r\nconst sendForm = () => {\r\n    //  отправка данных\r\n    const postData = body => fetch('./server.php', {\r\n        method: 'POST',\r\n        headers: {\r\n            //Заголовки в основном используются только для POST запросов\r\n            'Content-Type': 'aplication/json'\r\n        },\r\n        body: JSON.stringify(body)\r\n    });\r\n\r\n    const forms = document.querySelectorAll('form');\r\n    forms.forEach(item => {\r\n        item.addEventListener('submit', event => {\r\n            event.preventDefault();\r\n            const helpBlock = event.target.parentNode.querySelector('.help-block'),\r\n                name = event.target.querySelector('input[name=\"fio\"]'),\r\n                phone = event.target.querySelector('input[name=\"phone\"]'),\r\n                tempText = helpBlock.textContent;\r\n         \r\n            // сброс стилей инпута при ошибке\r\n            event.target.querySelectorAll('input').forEach(el => el.addEventListener('focus', e => {\r\n                e.target.style = '';\r\n            }));\r\n\r\n            const statusMessage = document.createElement('div');\r\n            statusMessage.style.cssText = `font-size: 1.5rem;\r\n                                          text-align: center;`;\r\n            const errorMessage = 'Что то пошло не так...',\r\n                successMessage = 'Спасибо! Мы скоро с вами свяжемся!',\r\n                loader = document.createElement('section');\r\n            loader.innerHTML = `<div class='sk-circle-bounce'>\r\n                                       <div class='sk-child sk-circle-1'></div>\r\n                                       <div class='sk-child sk-circle-2'></div>\r\n                                       <div class='sk-child sk-circle-3'></div>\r\n                                       <div class='sk-child sk-circle-4'></div>\r\n                                       <div class='sk-child sk-circle-5'></div>\r\n                                       <div class='sk-child sk-circle-6'></div>\r\n                                       <div class='sk-child sk-circle-7'></div>\r\n                                       <div class='sk-child sk-circle-8'></div>\r\n                                       <div class='sk-child sk-circle-9'></div>\r\n                                       <div class='sk-child sk-circle-10'></div>\r\n                                       <div class='sk-child sk-circle-11'></div>\r\n                                       <div class='sk-child sk-circle-12'></div>\r\n                                   </div>`;\r\n\r\n            //   проверка валидности и оповещение пользователя\r\n            const valuesCheckered = () => {\r\n                let timer;\r\n                if (phone.value === '' && name.value === '') {\r\n                    phone.style.border = '1px solid red';\r\n                    name.style.border = '1px solid red';\r\n                    helpBlock.textContent = '';\r\n                    helpBlock.append(statusMessage);\r\n                    statusMessage.textContent = 'Заполните все поля!';\r\n                    statusMessage.style.cssText = `\r\n                    font-size: 1.5rem;\r\n                    text-align: center;\r\n                    color: red`;\r\n                  //   timer = setTimeout(() => {\r\n                  //       helpBlock.textContent = tempText;\r\n                  //       statusMessage.remove();\r\n                  //   }, 5000);\r\n                } else if (!name.value.match(/[а-я a-z]{2,}/ig)) {\r\n                    name.style.border = '1px solid red';\r\n                    helpBlock.textContent = '';\r\n                    helpBlock.append(statusMessage);\r\n                    statusMessage.textContent = 'Ошибка в поле Ваше имя!';\r\n                    statusMessage.style.cssText = `\r\n                       font-size: 1.5rem;\r\n                       text-align: center;\r\n                       color: red`;\r\n                  //   timer = setTimeout(() => {\r\n                  //       helpBlock.textContent = tempText;\r\n                  //       statusMessage.remove();\r\n                  //   }, 5000);\r\n                } else if (!phone.value.match(/[0-9()-]{9}/)) {\r\n                    phone.style.border = '1px solid red';\r\n                    helpBlock.textContent = '';\r\n                    helpBlock.append(statusMessage);\r\n                    statusMessage.textContent = 'Ошибка в поле номер телефона!';\r\n                    statusMessage.style.cssText = `\r\n                        font-size: 1.5rem;\r\n                        text-align: center;\r\n                        color: red`;\r\n                  //   timer = setTimeout(() => {\r\n                  //       helpBlock.textContent = tempText;\r\n                  //       statusMessage.remove();\r\n                  //    }, 5000);\r\n                  } else {\r\n                     // statusMessage.textContent = '';\r\n                     statusMessage.remove();\r\n                  //   clearTimeout(timer);\r\n                    statusMessage.style.cssText = `\r\n                        font-size: 1.5rem;\r\n                        text-align: center;\r\n                        color: #666666`;\r\n                    return true;\r\n                }\r\n                return false;            \r\n            };\r\n\r\n            // формирование данных для отправки\r\n            if (valuesCheckered()) {\r\n                helpBlock.textContent = '';\r\n                helpBlock.append(statusMessage);\r\n                statusMessage.append(loader);\r\n                \r\n                const formData = new FormData(item);\r\n                const body = {};\r\n\r\n                // Если клиент использовал калькулятор то добавляем значение\r\n                if (localStorage.calc !== undefined)body['calc-total'] = localStorage.calc;\r\n\r\n                formData.forEach((val, key) => body[key] = val);\r\n\r\n                console.log('body: ', body);\r\n                postData(body)\r\n                    .then(response => {\r\n                        if (response.status !== 200) {\r\n                            throw new Error(response.status);\r\n                        }\r\n                        statusMessage.textContent = successMessage;\r\n                    }).catch(error => {\r\n                        statusMessage.textContent = errorMessage;\r\n                        console.error(error);\r\n                    });\r\n\r\n                event.target.querySelectorAll('input').forEach(elem => elem.value = '');\r\n                 setTimeout(() => {\r\n                    statusMessage.remove();\r\n                    helpBlock.innerHTML = tempText;\r\n                  }, 5000);\r\n            }\r\n        });\r\n    });\r\n};\r\n\n\n//# sourceURL=webpack:///./js/sendForm/sendForm.js?");

/***/ }),

/***/ "./js/timer/timer.js":
/*!***************************!*\
  !*** ./js/timer/timer.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"countTimer\": () => (/* binding */ countTimer),\n/* harmony export */   \"addDays\": () => (/* binding */ addDays)\n/* harmony export */ });\nconst countTimer = deadline => {\r\n    const timerDays = document.querySelectorAll('.count_1'),\r\n        timerHours = document.querySelectorAll('.count_2'),\r\n        timerMinutes = document.querySelectorAll('.count_3'),\r\n        timerSeconds = document.querySelectorAll('.count_4');\r\n\r\n    const getTimeRemaning = () => {\r\n        const dateStop = new Date(deadline).getTime(),\r\n            dateNow = new Date().getTime(),\r\n            timeRemaining = (dateStop - dateNow) / 1000,\r\n            seconds = ('0' + Math.floor(timeRemaining % 60)).slice(-2),\r\n            minutes = ('0' + Math.floor((timeRemaining / 60) % 60)).slice(-2),\r\n            hours = ('0' + Math.floor((timeRemaining / 60 / 60) % 24)).slice(-2),\r\n            days = ('0' + Math.floor(timeRemaining / 60 / 60 / 24)).slice(-2);\r\n\r\n        timerDays.forEach(element => {\r\n            element.lastChild.textContent = days;\r\n        });\r\n        timerHours.forEach(element => {\r\n            element.lastChild.textContent = hours;\r\n        });\r\n        timerMinutes.forEach(element => {\r\n            element.lastChild.textContent = minutes;\r\n        });\r\n        timerSeconds.forEach(element => {\r\n            element.lastChild.textContent = seconds;\r\n        });\r\n\r\n        return timeRemaining;\r\n    };\r\n\r\n    const updateClock = () => {\r\n        const timer = getTimeRemaning();\r\n        let interval;\r\n        if (timer > 0) {\r\n            interval = setInterval(getTimeRemaning, 1000);\r\n        } else {\r\n            clearInterval(interval);\r\n\r\n            timerDays.textContent = '00';\r\n            timerHours.textContent = '00';\r\n            timerMinutes.textContent = '00';\r\n            timerSeconds.textContent = '00';\r\n        }\r\n    };\r\n    updateClock();\r\n};\r\n\r\n// get timer + n Days\r\nconst addDays = (date, days) => {\r\n    const result = new Date(date);\r\n    result.setDate(result.getDate() + days);\r\n    return result;\r\n};\r\n\r\n\r\n\n\n//# sourceURL=webpack:///./js/timer/timer.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./js/index.js");
/******/ 	
/******/ })()
;