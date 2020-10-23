const contentTarget = document.querySelector(".noteFormContainer")
const eventHub = document.querySelector(".container")


export const NoteForm = () => {
    render()
}

const render = () => {
    contentTarget.innerHTML += `
    Date of Interview<input id="note--interviewDate" type="date"/>
    <input id="note--author" type="text" placeHolder="Your Name Here" />
    <input id="note--suspect" type="text" placeHolder="Name of Suspect Here" />
    <div class="textareaContainer">
        <textarea id="note--note" placeHolder="Enter Your Note Here"></textarea>
    </div>    
    <button id="saveNote">Save Note</button>
    `
}

// eventHub.addEventListener("click", clickEvent => {
//     if(clickEvent.target.id === "saveNote")    
//         {console.log(clickEvent)}
// })


