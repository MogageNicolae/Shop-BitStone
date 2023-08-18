import '../sass/styles.scss';
import '../sass/nav.scss';
import {init} from "./app";
import {addListeners, createCssClass, createNewProductGrid, initProducts} from "./index-products-grid";
import {fetchProductsByCategory} from "./api";

let addedFilters = new Set();
let currentPage = 1;
let productsPerPage = 12;
init();
initFilters();
await initProducts();

function initFilters() {
    const filters = document.querySelectorAll('.filters-category-item-checkbox');
    filters.forEach(filter => {
        filter.addEventListener('click', () => {
            filter.classList.toggle('filters-active');
            if (addedFilters.has(filter.children[0].innerHTML)) {
                addedFilters.delete(filter.children[0].innerHTML);
            } else {
                addedFilters.add(filter.children[0].innerHTML);
            }
            applyFiltersToProducts().then();
        });
    });
}

async function applyFiltersToProducts() {
    if (addedFilters.size === 0) {
        document.querySelector('.products-grid').innerHTML = '';
        await initProducts();
        return;
    }

    let loadedProducts = [];
    for (const filter of addedFilters) {
        if (localStorage.getItem(filter) === null) {
            const filteredProducts = await fetchProductsByCategory(filter);
            localStorage.setItem(filter, JSON.stringify(filteredProducts));
        }
        loadedProducts.push(...JSON.parse(localStorage.getItem(filter)));
    }
    document.querySelector('.products-grid').innerHTML = '';

    document.querySelector('#no-of-products').innerHTML = 'Products: ' + loadedProducts.length;
    let areMoreProducts = true;
    for (let index = (currentPage - 1) * productsPerPage; index < currentPage * productsPerPage; index++) {
        if (index >= loadedProducts.length) {
            document.querySelector('.load-more-button').classList.add('hidden');
            areMoreProducts = false;
            break;
        }
        document.querySelector('.products-grid').insertAdjacentHTML('beforeend', createNewProductGrid(loadedProducts[index]));
        createCssClass('id' + loadedProducts[index].id, loadedProducts[index].images[0]);
    }

    if (areMoreProducts) {
        currentPage++;
        document.querySelector('.load-more-button').classList.remove('hidden');
    }

    addListeners();
}