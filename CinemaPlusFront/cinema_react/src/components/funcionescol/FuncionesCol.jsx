import React, { useState, useEffect } from 'react';
import './FuncionesCol.css';
import forma from '../../assets/BarbieCol.jpeg';
import forma1 from '../../assets/ETPOSTER.jpeg';
import forma2 from '../../assets/NochDemon.jpeg';
import { Link } from 'react-router-dom'; 

const FuncionesCol = () => {
  const [proyecciones, setProyecciones] = useState([]);

  useEffect(() => {
    // Llamada a la API para obtener las proyecciones de la sucursal 1
    fetch('http://34.68.144.122:5000/sucursales/1/proyecciones')
      .then((response) => response.json())
      .then((data) => setProyecciones(data))
      .catch((error) => console.error('Error al obtener las proyecciones:', error));
  }, []);

  const handleCompraBoleto = (proyeccion) => {
    // Aquí puedes enviar los datos de la proyección al backend
    const data = {
      nombre: proyeccion.nombre_pelicula,
      // Agrega los datos adicionales que necesites enviar al backend
    };

    // Realiza la llamada a la API para registrar la compra del boleto
    fetch('/registrar_usuario', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    })
      .then((response) => response.json())
      .then((data) => {
        // Aquí puedes manejar la respuesta del backend si es necesario
        console.log('Respuesta del backend:', data);
      })
      .catch((error) => {
        console.error('Error al registrar la compra del boleto:', error);
      });
  };

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
  const getSinopsis = (nombrePelicula) => {
    // Aquí puedes definir un mapeo entre el nombre de la película y la URL de la imagen
    // Por ejemplo, si tienes las imágenes almacenadas localmente, podrías hacer algo como esto:
    if (nombrePelicula === 'E.T') {
      return <p>Un pequeño ser de otro planeta se queda abandonado 
        en la Tierra cuando su nave se marcha olvidándose de él.<p>
        </p>Tiene miedo. Está completamente solo, pero se hará amigo de un niño,
          que lo esconde en su casa. El niño y sus hermanos intentarán encontrar la forma de que el pequeño extraterrestre 
          regrese a su planeta antes de que los científicos y la policía lo encuentren.</p>
    } else if (nombrePelicula === 'La noche del demonio') {
      return <p>Cuenta la historia de una familia que se muda a su nueva casa,
         donde comienzan a suceder cosas extrañas. Josh, su esposa Reani 
         y sus tres hijos ya están instalados en su nuevo hogar cuando su hijo mayor cae en estado de coma sin explicación. 
         Es ahí cuando comienzan a producirse, en casa, extraños fenómenos que aterrorizan a la familia.
          Una medium revisa la casa pero les dice que no se trata del típico caso de una casa embrujada, 
          sino de fuerzas del mal que tratan de apoderarse del cuerpo de su hijo mientras su alma se encuentra atrapada
           en algún lugar entre la vida y la muerte en la dimensión astral.</p>
    } else if (nombrePelicula === 'Barbie') {
      return <p>Seguimos la emocionante travesía de Barbie, una estereotípica muñeca que vive felizmente en la maravillosa comunidad de muñecas de Barbieland.
         Sin embargo, su vida da un giro inesperado cuando es desterrada de su mágica isla cuando todo lo que conoce comienza a derrumbarse.
         Repentinamente, Barbie se encuentra en el mundo real de los humanos, un lugar desconocido y lleno de desafíos.</p>
    }
   
    return
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
              <Link to="/formulario">
                <button className="link-button" onClick={() => handleCompraBoleto(proyeccion)}>Comprar Boleto</button>
              </Link>
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
              <div className="texto-item">SINOPSIS:{getSinopsis(proyeccion.nombre_pelicula)}</div>
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
