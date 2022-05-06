import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Home from './Pages/Home/Home';
import Login from './Pages/Login/Logn';
import {BrowserRouter as Router, Route, Routes } from 'react-router-dom';

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route pathc="/" exact element={<Home></Home>} />
        <Route pathc="/Login" exact element={<Login></Login>} />
      </Routes>
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);
