import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Slider from './components/slider/Slider';
import NavFechas from './components/navfechas/Navfechas'; // Importa el componente NavFechas
import FuncionesCol from './components/funcionescol/FuncionesCol';
import Nosotros from './pages/Nosotros';


const slides = [
  { url: "/src/assets/image-1.jpg", title: "beach" },
  { url: "/src/assets/image-2.jpg", title: "boat" },
  { url: "/src/assets/image-3.jpg", title: "forest" },
];

export default class App extends Component {
  render() {
    return (
      <Router>
        <div className="app-container">
          <Navbar />
          <div className="containerslide">
            <Slider slides={slides} />
          </div>
          <div className="content-container">
            <NavFechas />
            <FuncionesCol/>
          </div>
        </div>
      </Router>
    );
  }
}