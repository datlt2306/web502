import { useEffect, useState } from "react";
import { IProduct } from "./interfaces/product";
import axios from "axios";
import { Routes, Route } from "react-router-dom";
import ProductList from "./components/ProductList";
import ProductAdd from "./components/ProductAdd";
import ProductEdit from "./components/ProductEdit";
import Counter from "./components/Counter";
function App() {
    const [products, setProducts] = useState<IProduct[]>([]);
    useEffect(() => {
        (async () => {
            const { data } = await axios.get(`http://localhost:8080/api/products`);
            setProducts(data);
        })();
    }, []);

    const onHanleRemove = async (id: number) => {
        try {
            await axios.delete(`http://localhost:8080/api/products/${id}`);
            setProducts(products.filter((item) => item.id !== id));
        } catch (error) {
            console.log(error);
        }
    };

    const onHandleAdd = async (product: IProduct) => {
        try {
            const { data } = await axios.post(`http://localhost:8080/api/products`, product);
            setProducts([...products, data]);
        } catch (error) {
            console.log(error);
        }
    };
    const onHandleEdit = async (product: IProduct) => {
        try {
            const { data } = await axios.put(
                `http://localhost:8080/api/products/${product.id}`,
                product
            );
            setProducts(products.map((item) => (item.id == data.id ? data : item)));
        } catch (error) {
            console.log(error);
        }
    };
    return (
        <>
            <Counter />
            <Routes>
                <Route path="/" element={<h1>Home Page</h1>} />
                <Route
                    path="products"
                    element={<ProductList products={products} onRemove={onHanleRemove} />}
                />
                <Route path="products/add" element={<ProductAdd onAdd={onHandleAdd} />} />
                <Route path="products/:id/edit" element={<ProductEdit onEdit={onHandleEdit} />} />
            </Routes>
            <div></div>
        </>
    );
}
// Truyền vào 1 hàm và có dấu {}
// nếu truyền vào 1 hàm thì phải có dấu () => return 1 hàm
export default App;
