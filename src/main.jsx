import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'


// Sử dụng object
const person = {
  name: "Dat",
  age: 20,
  status: true,
  children: [
    { id: "1", name: "Tung"},
    { id: "2", name: "Kien"},
  ]
}
// Sử dụng hàm trong react
const showAge = (age) => <p>Tuoi cua ban la: {age}</p> // 20

// Sử dụng component trong react

const ShowAge = props => <p>Tuoi cua ban la: {props.age}</p> // { age: 20, name: "Dat" }

ReactDOM.render(<div>
  <p>Ten: {person.name} </p>
  <p>Tuoi: {person.age} </p>
  <p>{person.status ? "Da ket hon" : "Chua ket hon"}</p>
  <ul>
    {person.children.map(child => <li>
      {child.name}
    </li>)}
  </ul>
  <div>function: { showAge(person.age) }</div>
  <div>Component: <ShowAge age={person.age} name="Dat" /></div>
</div>, document.querySelector('#root'));
