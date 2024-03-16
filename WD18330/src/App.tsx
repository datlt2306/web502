import axios from "axios";
import { useContext, useEffect } from "react";
import "./App.css";
import Counter from "./components/Counter";
import { ProductContext } from "./context/ProductContextProvider";
import { IProduct } from "./interfaces/product";

function App() {
    const { products, dispatch } = useContext(ProductContext);

    useEffect(() => {
        (async () => {
            try {
                const { data } = await axios.get(`http://localhost:3000/products`);
                dispatch({ type: "SET_PRODUCTS", payload: data });
            } catch (error) {
                console.log(error);
            }
        })();
    }, [dispatch]);
    return (
        <>
            {products.value.map((item: IProduct, index: number) => (
                <div key={index}>{item.name}</div>
            ))}
            <Counter />
        </>
    );
}
// 1. tên sự kiện camelCase
// 2. gọi tên hàm không có dấu ()
// 3. truyền tham số vào hàm

export default App;
