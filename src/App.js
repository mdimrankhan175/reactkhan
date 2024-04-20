import React from 'react';
import { BrowserRouter as Router,Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Home from './components/Home';
import UseState from './components/UseState';
import UseEffect from './components/UseEffect';

function App(){
  return(
    <Router>
      <div>
        <Header/>
        <Routes>     
          <Route path='/' exact Component={Home} />
          <Route path='useState' exact Component={UseState} />
          <Route path='useEffect' Component={UseEffect} />         
        </Routes>        
      </div>
    </Router>
  )
}

export default App