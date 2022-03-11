import React, { useState } from 'react'
import logo from './logo.svg'
import './App.css'
import Box from './components/Box'


const ShowInfo = (props) => {
  return <div>Show {props.name}</div>
}

function App(){
  const producst = []
  const [count, setCount] = useState(0);
  const [color, setColor] = useState("green");
  const [myStatus, setMyStatus] = useState(false);
  const [products, setProducts] = useState([{id: 1, name: "A"}, {id: 2, name: "B"}, { id: 3, name: "C"}])
  // remove Item
  const removeItem = (id) => {
    const newProducts = products.filter(item => item.id !== id);
    setProducts(newProducts);
  }
  return <div>
     <h2>Demo State basic </h2> <hr /> 
      String:  <Box color={color} /><br />
      Boolean: { myStatus ? "Da ket hon" : "Chua ket hon"} <br />
      
      <h2>Demo event</h2>
      Number: {count} <br /> <button onClick={() => setCount(count+1)}>Click count</button>
      <button onClick={() => setMyStatus(!myStatus)}>Toggled Status</button>
      <br />
      { myStatus && <div>
        Arr: {products.map(item => <div>{item.name} 
          <button onClick={() => removeItem(item.id) }>Delete</button></div>)}
      </div>}
      <hr />
      
  </div>
}
export default App