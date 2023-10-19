import React, {useState, useEffect} from "react";
import './notes.scss';

const getNoteCount = () => {
    let count = 0;

    for (let i in localStorage) {
        if (i.startsWith('notes')) {
            count++;
        }
    }

    return count;
}

const grabNotes = () => {
    let notes = {};
    for (let i in localStorage) {
        if (i.startsWith('notes')) {
            notes[i] = localStorage.getItem(i)
        }
    }

    return notes;
};

const Notes = () => {
    const [mode, setMode] = useState('writer');
    const [currNote, setCurrNote] = useState('notes-0');
    const [writerText, setWriterText] = useState('');
    const [notes, setNotes] = useState({});

    const handleModeChange = (e) => {
        e.stopPropagation();
        if (e.target.value === 'reader' && Object.keys(notes).length === 0) { return };
        setMode(e.target.value);
    };

    const handleNewNote = (e) => {
        e.stopPropagation();
        e.preventDefault();
        
        let count = getNoteCount()
        localStorage.setItem(`notes-${count}`, writerText);
        setMode(() => {
            setNotes(grabNotes());
            setCurrNote(`notes-${count}`);
            setWriterText('');
            return 'reader'
        })

    };

    useEffect(() => {
        setNotes(grabNotes());
    }, []);

    const writer = (
        <div className="notes-writer">
            <textarea defaultValue={writerText} onChange={e => setWriterText(e.target.value)} />
            <button onClick={handleNewNote}>Create Note</button>
        </div>
    );

    const createReaderIdx = () => {
        let idxs = [];
        let idx = 1;
        
        for (let i in notes) {
            idxs.push(
                <li
                    key={i}
                    onClick={()=>(setCurrNote(i))}
                    className={currNote === i ? 'notes-active' : ''}
                    >
                    {idx}
                </li>
            );
            idx++;
        };

        return idxs;
    };

    const reader = (
        <div className="notes-reader">
            <ol>
                {createReaderIdx()}
            </ol>
            <div>
                {notes[currNote]}
            </div>
        </div>
    );

    return (
        <div className="notes-block">
            <div className="notes-header-buttons">
                <button
                    onClick={handleModeChange}
                    value="writer"
                    className={mode === 'writer' ? 'notes-active' : ''}
                >writer</button>
                <button
                    onClick={handleModeChange}
                    value="reader"
                    className={
                        `
                            ${mode === 'reader' ? 'notes-active' : ''}
                            ${Object.keys(notes).length === 0 ? 'notes-deactivate' : ''}
                        `
                    }
                >reader</button>
            </div>
            {mode === 'writer' ? writer : reader}
        </div>
    );
};

export default Notes;