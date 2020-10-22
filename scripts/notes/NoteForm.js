const contentTarget = document.querySelector(".noteFormContainer")
const eventHub = document.querySelector(".container")


const render = () => {
    contentTarget.innerHTML += `
    <input id="note--interviewDate" type="date"/>
    <input id="not--author" type="text" placeHolder="Your Name Here" />
    <textarea id="note--note"></textarea>
    <button id="saveNote">Save Note</button>
    `
}

eventHub.addEventListener("click", clickEvent => {
    if(clickEvent.target.id === "saveNote")    
        {console.log(clickEvent)}
    })
 
export const NoteForm = () => {
    render()
}

