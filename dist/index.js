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

/***/ "./src/sass/styles.scss":
/*!******************************!*\
  !*** ./src/sass/styles.scss ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n\n//# sourceURL=webpack://internship-2023/./src/sass/styles.scss?");

/***/ }),

/***/ "./src/js/app.js":
/*!***********************!*\
  !*** ./src/js/app.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   init: () => (/* binding */ init)\n/* harmony export */ });\nfunction init() {\r\n}\r\n\n\n//# sourceURL=webpack://internship-2023/./src/js/app.js?");

/***/ }),

/***/ "./src/js/index.js":
/*!*************************!*\
  !*** ./src/js/index.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _sass_styles_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../sass/styles.scss */ \"./src/sass/styles.scss\");\n/* harmony import */ var _app__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app */ \"./src/js/app.js\");\n/* harmony import */ var _products__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./products */ \"./src/js/products.js\");\n\r\n\r\n\r\n\r\n(0,_app__WEBPACK_IMPORTED_MODULE_1__.init)();\r\n(0,_products__WEBPACK_IMPORTED_MODULE_2__.loadProducts)();\r\n\n\n//# sourceURL=webpack://internship-2023/./src/js/index.js?");

/***/ }),

/***/ "./src/js/products.js":
/*!****************************!*\
  !*** ./src/js/products.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   loadProducts: () => (/* binding */ loadProducts)\n/* harmony export */ });\nasync function fetchProducts() {\r\n    let jsonProducts = await fetch('https://dummyjson.com/products')\r\n        .then(res => res.json());\r\n    return jsonProducts['products'];\r\n}\r\n\r\nfunction createCssClass(className, urlSimple) {\r\n    let style = document.createElement('style');\r\n    style.textContent = 'style';\r\n    style.innerHTML = `\r\n    .product .${className} {\r\n        background-image: url(${urlSimple});\r\n        background-size: cover;\r\n        margin: 0;\r\n        padding: 0;\r\n    }\r\n    `;\r\n    document.getElementsByTagName('head')[0].appendChild(style);\r\n}\r\n\r\nfunction showNotification() {\r\n    let notification = document.querySelector('.notification');\r\n    notification.classList.add('show');\r\n    setTimeout(() => {\r\n        notification.classList.remove('show');\r\n    }, 5000);\r\n}\r\n\r\nfunction addToCart() {\r\n    showNotification();\r\n}\r\n\r\nfunction addAddToCartListeners() {\r\n    document.querySelectorAll('.add-to-cart-button').forEach((button) => {\r\n        button.addEventListener('click', addToCart);\r\n    });\r\n}\r\n\r\nasync function loadProducts() {\r\n    let products = await fetchProducts();\r\n\r\n    products.forEach((product) => {\r\n        let productHTML = `\r\n        <div class=\"product\">\r\n            <div class=\"product-image id${product.id}\">\r\n                <img src=\"${product.images[product.images.length - 1]}\" alt=\"${product.title}\">` + (product.discountPercentage > 7 ? `<div>-${product.discountPercentage}%</div>` : '') +\r\n            `</div>\r\n            <div class=\"product-info\">\r\n                <div class=\"product-info-left\">\r\n                    <div class=\"product-info-name\">${product.title}</div>\r\n                    <div class=\"product-info-price\">$ ${product.price}</div>\r\n                </div>\r\n                <div class=\"product-info-right\">\r\n                    <button class=\"button add-to-cart-button\">Add to cart</button>\r\n                </div>\r\n            </div>\r\n        </div>\r\n        `;\r\n        document.querySelector('.products-grid').insertAdjacentHTML('beforeend', productHTML);\r\n        createCssClass('id' + product.id, product.images[0]);\r\n    });\r\n\r\n    addAddToCartListeners();\r\n}\n\n//# sourceURL=webpack://internship-2023/./src/js/products.js?");

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
/******/ 	var __webpack_exports__ = __webpack_require__("./src/js/index.js");
/******/ 	
/******/ })()
;