import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Dashboard from './Components/Dashboard';
import Listing from './Components/Listing';
import Login from './Components/Login';

const App = () => {
  return (
    <Router>
      <Routes>
      <Route path ='/' element={<Login/>}/>
        <Route path ='/Dashboard' element={<Dashboard/>}/>
        <Route path ='/Listing' element ={<Listing/>}/>
      </Routes>
    </Router>

  );
}

export default App;
