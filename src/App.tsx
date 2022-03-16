import { useEffect, useState } from 'react'
import axios from 'axios';
import logo from './logo.svg'
import './App.css'
import ShowInfo from './components/ShowInfo'
import type { ProductType } from './types/product';
import { list, remove } from './api/product';
import { Navigate, NavLink, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Product from './pages/Product';
import Dashboard from './pages/Dashboard';
import ManagerProduct from './pages/ManagerProduct';
import WebsiteLayout from './pages/layouts/WebsiteLayout';
import AdminLayout from './pages/layouts/AdminLayout';

import "bootstrap/dist/css/bootstrap.min.css"
function App() {
  const [products, setProducts] = useState<ProductType[]>([]); // 1
  // const [count, setCount] = useState<number>(0);
  
  useEffect(() => { // 3
     const getProducts = async () => {
        const { data } = await list();
        setProducts(data);
     }
     getProducts();
  },[])

  const removeItem = async (id: number) => {
    // xoa tren API
    const { data } = await remove(id);
    // reRender
    data && setProducts(products.filter(item => item._id !== data._id));
  }
  return ( 
    <Routes>
      <Route path="/" element={<WebsiteLayout />}>
          <Route index element={<Home />} />
          <Route path="product" element={<Product />} />
      </Route>
      <Route path="admin" element={<AdminLayout />}> 
        <Route index element={<Navigate to="dashboard"/>} />
        <Route path="dashboard" element={<Dashboard />} />
        <Route path="product" element={<ManagerProduct data={products}/>} />
      </Route>
    </Routes>
  )
}

export default App
//B1: npm i react-router-dom
//B2: sử dụng component <BrowserRouter> để wrapper <App /> trong file main.tsx
//B3: Khai báo và sử dụng <Routes> trong app
//B4: Khai báo sử dụng <Route> để định nghĩa các đường đẫn

