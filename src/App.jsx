import React, { useEffect, useState } from 'react'
import logo from './logo.svg'
import './App.css'
import Box from './components/Box'

// class App extends React.Component{
//    state = { // 1
//      count: 10
//    }
//    componentDidMount(){ // 3 -> Hàm này chỉ được 1 lần sau khi render
//       document.title = `Count: ${this.state.count}`;
//    }
//    componentDidUpdate(){
//     document.title = `Count: ${this.state.count}`;
//    }
//    render(){ // 2
//      return <div>{this.state.count}
//       <button onClick={() => this.setState({count: this.state.count + 1})}>Click</button>
//      </div>
//    }
// }
// export default App;

const App = () => {
  const [count,setCount] = useState(0); // 1
  const [products, setProducts] = useState([]); // 1
  useEffect(() => { // 3
    // call api
    async function getProducts(){
        const response = await fetch('http://localhost:8000/api/products');
        const data = await response.json();
        setProducts(data);
    }
    getProducts();
    // document.title = `Count : ${count}`
  }, [])
  return <div>{count}
      <button onClick={() => setCount(count + 1)}>Click</button>
      {products.map(item => item.name)}
     </div>
}
export default App;