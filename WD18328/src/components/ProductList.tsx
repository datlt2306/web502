import React from "react";
import { IProduct } from "../interfaces/product";
import { Link } from "react-router-dom";

type ProductListProps = {
    products: IProduct[];
    onRemove: (id: number) => void;
};

const ProductList = ({ products, onRemove }: ProductListProps) => {
    return (
        <div>
            {products.map((item: IProduct, index) => (
                <div key={index}>
                    {item.name}
                    <Link to={`/products/${item.id}/edit`}>Edit</Link>
                    <button onClick={() => onRemove(item.id!)}>Remove</button>
                </div>
            ))}
        </div>
    );
};

export default ProductList;
