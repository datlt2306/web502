import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { ProductContext } from "./context/product.ts";

ReactDOM.createRoot(document.getElementById("root")!).render(
    <ProductContext.Provider value={{ id: 1, name: "A", price: 200 }}>
        <App />
    </ProductContext.Provider>
);
