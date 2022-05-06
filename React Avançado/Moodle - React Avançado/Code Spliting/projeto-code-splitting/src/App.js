import logo from './logo.svg';
import './App.css';
import {lazy, Suspense} from 'react';

//Importação normal
//import Slogan from './Pages/Slogan';

/*Importação com o Lazy
const Slogan = lazy(() => import('./Slogan'));*/

//Antigo
/*import Rodape from './Pages/Rodape';
import Slogan from './Pages/Slogan';*/

//Novo
const Slogan = lazy(() => import('./Pages/Slogan'));
const Rodape = lazy(() => import('./Pages/Rodape'));

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />

        <Suspense fallback={<p>Carregando...</p> }>
          <Slogan />
        </Suspense>

        <Suspense fallback={<p>Carregando...</p> }>
          <Rodape />
        </Suspense>


      </header>
    </div >
  );
}

export default App;
