import React from "react";

const SheetMusic = () => {
    return(
        <div className="text-center p-8">
            <h1 className="text-3xl font-bold mb-4">Partituras</h1>
            <p className="text-lg mb-6">Aquí puedes encontrar partituras para aprender a tocar las canciones en el piano.
            </p>
            <div className="max-w-4xl mx-auto">
                {/* Ejemplo de imagen de partitura */}
                <img src="./src/assets/img/partitura.png" alt="Partitura" className="w-full h-auto" />
            </div>
        </div>
    );
};

export default SheetMusic;