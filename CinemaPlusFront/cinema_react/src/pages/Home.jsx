// pages/Home.js
import React from 'react';
import Slider from '../components/slider/Slider';
//import NavFechas from '../components/navfechas/Navfechas';
import FuncionesCol from '../components/funcionescol/FuncionesCol';

const slides = [
  { url: "/src/assets/image-1.jpg", title: "beach" },
  { url: "/src/assets/image-2.jpg", title: "boat" },
  { url: "/src/assets/image-3.jpg", title: "forest" },
];

const Home = () => {
  return (
    <div>
      <Slider slides={slides} />
      <FuncionesCol />
    </div>
  );
};

export default Home;
