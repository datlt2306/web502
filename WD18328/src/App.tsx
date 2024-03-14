import { Route, Routes } from "react-router-dom";
import Counter from "./components/Counter";
import ProductAdd from "./components/ProductAdd";
import ProductEdit from "./components/ProductEdit";
import ProductList from "./components/ProductList";
function App() {
    return (
        <>
            <Counter />
            <Routes>
                <Route path="/" element={<h1>Home Page</h1>} />
                <Route path="products" element={<ProductList />} />
                <Route path="products/add" element={<ProductAdd />} />
                <Route path="products/:id/edit" element={<ProductEdit />} />
            </Routes>
            <div></div>
        </>
    );
}
// Truyền vào 1 hàm và có dấu {}
// nếu truyền vào 1 hàm thì phải có dấu () => return 1 hàm
export default App;
