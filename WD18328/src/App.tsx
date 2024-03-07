import { useState } from 'react';
import './App.css';

function App() {
  const [count] = useState<number>(0);
  const [color] = useState<string
  >('red');
  return (
    <>
      <div>
      {count}
      <div style={{ width: 200, height: 200, backgroundColor: color}}>123</div>
        {/* Function: {showInfo({name: "Dat", age: 30})} */}
        <hr />
        {/* Component: <ShowInfo name="Dat" age={30}/> */}
        </div>
    </>
  )
}

export default App
