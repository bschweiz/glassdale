import { getNotes, useNotes } from "./NoteProvider.js"
import { NoteHTMLCard } from "./NoteHTMLConverter.js"
const entriesContainer = document.querySelector(".noteDisplayContainer")
const eventHub = document.querySelector(".container")

eventHub.addEventListener("noteStateChanged", () => NoteList())

export const NoteList = () => {
    getNotes()
    .then(() => {
        const allNotes = useNotes()
        render(allNotes)
    })
}

const render = (notesArray) => {
    let notesHTMLRepresentations = ""
    for (const note of notesArray) {
        notesHTMLRepresentations += NoteHTMLCard(note)
    }
    entriesContainer.innerHTML = `
        <section class="notesList">
        <h3>NOTES OF GLASSDALE</h3>
        <br>
        <div class="noteCard">
        ${notesHTMLRepresentations}
        </div>
        </section>
        `
}
        
