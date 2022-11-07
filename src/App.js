import './App.css';
import {useState} from 'react';

function App() {

  const [result, setResult] = useState("")

  function handleClick(e){
    setResult(result.concat(e.target.name))
  }

  function Clear(){
    setResult("")
  }

  function Equals(){
    setResult(eval(result))
  }




  return (
    <div className="container">
      <div className='output'>{result}</div>
      <div className="buttons">
        <button name="clear" className='clear' onClick={Clear}>Clear</button>
        <button name="/" onClick={handleClick}>&divide;</button>
        <button name="7" onClick={handleClick}>7</button>
        <button name="8" onClick={handleClick}>8</button>
        <button name="9" onClick={handleClick}>9</button>
        <button name="*" onClick={handleClick}>&times;</button>
        <button name="4" onClick={handleClick}>4</button>
        <button name="5" onClick={handleClick}>5</button>
        <button name="6" onClick={handleClick}>6</button>
        <button name="-" onClick={handleClick}>&minus;</button>
        <button name="1" onClick={handleClick}>1</button>
        <button name="2" onClick={handleClick}>2</button>
        <button name="3" onClick={handleClick}>3</button>
        <button name="+" onClick={handleClick}>+</button>
        <button name="0" onClick={handleClick}>0</button>
        <button name="." onClick={handleClick}>.</button>
        <button name="=" className='equals' onClick={Equals}>=</button>
      </div>


 
    </div>
  );
}

export default App;
