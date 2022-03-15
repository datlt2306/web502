import { useState } from 'react'
import logo from './logo.svg'
import './App.css'
import ShowInfo from './components/ShowInfo'

function App() {
  const [count, setCount] = useState(0);
  const [myName, setMyName] = useState("Le Trong Dat");
  const [status, setStatus] = useState(false);
  const [info, setInfo] = useState({ name: "Dat", age: 20});
  const [products, setProducts] = useState([
    {id: 1, name: "Product A"},
    {id: 2, name: "Product B"},
    {id: 3, name: "Product C"}
  ])
  return (
    <div className="App">
      Count: {count} 
      <hr />
      Full Name: {myName}
      <hr />
      Status: {status ? "True" : "False"}
      <hr />
      Info: {info.name} - {info.age}
      <hr />
      Products: { products.map(item => <div>{item.name}</div>)}
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


