import { getNotes } from "./NoteProvider.js"
import { NoteHTMLCard } from "./NoteHTMLConverter.js"
const notesContainer = document.querySelector(".noteFormContainer")
const eventHub = document.querySelector(".container")

eventHub.addEventListener("noteStateChanged", () => NoteList())

export const NoteList = () => {
    getNotes()
    .then(() => {
        const allNotes = "testforNoteList function"
        // useNotes()
        render(allNotes)
    })
}

const render = (notesArray) => {
    let notesHTMLRepresentations = ""
    for (const note of notesArray) {
        notesHTMLRepresentations += NoteHTMLCard(note)
    }
  
      notesContainer.innerHTML = `
            <h1>NOTES OF GLASSDALE</h>
            <section class="notesList">
              ${notesHTMLRepresentations}
            </section>
          `
  }

