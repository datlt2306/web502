import { useState } from 'react'
import logo from './logo.svg'
import './App.css'
import ShowInfo from './components/ShowInfo'
import type { ProductType } from './types/product';
function App() {
  const [info, setInfo] = useState<ProductType>({
    name: "Dat",
    age: 22
  });

  const [count, setCount] = useState<number>(0);

  return (
    <div className="App">
      {count} <button onClick={() => setCount(count + 1)}>Click</button>
      <ShowInfo info={info}/>
    </div>
  )
}

export default App
