import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Listing from './Components/Listing';
import Login from './Components/Login';
import Error from './Components/Error'
import {AuthProvider} from './Components/context/Context'

const App = () => {
  return (
    <Router>
      <AuthProvider>
      <Routes>
      <Route path ='/' element={<Login/>}/>
        <Route path ='/Error' element={<Error/>}/>
        <Route path ='/Listing' element ={<Listing/>}/>
      </Routes>
      </AuthProvider>
    </Router>

  );
}

export default App;
