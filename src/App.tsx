import { useEffect, useState } from 'react'
import axios from 'axios';
import logo from './logo.svg'
import './App.css'
import ShowInfo from './components/ShowInfo'
import type { ProductType } from './types/product';
import { list, remove } from './api/product';
import { NavLink, Route, Routes } from 'react-router-dom';
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
  return ( // 2
    <div className="App">
      {/* <table>
        <thead>
          <th>#</th>
          <th>Name</th>
          <th></th>
        </thead>
        <tbody>
          {products && products.map((item, index) => {
            return <tr>
                    <td>{index + 1}</td>
                    <td>{item.name}</td>
                    <td>
                      <button onClick={() => removeItem(item._id)}>Remove</button>
                    </td>
                  </tr>
          })}
          
        </tbody>
      </table> */}
      <header>
        <ul>
          <li><NavLink to="/">Home page</NavLink></li>
          <li><NavLink to="/product">Product</NavLink></li>
          <li><NavLink to="/about">About</NavLink></li>
        </ul>
      </header>
      <main>
      <Routes>
        <Route path="/" element={<h1>Home page</h1>} />
        <Route path="product" element={<h1>Product page</h1>} />
      </Routes>
      </main>
      
    </div>
  )
}

export default App
