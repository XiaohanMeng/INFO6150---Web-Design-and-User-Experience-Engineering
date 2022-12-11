import { useState } from "react";
import './App.css';
import Reorder from './Reorder'
import PlusButton from "./PlusButton";
import MinusButton from "./MinusButton";

function App() {
  const [count, setCount] = useState(5);

  function reorder(){
    setCount(count + 5);
  }

  function plus(){
    setCount(count + 1);
  }

  function minus(){
    setCount(count - 1);
  }

  return (
    <div className="app">
      <p className="inventory-count">{count}</p>

      <PlusButton plus={plus}/>
      <MinusButton minus={minus} count={count}/>
      
      {count===0 && <Reorder reorder={reorder}/>} 
    </div>
  );
}

export default App;
