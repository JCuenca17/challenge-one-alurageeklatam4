import { productServices } from "./product-service.js";

const createNewLine = (name, price, img, id) => {
    const line = document.createElement('div');
    const content = `                
    <div class="product__card">
        <div class="product__img">
            <img src="${img}" alt="imagen de referencia">
        </div>
        <div class="product__info">
            <h3>${name}</h3>
            <span>$${price}</span>
            <div class="product__description">
                <a href="#">Conoce Más</a>
            </div>
        </div>
        <div class="product__text">
            <a class="product__text-edit" href="./screens/edit-product.html?id=${id}">Editar</a>
            <button class="product__text-delete" type="button" id='${id}'>Eliminar</button>
        </div>
    </div>`
    line.innerHTML = content;
    const btn = line.querySelector('button');
    btn.addEventListener('click', () => {
        const id = btn.id;
        let option = confirm("Está seguro de eliminar el producto " + name);
        if (option == true) {
            productServices.deleteProduct(id).then((response) => {
                alert("Se ha eliminado el producto");
                window.location.reload();
            }).catch((err) => alert('ERROR'));
        } else {
            alert("No se ha eliminado el producto");
        }
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
