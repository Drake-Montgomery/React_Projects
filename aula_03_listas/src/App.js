import React from 'react';
import logo from './logo.svg';
import './App.css';
import Convidado from './Convidado';

function App() {
  
  const convidados = [
    {codigo: 1007, nome:"Agenor"},
    {codigo: 1009, nome:"Sheronline"},
    {codigo: 1012, nome:"Ted"}
  ];

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Lista de convidados:
        </p>

        {convidados.map((convidado) =>  /*Comando para percorrer a lista*/
            <Convidado 
                key={convidado.codigo} 
                convidado={convidado}>                
            </Convidado>
        )}
        
      </header>
    </div>
  );
}

export default App;
