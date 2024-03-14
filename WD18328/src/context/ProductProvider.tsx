import React, { ReactNode, createContext, useEffect, useState } from "react";
import { IProduct } from "../interfaces/product";
import axios from "axios";

type Props = {
    children: ReactNode;
};
export const ProductContext = createContext({} as any);

const ProductContextProvider = ({ children }: Props) => {
    const [products, setProducts] = useState<IProduct[]>([]);
    useEffect(() => {
        (async () => {
            const { data } = await axios.get(`http://localhost:3000/products`);
            setProducts(data);
        })();
    }, []);

    const onHanleRemove = async (id: number) => {
        try {
            await axios.delete(`http://localhost:3000/products/${id}`);
            setProducts(products.filter((item) => item.id !== id));
        } catch (error) {
            console.log(error);
        }
    };

    const onHandleAdd = async (product: IProduct) => {
        try {
            const { data } = await axios.post(`http://localhost:3000/products`, product);
            setProducts([...products, data]);
        } catch (error) {
            console.log(error);
        }
    };
    const onHandleEdit = async (product: IProduct) => {
        try {
            const { data } = await axios.put(
                `http://localhost:3000/products/${product.id}`,
                product
            );
            setProducts(products.map((item) => (item.id == data.id ? data : item)));
        } catch (error) {
            console.log(error);
        }
    };
    return (
        <div>
            <ProductContext.Provider
                value={{ products, setProducts, onHanleRemove, onHandleAdd, onHandleEdit }}
            >
                {children}
            </ProductContext.Provider>
        </div>
    );
};

export default ProductContextProvider;
