import React, { useState, useEffect } from 'react';
import './FuncionesCol.css';
import forma from '../../assets/BarbieCol.jpeg';
import forma1 from '../../assets/ETPOSTER.jpeg';
import forma2 from '../../assets/NochDemon.jpeg';

const FuncionesCol = () => {
  const [proyecciones, setProyecciones] = useState([]);

  useEffect(() => {
    // Llamada a la API para obtener las proyecciones de la sucursal 1
    fetch('/sucursales/1/proyecciones')
      .then((response) => response.json())
      .then((data) => setProyecciones(data))
      .catch((error) => console.error('Error al obtener las proyecciones:', error));
  }, []);

  // Función para obtener la URL de la imagen según el nombre de la película
  const getImagenUrl = (nombrePelicula) => {
    // Aquí puedes definir un mapeo entre el nombre de la película y la URL de la imagen
    // Por ejemplo, si tienes las imágenes almacenadas localmente, podrías hacer algo como esto:
    if (nombrePelicula === 'E.T') {
      return forma1;
    } else if (nombrePelicula === 'La noche del demonio') {
      return forma2;
    } else if (nombrePelicula === 'Barbie') {
      return forma;
    }
    // Si la película no coincide con ninguna de las anteriores, puedes devolver una imagen por defecto
    return forma; // Otra imagen por defecto
  };

  return (
    <div className='col-Funciones'>
      {proyecciones.map((proyeccion) => (
        <div className="contenedores-container" key={proyeccion.id_proyeccion}>
          {/* Primer contenedor */}
          <div className="contenedor">
            <div className="imagen-container">
              {/* Utiliza la función getImagenUrl para obtener la URL de la imagen según la película */}
              <img src={getImagenUrl(proyeccion.nombre_pelicula)} alt="" />
              <button className="link-button">Enlace</button>
            </div>
          </div>
          {/* Segundo contenedor */}
          <div className="contenedor">
            <div className="info-container">
              {/* Aquí puedes utilizar la información de la proyección para mostrar los detalles */}
              <div className="info-item">Película: {proyeccion.nombre_pelicula}</div>
              <div className="info-item">Sala: {proyeccion.id_proyeccion}</div>
              <div className="info-item">Horario: {proyeccion.horario}</div>
              <div className="info-item">Fecha: {proyeccion.dia}</div>
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
