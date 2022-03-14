import { useState } from 'react'
import logo from './logo.svg'
import './App.css'
import ShowInfo from './components/ShowInfo'

import type { Product } from './types/product';

function App() {
  const [count, setCount] = useState<number>(0);
  const [info, setInfo] = useState<Product>({
    name: "Dat",
    age: 23
  });

  return (
    <div className="App">
      {count} <button onClick={() => setCount(count + 1)}>Click</button>
      <ShowInfo person={info}/>
    </div>
  )
}

export default App



