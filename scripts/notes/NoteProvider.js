import { NoteForm } from "./NoteForm.js"

const eventHub = document.querySelector(".container");


const dispatchStateChangeEvent = () => {
    const noteStateChangedEvent = new CustomEvent("noteStateChanged")

    eventHub.dispatchEvent(noteStateChangedEvent)
} 

let notes = [];

export const getNotes = () => {
    return fetch('http://localhost:8088/notes')
        .then(response => response.json())
        .then(parsedNotes => {
            notes = parsedNotes
            // console.log(notes)
        })
    }

export const useNotes = () => {
    return notes.slice()
}

export const saveNote = note => {
    return fetch('http://localhost:8088/notes', {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(note)
    })
    .then(getNotes)
    .then(dispatchStateChangeEvent)
}

// Handle browser-generated click event in component
eventHub.addEventListener("click", clickEvent => {
    if (clickEvent.target.id === "saveNote") {
        // const interviewDate = (document.getElementById("note--interviewDate").value)
        // const timeStamp = Date()
        const suspect = document.getElementById("noteForm--criminal").value
        // const author = document.getElementById("note--author").value
        const text = document.getElementById("note--note").value
        // Make a new object representation of a note
        const newNote = {
            criminalId: parseInt(suspect),
            noteText: text,

            // Key/value pairs here
        }

        // Change API state and application state
        saveNote(newNote)
    }
})

export const deleteNote = noteId => {
    console.log(`http://localhost:8088/notes/${noteId}`);
    return fetch(`http://localhost:8088/notes/${noteId}`, {
        method: "DELETE"
    })
    .then(getNotes)
}