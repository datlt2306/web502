import { useEffect, useState } from 'react'
import logo from './logo.svg'
import './App.css'
import ShowInfo from './components/ShowInfo'
import Product from './components/Product'

interface IProduct{
    id: number, 
    name: string
}

function App() {
  const [count, setCount] = useState(0)
  const [products, setProducts] = useState<IProduct[]>([]);

  useEffect(() => {
    const getProducts = async () => {
        const response = await fetch('http://localhost:8000/api/products');
        const data = await response.json();
        setProducts(data);
    };
    getProducts();
  }, [])

  return (
    <div className="App">
        <ShowInfo name="abc" age={10}/>
        {products.map(item => <div>{item.name}</div>)}
    </div>
  )
}

export default App

