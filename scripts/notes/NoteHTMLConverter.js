export const NoteHTMLCard = (noteObj) => {
    return `
    <div class="note">
    <h5>Note ID: ${noteObj.id}</h5>
    <p>Suspect: ${noteObj.criminalId}</p>
    <p>Note: ${noteObj.noteText}</p>
    </div>`
}