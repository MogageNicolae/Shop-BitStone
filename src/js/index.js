import '../sass/styles.scss';
import '../sass/nav.scss';
import {init} from "./app";
import {initProducts} from "./index-products-grid";

init();
await initProducts();
