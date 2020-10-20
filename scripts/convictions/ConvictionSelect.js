
// STARTER CODE
/*
 *   ConvictionSelect component that renders a select HTML element
 *   which lists all convictions in the Glassdale PD API
 */
import { useConvictions, GetConvictions } from "./ConvictionProvider.js"

// Get a reference to the DOM element where the <select> will be rendered
const contentTarget = document.querySelector(".filters__crime")
const eventHub = document.querySelector(".container")

export const ConvictionSelect = () => {
    // Get all convictions from application state
    GetConvictions().then(() => {
    const convictions = useConvictions();
    render(convictions)    
}
    )}
// "render" is a function?

const render = (convictionsCollection) => {
    
    /*
        Use interpolation here to invoke the map() method on
        the convictionsCollection to generate the option elements.
        Look back at the example provided above.
    */
  
    contentTarget.innerHTML = `
        <select class="dropdown" id="crimeSelect">
            <option value="0">Please select a crime...</option>
            ${convictionsCollection.map(crimeObj =>  {
                
                    const displayCrime = crimeObj.name
                    return `<option>${displayCrime}</option>`                    
            })
        }
        </select>
    `
}
// Coding along below
contentTarget.addEventListener("change", (changeEvent) => {
    // console.log(changeEvent)
    if (changeEvent.target.id === "crimeSelect") {
    const customEvent = new CustomEvent("crimeSelected", {
        // console.log(changeEvent.target.value);
        detail:{
            crimeThatWasChosen: changeEvent.target.value
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