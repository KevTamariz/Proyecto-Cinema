import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

export default class Navbar extends Component {
  state = {
    selectedSucursal: 1,
    proyecciones: [],
  };

  componentDidMount() {
    // Llamada a la API para obtener las proyecciones de la sucursal seleccionada
    this.fetchProyecciones();
  }

  componentDidUpdate(prevProps, prevState) {
    // Si cambia la sucursal seleccionada, actualizar las proyecciones
    if (prevState.selectedSucursal !== this.state.selectedSucursal) {
      this.fetchProyecciones();
    }
  }

  fetchProyecciones() {
    const { selectedSucursal } = this.state;
    // Reemplaza 'URL_DE_TU_API' con la URL real de tu API para obtener las proyecciones
    fetch(`/sucursales${selectedSucursal}/proyecciones`)
      .then((response) => response.json())
      .then((data) => this.setState({ proyecciones: data }))
      .catch((error) => console.error('Error al obtener las proyecciones:', error));
  }

  handleSucursalChange = (event) => {
    const selectedSucursal = parseInt(event.target.value);
    this.setState({ selectedSucursal });
  };

  render() {
    const { selectedSucursal, proyecciones } = this.state;

    return (
      <nav className="navbar">
        <div className="container">
          <div className="header">
            <img
              className="img_logo"
              src="https://img.icons8.com/officel/80/000000/photo-reel.png"
              alt="logo"
            />
            <h1 className="logo_text">CinemaPlus</h1>
          </div>
          <div className="main_nav">
            <div className="menu_btn">
              <span onClick={this.moveMenu}>&#9776;</span>
            </div>
            <ul id="nav" className="nav">
              <li className="encabezado li_nav">
                <Link className="nav_link" to="/Home">
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
          {/* Select para seleccionar la sucursal */}
          <div className="sucursal_select_container">
            <label className="label_font" htmlFor="sucursalSelect">
              Selecciona tu sucursal:
            </label>
            <select
              id="sucursalSelect"
              className="sucursalSelect"
              value={selectedSucursal}
              onChange={this.handleSucursalChange}
            >
              <option value={1}>Veracruz</option>
              <option value={2}>Orizaba</option>
              <option value={3}>Xalapa</option>
            </select>
          </div>
        </div>
        {/* Muestra las proyecciones si existen */}
        {proyecciones.length > 0 ? (
          <div className="proyecciones">
            {proyecciones.map((proyeccion) => (
              <div key={proyeccion.id_proyeccion}>
                <p>Día: {proyeccion.dia}</p>
                <p>Horario: {proyeccion.horario}</p>
                <p>Película ID: {proyeccion.pelicula_id}</p>
                <p>Sala ID: {proyeccion.sala_id}</p>
                <p>Sucursal ID: {proyeccion.sucursal_id}</p>
              </div>
            ))}
          </div>
        ) : (
          // Mostrar mensaje si no hay proyecciones disponibles
          <p>No hay proyecciones disponibles.</p>
        )}
      </nav>
    );
  }
}
