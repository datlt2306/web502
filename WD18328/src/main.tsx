import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import { createContext } from "react";
const count = 10;
export const CountContext = createContext(0 as number);
ReactDOM.createRoot(document.getElementById("root")!).render(
    <CountContext.Provider value={count}>
        <BrowserRouter>
            <App />
        </BrowserRouter>
    </CountContext.Provider>
);
