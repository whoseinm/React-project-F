import './App.css';
import {useState} from "react"

function App() {
 var [number, setNumber] = useState(0)
  
  return (
    <div className="App">
      <h1>{number}</h1>
      <button onClick={()=> setNumber(number++)}>Click to increase</button>
      <button onClick={()=> setNumber(number--)}>Click to decrease</button>
    </div>
  );
}

export default App;
