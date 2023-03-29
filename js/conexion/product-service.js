const listProducts = () => fetch('http://localhost:3000/producto').then((response) => response.json());

const addProducts = (img, name, price) => {
    return fetch('http://localhost:3000/producto', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({name, price, img, id: uuid.v4() })
    });
}

export const productServices = {
    listProducts,
    addProducts,
}