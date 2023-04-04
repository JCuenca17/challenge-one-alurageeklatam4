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
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab itaque nemo unde odio, fuga
                voluptas accusantium id vitae quae culpa assumenda enim eveniet maiores nisi cum at quasi
                voluptate facilis molestiae amet! Maiores consequatur ut architecto debitis explicabo dicta
                dolores ullam provident sunt at ipsam nobis, itaque soluta magni beatae!</p>
        </div>
    </div>`;
    line.innerHTML = content;
    return line;
}

showInfo();