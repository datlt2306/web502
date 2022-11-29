import React, { useState } from "react";
import Todo from "./components/Todo";
import { Routes, Route, Outlet } from "react-router-dom";
import HomePage from "./pages/home";
import AboutPage from "./pages/about";
import LayoutWebsite from "./components/Layout/LayoutWebsite";
import Login from "./pages/login";
import LayoutAdmin from "./components/Layout/LayoutAdmin";
import RequireAuth from "./components/Layout/RequireAuth";
import AddTodo from "./components/AddTodo";
function App() {
    return (
        <>
            <Routes>
                <Route path="/" element={<LayoutWebsite />}>
                    <Route index element={<HomePage />} />
                    <Route path="about" element={<AboutPage />} />
                    <Route path="login" element={<Login />} />
                    <Route path="todo" element={<Todo />} />
                </Route>
                <Route
                    path="/admin"
                    element={
                        <RequireAuth>
                            <LayoutAdmin />
                        </RequireAuth>
                    }
                >
                    <Route index element={<h1>Dashboard</h1>} />
                    <Route path="/admin/products" element={<h1>Product Page</h1>} />
                    <Route path="/admin/products/add" element={<AddTodo />} />
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
