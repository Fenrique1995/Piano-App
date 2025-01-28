import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import  PianoKeys  from "./components/PianoKeys.jsx";
import Navbar from './components/Navbar.jsx';
import About from './components/About.jsx';
import SheetMusic from './components/SheetMusic.jsx';

//Here below h1 we call the keys for the piano
function App() {
  return (
    <Router>
    <Navbar />
    <div className="min-h-screen bg-gray-100 flex items-center justify-center">
    <Routes>
    {/* Ruta principal */}
    <Route path="/" element={
      <div className="text-center">
      <h1 className="text-3xl font-bold mb-6">¡Aprende Piano! 🎹</h1>
      <PianoKeys />
      </div>
    } />
    {/* Ruta para la página About */}
    <Route path="/about" element={<About />} />
    {/* Ruta para la página Sheet Music */}
    <Route path="/sheet-music" element={<SheetMusic />} />
    </Routes>
</div>
</Router>
  );
}

export default App