export const NoteHTMLCard = (noteObj) => {
    return `
    <div class="note">
    <h5>Author: ${noteObj.author}</h5>
    <p>Suspect: ${noteObj.suspect}</p>
    <p>Date of Interview: ${new Date(noteObj.interviewDate).toDateString()}</p>
    <p>Time Note Entered: ${new Date(noteObj.timeStamp).toLocaleDateString()}</p>
    <p>Note: ${noteObj.note}</p>
    </div>`
}