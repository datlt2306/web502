import React, { useContext } from "react";
import { IProduct } from "../interfaces/product";
import { Link } from "react-router-dom";
import { ProductContext } from "../context/ProductProvider";

const ProductList = () => {
    const { products, onHanleRemove } = useContext(ProductContext);
    return (
        <div>
            {products.map((item: IProduct, index) => (
                <div key={index}>
                    {item.name}
                    <Link to={`/products/${item.id}/edit`}>Edit</Link>
                    <button onClick={() => onHanleRemove(item.id!)}>Remove</button>
                </div>
            ))}
        </div>
    );
};

export default ProductList;
