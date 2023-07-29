import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

export default class Navbar extends Component {
  state = {
    selectedCity: 'Veracruz' // Valor inicial por defecto
  };

  // Función para manejar el cambio de ciudad seleccionada
  handleCityChange = (event) => {
    this.setState({
      selectedCity: event.target.value
    });
  };

  render() {
    const { selectedCity } = this.state;

    return (
      <nav className="navbar">
        <div className="container">
          <div className="header">
            <img className="img_logo" src="https://img.icons8.com/officel/80/000000/photo-reel.png" alt="logo" />
            <h1 className="logo_text">CinemaPlus</h1>
          </div>
          <div className="main_nav">
            <div className="menu_btn">
              <span onClick={this.moveMenu}>&#9776;</span>
            </div>
            <ul id="nav" className="nav">
              <li className="encabezado li_nav">
                <Link className="nav_link" to="/Cartelera">
                  En cartelera
                </Link>
              </li>
              <li className="encabezado li_nav">
                <Link className="nav_link" to="/Proximamente">
                  Próximamente
                </Link>
              </li>
              <li className="encabezado li_nav">
                <Link className="nav_link" to="/Nosotros">
                  Nosotros
                </Link>
              </li>
            </ul>
          </div>
           <div className="city_select_container">
              <label className='label_font' htmlFor="citySelect">Selecciona tu ciudad:</label>
              <select id="citySelect" className="citySelect" value={selectedCity} onChange={this.handleCityChange}>
                <option value="Veracruz">Veracruz</option>
                <option value="Orizaba">Orizaba</option>
                <option value="Xalapa">Xalapa</option>
              </select>
            </div>
        </div>
      </nav>
    );
  }
}
