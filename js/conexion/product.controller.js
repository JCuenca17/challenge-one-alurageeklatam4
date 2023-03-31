import { productServices } from "./product-service.js";

const createNewLine = (name, price, img, id) => {
    const line = document.createElement('div');
    const content = `
    <div class="product__row">
        <img class="product__img" src="${img}" alt="producto">
        <div class="product__text">
            <button class="product__text-edit"><a href="./screens/edit-product.html?id=${id}">Edit</a></button>
        </div>
        <div class="product__price">
            <h4 class="product__price-name">${name}</h4>
            <p class="product__price-number">$${price}</p>
        </div>
    </div>`;
    line.innerHTML = content;
    return line;
}

const table = document.querySelector('[data-div]');

productServices.listProducts().then((data) => {
    data.forEach(({ name, price, img, id }) => {
        const newLine = createNewLine(name, price, img, id);
        table.appendChild(newLine);
    })
}).catch((error) => alert('Ocurrió un error'));
