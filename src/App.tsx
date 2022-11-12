import React, { useState } from "react";
import Todo from "./components/Todo";
import { Routes, Route, Outlet } from "react-router-dom";
import HomePage from "./pages/home";
import AboutPage from "./pages/about";
import LayoutWebsite from "./components/Layout/LayoutWebsite";
function App() {
    return (
        <>
            <Routes>
                <Route path="/" element={<LayoutWebsite />}>
                    <Route index element={<HomePage />} />
                    <Route path="about" element={<AboutPage />} />
                    <Route path="todo" element={<Todo />} />
                </Route>
                <Route path="*" element={<h1>Not Found</h1>} />
            </Routes>
        </>
    );
}

export default App;

// .on('/', () => {
//     console.log('1')
// })
