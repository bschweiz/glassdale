import { getCriminals, useCriminals } from './CriminalProvider.js'
// getCriminals fetches the API, useCriminals makes a slice replica
import { CriminalCardHTML } from "./Criminal.js"
import { useConvictions } from "../convictions/ConvictionProvider.js"
import { getFacilities, useFacilities } from '../facilities/FacilityProvider.js'

import { getCriminalFacilities, useCriminalFacilities } from "../facilities/CriminalFacilityProvider.js";

const eventHub = document.querySelector(".container")
const caseDataContainer = document.querySelector(".caseDataContainer");
// creating a container and tying it to a class on the "document"

let facilitiesArray = []
let crimFacJoinTableArray =[]
let criminalsArray = []

export const CriminalList = () => {
    // Kick off the fetching of both collections of data
    getFacilities()
        .then(getCriminalFacilities)
        .then(getCriminals)
        .then(
            () => {
                // Pull in the data now that it has been fetched
                facilitiesArray = useFacilities()
                crimFacJoinTableArray = useCriminalFacilities()
                criminalsArray = useCriminals()
                // call render which will pull from the module-scope
                // variables 
                render()
            }
        )
}

const render = () => {
    let criminalsHTMLRepresentations = ""
    // Step 1 - Iterate all criminals
    // debugger
    criminalsArray.map(
        (criminalObject) => {
            // Step 2 - Filter all relationships to get only ones for this criminal
            const facilityRelationshipsForThisCriminal = crimFacJoinTableArray.filter(cf => cf.criminalId === criminalObject.id)

            // Step 3 - Convert the relationships to facilities with map()
            const matchedFacilities = facilityRelationshipsForThisCriminal.map(cf => {
                const matchingFacilityObject = facilitiesArray.find(facility => facility.id === cf.facilityId)
                return matchingFacilityObject
            })

            // Must pass the MANY matching facilities and ONE criminal object at a time
            //  to the CriminalCardHTML function
            criminalsHTMLRepresentations += CriminalCardHTML(criminalObject, matchedFacilities)
        }
    )
    caseDataContainer.innerHTML = `
    <h2>Criminals of Glassdale</h2>
    <section class="criminalsList">
        ${criminalsHTMLRepresentations}
    </section>`
}


eventHub.addEventListener("crimeSelected", event => {
    if (event.detail.crimeThatWasChosen !==0) {

        const convictionsArray = useConvictions();
        const convictionThatWasChosen = convictionsArray.find(convictionObj => {
            return convictionObj.id === event.detail.crimeThatWasChosen
        })
        // console.log(criminalsArray)
        // console.log(convictionsArray)
        console.log(convictionThatWasChosen)
        const filteredCriminalsArray = criminalsArray.filter(criminalObj => {
            return criminalObj.conviction === convictionThatWasChosen.name
        }
        )
        // debugger
        criminalsArray = filteredCriminalsArray
        console.log(criminalsArray)
        render()
    }
})

eventHub.addEventListener("officerSelected", changeEvent => {
    if (changeEvent.detail.crimeThatWasChosen !==0) {
        // const criminalsArray = useCriminals();
        const selectedOfficerName = changeEvent.detail.officerName;

        const filteredCriminalsArray = criminalsArray.filter((criminalObj) => {
            return criminalObj.arrestingOfficer === selectedOfficerName
        }) 
        criminalsArray = filteredCriminalsArray
        console.log(criminalsArray)
        render()
    }
})

