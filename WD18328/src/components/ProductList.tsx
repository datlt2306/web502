import React, { useContext, useEffect } from "react";
import { IProduct } from "../interfaces/product";
import { Link } from "react-router-dom";
import { ProductContext } from "../context/ProductProvider";
import axios from "axios";

const ProductList = () => {
    const { products, dispatch } = useContext(ProductContext);
    useEffect(() => {
        (async () => {
            const { data } = await axios.get(`http://localhost:3000/products`);
            dispatch({ type: "SET_PRODUCTS", payload: data });
        })();
    }, [dispatch]);
    return (
        <div>
            {products.value.map((item: IProduct, index) => (
                <div key={index}>
                    {item.name}
                    <Link to={`/products/${item.id}/edit`}>Edit</Link>
                    <button onClick={() => dispatch({ type: "DELETE_PRODUCT", payload: item.id! })}>
                        Remove
                    </button>
                </div>
            ))}
        </div>
    );
};

export default ProductList;
