import { useState } from 'react'
import logo from './logo.svg'
import './App.css'
import ShowInfo from './components/ShowInfo'
import Product from './components/Product'

interface IProduct{
    id: number, 
    name: string
}

const data = [
  { id: 1, name: "Product A"}, // item
  { id: 2, name: "Product B"}, // item
]

function App() {
  const [count, setCount] = useState(0)
  const [products, setProducts] = useState<IProduct[]>(data)
  return (
    <div className="App">
        <ShowInfo name="abc" age={10}/>
        {products.map(item => <Product data={item} />)}
    </div>
  )
}

export default App

