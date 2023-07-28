import {getProductAfterId} from "./api";

let cartListClicked = false;
let cartListTimeout = null;

export function initCartList() {
    document.querySelector('.nav-bar-menu-right ul li:last-child').onmouseover = () => {
        document.querySelector('.cart-list').classList.add('show');
        clearTimeout(cartListTimeout);
    }

    document.querySelector('.nav-bar-menu-right ul li:last-child').onmouseout = () => {
        if (cartListClicked) {
            return;
        }
        cartListTimeout = setTimeout(() => {
            document.querySelector('.cart-list').classList.remove('show');
        }, 1000);
    }

    document.querySelector('.nav-bar-menu-right ul li:last-child').onclick = () => {
        cartListClicked = true;
        document.querySelector('.cart-list').classList.add('show');
    }

    document.querySelector('.cart-list-header-close').onclick = () => {
        cartListClicked = false;
        document.querySelector('.cart-list').classList.remove('show');
    }

    document.querySelector('.cart-list').onmouseover = () => {
        document.querySelector('.cart-list').classList.add('show');
        clearTimeout(cartListTimeout);
    }

    document.querySelector('.cart-list').onmouseout = () => {
        if (cartListClicked) {
            return;
        }
        cartListTimeout = setTimeout(() => {
            document.querySelector('.cart-list').classList.remove('show');
        }, 1000);
    }
}

function showNotification() {
    let notification = document.querySelector('.notification');
    notification.classList.add('show');
    setTimeout(() => {
        notification.classList.remove('show');
    }, 3000);
}

function modifyAddToCartButton(btn) {
    btn.innerHTML = 'Added to cart';
    btn.classList.add('added-to-cart');
    btn.disabled = true;
    setTimeout(() => {
        btn.innerHTML = 'Add to cart';
        btn.classList.remove('added-to-cart');
        btn.disabled = false;
    }, 3000);
}

async function addToCart(btn, productId) {
    showNotification();
    modifyAddToCartButton(btn);
    await updateCart(productId);
}

export function addAddToCartListeners() {
    document.querySelectorAll('.add-to-cart-button').forEach((button) => {
        button.addEventListener('click', async () => {
            await addToCart(button, button.attributes[1].value);
        });
    });
}

function newProductCartHTML(product) {
    return `
    <div class="cart-list-body-item" data-id="${product.id}">
        <div class="cart-list-body-item-image">
            <img src="${product.thumbnail}" alt="${product.title}">
        </div>
        <div class="cart-list-body-item-info">
            <div class="cart-list-body-item-info-title">${product.title}</div>
            <div class="cart-list-body-item-info-price">$${product.price}</div>
        </div>
        <div class="cart-list-body-item-quantity">
            <div class="cart-list-body-item-quantity-decrease">-</div>
            <div class="cart-list-body-item-quantity-value">1</div>
            <div class="cart-list-body-item-quantity-increase">+</div>
        </div>
        <div class="cart-list-body-item-total">$${product.price}</div>
        <div class="cart-list-body-item-remove"><span class="material-symbols-outlined">close</span></div>
    </div>
    `;
}

function decreaseProductQuantity(addedProduct, productInfo) {
    if (addedProduct.querySelector('.cart-list-body-item-quantity-value').innerHTML === '1') {
        removeProductFromCart(addedProduct, productInfo);
        return;
    }
    addedProduct.querySelector('.cart-list-body-item-quantity-value').innerHTML = String(Number(addedProduct.querySelector('.cart-list-body-item-quantity-value').innerHTML) - 1);
    document.querySelector('.cart-list-footer-total').innerHTML = 'Total: ' + String(Number(document.querySelector('.cart-list-footer-total').innerHTML.replace('Total: ', '')) - productInfo.price);
}

function increaseProductQuantity(addedProduct, productInfo) {
    addedProduct.querySelector('.cart-list-body-item-quantity-value').innerHTML = String(Number(addedProduct.querySelector('.cart-list-body-item-quantity-value').innerHTML) + 1);
    document.querySelector('.cart-list-footer-total').innerHTML = 'Total: ' + String(Number(document.querySelector('.cart-list-footer-total').innerHTML.replace('Total: ', '')) + productInfo.price);
}

function removeProductFromCart(addedProduct, productInfo) {
    document.querySelector('.cart-list-body').removeChild(addedProduct);
    document.querySelector('.cart-list-footer-total').innerHTML = 'Total: ' + String(Number(document.querySelector('.cart-list-footer-total').innerHTML.replace('Total: ', '')) - productInfo.price * Number(addedProduct.querySelector('.cart-list-body-item-quantity-value').innerHTML));
    if (document.querySelector('.quantity-cart').innerHTML === '1') {
        document.querySelector('.quantity-cart').classList.add('quantity-empty');
        document.querySelector('.quantity-cart').innerHTML = '';
        return;
    }
    document.querySelector('.quantity-cart').innerHTML = String(Number(document.querySelector('.quantity-cart').innerHTML) - 1);
}

function attachEventHandlersToProduct(addedProduct, product) {
    addedProduct.querySelector('.cart-list-body-item-quantity-decrease').addEventListener('click', () => decreaseProductQuantity(addedProduct, product));
    addedProduct.querySelector('.cart-list-body-item-quantity-increase').addEventListener('click', () => increaseProductQuantity(addedProduct, product));
    addedProduct.querySelector('.cart-list-body-item-remove').addEventListener('click', () => removeProductFromCart(addedProduct, product));
}

async function updateCart(productId) {
    let product = await getProductAfterId(productId);
    let cartProducts = document.querySelectorAll('.cart-list-body-item');
    let productsExists = false;
    for (let cartIndex = 0; cartIndex < cartProducts.length; cartIndex++) {
        if (cartProducts[cartIndex].getAttribute('data-id') === String(productId)) {
            cartProducts[cartIndex].querySelector('.cart-list-body-item-quantity-value').innerHTML = String(Number(cartProducts[cartIndex].querySelector('.cart-list-body-item-quantity-value').innerHTML) + 1);
            productsExists = true;
            break;
        }
    }

    if (!productsExists) {
        document.querySelector('.cart-list-body').insertAdjacentHTML('beforeend', newProductCartHTML(product));
        const addedProduct = document.querySelector('.cart-list-body-item:last-child');
        attachEventHandlersToProduct(addedProduct, product);
    }
    document.querySelector('.cart-list-footer-total').innerHTML = 'Total: ' + String(Number(document.querySelector('.cart-list-footer-total').innerHTML.replace('Total: ', '')) + product.price);
    if (document.getElementsByClassName('quantity-cart quantity-empty').length !== 0) {
        document.querySelector('.quantity-cart').classList.remove('quantity-empty');
        document.querySelector('.quantity-cart').innerHTML = '1';
        return;
    }
    document.querySelector('.quantity-cart').innerHTML = String(Number(document.querySelector('.quantity-cart').innerHTML) + 1);
}