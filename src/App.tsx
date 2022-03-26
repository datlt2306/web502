import { useEffect, useState } from 'react'
import logo from './logo.svg'
import { Navigate, NavLink, Route, Router, Routes } from 'react-router-dom'
import Homepage from './pages/Homepage'
import WebsiteLayout from './pages/layouts/WebsiteLayout'
import AdminLayout from './pages/layouts/AdminLayout'
import ProductDetail from './pages/ProductDetail'
import ProductManager from './pages/ProductManager';
import { ProductType } from './pages/types/product'
import { add, list, remove, update } from './api/product'
import ProductAdd from './pages/ProductAdd'
import ProductEdit from './pages/ProductEdit'
import ShowInfo from './components/ShowInfo'
import PrivateRouter from './components/PrivateRouter'
import Signup from './pages/Signup'
import Signin from './pages/Signin'

function App() {
  const [status, setStatus] = useState(false);

  const [products, setProducts] = useState<ProductType[]>([]);

  useEffect(() => {
      const getProducts = async () => {
            const { data } = await list();
            setProducts(data);
      }
      getProducts();
  }, [])

  const removeItem = (id: number) => {
    remove(id);
    // reRender
    setProducts(products.filter(item => item.id !== id));
    // setProduct()
  }
  const onHanldeAdd = (data: ProductType) => {
      add(data);
      setProducts([...products, data])
  }

  const onHandleUpdate = async (product: ProductType) => {
      const { data } = await update(product);
      // reRender
      setProducts(products.map(item => item.id === data.id ? data : item ));
  }
  return (

    <div className="container">
        <Routes>
          <Route path="/" element={<WebsiteLayout />}>
              <Route index element={<Homepage />} />
              <Route path="product">
                <Route index element={<h1>Product Page</h1>} />
                <Route path=":id" element={<ProductDetail />} />
              </Route>
              
          </Route>
          <Route path="admin" element={<PrivateRouter><AdminLayout /></PrivateRouter>}>
              <Route index element={<Navigate to="dashboard" />} />
              <Route path="dashboard" element={<h1>Dashboard page</h1>} />
              <Route path="product">
                <Route index element={<ProductManager products={products} onRemove={removeItem}/>} />
                <Route path="add" element={<ProductAdd onAdd={onHanldeAdd}/>} />
                <Route path=":id/edit" element={<ProductEdit onUpdate={onHandleUpdate}/>}/>
              </Route>
              
          </Route>
          <Route path="/signup" element={<Signup />} />
          <Route path="/signin" element={<Signin />} />
        </Routes>
    </div>
  )
}

export default App


