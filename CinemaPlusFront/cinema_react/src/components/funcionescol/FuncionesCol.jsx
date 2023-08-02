import React, { useState, useEffect } from 'react';
import './FuncionesCol.css';
import forma from '../../assets/BarbieCol.jpeg';
import forma1 from '../../assets/ETPOSTER.jpeg';
import forma2 from '../../assets/NochDemon.jpeg';
import { Link } from 'react-router-dom';
import FormularioCompraBoleto from '../formulario_compra/FormularioCompraBoleto';

const FuncionesCol = () => {
  const [proyecciones, setProyecciones] = useState([]);
  const [showForm, setShowForm] = useState(false);
  const [selectedProyeccion, setSelectedProyeccion] = useState(null);

  useEffect(() => {
    // Llamada a la API para obtener las proyecciones de la sucursal 1
    fetch('http://34.68.144.122:5000/sucursales/1/proyecciones')
      .then((response) => response.json())
      .then((data) => setProyecciones(data))
      .catch((error) => console.error('Error al obtener las proyecciones:', error));
  }, []);

  const handleCompraBoleto = (proyeccion) => {
    setSelectedProyeccion(proyeccion);
    setShowForm(true); // Cambio a true para mostrar el formulario
  };

  const getImagenUrl = (nombrePelicula) => {
    if (nombrePelicula === 'E.T') {
      return forma1;
    } else if (nombrePelicula === 'La noche del demonio') {
      return forma2;
    } else if (nombrePelicula === 'Barbie') {
      return forma;
    }
    return forma; // Otra imagen por defecto
  };


  const getSinopsis = (nombrePelicula) => {
    
    if (nombrePelicula === 'E.T') {
      return (
        <p>
          Un pequeño ser de otro planeta se queda abandonado en la Tierra cuando su nave se marcha olvidándose de él.
          Tiene miedo. Está completamente solo, pero se hará amigo de un niño,
          que lo esconde en su casa. El niño y sus hermanos intentarán encontrar la forma de que el pequeño extraterrestre 
          regrese a su planeta antes de que los científicos y la policía lo encuentren.
        </p>
      );
    } else if (nombrePelicula === 'La noche del demonio') {
      return (
        <p>
          Cuenta la historia de una familia que se muda a su nueva casa,
          donde comienzan a suceder cosas extrañas. Josh, su esposa Reani 
          y sus tres hijos ya están instalados en su nuevo hogar cuando su hijo mayor cae en estado de coma sin explicación. 
          Es ahí cuando comienzan a producirse, en casa, extraños fenómenos que aterrorizan a la familia.
          Una medium revisa la casa pero les dice que no se trata del típico caso de una casa embrujada, 
          sino de fuerzas del mal que tratan de apoderarse del cuerpo de su hijo mientras su alma se encuentra atrapada
          en algún lugar entre la vida y la muerte en la dimensión astral.
        </p>
      );
    } else if (nombrePelicula === 'Barbie') {
      return (
        <p>
          Seguimos la emocionante travesía de Barbie, una estereotípica muñeca que vive felizmente en la maravillosa comunidad de muñecas de Barbieland.
          Sin embargo, su vida da un giro inesperado cuando es desterrada de su mágica isla cuando todo lo que conoce comienza a derrumbarse.
          Repentinamente, Barbie se encuentra en el mundo real de los humanos, un lugar desconocido y lleno de desafíos.
        </p>
      );
    }
   
    return null;
  };
  return (
    <div className="col-Funciones">
      {proyecciones.map((proyeccion) => (
        <div className="contenedores-container" key={proyeccion.id_proyeccion}>
          {/* Primer contenedor */}
          <div className="contenedor">
            <div className="imagen-container">
              <img src={getImagenUrl(proyeccion.nombre_pelicula)} alt="" />
              <button onClick={() => handleCompraBoleto(proyeccion)} className="link-button">
                Comprar Boleto
              </button>
            </div>
          </div>
          {/* Segundo contenedor */}
          <div className="contenedor">
            <div className="info-container">
              <div className="info-item">Película: {proyeccion.nombre_pelicula}</div>
              <div className="info-item">Sala: {proyeccion.id_proyeccion}</div>
              <div className="info-item">Horario: {proyeccion.horario}</div>
              <div className="info-item">Fecha: {proyeccion.dia}</div>
            </div>
          </div>
          {/* Tercer contenedor */}
          <div className="contenedor">
            <div className="texto-container">
              <div className="texto-item">SINOPSIS: {getSinopsis(proyeccion.nombre_pelicula)}</div>
              <div className="subdiv">
                {/* Puedes mostrar más detalles aquí */}
              </div>
            </div>
          </div>
        </div>
      ))}

      {/* Mostrar un mensaje si no hay proyecciones */}
      {proyecciones.length === 0 && <p>No hay proyecciones disponibles.</p>}

      {/* Mostrar el formulario si showForm es true */}
      {showForm && selectedProyeccion && (
        <FormularioCompraBoleto proyeccion={selectedProyeccion} />
      )}
    </div>
  );
};

export default FuncionesCol;
