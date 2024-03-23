import { useQuery, useQueryClient } from "@tanstack/react-query";
import axios from "axios";
import { Link, Route, Routes } from "react-router-dom";
import "./App.css";
import ProductAdd from "./components/ProductAdd";
import ProductEdit from "./components/ProductEdit";
import { IProduct } from "./interfaces/product";
import Counter from "./components/Counter";
import useProductQuery from "./hooks/useProductQuery";
import ProductDetail from "./components/ProductDetail";
function App() {
    const { data, isLoading } = useProductQuery();
    if (isLoading) return <div>Loading...</div>;
    return (
        <>
            <Routes>
                <Route
                    path="/"
                    element={data?.map((product: IProduct) => (
                        <div key={product.id}>
                            <Link to={`/products/${product.id}`}>
                                <span>{product.name}</span>
                            </Link>
                            <span>{product.price}</span>
                            <Link to={`/edit/${product.id}`}>Edit</Link>
                        </div>
                    ))}
                />
                <Route path="products/:id" element={<ProductDetail />} />
                <Route path="add" element={<ProductAdd />} />
                <Route path="edit/:id" element={<ProductEdit />} />
            </Routes>
        </>
    );
}

export default App;
