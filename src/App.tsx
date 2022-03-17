import { useState } from 'react';
import { Navigate, NavLink, Route, Routes } from 'react-router-dom';
import './App.css';
import ShowInfo from './components/ShowInfo';
import { Product } from './types/product';
import HomePage from './pages/HomePage';
import ProductPage from './pages/ProductPage';
import AboutPage from './pages/AboutPage';
import AdminLayout from './pages/Layouts/AdminLayout';
import Dashboard from './pages/Layouts/Dashboard';
import WebsiteLayout from './pages/Layouts/WebsiteLayout';
function App() {
  // const [count,setCount] = useState<number>(0)
  // const [info,setInfo] = useState<Product>({
  //   age: 19,
  //   name: "Binh"
  // })

  return (
    <div className="App">
      {/* {count} <button onClick={() => setCount(count +1)}>setCount</button><br/>
      <ShowInfo person={info} />
      <h3>{info.name} </h3>
      <h4>{info.age}</h4> */}
      <header>
        <nav>
          <ul>
            <li><NavLink to="/">Home Page</NavLink></li>
            <li><NavLink to="/product">Product Page</NavLink></li>
            <li><NavLink to="/about">About Page</NavLink></li>
          </ul>
        </nav>
      </header>
      <main>
        <Routes>
          {/* Layout mặc định là WebsiteLayout */}
          <Route path="/" element={<WebsiteLayout />} >
            {/* HomePage,ProductPage,AboutPage chạy trong Outlet */}
            <Route path="/" element={<HomePage />} />
            <Route path="/product" element={<ProductPage />} />
            <Route path="/about" element={<AboutPage />} />
          </Route>
          <Route path="/admin" element={<AdminLayout />}>
            {/* Truy cập admin thì index chuyển đến admin/dashboard thông qua Navigate */}
            <Route index element={<Navigate to="/admin/dashboard" />} />
            <Route path="dashboard" element={<Dashboard />} />
          </Route>
        </Routes>
      </main>
    </div >
  )
}

export default App
