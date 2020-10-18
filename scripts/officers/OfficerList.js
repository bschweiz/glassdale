import { OfficerCardHTML } from "./Officer.js"

import { getOfficers, useOfficers } from './OfficerProvider.js'
// getOfficers fetches the API, useOfficers makes a slice replica


// creating a container and tying it to a class on the "document"
const officersContainer = document.querySelector(".officersContainer");

export const OfficerList = () => {
    // promise zone starts here
    getOfficers().then(() => {
        
        // promise fullfilled and stored to a "static" variable
        
        let HTMLToInsert = "";
        const arrayToUse = useOfficers();
        for (const officerObj of arrayToUse) {
            
            HTMLToInsert += OfficerCardHTML(officerObj)
        }
        officersContainer.innerHTML = 
        `<h1> OFFICERS OF GLASSDALE POLICE DEPARTMENT </h1>
        </br>
        <p>
        ${HTMLToInsert}
        </p>`
        // HTMLToInsert; 
        return HTMLToInsert
    }) 
}



// ----annotated code from Scott:
// import { getCriminals, useCriminals } from './CriminalProvider.js'
// const criminalsContainer = document.querySelector(".criminalsContainer")
// export const CriminalList = () => {
//     // promise zone starts here
//     getCriminals().then(() => {
//         // promise fullfilled and stored to a "static" variable
//         const arrayToUse = useCriminals();
//         let HTMLToInsert = "";
//         for (const criminalObj of arrayToUse) {
//             HTMLToInsert += `<section class="criminal" id="criminal--${criminalObj.id}">
//             <h2 class="criminal__name">${criminalObj.name}</h2>
//             <div class="criminal__properties">
//             <p>Age: ${criminalObj.age}</p>
//             <p>Crime: ${criminalObj.conviction}</p>
//             <p>Term start: ${criminalObj.incarceration.start}</p>
//             <p>Term end: ${criminalObj.incarceration.start}</p>
//             </div>
//             </section>`
//         }
//         criminalsContainer.innerHTML = HTMLToInsert
//         return HTMLToInsert
//     })
// }