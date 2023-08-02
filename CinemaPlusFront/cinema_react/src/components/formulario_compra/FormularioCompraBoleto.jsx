import React, { useState } from 'react';
import './FormularioCompraBoleto';

const FormularioCompraBoleto = ({ proyeccion }) => {
  const [clienteCorreo, setClienteCorreo] = useState('');
  const [clienteNumeroTarjeta, setClienteNumeroTarjeta] = useState('');
  const [nombreAsiento, setNombreAsiento] = useState('');
  const [mensaje, setMensaje] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    // Validar que todos los campos estén llenos
    if (!clienteCorreo || !clienteNumeroTarjeta || !nombreAsiento) {
      setMensaje('Todos los campos son requeridos');
      return;
    }

    // Crear una nueva solicitud de compra de boleto
    const form = document.createElement('form');
    form.action = 'http://34.68.144.122:5000/comprar_boleto';
    form.method = 'POST';

    const inputCorreo = document.createElement('input');
    inputCorreo.type = 'text';
    inputCorreo.name = 'correo';
    inputCorreo.value = clienteCorreo;
    form.appendChild(inputCorreo);

    const inputNumeroTarjeta = document.createElement('input');
    inputNumeroTarjeta.type = 'text';
    inputNumeroTarjeta.name = 'numero_tarjeta';
    inputNumeroTarjeta.value = clienteNumeroTarjeta;
    form.appendChild(inputNumeroTarjeta);

    const inputAsiento = document.createElement('input');
    inputAsiento.type = 'text';
    inputAsiento.name = 'asiento';
    inputAsiento.value = nombreAsiento;
    form.appendChild(inputAsiento);

    const inputProyeccion = document.createElement('input');
    inputProyeccion.type = 'hidden';
    inputProyeccion.name = 'proyeccion';
    inputProyeccion.value = proyeccion.id_proyeccion;
    form.appendChild(inputProyeccion);

    document.body.appendChild(form);
    form.submit();
  };

  return (
    <div className="formulario-compra-container">
      <h2>Comprar Boleto</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-control">
          <label htmlFor="clienteCorreo">Correo Electrónico:</label>
          <input
            type="email"
            id="clienteCorreo"
            value={clienteCorreo}
            onChange={(e) => setClienteCorreo(e.target.value)}
            required
          />
        </div>
        <div className="form-control">
          <label htmlFor="clienteNumeroTarjeta">Número de Tarjeta:</label>
          <input
            type="text"
            id="clienteNumeroTarjeta"
            value={clienteNumeroTarjeta}
            onChange={(e) => setClienteNumeroTarjeta(e.target.value)}
            required
          />
        </div>
        <div className="form-control">
          <label htmlFor="nombreAsiento">Nombre del Asiento:</label>
          <input
            type="text"
            id="nombreAsiento"
            value={nombreAsiento}
            onChange={(e) => setNombreAsiento(e.target.value)}
            required
          />
        </div>
        <button type="submit">Comprar Boleto</button>
      </form>
      {mensaje && <p>{mensaje}</p>}
    </div>
  );
};

export default FormularioCompraBoleto;
