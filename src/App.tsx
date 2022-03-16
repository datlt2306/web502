import { useEffect, useState } from 'react'
import logo from './logo.svg'
import './App.css'
import ShowInfo from './components/ShowInfo'

import type { Product } from './types/product';
import { list } from './api/product';
import { NavLink, Route, Routes } from 'react-router-dom';
import HomePage from './pages/HomePage';
import ProductPage from './pages/ProductPage';

function App() {
  const [products, setProducts] = useState<{_id: number, name: string}[]>([])

  useEffect(() => {
    const getProducts = async () => {
        const { data } = await list();
        setProducts(data);
    }
    getProducts();
  })
  return (
    <div className="App">
        <header>
          <ul>
            <li><NavLink to="/">Home Page</NavLink></li>
            <li><NavLink to="/product">Product</NavLink></li>
            <li><NavLink to="/about">About</NavLink></li>
          </ul>
        </header>
        <main>
          <Routes>
            <Route path="/" element={<HomePage />}/>
            <Route path="product" element={<ProductPage />}/>
            <Route path="about" element={<h1>About page</h1>}/>
          </Routes>
        </main>
    </div>
  )
}

export default App



