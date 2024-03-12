import { useContext } from "react";
import { ProductContext } from "../context/product";

const ProductItem = () => {
    const product = useContext(ProductContext);
    return <div>{product.name}</div>;
};

export default ProductItem;
