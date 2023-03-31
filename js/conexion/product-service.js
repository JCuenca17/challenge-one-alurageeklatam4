const listProducts = () => fetch('https://jcuenca17.github.io/challenge-one-alurageeklatam4/db.json').then((response) => response.json());

const addProducts = (img, name, price) => {
    return fetch('https://jcuenca17.github.io/challenge-one-alurageeklatam4/db.json', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ name, price, img, id: uuid.v4() })
    });
}

const detailProduct = (id) => {
    return fetch(`https://jcuenca17.github.io/challenge-one-alurageeklatam4/db.json/${id}`).then((response) => response.json());
}

const updateProduct = (name, price, img, id) => {
    return fetch(`https://jcuenca17.github.io/challenge-one-alurageeklatam4/db.json/${id}`, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ name, price, img }),
    }).then((response) => response).catch((err) => console.log(err));
}

const deleteProduct = (id) => {
    return fetch(`https://jcuenca17.github.io/challenge-one-alurageeklatam4/db.json/${id}`, {
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