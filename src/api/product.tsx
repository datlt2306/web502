import { ProductType } from "../pages/types/product";
import { isAuthenticate } from "../utils/localstorage";
import instance from "./instance";

const { token, user} = isAuthenticate();

export const list = () => {
    const url = `/products`;
    return instance.get(url);
}
export const remove = (id: number) => {
    const url = `/products/${id}`;
    return instance.delete(url);
}
export const add = (product: ProductType) => {
    const url = `/products/${user._id}`;
    return instance.post(url, product, {
        headers: {
            "Authorization": `Bearer ${token}`
        }
    });
}
export const read = (id: number) => {
    const url = `/products/${id}`;
    return instance.get(url);
}
export const update = (product: ProductType) => {
    const url = `/products/${product.id}`;
    return instance.put(url, product);
}