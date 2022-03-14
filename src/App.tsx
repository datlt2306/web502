import { useEffect, useState } from 'react'
import axios from 'axios';
import logo from './logo.svg'
import './App.css'
import ShowInfo from './components/ShowInfo'
import type { ProductType } from './types/product';
function App() {
  const [info, setInfo] = useState<ProductType>({
    name: "Dat",
    age: 22
  });
  const [products, setProducts] = useState<ProductType[]>([]);
  const [count, setCount] = useState<number>(0);
  
  useEffect(() => {
     const getProducts = async () => {
        const { data } = await axios.get('http://localhost:8000/api/products');
        setProducts(data);
     }
     getProducts();
  },[])
  return (
    <div className="App">
      {count} <button onClick={() => setCount(count + 1)}>Click</button>
      <ShowInfo info={info}/>
      <hr />
      {products.map(item => <div>{item.name}</div>)}
    </div>
  )
}

export default App
