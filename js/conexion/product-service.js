const listProducts = () => fetch('http://localhost:3000/producto').then((response) => response.json());

export const productServices = {
    listProducts,
}