import { useEffect, useState } from "react";
import "./App.css";
import { IProduct } from "./interfaces/product";
import axios from "axios";

function App() {
    const [products, setProducts] = useState<IProduct[]>([]);
    useEffect(() => {
        (async () => {
            const { data } = await axios.get(`http://localhost:8080/api/products`);
            setProducts(data);
        })();
    }, []);
    return (
        <>
            {products.map((item: IProduct, index) => (
                <div key={index}>{item.name}</div>
            ))}
            <div></div>
        </>
    );
}
// Truyền vào 1 hàm và có dấu {}
// nếu truyền vào 1 hàm thì phải có dấu () => return 1 hàm
export default App;
