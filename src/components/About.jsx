import React from "react";

const About = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-4 bg-gray-50 pt-16">
      <div className="container mx-auto max-w-xs sm:max-w-full">
        <h1 className="text-lg md:text-2xl lg:text-3xl font-bold mb-6 text-center text-gray-800">
          Sobre la Aplicación
        </h1>
      </div>
      <div className="container mx-auto max-w-xs sm:max-w-full">
        <p className="text-base md:text-lg text-center text-gray-700">
          Esta aplicación te ayudará a aprender a tocar el piano de una manera
          divertida e interactiva. Puedes hacer clic en las teclas o presionar
          las teclas del teclado para reproducir notas.
        </p>
      </div>
    </div>
  );
};

export default About;