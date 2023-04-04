import { productServices } from "./product-service.js";

const form = document.querySelector('[data-form]');

const getInfo = async () => {
    const url = new URL(window.location);
    const id = url.searchParams.get('id');

    if (id == null)
        window.location.href = '../index.html';

    const name = document.querySelector('[data-name]');
    const price = document.querySelector('[data-price]');
    const img = document.querySelector('[data-img]');
    const description = document.querySelector('[data-description]');

    try {
        const product = await productServices.detailProduct(id);
        if (product.name && product.price && product.img && product.description) {
            name.value = product.name;
            price.value = product.price;
            img.value = product.img;
            description.value = product.description;
        } else {
            throw new Error();
        }
    } catch (error) {
        window.location.href = '../index.html';
    }
}
getInfo();

form.addEventListener('submit', (event) => {
    event.preventDefault();
    const url = new URL(window.location);
    const id = url.searchParams.get('id');
    const name = document.querySelector('[data-name]').value;
    const price = document.querySelector('[data-price]').value;
    const img = document.querySelector('[data-img]').value;
    const description = document.querySelector('[data-description]').value;
    productServices.updateProduct(name, price, img, description, id).then(() => {
        window.location.href = '../index.html';
        alert('Se ha editado el producto ' + name);
    })
})
