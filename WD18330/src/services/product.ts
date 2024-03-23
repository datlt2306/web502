import { axiosInstance } from "../config/axios";
import { IProduct } from "../interfaces/product";

export const getAllProducts = async () => {
    try {
        const response = await axiosInstance.get(`http://localhost:3000/products`);
        return response.data
    } catch (error) {
        console.log(error);
    }
}
export const getProductById = async (id: number | string) => {
    try {
        const response = await axiosInstance.get(`http://localhost:3000/products/${id}`);
        return response.data
    } catch (error) {
        console.log(error);
    }
}
export const createProduct = async (product: IProduct) => {
    try {
        const response = await axiosInstance.post(`http://localhost:3000/products`, product);
        return response.data
    } catch (error) {
        console.log(error);
    }
}
export const updateProduct = async (product: IProduct) => {
    try {
        const response = await axiosInstance.put(`http://localhost:3000/products/${product.id}`, product);
        return response.data
    } catch (error) {
        console.log(error);
    }
}
export const deleteProduct = async (id: number | string) => {
    try {
        const response = await axiosInstance.delete(`http://localhost:3000/products/${id}`);
        return response.data
    } catch (error) {
        console.log(error);
    }
}