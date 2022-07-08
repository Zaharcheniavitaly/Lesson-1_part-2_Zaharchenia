'use.strict';

let productsData = [];
let productCards = document.querySelectorAll('.catalog__card');

productCards.forEach(productCard => {
	let name = productCard.querySelector('.catalog__card-title').innerText;
	let desc = productCard.querySelector('.catalog__card-text').innerText;
	let price = +productCard.querySelector('.catalog__card-price-value').innerText;

	productsData.push({
		name,
		desc,
		price
	});
});

//console.log(productsData);

/**
 * Функция назначает обработку клика на все кнопки "Add to cart".
 */
function addEventListenersForAddToCartButtons() {
	const addToCartBtns = document.querySelectorAll('button[data-productId]');
	addToCartBtns.forEach(function (button) {
		button.addEventListener('click', addedProductHandler);
	})
}


/**
 * Функция-обработчик события клика по кнопке "Add to cart".
 * @param {MouseEvent} event
 */
function addedProductHandler(event) {
	const productId = event.currentTarget.getAttribute('data-productId');
	addProductIntoBasket(productId);
	console.log(productId);
}

//insertProductsIntoPage(products, featuredItemsEl);
addEventListenersForAddToCartButtons();

