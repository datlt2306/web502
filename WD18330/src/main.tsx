import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { ProductContext } from "./context/product.ts";
import ProductContextProvider from "./context/ProductContextProvider.tsx";
const product = { id: 1, name: "A", price: 200 };
ReactDOM.createRoot(document.getElementById("root")!).render(
    <ProductContextProvider>
        <App />
    </ProductContextProvider>
);
