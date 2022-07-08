'use.strict';

let productsData = [];
let productCards = document.querySelectorAll('.catalog__card');

productCards.forEach(productCard => {
	let name = productCard.querySelector('.catalog__card-title').innerText;
	let desc = productCard.querySelector('.catalog__card-text').innerText;
	let price = +productCard.querySelector('.catalog__card-price-value').innerText;

});


