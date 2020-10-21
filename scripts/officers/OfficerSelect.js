import { getOfficers, useOfficers } from "./OfficerProvider.js"

const eventHub = document.querySelector(".container")
const contentTarget = document.querySelector(".filters__officer")

export const OfficerSelect = () => {
    getOfficers()
        .then(() => {
            const officerArrayStatic = useOfficers();
            render(officerArrayStatic);    
    })
}

const render = (officerCollection) => {

    contentTarget.innerHTML = `
        <select class="dropdown" id="officerSelect">
            <option value="0">Please select an officer...</option>
            ${officerCollection.map(officerObj =>  {
                    return `<option value="${officerObj.id}">${officerObj.name}</option>`                    
            }).join("")
        }
        </select>
    `
}

eventHub.addEventListener("change", changeEvent => {
    if (changeEvent.target.id === "officerSelect") {
        // Get the name of the selected officer
        const selectedOfficer = changeEvent.target.value

        // Define a custom event
        const customEvent = new CustomEvent("officerSelected", {
            detail: {
                officer: selectedOfficer
            }
        })
        console.log(customEvent)
        // Dispatch event to event hub
        eventHub.dispatchEvent(customEvent)
    }
})