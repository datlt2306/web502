import { useContext } from "react";
import { ProductContext } from "../context/ProductContextProvider";

const ProductItem = () => {
    const product = useContext(ProductContext);
    console.log(product);
    return <div>{product.name}</div>;
};

export default ProductItem;
