import { getFacilities, useFacilities } from './FacilityProvider.js'
import { FacilityCardHTML } from "./Facility.js";
import { getCriminalFacilities, useCriminalFacilities } from './CriminalFacilityProvider.js';
import { getCriminals, useCriminals } from '../criminals/CriminalProvider.js'
const facilityContainer = document.querySelector(".caseDataContainer");


let FacilityArrayStatic = []
let CrimFacReltionshipArray =[]
let CrimArrayStatic =[]

export const FacilityList = () => {
    getFacilities()
        .then(getCriminalFacilities)
        .then(getCriminals)
        .then(
            () => {
            FacilityArrayStatic = useFacilities()
            CrimFacReltionshipArray = useCriminalFacilities()
            CrimArrayStatic = useCriminals()
            console.log("FacilityList called")
            render()
        })
}

const render = () => {
    let facilitiesHTMLRepresentations = ""
    // Step 1 - Iterate all the facilities via map
    FacilityArrayStatic.map(
        (facilityObject) => {
            // Step 2 - Filter all relationships to get only ones for this criminal
            const criminalRelationshipsForThisFacility = CrimFacReltionshipArray.filter(cf => cf.facilityId === facilityObject.id)
            // Step 3 - Convert the relationships to facilities with map()
            const matchedCriminals = criminalRelationshipsForThisFacility.map(cf => {
                const matchingCriminalObject = CrimArrayStatic.find(criminal => criminal.id === cf.criminalId)
                return matchingCriminalObject
            })
            facilitiesHTMLRepresentations += FacilityCardHTML(facilityObject, matchedCriminals)
        }
    )
    facilityContainer.innerHTML = `
            <h1>INCARCERATION FACILITIES OF GLASSDALE</h1>
            <section class="facilitiesList">
                ${facilitiesHTMLRepresentations}
            <button id="hideFacilityCards">Hide Facilities</button> 
            </section>
            `

        
    }
