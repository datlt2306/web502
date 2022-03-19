import { useEffect, useState } from 'react'
import { Routes, Route, NavLink, Navigate } from 'react-router-dom';
import logo from './logo.svg'
import "bootstrap/dist/css/bootstrap.min.css";
import "./dashboard.css";

import ShowInfo from './components/ShowInfo'
import Product from './components/Product'
import { list, remove } from './api/product';
import axios from 'axios';
import type { IProduct } from './types/product';
import AdminLayout from './pages/layouts/AdminLayout';
import WebsiteLayout from './pages/layouts/WebsiteLayout';
import Dashboard from './pages/Dashboard';
import ProductManager from './pages/ProductManager';
import Home from './pages/Home';
import ProductDetail from './pages/ProductDetail';
import ProductAdd from './pages/ProductAdd';


function App() {
  const [count, setCount] = useState(0)
  const [products, setProducts] = useState<IProduct[]>([]);

  useEffect(() => {
    const getProducts = async () => {
        const { data } = await list();
        setProducts(data);
    };
    getProducts();
  }, [])
  const removeItem = (id: number) => {
      // call api
      remove(id);

      // reRender
      setProducts(products.filter(item => item._id !== id));
  }
  return (
    <div className="App">

      {products.map(item => {
        return  <div>{item.name} <button onClick={() => removeItem(item._id)}>Remove</button></div>
      })}


        <header>
          <ul>
            <li>
              <NavLink to="/">Home Page</NavLink>
            </li>
            <li>
              <NavLink to="/product">Product Page</NavLink>
            </li>
            <li>
              <NavLink to="/about">About</NavLink>
            </li>
          </ul>
        </header>
        <main>
          
          <Routes>
            <Route path="/" element={<WebsiteLayout />}>
              <Route index element={<Home />} />
              <Route path="product">
                  <Route index  element={<h1>Hien thi san pham</h1>} />
                  <Route path=":id" element={<ProductDetail />} />
              </Route>
              <Route path="about" element={<h1>About page</h1>} />
            </Route>
            
            <Route path="admin" element={<AdminLayout />}>
                <Route index element={<Navigate to="dashboard"/>} />
                <Route path="dashboard" element={<Dashboard />} />
                <Route path="products">
                    <Route  element={<ProductManager />} />
                    <Route path="add" element={<ProductAdd />} />
                </Route>
            </Route>
          </Routes>
        </main>
    </div>
  )
}

export default App

