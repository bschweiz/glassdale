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
                return `<option value="${officerObj.name}">${officerObj.name}</option>`                    
            }).join("")
        }
        </select>
    `
}

eventHub.addEventListener("change", changeEvent => {
    if (changeEvent.target.id === "officerSelect") {
        // Get the name of the selected officer
        

        // Define a custom event
        const customEvent = new CustomEvent("officerSelected", {
            detail: {
                officerName: changeEvent.target.value
            }
        })
        console.log("trying to pull out just the officer name:", customEvent.detail.officerName)
        // Dispatch event to event hub
        eventHub.dispatchEvent(customEvent)
    }
})

// eventHub.addEventListener("change", (changeEvent) => {
//     if (changeEvent.target.id === "officerSelect") {
      
//       const officerSelectedEvent = new CustomEvent("officerSelected", {
//         detail: {
//           officerName: changeEvent.target.value
//         }
//       })
  
//       console.log("OfficerSelect: Dispatch officerSelected event to event hub")
//       eventHub.dispatchEvent(officerSelectedEvent)
//     }
//   })