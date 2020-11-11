import { deleteNote, getNotes, useNotes } from "./NoteProvider.js"

import { getCriminals, useCriminals } from '../criminals/CriminalProvider.js'
const entriesContainer = document.querySelector(".noteDisplayContainer")
const eventHub = document.querySelector(".container")

eventHub.addEventListener("noteStateChanged", () => NoteList())

const render = (notesArray, criminalArray) => {
    entriesContainer.innerHTML = notesArray.map(note => {
        const matchedCriminal = criminalArray.find(criminal => criminal.id === note.criminalId)
        // debugger

        // console.log(matchedCriminal)
        return ` 
        <div class="noteCard">
        <div class="note">
        
        <p>Suspect: ${matchedCriminal.name}</p>
        <p>Note: ${note.noteText}</p>
        </div>
        <button id="deleteBtn--${note.id}">Delete Note</button>
        </div>
        `
    })
}
{/* <h5>Note ID: ${note.id}</h5> */}
export const NoteList = () => {
    getNotes()
        .then(getCriminals)
        .then(() => {
            const notes = useNotes()
            const criminals = useCriminals()
            render(notes, criminals)
        })
}


eventHub.addEventListener("click", clickEvent => {
    
    if (clickEvent.target.id.startsWith("deleteBtn--")) {
        const[prefix, id] = clickEvent.target.id.split("--")
        console.log(id);
        deleteNote(id).then(
            () => {
                const updatedNotes = useNotes()
                const criminals = useCriminals()
                render(updatedNotes, criminals)
                }
            )
        }    
    }
)