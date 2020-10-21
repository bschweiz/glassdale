
// STARTER CODE
/*
 *   ConvictionSelect component that renders a select HTML element
 *   which lists all convictions in the Glassdale PD API
 */
import { getConvictions, useConvictions } from "./ConvictionProvider.js"

// Get a reference to the DOM element where the <select> will be rendered
const eventHub = document.querySelector(".container")

const contentTarget = document.querySelector(".filters__crime")

export const ConvictionSelect = () => {
    getConvictions()
        .then(() => {
            const convictions = useConvictions();
            render(convictions)    
    })
}


const render = (convictionsCollection) => {

    contentTarget.innerHTML = `
        <select class="dropdown" id="crimeSelect">
            <option value="0">Please select a crime...</option>
            ${convictionsCollection.map(crimeObj =>  {
                    return `<option value="${crimeObj.id}">${crimeObj.name}</option>`                    
            }).join("")
        }
        </select>
    `
}
// generating a custom event: "crimeSelected"
eventHub.addEventListener("change", (changeEvent) => {
    // console.log(changeEvent.target.value);
    if (changeEvent.target.id === "crimeSelect") {

        const customEvent = new CustomEvent ("crimeSelected", {
            detail:{
                crimeThatWasChosen: parseInt(changeEvent.target.value)
            }
        })
        
    console.log(customEvent);
    eventHub.dispatchEvent(customEvent)
    }
})



// CHAPTER 5
/*
/*
    Which element in your HTML contains all components?
    That's your Event Hub. Get a reference to it here.
    const eventHub = document.querySelector(you_fill_this_in)
    const contentTarget = document.querySelector(".filters__crime")
    
    // On the event hub, listen for a "change" event.
    eventHub.addEventListener("change", event => {
        
        // Only do this if the `crimeSelect` element was changed
        if (event.target.id === "crimeSelect") {
            // Create custom event. Provide an appropriate name.
            const customEvent = new CustomEvent("crimeChosen", {
                detail: {
                    crimeThatWasChosen: event.target.value
                }
            })
            
            // Dispatch to event hub
            eventHub.dispatchEvent(customEvent)
        }
    })
    
    
    const render = convictionsCollection => {
        contentTarget.innerHTML = `
        <select class="dropdown" id="crimeSelect">
        <option value="0">Please select a crime...</option>
        ... you wrote awesome code here ...
        </select>
        `
    }
    
    
    export const ConvictionSelect = () => {
        getConvictions()
        .then(() => {
            const convictions = useConvictions()
            render(convictions)
        })
    }
*/