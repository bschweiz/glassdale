import { CriminalCardHTML } from "./Criminal.js"

import { getCriminals, useCriminals } from './CriminalProvider.js'
// getCriminals fetches the API, useCriminals makes a slice replica


// creating a container and tying it to a class on the "document"
const criminalsContainer = document.querySelector(".criminalsContainer");

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
            // HTMLToInsert; 
            // return HTMLToInsert
        }
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