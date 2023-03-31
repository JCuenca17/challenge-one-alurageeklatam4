import { productServices } from "./product-service.js";

const createNewLine = (name, price, img, id) => {
    const line = document.createElement('div');
    const content = `
    <div class="product__row">
        <img class="product__img" src="${img}" alt="producto">
        <div class="product__text">
            <a class="product__text-edit" href="./screens/edit-product.html?id=${id}">Editar</a>
            <button class="product__text-delete" type="button" id='${id}'>Eliminar</button>
        </div>
        <div class="product__price">
            <h4 class="product__price-name">${name}</h4>
            <p class="product__price-number">$${price}</p>
        </div>
    </div>`;
    line.innerHTML = content;
    const btn = line.querySelector('button');
    btn.addEventListener('click', () => {
        const id = btn.id;
        productServices.deleteProduct(id).then((response) => { }).catch((err) => alert('ERROR'));
    });
    return line;
}

const table = document.querySelector('[data-div]');

productServices.listProducts().then((data) => {
    data.forEach(({ name, price, img, id }) => {
        const newLine = createNewLine(name, price, img, id);
        table.appendChild(newLine);
    })
}).catch((error) => alert('Ocurrió un error'));
