import React, {useState, useEffect} from "react";
import './notes.scss';

const getNextIdx = () => {
    let seen = new Set();

    for (let i in localStorage) {
        if (i.startsWith('notes')) {
            seen.add(Number(i.split('-')[1]))
        }
    }

    let idx = 0;
    while (seen.has(idx)) {
        idx++;
    }

    return idx;
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
    const [currNote, setCurrNote] = useState('notes-0');
    const [currText, setCurrText] = useState('');
    const [notes, setNotes] = useState({});

    const handleNewNote = (e) => {
        e.stopPropagation();
        e.preventDefault();
        
        let idx = getNextIdx();
        localStorage.setItem(`notes-${idx}`, '');
        setNotes(grabNotes());
        setCurrNote(`notes-${idx}`);

    };

    useEffect(() => {
        let n = grabNotes();
        if (Object.keys(n) === 0) {
            n['notes-0'] = '';
            localStorage.setItem('notes-0', '');
        };

        setNotes(grabNotes());
        setCurrText(notes[currNote]);
    }, [currNote]);


    const createReaderIdx = () => {
        let idxs = [];
        let idx = 1;
        let orderedNotes = Object.keys(notes).sort()

        for (let i of orderedNotes) {
            idxs.push(
                <li
                    key={i}
                    onClick={()=>{setCurrNote(i)}}
                    className={currNote === i ? 'notes-active' : ''}
                    >
                    {idx}
                </li>
            );
            idx++;
        };

        return idxs;
    };

    const handleNoteDelete = (e) => {
        e.stopPropagation();
        if (Object.keys(notes).length === 1) {
            setCurrText('');
            localStorage.setItem(currNote, '');
        } else {
            localStorage.removeItem(currNote);
            delete notes[currNote];

            let lastNote = Object.keys(notes).sort()[Object.keys(notes).length-1]
            setCurrNote(lastNote);
            setCurrText(notes[lastNote]);
        }
    };

    const handleNoteChange = (e) => {
        e.stopPropagation();
        
        setCurrText(() => {
            localStorage.setItem(currNote, e.target.value);
            return e.target.value
        });
    };
    
    return (
        <div className="notes-block">
            <div className="notes-reader">
                <ol>
                    {createReaderIdx()}
                </ol>
                <textarea className="notes-reader-box" onChange={handleNoteChange} value={currText}/>
                <div className="notes-reader-options">
                    <button><span className="material-symbols-outlined" onClick={handleNoteDelete}>delete</span></button>
                    <button><span className="material-symbols-outlined" onClick={handleNewNote}>add_circle</span></button>
                </div>
            </div>
        </div>
    );
};

export default Notes;