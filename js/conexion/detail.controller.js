import { productServices } from "./product-service.js";

const showInfo = async () => {
    const url = new URL(window.location);
    const id = url.searchParams.get('id');
    
    const product = await productServices.detailProduct(id)

    const line = document.querySelector('[data-div]');
    const content = `
    <div class="detail__box">
        <div class="detail__img">
            <div class="detail__img-holder">
                <img src="${product.img}" alt="">
            </div>
        </div>
        <div class="detail__info">
            <h1>${product.name}</h1>
            <span>$${product.price}</span>
        </div>
        <div class="detail__description">
            <p>${product.description}</p>
        </div>
    </div>`;
    line.innerHTML = content;
    return line;
}

showInfo();