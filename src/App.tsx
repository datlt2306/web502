import { useEffect, useState } from 'react'
import logo from './logo.svg'
import './App.css'
import { Navigate, NavLink, Route, Router, Routes } from 'react-router-dom'
import Homepage from './pages/Homepage'
import WebsiteLayout from './pages/layouts/WebsiteLayout'
import AdminLayout from './pages/layouts/AdminLayout'
import ProductDetail from './pages/ProductDetail'
import ProductManager from './pages/ProductManager';
import { ProductType } from './pages/types/product'
import { list } from './api/product'

function App() {
  const [count, setCount] = useState(0);
  const [status, setStatus] = useState(false);

  const [products, setProducts] = useState<ProductType[]>([]);

  useEffect(() => {
      const getProducts = async () => {
            const { data } = await list();
            setProducts(data);
      }
      getProducts();
  }, [])
  
  return (

    <div className="container">
      {count} <button onClick={() => setCount(count + 1)}>Click</button>
      <button onClick={() => setStatus(true)}>Click</button>
      <div>
        {products.map(item => item.name)}
      </div>
        <Routes>
          <Route path="/" element={<WebsiteLayout />}>
              <Route index element={<Homepage />} />
              <Route path="product">
                <Route index element={<h1>Product Page</h1>} />
                <Route path=":id" element={<ProductDetail />} />
              </Route>
              
          </Route>
          <Route path="admin" element={<AdminLayout />}>
              <Route index element={<Navigate to="dashboard" />} />
              <Route path="dashboard" element={<h1>Dashboard page</h1>} />
              <Route path="product" element={<ProductManager products={products} />} />
          </Route>
        </Routes>
    </div>
  )
}

export default App


