import { productServices } from "./product-service.js";

const createNewLine = (id, name, price, img) => {
    const line = document.createElement('div');
    const content = `
    <div class="product__row">
        <img class="product__img" src="${img}" alt="producto">
        <div class="product__text">
            <button class="product__text-edit"><a href="#">Edit</a></button>
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
    data.forEach(({id, name, price, img}) => {
        const newLine = createNewLine(id,name,price,img);
        table.appendChild(newLine);
    })
}).catch((error) => alert('Ocurrió un error'));
