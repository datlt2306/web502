import { axiosInstance } from "../config/axios";

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