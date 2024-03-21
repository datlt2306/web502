import { useQuery, useQueryClient } from "@tanstack/react-query";
import axios from "axios";
import { Link, Route, Routes } from "react-router-dom";
import "./App.css";
import ProductAdd from "./components/ProductAdd";
import ProductEdit from "./components/ProductEdit";
import { IProduct } from "./interfaces/product";
function App() {
    const { data, isLoading } = useQuery({
        queryKey: ["PRODUCT_KEY"],
        queryFn: async () => {
            const { data } = await axios.get(`http://localhost:3000/products`);
            return data;
        },
    });
    if (isLoading) return <div>Loading...</div>;
    return (
        <>
            <Routes>
                <Route
                    path="/"
                    element={data?.map((product: IProduct) => (
                        <div key={product.id}>
                            <span>{product.name}</span>
                            <span>{product.price}</span>
                            <Link to={`/edit/${product.id}`}>Edit</Link>
                        </div>
                    ))}
                />
                <Route path="add" element={<ProductAdd />} />
                <Route path="edit/:id" element={<ProductEdit />} />
            </Routes>
        </>
    );
}

export default App;
