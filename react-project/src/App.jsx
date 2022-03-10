import { useState } from 'react'
import ShowInfo from './components/ShowInfo'

function App() {
  // const products = [
  //   { id: 1, name: "Product A"},
  //   { id: 2, name: "Product B"},
  //   { id: 3, name: "Product C"},
  // ]
  const [count, setCout] = useState(0);
  const [myName, setMyName] = useState("Dat");
  const [status, setStatus] = useState(false);
  const [products, setProducts] = useState([
    { id: 1, name: "Product A"},
    { id: 2, name: "Product B"},
    { id: 3, name: "Product C"},
  ]);
  return (
    <div>
      Count: {count} <button onClick={() => setCout(count + 1)}>Click</button>
      <hr />
      {myName} <button onClick={() => setMyName("Kien")}>Change Name</button>
      <hr />
      <button onClick={() => setStatus(!status)}>Toggled</button>
      <hr />
      {status ? products.map((item, index) => <div key={index}>{item.name}</div>) : ""}
      <ShowInfo name="Dat" />
      <ShowInfo name="Kien" />
      <ShowInfo name="Tuan" />
    </div>
  )
}

export default App
