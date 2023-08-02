import React from 'react'
import { BrowserRouter as Router, Route, Routes, BrowserRouter } from 'react-router-dom'
import Home from './pages/Home'
import Nosotros from './pages/Nosotros'
import Navbar from './components/Navbar'

 const App = () => {
  return (
      <div className="app-container">
        <BrowserRouter>
        

        <Navbar></Navbar>
          <Routes>
          <Route index element={<Home/>}/>
          <Route path='/Home' element={<Home/>}/>
          <Route path='/Nosotros' element={<Nosotros/>}/>
          </Routes>
          
        </BrowserRouter>
      </div>
  );
};

export default App;
