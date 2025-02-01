import React, { useState } from "react";
import { ChevronDownIcon } from "@heroicons/react/24/solid";
import image from "../assets/img/partitura.png";

const SheetMusic = () => {
  const [showText, setShowText] = useState(false);

  return (
    <div className="text-center p-8 mt-8">
      <h1 className="text-2xl sm:text-4xl md:text-5xl lg:text-6xl">Partituras</h1>
      <p className="text-lg mb-6">Aquí puedes encontrar partituras para aprender a tocar las canciones en el piano.</p>
      <div className="max-w-4xl mx-auto">
        <img src={image} alt="Partitura" className="w-full h-auto mb-4" />
        <button 
          className="w-full lg:w-[65rem] flex items-center justify-between rounded-lg p-4 shadow-lg mt-2 bg-blue-500 transition-all duration-300 mx-auto"
          onClick={() => setShowText(!showText)}
        >
          <ChevronDownIcon className="w-5 h-5" />
          <span className="flex-1 text-center">¿Cómo se hacen las Partituras?</span>
          <ChevronDownIcon className="w-5 h-5" />
        </button>
        {showText && (
          <div className="mt-4 p-4 bg-gray-100 rounded-lg shadow-md text-left">
            <p>
              Las partituras se crean mediante notación musical en un pentagrama, 
              utilizando símbolos para representar notas, tiempos y dinámicas. 
              Puedes escribirlas a mano o con software como MuseScore o Finale.
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default SheetMusic;