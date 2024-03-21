import { Route, Routes } from "react-router-dom";
import ProductList from "./components/ProductList";
import WebsiteLayout from "./components/layouts/website";
import ProductAdd from "./components/ProductAdd";
import ProductEdit from "./components/ProductEdit";
import AdminLayout from "./components/layouts/admin";
function App() {
    return (
        <>
            <Routes>
                <Route path="/" element={<WebsiteLayout />}>
                    <Route index element={<ProductList />} />
                </Route>
                <Route path="admin" element={<AdminLayout />}>
                    <Route index element={<h1>Dashboard Page</h1>} />
                    <Route path="products" element={<h1>Product Management</h1>} />
                    <Route path="products/add" element={<ProductAdd />} />
                    <Route path="products/:id/edit" element={<ProductEdit />} />
                </Route>
            </Routes>
            <div></div>
        </>
    );
}
// Truyền vào 1 hàm và có dấu {}
// nếu truyền vào 1 hàm thì phải có dấu () => return 1 hàm
export default App;
