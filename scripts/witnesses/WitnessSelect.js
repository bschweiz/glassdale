import { getWitnesses, useWitnesses } from './WitnessDataProvider.js'

const eventHub = document.querySelector(".container")

export const WitnessSelect = () => {
    getWitnesses()
        .then(() => {
            const WitnessArrayStatic = useWitnesses();
            console.log(WitnessArrayStatic);    
    })
}

eventHub.addEventListener("click", clickEvent => {

    if (clickEvent.target.id === "witnessButton")
    {
        const customEvent = new CustomEvent("witnessButtonClicked", {
            detail: {
                test: clickEvent
            }
        })    
        console.log("trying to pull out just the witness id number:", clickEvent.detail)
        eventHub.dispatchEvent(customEvent)
}})

    

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