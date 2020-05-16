import React from "react";
import illustration from '../imgs/undraw_projections_7g6a.svg';

export default () => (
  <header className="bg-gray-300">
    <div className="container mx-auto p-12 max-w-4xl flex justify-center items-center">
      <div className="flex-1">
        <h1 className="font-bold text-blue-900 text-6xl">¡Hola! Soy Daniel Quintero</h1>
        <p className="text-xl font-light">Desarrollador de software e Ingeniero Industrial</p>
      </div>
      <img src={illustration} alt="Hombre señalando una pantalla" style={{height: "300px"}}></img>
    </div>
  </header>
)
