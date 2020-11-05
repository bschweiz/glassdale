import { getNotes, useNotes } from "./NoteProvider.js"

import { getCriminals, useCriminals } from '../criminals/CriminalProvider.js'
const entriesContainer = document.querySelector(".noteDisplayContainer")
const eventHub = document.querySelector(".container")

eventHub.addEventListener("noteStateChanged", () => NoteList())

const render = (notesArray, criminalArray) => {
    entriesContainer.innerHTML = notesArray.map(note => {
        const matchedCriminal = criminalArray.find(criminal => criminal.id === note.criminalId)
        // debugger

        console.log(matchedCriminal)
    return ` 
        <div class="noteCard">
        <div class="note">
        <h5>Note ID: ${note.id}</h5>
        <p>Suspect: ${matchedCriminal.name}</p>
        <p>Note: ${note.noteText}</p>
        </div>
        </div>
        `
    })
}

export const NoteList = () => {
    getNotes()
        .then(getCriminals)
        .then(() => {
            const notes = useNotes()
            const criminals = useCriminals()  
        render(notes, criminals)
        })
}


// const render = (noteCollection, criminalCollection) => {
//     entriesContainer.innerHTML = noteCollection.map(note => {
//         // Find the related criminal
//         const relatedCriminal = criminalCollection.find(criminal => criminal.id === note.criminalId)
// console.log(relatedCriminal)
//         return `
//             <section class="note">
//                 <h2>Note about ${relatedCriminal.name}</h2>
//                 ${note.noteText}
//             </section>
//         `
//     })
// }