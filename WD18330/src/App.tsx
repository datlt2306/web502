import { useState } from "react";
import "./App.css";
import ProductItem from "./components/ProductItem";
import Counter from "./components/Counter";

function App() {
    return (
        <>
            <ProductItem />
            <Counter />
        </>
    );
}
// 1. tên sự kiện camelCase
// 2. gọi tên hàm không có dấu ()
// 3. truyền tham số vào hàm

export default App;
