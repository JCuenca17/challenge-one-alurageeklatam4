const listProducts = () => fetch('https://db-json-x3qj.onrender.com/producto').then((response) => response.json());

const addProducts = (img, name, price) => {
    return fetch('https://db-json-x3qj.onrender.com/producto', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ name, price, img, id: uuid.v4() })
    });
}

const detailProduct = (id) => {
    return fetch(`https://db-json-x3qj.onrender.com/producto/${id}`).then((response) => response.json());
}

const updateProduct = (name, price, img, id) => {
    return fetch(`https://db-json-x3qj.onrender.com/producto/${id}`, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ name, price, img }),
    }).then((response) => response).catch((err) => console.log(err));
}

const deleteProduct = (id) => {
    return fetch(`https://db-json-x3qj.onrender.com/producto/${id}`, {
        method: 'DELETE',
    });
}

export const productServices = {
    listProducts,
    addProducts,
    detailProduct,
    updateProduct,
    deleteProduct,
}