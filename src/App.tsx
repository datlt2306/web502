import { useState } from 'react'
import logo from './logo.svg'
import './App.css'
import ShowInfo from './ShowInfo'

type TProduct = {
  id: number,
  name: string
}

function App() {
  const [count, setCount] = useState<number>(0);
  const [products, setProducts] = useState<TProduct[]>([{id: 1, name: "Dat"}])

  return (
    <div className="App">
        <ShowInfo name="Dat"/>
    </div>
  )
}

export default App
