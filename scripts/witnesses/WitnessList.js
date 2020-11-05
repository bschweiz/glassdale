
const contentTarget = document.querySelector(".criminalsContainer")

import { WitnessCardHTML } from "./Witness.js"
import { getWitnesses, useWitnesses } from './WitnessDataProvider.js'
// getOfficers fetches the API, useOfficers makes a slice replica


// creating a container and tying it to a class on the "document"
const witnessesContainer = document.querySelector(".witnessesContainer");

export const WitnessList = () => {
    // promise zone starts here
    getWitnesses()
        .then(() => {
            const arrayFromUseWitnesses = useWitnesses();
            // promise fullfilled and stored to a "static" variable
            // try to implement .map() below?
            render(arrayFromUseWitnesses) 
        }) 
}
const render = (witnessesArray) => {
    let witnessesHTMLRepresentations = ""
    for (const witness of witnessesArray) {
  
      witnessesHTMLRepresentations += WitnessCardHTML(witness)
  
      contentTarget.innerHTML = `
            <h1>WITNESS STATEMENTS OF GLASSDALE</h1>
            <section class="witnessesList">
              ${witnessesHTMLRepresentations}
            <button id="hideWitnessCards">Hide Witness Statements</button> 
            </section>
          `
    }
  }


