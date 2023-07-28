export async function fetchProducts() {
    let jsonProducts = await fetch('https://dummyjson.com/products')
        .then(res => res.json());
    return jsonProducts['products'];
}

export async function getProductAfterId(id) {
    return await fetch('https://dummyjson.com/products/' + id)
        .then(res => res.json());
}
