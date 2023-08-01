// pages/Home.js
import React from 'react';
import Slider from '../components/slider/Slider';
import NavFechas from '../components/navfechas/Navfechas';
import FuncionesCol from '../components/funcionescol/FuncionesCol';


const Home = () => {
  return (
    <div>
      <Slider/>
      <NavFechas />
      <FuncionesCol />
    </div>
  );
};

export default Home;
