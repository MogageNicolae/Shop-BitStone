import '../sass/styles.scss';
import '../sass/nav.scss';
import {init} from "./app";
import {loadProducts} from "./products-grid";
import {initCartList} from "./cart";

init();
await loadProducts();
initCartList();
