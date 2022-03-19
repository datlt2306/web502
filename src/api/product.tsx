import instance from "./instance";

export const list = () => {
    const url = `/products`;
    return instance.get(url);
}