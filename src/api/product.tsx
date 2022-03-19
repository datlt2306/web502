import { IProduct } from "../types/product";
import instance from "./instance";

export const list = () => {
    const url = "/products";
    return instance.get(url);
}
export const remove = (id: number) => {
    const url = `/products/${id}`;
    return instance.delete(url);
}
export const read = (id: string | undefined) => {
    const url = `/products/${id}`;
    return instance.get(url);
}
export const add = (product: IProduct) => {
    const url = "/products";
    return instance.post(url, product);
}