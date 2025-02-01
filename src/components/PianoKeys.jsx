import React, { useEffect, useState, useRef } from "react";
import * as Tone from "tone";

const PianoKeys = () => {
  const keys = [
    { note: "C4", label: "Do", key: "a" },
    { note: "D4", label: "Re", key: "s" },
    { note: "E4", label: "Mi", key: "d" },
    { note: "F4", label: "Fa", key: "f" },
    { note: "G4", label: "Sol", key: "g" },
    { note: "A4", label: "La", key: "h" },
    { note: "B4", label: "Si", key: "j" },
  ];

  const [activeKey, setActiveKey] = useState(null);
  const synthRef = useRef(new Tone.Synth().toDestination());

  const startNote = (note) => {
    synthRef.current.triggerAttack(note);
    console.log(`Nota iniciada: ${note}`);
  };

  const stopNote = () => {
    synthRef.current.triggerRelease();
    console.log(`Nota detenida`);
  };

  useEffect(() => {
    const handleKeyDown = (event) => {
      const keyObj = keys.find((k) => k.key === event.key);
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

    window.addEventListener("keydown", handleKeyDown);
    window.addEventListener("keyup", handleKeyUp);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      window.removeEventListener("keyup", handleKeyUp);
    };
  }, [activeKey]);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-4">
      <h1 className="text-3xl font-bold mb-6 text-center hidden sm:block">¡Aprende Piano! 🎹</h1>
      <div className="grid grid-cols-1 sm:grid-cols-8 gap-1 sm:flex sm:flex-row justify-center w-full max-w-screen-md">
        {keys.map((key) => (
          <button
            key={key.note}
            className={`rounded-lg p-4 shadow-lg m-1 w-full sm:w-auto ${
              activeKey === key.key
                ? "bg-blue-500 text-white"
                : "bg-gray-200 hover:bg-gray-300 active:bg-gray-400"
            }`}
            onMouseDown={() => startNote(key.note)}
            onMouseUp={() => stopNote()}
            onMouseLeave={() => stopNote()}
          >
            {key.label} <br className="hidden sm:block" /> ({key.key.toUpperCase()})
          </button>
        ))}
      </div>
    </div>
  );
};

export default PianoKeys;
