import { CriminalCardHTML } from "./Criminal.js"

import { getCriminals, useCriminals } from './CriminalProvider.js'

// getCriminals fetches the API, useCriminals makes a slice replica


// creating a container and tying it to a class on the "document"
const criminalsContainer = document.querySelector(".criminalsContainer");
const eventHub = document.querySelector(".container")

export const CriminalList = () => {
    // promise zone starts here
    getCriminals().then(() => {
        
        // promise fullfilled and stored to a "static" variable
        
        let HTMLToInsert = "";
        const arrayToUse = useCriminals();
        for (const criminalObj of arrayToUse) {
            
            HTMLToInsert += CriminalCardHTML(criminalObj)
            criminalsContainer.innerHTML = 
            `<h1> CRIMINALS </h1>
            </br>
            <p>
            ${HTMLToInsert}
            </p>`
           
            
        }
    }) 
}

eventHub.addEventListener("crimeSelected", event => {

    const criminalsArray = useCriminals();
    console.log(criminalsArray);

    const convictionsArray = useConvictions();
    console.log(convictionsArray);

    const convictionThatWasChosen = convivtionsArray.find(conctionObj => {
        debugger
        return convictionObj.id === event.detail.crimeThatWasChosen
    })

})
