'use strict';


const basketCounterEl = document.querySelector('.headerBasket span');


/**
 * Функция увеличивает счетчик количества товаров рядом с иконкой корзины.
 */
function increaseProductsCount() {
	basketCounterEl.textContent++;
}

/**
 * Эта функция срабатывает когда добавляют новый товар в корзину.
 * @param {number} productId
 */
function addProductIntoBasket(productId) {
	increaseProductsCount();
	//addProductToObject(productId);
	//renderProductInBasket(productId);
	//calculateAndRenderTotalBasketSum();
	console.log(productId);
}