import React, { useState } from 'react'
import logo from './logo.svg'
import './App.css'


const ShowInfo = (props) => {
  return <div>Show {props.name}</div>
}

function App(){
  const [count, setCount] = useState(0);
  const [color, setColor] = useState("green");
  const [myStatus, setMyState] = useState(false);
  const [products, setProducts] = useState([{id: 1, name: "A"}, {id: 2, name: "B"}])
  return <div>
      Number: {count} <br />
      String: <div style={{background: color, width: 100, height: 100}}>Content</div> <br />
      Boolean: { myStatus ? "Da ket hon" : "Chua ket hon"} <br />
      Arr: {products.map(item => item.name)}
  </div>
}
export default App