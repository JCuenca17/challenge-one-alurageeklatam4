import { productServices } from "./product-service.js";

const form = document.querySelector('[data-form]');

form.addEventListener('submit', (event) => {
    event.preventDefault();
    const name = document.querySelector('[data-name]').value;
    const price = document.querySelector('[data-price]').value;
    const img = document.querySelector('[data-img]').value;
    const description = document.querySelector('[data-description]').value;
    productServices.addProducts(img, name, price, description).then(() => {
        window.location.href = '../index.html';
        alert('Se ha agregado el producto ' + name);
    }).catch((err) => console.log(err));
})