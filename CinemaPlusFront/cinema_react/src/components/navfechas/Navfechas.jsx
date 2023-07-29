import React from 'react';
import './NavFechas.css';

const NavFechas = () => {
  return (
    <div className="function-buttons-container">
      <h2 className="functions">FUNCIONES</h2>
      <div className="buttons-group">
        <button className="btn-fun">HOY</button>
        <button className="btn-fun">MAÑANA</button>
        <button className="btn-fun">CALENDARIO</button>
      </div>
    </div>
  );
};

export default NavFechas;
