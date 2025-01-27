import React, { useEffect, useState } from "react";
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

  const [activeKey, setActiveKey] = useState(null); //Resalts the key

  //Reproduce the sound
  const playNote = (note) => {
    const synth = new Tone.Synth().toDestination();
    synth.triggerAttackRelease(note, "8n");
    console.log(`Tocaste la nota: ${note}`);
  };

  //Listener for the key
  useEffect(() => {
    const handleKeyDown = (event) => {
      const keyObj = keys.find((k) => k.key === event.key); // searchs the pressed key
      if (keyObj) {
        playNote(keyObj.note); // reproducess the note
        setActiveKey(keyObj.key); // Resalt the key
      }
    };

    const handleKeyUp = () => {
      setActiveKey(null); //take the resaltetion off
    };

    window.addEventListener("keydown", handleKeyDown); // listens when a key is pressed
    window.addEventListener("keyup", handleKeyUp); // listens when the key is releassed

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      window.removeEventListener("keyup", handleKeyUp);
    };
  }, [keys]);

  return (
    <div className="flex gap-2 justify-center p-4">
      {keys.map((key) => (
        <button
          key={key.note}
          className={`rounded-lg p-4 shadow-lg ${
            activeKey === key.key
              ? "bg-blue-500 text-white" // style when the key is pressed
              : "bg-gray-200 hover:bg-gray-300 active:bg-gray-400"
          }`}
          onClick={() => playNote(key.note)} // reproduce the note on click
        >
          {key.label} <br /> ({key.key.toUpperCase()})
        </button>
      ))}
    </div>
  );
};

export default PianoKeys;
