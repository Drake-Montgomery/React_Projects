import logo from './logo.svg';
import './App.css';
import { BroserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Main from './pages/Main';
import TodoV1 from './pages/TodoV1';
import TodoV2 from './pages/TodoV2';

function App() {
  return (
    <>
        <Router>
        <div>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/versao1">Home</Link></li>
          <li><Link to="/versao2">Home</Link></li>
        </ul>
        </div>
        </Router>

        <Routes>
          <Route exact patch="/" element={<Main />} />
          <Route exact patch="/" element={<Main />} />
          <Route exact patch="/" element={<Main />} />
          <Route exact patch="/" element={<Main />} />
        </Routes>
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
    </>
  );
}

export default App;
