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

/***/ "./src/sass/checkout.scss":
/*!********************************!*\
  !*** ./src/sass/checkout.scss ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n\n//# sourceURL=webpack://internship-2023/./src/sass/checkout.scss?");

/***/ }),

/***/ "./src/sass/nav.scss":
/*!***************************!*\
  !*** ./src/sass/nav.scss ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n\n//# sourceURL=webpack://internship-2023/./src/sass/nav.scss?");

/***/ }),

/***/ "./src/js/api.js":
/*!***********************!*\
  !*** ./src/js/api.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   addProductToCartAPI: () => (/* binding */ addProductToCartAPI),\n/* harmony export */   fetchProducts: () => (/* binding */ fetchProducts),\n/* harmony export */   getCartAPI: () => (/* binding */ getCartAPI),\n/* harmony export */   getProductAfterId: () => (/* binding */ getProductAfterId),\n/* harmony export */   removeProductFromCartAPI: () => (/* binding */ removeProductFromCartAPI),\n/* harmony export */   updateProductQuantityAPI: () => (/* binding */ updateProductQuantityAPI)\n/* harmony export */ });\nasync function fetchProducts(limitNumber = 12, skipNumber = 0) {\r\n    console.log(limitNumber, skipNumber);\r\n    let jsonProducts = await fetch(`https://dummyjson.com/products?limit=${limitNumber}&skip=${skipNumber}`)\r\n        .then(res => res.json());\r\n    return jsonProducts['products'];\r\n}\r\n\r\nasync function getProductAfterId(id) {\r\n    return await fetch('https://dummyjson.com/products/' + id)\r\n        .then(res => res.json());\r\n}\r\n\r\nasync function getCartAPI(cartId = '64c3a47146628') {\r\n    return await fetch(`https://vlad-matei.thrive-dev.bitstoneint.com/wp-json/internship-api/v1/cart/${cartId}`, {method: 'GET'})\r\n        .then(res => res.json());\r\n}\r\n\r\nasync function addProductToCartAPI(product, cartId = '64c3a47146628') {\r\n    return await fetch(`https://vlad-matei.thrive-dev.bitstoneint.com/wp-json/internship-api/v1/cart/${cartId}`, {\r\n        method: 'POST',\r\n        headers: {'Content-Type': 'application/json'},\r\n        body: JSON.stringify({\r\n            products: [product]\r\n        })\r\n    }).then(res => res.json())\r\n}\r\n\r\nasync function removeProductFromCartAPI(productId, cartId = '64c3a47146628') {\r\n    return await fetch(`https://vlad-matei.thrive-dev.bitstoneint.com/wp-json/internship-api/v1/cart/${cartId}?products[]=${productId}`, {\r\n        method: 'DELETE',\r\n        headers: {'Content-Type': 'application/json'},\r\n    }).then(res => res.json())\r\n}\r\n\r\nasync function updateProductQuantityAPI(productId, quantity, cartId = '64c3a47146628') {\r\n    return await fetch(`https://vlad-matei.thrive-dev.bitstoneint.com/wp-json/internship-api/v1/cart/${cartId}`, {\r\n        method: 'PUT',\r\n        headers: {'Content-Type': 'application/json'},\r\n        body: JSON.stringify({\r\n            products: [{\r\n                id: productId,\r\n                quantity: quantity\r\n            }]\r\n        })\r\n    }).then(res => res.json())\r\n}\n\n//# sourceURL=webpack://internship-2023/./src/js/api.js?");

/***/ }),

/***/ "./src/js/app.js":
/*!***********************!*\
  !*** ./src/js/app.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   init: () => (/* binding */ init)\n/* harmony export */ });\n/* harmony import */ var _cart__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./cart */ \"./src/js/cart.js\");\n\r\n\r\nfunction init() {\r\n    document.addEventListener(\"DOMContentLoaded\", function () {\r\n        fetch(\"nav.html\")\r\n            .then(function (response) {\r\n                return response.text();\r\n            })\r\n            .then(function (navContent) {\r\n                document.getElementById(\"nav-placeholder\").outerHTML = navContent;\r\n                (0,_cart__WEBPACK_IMPORTED_MODULE_0__.initCartList)().then(() => {});\r\n            })\r\n            .catch(function (error) {\r\n                console.log(\"Error loading navigation: \", error);\r\n            });\r\n    });\r\n}\r\n\n\n//# sourceURL=webpack://internship-2023/./src/js/app.js?");

/***/ }),

/***/ "./src/js/cart.js":
/*!************************!*\
  !*** ./src/js/cart.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   addAddToCartListeners: () => (/* binding */ addAddToCartListeners),\n/* harmony export */   initCartList: () => (/* binding */ initCartList)\n/* harmony export */ });\n/* harmony import */ var _api__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./api */ \"./src/js/api.js\");\n\r\n\r\nlet cartListClicked = false;\r\nlet cartListTimeout = null;\r\n\r\nasync function initCartList() {\r\n    console.log('initCartList');\r\n\r\n    document.querySelector('.nav-bar-menu-right ul li:last-child').addEventListener('mouseover', () => {\r\n        document.querySelector('.cart-list').classList.add('show');\r\n        clearTimeout(cartListTimeout);\r\n    });\r\n\r\n    document.querySelector('.nav-bar-menu-right ul li:last-child').addEventListener('mouseout', () => {\r\n        if (cartListClicked) {\r\n            return;\r\n        }\r\n        cartListTimeout = setTimeout(() => {\r\n            document.querySelector('.cart-list').classList.remove('show');\r\n        }, 1000);\r\n    });\r\n\r\n    document.querySelector('.nav-bar-menu-right ul li:last-child').addEventListener('click', () => {\r\n        cartListClicked = true;\r\n        document.querySelector('.cart-list').classList.add('show');\r\n    });\r\n\r\n    document.querySelector('.cart-list-header-close').addEventListener('click', () => {\r\n        cartListClicked = false;\r\n        document.querySelector('.cart-list').classList.remove('show');\r\n    });\r\n\r\n    document.querySelector('.cart-list').addEventListener('mouseover', () => {\r\n        document.querySelector('.cart-list').classList.add('show');\r\n        clearTimeout(cartListTimeout);\r\n    });\r\n\r\n    document.querySelector('.cart-list').addEventListener('mouseout', () => {\r\n        if (cartListClicked) {\r\n            return;\r\n        }\r\n        cartListTimeout = setTimeout(() => {\r\n            document.querySelector('.cart-list').classList.remove('show');\r\n        }, 1000);\r\n    });\r\n\r\n    document.querySelector('.cart-list-footer-checkout').addEventListener('click', () => {\r\n        window.location.href = 'checkout.html';\r\n    });\r\n\r\n    console.log('initCartList - finish');\r\n\r\n    let cart = await (0,_api__WEBPACK_IMPORTED_MODULE_0__.getCartAPI)();\r\n    document.querySelector('.quantity-cart').innerHTML = cart.totalQuantity;\r\n    document.querySelector('.cart-list-footer-total').innerHTML = 'Total: $' + cart.total;\r\n    if (cart.totalQuantity !== 0) {\r\n        document.querySelector('.quantity-cart').classList.remove('quantity-empty');\r\n        for (let i = 0; i < cart.products.length; i++) {\r\n            let product = cart.products[i];\r\n            document.querySelector('.cart-list-body').insertAdjacentHTML('beforeend', createNewProductCartHTML(product));\r\n            let addedProduct = document.querySelector(`.cart-list-body-item:last-child`);\r\n            addedProduct.querySelector('.cart-list-body-item-quantity-value').innerHTML = product.quantity;\r\n            addedProduct.querySelector('.cart-list-body-item-total').innerHTML = '$' + String(product.price * product.quantity);\r\n            attachEventHandlersToProduct(addedProduct, product);\r\n        }\r\n    }\r\n}\r\n\r\nfunction createNewProductCartHTML(product) {\r\n    return `\r\n    <div class=\"cart-list-body-item\" data-id=\"${product.id}\">\r\n        <div class=\"cart-list-body-item-image\">\r\n            <img src=\"${product.thumbnail}\" alt=\"${product.title}\">\r\n        </div>\r\n        <div class=\"cart-list-body-item-info\">\r\n            <div class=\"cart-list-body-item-info-title\">${product.title}</div>\r\n            <div class=\"cart-list-body-item-info-price\">$${product.price}</div>\r\n        </div>\r\n        <div class=\"cart-list-body-item-quantity\">\r\n            <div class=\"cart-list-body-item-quantity-decrease\">-</div>\r\n            <div class=\"cart-list-body-item-quantity-value\">1</div>\r\n            <div class=\"cart-list-body-item-quantity-increase\">+</div>\r\n        </div>\r\n        <div class=\"cart-list-body-item-total\">$${product.price}</div>\r\n        <div class=\"cart-list-body-item-remove\"><span class=\"material-symbols-outlined\">close</span></div>\r\n    </div>\r\n    `;\r\n}\r\n\r\nfunction showNotification() {\r\n    let notification = document.querySelector('.notification');\r\n    notification.classList.add('show');\r\n    setTimeout(() => {\r\n        notification.classList.remove('show');\r\n    }, 3000);\r\n}\r\n\r\nfunction modifyAddToCartButton(btn) {\r\n    btn.innerHTML = 'Added to cart';\r\n    btn.classList.add('added-to-cart');\r\n    btn.disabled = true;\r\n    setTimeout(() => {\r\n        btn.innerHTML = 'Add to cart';\r\n        btn.classList.remove('added-to-cart');\r\n        btn.disabled = false;\r\n    }, 3000);\r\n}\r\n\r\nasync function addToCart(btn, productId) {\r\n    showNotification();\r\n    modifyAddToCartButton(btn);\r\n    await updateCart(productId);\r\n}\r\n\r\nfunction addAddToCartListeners() {\r\n    document.querySelectorAll('.add-to-cart-button').forEach((button) => {\r\n        button.addEventListener('click', async () => {\r\n            await addToCart(button, button.attributes[1].value);\r\n        });\r\n    });\r\n}\r\n\r\nfunction updateQuantityInCart(quantityToAdd) {\r\n    if (document.querySelector('.quantity-cart').innerHTML === '0') {\r\n        document.querySelector('.quantity-cart').classList.remove('quantity-empty');\r\n    }\r\n    document.querySelector('.quantity-cart').innerHTML = Number(document.querySelector('.quantity-cart').innerHTML) + quantityToAdd;\r\n    if (document.querySelector('.quantity-cart').innerHTML === '0') {\r\n        document.querySelector('.quantity-cart').classList.add('quantity-empty');\r\n    }\r\n}\r\n\r\nfunction updateProductQuantity(addedProduct, productInfo, quantityToAdd) {\r\n    (0,_api__WEBPACK_IMPORTED_MODULE_0__.updateProductQuantityAPI)(productInfo.id, quantityToAdd);\r\n    let quantity = Number(addedProduct.querySelector('.cart-list-body-item-quantity-value').innerHTML) + quantityToAdd;\r\n    addedProduct.querySelector('.cart-list-body-item-quantity-value').innerHTML = quantity;\r\n    addedProduct.querySelector('.cart-list-body-item-total').innerHTML = '$' + (productInfo.price * quantity);\r\n    updateQuantityInCart(quantityToAdd);\r\n    document.querySelector('.cart-list-footer-total').innerHTML = 'Total: $' + String(Number(document.querySelector('.cart-list-footer-total').innerHTML.split('$')[1]) + (productInfo.price * quantityToAdd));\r\n}\r\n\r\n\r\nasync function decreaseProductQuantity(addedProduct, productInfo) {\r\n    if (addedProduct.querySelector('.cart-list-body-item-quantity-value').innerHTML === '1') {\r\n        await removeProductFromCart(addedProduct, productInfo);\r\n        return;\r\n    }\r\n    updateProductQuantity(addedProduct, productInfo, -1);\r\n}\r\n\r\nfunction increaseProductQuantity(addedProduct, productInfo) {\r\n    updateProductQuantity(addedProduct, productInfo, 1);\r\n}\r\n\r\nasync function removeProductFromCart(addedProduct, productInfo) {\r\n    document.querySelector('.cart-list-body').removeChild(addedProduct);\r\n    (0,_api__WEBPACK_IMPORTED_MODULE_0__.removeProductFromCartAPI)(productInfo.id);\r\n    document.querySelector('.cart-list-footer-total').innerHTML = 'Total: $' + String(Number(document.querySelector('.cart-list-footer-total').innerHTML.replace('Total: $', '')) - productInfo.price * Number(addedProduct.querySelector('.cart-list-body-item-quantity-value').innerHTML));\r\n    updateQuantityInCart(addedProduct.querySelector('.cart-list-body-item-quantity-value').innerHTML * -1);\r\n}\r\n\r\nfunction attachEventHandlersToProduct(addedProduct, product) {\r\n    addedProduct.querySelector('.cart-list-body-item-quantity-decrease').addEventListener('click', () => decreaseProductQuantity(addedProduct, product));\r\n    addedProduct.querySelector('.cart-list-body-item-quantity-increase').addEventListener('click', () => increaseProductQuantity(addedProduct, product));\r\n    addedProduct.querySelector('.cart-list-body-item-remove').addEventListener('click', () => removeProductFromCart(addedProduct, product));\r\n}\r\n\r\nasync function updateCart(productId) {\r\n    let product = await (0,_api__WEBPACK_IMPORTED_MODULE_0__.getProductAfterId)(productId);\r\n    let cartProducts = document.querySelectorAll('.cart-list-body-item');\r\n    let productsExists = false;\r\n    let cart = null;\r\n    for (let cartIndex = 0; cartIndex < cartProducts.length; cartIndex++) {\r\n        if (cartProducts[cartIndex].getAttribute('data-id') === String(productId)) {\r\n            let newQuantity = Number(cartProducts[cartIndex].querySelector('.cart-list-body-item-quantity-value').innerHTML) + 1;\r\n            cart = (0,_api__WEBPACK_IMPORTED_MODULE_0__.updateProductQuantityAPI)(product.id, 1);\r\n            cartProducts[cartIndex].querySelector('.cart-list-body-item-quantity-value').innerHTML = String(newQuantity);\r\n            productsExists = true;\r\n            break;\r\n        }\r\n    }\r\n\r\n    if (!productsExists) {\r\n        document.querySelector('.cart-list-body').insertAdjacentHTML('beforeend', createNewProductCartHTML(product));\r\n        product.quantity = 1;\r\n        const addedProduct = document.querySelector('.cart-list-body-item:last-child');\r\n        attachEventHandlersToProduct(addedProduct, product);\r\n        cart = (0,_api__WEBPACK_IMPORTED_MODULE_0__.addProductToCartAPI)(product);\r\n    }\r\n    document.querySelector('.cart-list-footer-total').innerHTML = 'Total: $' + (Number(document.querySelector('.cart-list-footer-total').innerHTML.replace('Total: $', '')) + product.price);\r\n    updateQuantityInCart(1);\r\n}\r\n\n\n//# sourceURL=webpack://internship-2023/./src/js/cart.js?");

/***/ }),

/***/ "./src/js/checkout.js":
/*!****************************!*\
  !*** ./src/js/checkout.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _sass_checkout_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../sass/checkout.scss */ \"./src/sass/checkout.scss\");\n/* harmony import */ var _sass_nav_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../sass/nav.scss */ \"./src/sass/nav.scss\");\n/* harmony import */ var _app__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app */ \"./src/js/app.js\");\n\r\n\r\n\r\n\r\n(0,_app__WEBPACK_IMPORTED_MODULE_2__.init)();\r\n\n\n//# sourceURL=webpack://internship-2023/./src/js/checkout.js?");

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
/******/ 	var __webpack_exports__ = __webpack_require__("./src/js/checkout.js");
/******/ 	
/******/ })()
;