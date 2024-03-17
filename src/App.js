import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';

import Home from './components/Home/Home';
import LogIn from './components/LogIn/LogIn';

import useToken from './components/LogIn/useToken';


function App() {

const { token, setToken } = useToken();

 if(!token) {
    return <LogIn setToken={setToken} />
  }


  return (
     <Router>
     <div className="App">
       <Routes>
       <Route path='/' element={<Home/>} />
        </Routes>
     </div>
 </Router>
  );
}

export default App;
