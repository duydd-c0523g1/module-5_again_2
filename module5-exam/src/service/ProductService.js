import axios from 'axios';

export const getAllProducts = async () => {
    let products = await axios.get("http://localhost:8080/products");
    console.log(products);
    return products.data;
}

export const addProducts = async (products) => {
    await axios.post("http://localhost:8080/products", products)
}

export const deleteProducts = async (products) => {
    await axios.delete("http://localhost:8080/products/"+products.id)
}

export const findById = async (id) => {
    const products = await axios.get("http://localhost:8080/products/"+id);
    return products.data;
}

export const updateProducts = async (products, id) => {
    await axios.patch("http://localhost:8080/products/"+ id, products)
}

export const searchName = async (name) => {
    let products = await axios.get("http://localhost:8080/products?name_like="+name);
    return products.data;
}