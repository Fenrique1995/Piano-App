import { useState } from 'react'
import  PianoKeys  from "./components/PianoKeys.jsx";

//Here below h1 we call the keys for the piano
function App() {
  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center">
      <div className="text-center">
        <h1 className="text-3xl font-bold mb-6">¡Aprende Piano! 🎹</h1>
        <PianoKeys />
      </div>
    </div>
  );
}

export default App