import React, { useState, useEffect } from 'react';
import './FuncionesCol.css';
var forma = require('../../assets/BarbieCol.jpeg');

const FuncionesCol = () => {
  const [proyecciones, setProyecciones] = useState([]);

  useEffect(() => {
    // Llamada a la API para obtener las proyecciones de la sucursal 1
    fetch('http://34.68.144.122:5000/sucursales/1/proyecciones')
      .then((response) => response.json())
      .then((data) => setProyecciones(data))
      .catch((error) => console.error('Error al obtener las proyecciones:', error));
  }, []);

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
              <div className="info-item">Películula: {proyeccion.nombre_pelicula}</div>
              <div className="info-item">Sala: {proyeccion.id_proyeccion}</div>
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
      {proyecciones.length === 0 && <p>No hay proyecciones disponibles.</p>}
    </div>
  );
};

export default FuncionesCol;
