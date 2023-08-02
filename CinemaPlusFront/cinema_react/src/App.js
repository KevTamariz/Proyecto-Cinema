import React from 'react'
import { BrowserRouter as Router, Route, Routes, BrowserRouter } from 'react-router-dom'
import Home from './pages/Home'
import Nosotros from './pages/Nosotros'
import Navbar from './components/Navbar'
import RegistroUsuario from './components/formulario_registro/RegistroUsuario'
import FormularioCompraBoleto from './components/formulario_compra/FormularioCompraBoleto'

const App = () => {
  return (
    <div className="app-container">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route index element={<Home />} />
          <Route path='/Home' element={<Home />} />
          <Route path='/Nosotros' element={<Nosotros />} />
          <Route path="/RegistroUsuario" element={<RegistroUsuario />} /> 
          <Route path="/comprar/:proyeccionId" component={FormularioCompraBoleto} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
