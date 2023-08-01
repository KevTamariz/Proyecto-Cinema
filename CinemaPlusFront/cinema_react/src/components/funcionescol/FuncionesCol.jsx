import React, { useState, useEffect } from 'react';
import './FuncionesCol.css';

var forma = require('../../assets/BarbieCol.jpeg');
var forma1 = require('../../assets/ETPOSTER.jpeg');
var forma2 = require('../../assets/GranTorino.jpg');
var forma3 = require('../../assets/NochDemon.jpeg');
var forma4 = require('../../assets/FreeGuy.jpg');

const FuncionesCol = ({ selectedSucursal }) => {
  const [proyecciones, setProyecciones] = useState([]);

  useEffect(() => {
    fetch(`/sucursales/${selectedSucursal}/proyecciones`)
      .then((response) => {
        if (!response.ok) {
          throw new Error('Error al obtener las proyecciones');
        }
        return response.json();
      })
      .then((data) => setProyecciones(data))
      .catch((error) => console.error(error));
  }, [selectedSucursal]);
  
  return (
    <div className='col-Funciones'>
      {proyecciones.map((proyeccion) => (
        <div className="contenedores-container" key={proyeccion.id_proyeccion}>
          {/* Primer contenedor */}
          <div className="contenedor">
            <div className="imagen-container">
              {/* Aquí puedes utilizar la información de la proyección para mostrar la imagen */}
              <img src={forma} alt="" />
              <button className="link-button">Enlace</button>
            </div>
          </div>
          {/* Segundo contenedor */}
          <div className="contenedor">
            <div className="info-container">
              {/* Aquí puedes utilizar la información de la proyección para mostrar los detalles */}
              <div className="info-item">Película: {proyeccion.pelicula_id}</div>
              <div className="info-item">Sala: {proyeccion.sala_id}</div>
              <div className="info-item">Horario: {proyeccion.horario}</div>
            </div>
          </div>
          {/* Tercer contenedor */}
          <div className="contenedor">
            <div className="texto-container">
              {/* Aquí puedes agregar más información relacionada con la proyección */}
              <div className="texto-item">Más información</div>
              <div className="subdiv">
                {/* Puedes mostrar más detalles aquí */}
              </div>
            </div>
          </div>
          {/* Repite los contenedores restantes de la misma manera */}
        </div>
      ))}
      {/* Mostrar un mensaje si no hay proyecciones */}
      {proyecciones.length === 0 && <p>No hay proyecciones disponibles :c.</p>}
    </div>
  );
};

export default FuncionesCol;
