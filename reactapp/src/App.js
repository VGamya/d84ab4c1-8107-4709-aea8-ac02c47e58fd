import logo from './logo.svg';
import './App.css';
import Order from './components/Order';
 import React from "react";
import Header from './components/Header';
 import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import PostForm from './components/PostForm';

function App() {
  return (
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
  );
}

const App = ()=>{
  return(
    <div>
          <div><Header></Header></div>
    <Router> 
    <Routes>
    <Route exact path="/" element={<PostForm/>} />
    {/* <Route path="/orders" element={<Order />} /> */}
    </Routes>
    </Router>
    </div>
      
  )

}

export default App;


