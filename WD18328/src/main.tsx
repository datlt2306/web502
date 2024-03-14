import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import { createContext } from "react";
import CounterContextProvider from "./context/CounterContextProvider";
ReactDOM.createRoot(document.getElementById("root")!).render(
    <CounterContextProvider>
        <BrowserRouter>
            <App />
        </BrowserRouter>
    </CounterContextProvider>
);
