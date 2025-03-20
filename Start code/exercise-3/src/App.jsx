import React from "react";
import { useState } from "react";

function App() {
  /* You will need to use many state to keep the input values and other needs */
 const [VarA, setVarA] = useState();
 const [VarB ,setVarB] = useState();
 const [result, setResult] = useState();
 const [color,setColor] = useState();
  /* You will need some function to handle the key pressed and button events */
  function onA(e){
    setVarA(e.target.value);
  }

  function onB(e){
    setVarB(e.target.value);
  }

  function OnButton() {
    if (isNaN(VarA) || isNaN(VarB)){
      setResult("Can't ahhhhh !! ");
      setColor("red");
    }
    else
    setResult(parseInt(VarA) + parseInt(VarB));
  setColor("white" );
  }
  

  return (
    <main>
      <h1>Calculator</h1>

      <label>A =</label>
      <input onKeyUp={onA} />

      <label>B =</label>
      <input onKeyUp={onB} />

      <label>A + B =</label>

      {/* When Compute buton is clicked, this input display the sum of the 2 numbers, or the error message in RED */}
      <input style={{color:color}} value={result} disabled />
      <button onClick={OnButton}>Compute</button>
    </main>
  );
}

export default App;
