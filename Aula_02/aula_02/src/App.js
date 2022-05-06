import logo from './logo.svg';
import {useState} from 'react';
import './App.css';
import Header from './Header';

function App() {
  const [contador, setContador] = useState(0);
  function Adicionar() {
    setContador(contador+1);
  }

  function Subtrair () {
    setContador(contador-1);
  }

  return (
    <div className="App">

      <Header title={contador}/>

      <input type="button" value="Menos" onClick={Adicionar}></input>
      <input type="button" value="Menos" onClick={Subtrair}></input>
    </div>
  );
}

export default App;
