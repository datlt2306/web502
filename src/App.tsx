import { useEffect, useState } from 'react'
import { Routes, Route, NavLink } from 'react-router-dom';
import logo from './logo.svg'
import './App.css'
import ShowInfo from './components/ShowInfo'
import Product from './components/Product'
import { list, remove } from './api/product';
import axios from 'axios';
import type { IProduct } from './types/product';


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
            <Route path="/" element={<h1>Home Page</h1>} />
            <Route path="product" element={products.map(item => <div>{item.name}</div>)} />
            <Route path="about" element={<ShowInfo name="abc" age={10} />} />
          </Routes>
        </main>
    </div>
  )
}

export default App

