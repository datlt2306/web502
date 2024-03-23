import { axiosInstance } from "../config/axios";

export const getAllProducts = async () => {
    const { data } = await axiosInstance.get("/products");
    return data;
}
export const getSingleProduct = async (id: number | string) => {
    const { data } = await axiosInstance.get(`/products/${id}`);
    return data;
}