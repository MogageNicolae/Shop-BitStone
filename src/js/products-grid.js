import {fetchProducts, getProductAfterId} from './api.js';
import {addAddToCartListeners} from "./cart";

function createCssClass(className, urlSimple) {
    let style = document.createElement('style');
    style.textContent = 'style';
    style.innerHTML = `
    .product .${className} {
        background-image: url(${urlSimple});
        background-size: cover;
        margin: 0;
        padding: 0;
    }
    `;
    document.getElementsByTagName('head')[0].appendChild(style);
}

function goToProductPage() {
    document.querySelectorAll('.product-image').forEach((product) => {
        product.addEventListener('click', () => window.location.href = 'product-page.html?id=' + product.attributes[1].value);
    });
}

function addListeners() {
    addAddToCartListeners();
    goToProductPage();
}

export async function loadProducts() {
    let products = await fetchProducts();

    document.querySelector('#no-of-products').innerHTML = 'Products: ' + products.length;
    products.forEach((product) => {
        let productHTML = `
        <div class="product">
            <div class="product-image id${product.id}" data-id="${product.id}">
                <img src="${product.images[product.images.length - 1]}" alt="${product.title}">` + (product.discountPercentage > 7 ? `<div>-${product.discountPercentage}%</div>` : '') +
            `</div>
            <div class="product-info">
                <div class="product-info-left">
                    <div class="product-info-name">${product.title}</div>
                    <div class="product-info-price">$ ${product.price}</div>
                </div>
                <div class="product-info-right">
                    <button class="button add-to-cart-button" data-id="${product.id}">Add to cart</button>
                </div>
            </div>
        </div>
        `;
        document.querySelector('.products-grid').insertAdjacentHTML('beforeend', productHTML);
        createCssClass('id' + product.id, product.images[0]);
    });

    addListeners();
}