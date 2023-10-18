import React, {useState} from "react";
import './notes.scss';



const Notes = () => {
    const [mode, setMode] = useState('writer');

    const handleModeChange = (e) => {
        e.stopPropagation()
        setMode(e.target.value)
    };

    const writer = (
        <>
        <textarea></textarea>
        <button>create note</button>
        </>
    );

    const reader = (
        <div>this is the reader</div>
    );

    return (
        <div className="notes-block">
            <div className="notes-header-buttons">
                <button onClick={handleModeChange} value="writer" className={mode === 'writer' ? 'notes-active' : ''}>writer</button>
                <button onClick={handleModeChange} value="reader" className={mode === 'reader' ? 'notes-active' : ''}>reader</button>
            </div>
            {mode === 'writer' ? writer : reader}
        </div>
    );
};

export default Notes;