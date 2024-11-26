import { api } from "../utils/api";

export const GET_ALL_PRODUCTS = async () =>{
    const response = await api.get("products");
    return response.data;
}
export const GET_ALL_PRODUCT_BY_ID = async (id) =>{
    const response = await api.get(`products/${id}`);
    return response.data;
}