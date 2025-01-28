import React, { useEffect, useState, useRef } from "react";
import * as Tone from "tone";

const PianoKeys = () => {
  // Notes
  const keys = [
    { note: "C4", label: "Do", key: "a" },
    { note: "D4", label: "Re", key: "s" },
    { note: "E4", label: "Mi", key: "d" },
    { note: "F4", label: "Fa", key: "f" },
    { note: "G4", label: "Sol", key: "g" },
    { note: "A4", label: "La", key: "h" },
    { note: "B4", label: "Si", key: "j" },
  ];

  const [activeKey, setActiveKey] = useState(null); // Resalts the note
  const synthRef = useRef(new Tone.Synth().toDestination()); // Sinthetyzer

  // Plays the Note
  const startNote = (note) => {
    synthRef.current.triggerAttack(note); 
    console.log(`Nota iniciada: ${note}`);
  };

  // Stops the Note
  const stopNote = () => {
    synthRef.current.triggerRelease(); 
    console.log(`Nota detenida`);
  };

  // Listener for the Keys
  useEffect(() => {
    const handleKeyDown = (event) => {
      const keyObj = keys.find((k) => k.key === event.key); // Searchs the key
      if (keyObj && activeKey !== keyObj.key) {
        startNote(keyObj.note); 
        setActiveKey(keyObj.key); 
      }
    };

    const handleKeyUp = (event) => {
      const keyObj = keys.find((k) => k.key === event.key); 
      if (keyObj && activeKey === keyObj.key) { 
        stopNote(); 
        setActiveKey(null); 
      }
    };

    window.addEventListener("keydown", handleKeyDown); // Listens which key was pressed
    window.addEventListener("keyup", handleKeyUp); // Listens which key was released

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      window.removeEventListener("keyup", handleKeyUp);
    };
  }, [activeKey]); 

  return (
    <div className="flex gap-2 justify-center p-4">
      {keys.map((key) => (
        <button
          key={key.note}
          className={`rounded-lg p-4 shadow-lg ${
            activeKey === key.key
              ? "bg-blue-500 text-white" // Style for the active key
              : "bg-gray-200 hover:bg-gray-300 active:bg-gray-400"
          }`}
          onMouseDown={() => startNote(key.note)} // Play note on click
          onMouseUp={() => stopNote()} // Stops the Note
          onMouseLeave={() => stopNote()} // Stops the Note
        >
          {key.label} <br /> ({key.key.toUpperCase()})
        </button>
      ))}
    </div>
  );
};

export default PianoKeys;
