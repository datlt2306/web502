import { useState } from 'react'
import logo from './logo.svg'
import './App.css'
import ShowInfo from './components/ShowInfo'

function App() {
  const [count, setCount] = useState<number>(0);
  const [myName, setMyName] = useState<string>("Le Trong Dat");
  const [status, setStatus] = useState<boolean>(false);
  const [info, setInfo] = useState<{name: string, age: number}>({ name: "Dat", age: 20});
  const [products, setProducts] = useState<{id: number, name: string}[]>([
    {id: 1, name: "Product A"},
    {id: 2, name: "Product B"},
    {id: 3, name: "Product C"}
  ]);


  const removeItem = (id: number) => {
    const newsProduct = products.filter(item => item.id !== id);
    setProducts(newsProduct)
  }
  return (
    <div className="App">
      Count: {count} <button onClick={() => setCount(count + 1)}>Click</button>
      <hr />
      Full Name: {myName} <button onClick={() => setMyName("Le Tung Lam")}>Change Name</button>
      <hr />
      Status: {status ? "True" : "False"}
      <hr />
      Info: {info.name} - {info.age}
      <hr />
      Products: { products.map(item => <div>{item.name} <button onClick={() => removeItem(item.id)}>Remove</button></div>)}
      <hr />
      Component: ShowInfo
      <ShowInfo name="Dat" age={20}/>
    </div>
  )
}

export default App


// function useState(state){
//   return [state, function(){}];
// }

// const [firstValue, secondValue] = useState(10);
// console.log(firstValue) // 10

// secondValue(20); //

// console.log(firstValue) // 20


