'use strict';

// при клике на бургер, всплавает меню. При клике на крестик -- закрывается

const buttonBurger = document.querySelector('.header__button-burger');
const burgerMenu = document.querySelector('.header__nav');
const menuClose = document.querySelector('.header__nav-close');

buttonBurger.addEventListener('click', () => {
	burgerMenu.classList.add('header__button-burger-active')
});

menuClose.addEventListener('click', () => {
	burgerMenu.classList.remove('header__button-burger-active')
});