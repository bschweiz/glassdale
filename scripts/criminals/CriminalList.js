import { getCriminals, useCriminals } from './CriminalProvider.js'
// getCriminals fetches the API, useCriminals makes a slice replica
import { CriminalCardHTML } from "./Criminal.js"
import { useConvictions } from "../convictions/ConvictionProvider.js"
import { getFacilities, useFacilities } from '../facilities/FacilityProvider.js'

import { getCriminalFacilities, useCriminalFacilities } from "../facilities/CriminalFacilityProvider.js";

const eventHub = document.querySelector(".container")
const criminalsContainer = document.querySelector(".criminalsContainer");
// creating a container and tying it to a class on the "document"

// export const CriminalListOldVersionNov11 = () => {    

//     getCriminals()
//         .then(() => {
//             const arrayFromUseCriminals = useCriminals();
//             // promise fullfilled and stored to a "static" variable
//             // try to implement .map() below?
//             render(arrayFromUseCriminals) 
//     }) 
// }
export const CriminalList = () => {
    // Kick off the fetching of both collections of data
    getFacilities()
        .then(getCriminalFacilities)
        .then(
            () => {
                // Pull in the data now that it has been fetched
                const facilities = useFacilities()
                const crimFac = useCriminalFacilities()
                const criminals = useCriminals()
                // Pass all three collections of data to render()
                render(criminals, facilities, crimFac)
            }
        )
}

const render = (criminalsToRender, allFacilities, allRelationships) => {
    // Step 1 - Iterate all criminals
    criminalsContainer.innerHTML = criminalsToRender.map(
        (criminalObject) => {
            // Step 2 - Filter all relationships to get only ones for this criminal
            const facilityRelationshipsForThisCriminal = allRelationships.filter(cf => cf.criminalId === criminalObject.id)

            // Step 3 - Convert the relationships to facilities with map()
            const facilities = facilityRelationshipsForThisCriminal.map(cf => {
                const matchingFacilityObject = allFacilities.find(facility => facility.id === cf.facilityId)
                return matchingFacilityObject
            })

            // Must pass the matching facilities to the Criminal component
            return CriminalCardHTML(criminalObject, facilities)
        }
    ).join("")
}

// const renderOldVersion = (criminalsArray) => {
//     let criminalsHTMLRepresentations = ""
//     for (const criminal of criminalsArray) {
//         criminalsHTMLRepresentations += CriminalCardHTML(criminal);

//         criminalsContainer.innerHTML = `
//             <h1>CRIMINALS OF GLASSDALE</h>
//             <section class="criminalsList">
//                 ${criminalsHTMLRepresentations}
//             </section>
//         `
//     }
// }

eventHub.addEventListener("crimeSelected", event => {
    if (event.detail.crimeThatWasChosen !==0) {
        const criminalsArray = useCriminals();
        const convictionsArray = useConvictions();
        const convictionThatWasChosen = convictionsArray.find(convictionObj => {
            return convictionObj.id === event.detail.crimeThatWasChosen
        })
        // console.log(criminalsArray)
        // console.log(convictionsArray)
        console.log(convictionThatWasChosen)
        const filteredCriminalsArray = criminalsArray.filter(criminalObj => {
            return criminalObj.conviction === convictionThatWasChosen.name
        })
        // debugger
        
        render(filteredCriminalsArray)
    }
})

eventHub.addEventListener("officerSelected", changeEvent => {

    const criminalsArray = useCriminals();
    const selectedOfficerName = changeEvent.detail.officerName;

    const filteredCriminalsArray = criminalsArray.filter((criminalObj) => {
        return criminalObj.arrestingOfficer === selectedOfficerName}) 
        console.log("see if filtering logic works", filteredCriminalsArray)

        render(filteredCriminalsArray)
    })

