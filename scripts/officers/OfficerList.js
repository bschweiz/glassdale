import { OfficerCardHTML } from "./Officer.js"

import { getOfficers, useOfficers } from './OfficerProvider.js'
// getOfficers fetches the API, useOfficers makes a slice replica


// creating a container and tying it to a class on the "document"
const officersContainer = document.querySelector(".officersContainer");

export const OfficerList = () => {
    // promise zone starts here
    getOfficers()
        .then(() => {
            const arrayFromUseOfficers = useOfficers();
            // promise fullfilled and stored to a "static" variable
            // try to implement .map() below?
            render(arrayFromUseOfficers) 
        }) 
}

const render = (officersArray) => {
    let officersHTMLRepresentations = ""
    for (const officer of officersArray) {
  
      officersHTMLRepresentations += OfficerCardHTML(officer)
  
      officersContainer.innerHTML = `
            <h1>OFFICERS OF GLASSDALE</h1>
            <section class="officersList">
              ${officersHTMLRepresentations}
            </section>
          `
    }
  }


