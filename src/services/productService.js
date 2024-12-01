import { api } from "../utils/api";

export const GET_ALL_PRODUCTS = async () =>{
    const response = await api.get("products");
    return response.data;
}
export const GET_ALL_PRODUCT_BY_ID = async (id) =>{
    const response = await api.get(`products/${id}`);
    return response.data;
}
export const DELETE_PRODUCT_BY_ID = async (id) =>{
    const response = await api.delete(`products/${id}`);
    return response.data;

}
export const CREATE_PRODUCT = async (product) =>{
    const response = await api.post("products", product);
    return response.data;
}