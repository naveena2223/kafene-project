// import logo from './logo.svg';
import './App.css';
// import './css/login.css';
import React from 'react';
import Navigation from './components/navigation';
import Login from './components/login';
import Order from './components/order';
import Product from './components/product';
import User from './components/user';


function App() {
  
  return (
    <div className="App">
      <div className="navigation"><Navigation /></div>

      
      <div className="login"><Login /></div>
      <div className="order"><Order /></div>
      <div className="product"><Product/></div>
      <div className="user"><User  /> </div>
    </div>
  );
}

export default App;
