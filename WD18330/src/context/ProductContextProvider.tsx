import React, { createContext, useState } from "react";
import { IProduct } from "../interfaces/product";

export const ProductContext = createContext({} as IProduct);

const ProductContextProvider = ({ children }: { children: React.ReactNode }) => {
    const [product] = useState({
        id: 1,
        name: "Iphone",
        price: 1000,
    });
    return (
        <div>
            <ProductContext.Provider value={product}>{children}</ProductContext.Provider>
        </div>
    );
};

export default ProductContextProvider;
