//Keys of the piano
import React from "react";

const PianoKeys = () => {
    //Notes of the keyboard that will reptresent pianokeys
    const notes = ["C", "D", "E", "F", "G", "A", "B"];

    //This console shows which note was pressed
    const playNote = (note) => {
        console.log(`Tocaste la nota: ${note}`)
    };

    return (
        <div className="flex gap-2 justify-center p-4">
            {notes.map((note) => (
                <button
                    key={note}
                    className="bg-gray-200 rounded-lg p-4 shadow-lg hover:bg-gray-300 active:bg-gray-400"
                    onClick={() => playNote(note)}
                    >
                        {note}
                    </button>
            ))}
        </div>
    );
};

//We export the PianoKeys
export default PianoKeys;