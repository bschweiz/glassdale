import { getFacilities, useFacilities } from './FacilityProvider.js'
import { FacilityCardHTML } from "./Facility.js";
import { getCriminalFacilities, useCriminalFacilities } from './CriminalFacilityProvider.js';
import { useCriminals } from '../criminals/CriminalProvider.js'
const facilityContainer = document.querySelector(".facilityContainer");


let FacilityArrayStatic = []
let CrimFacReltionshipArray =[]
let CrimArrayStatic =[]

export const FacilityList = () => {
    getFacilities()
        .then(getCriminalFacilities)
        .then(
            () => {
            const FacilityArrayStatic = useFacilities()
            const CrimFacReltionshipArray = useCriminalFacilities()
            const CrimArrayStatic = useCriminals()
            render(FacilityArrayStatic, CrimArrayStatic, CrimFacReltionshipArray)
        })
}

const render = (facilityArray, criminalArray, relationshipArray) => {
   
    // Step 1 - Iterate all criminals
    const facilityHTMLRepresentations = facilityArray.map(
        (facilityObject) => {
            // Step 2 - Filter all relationships to get only ones for this criminal
            const criminalRelationshipsForThisFacility = relationshipArray.filter(cf => cf.criminalId === facilityObject.id)
            // Step 3 - Convert the relationships to facilities with map()
            const criminals = criminalRelationshipsForThisFacility.map(cf => {
                const matchingCriminalObject = criminalArray.find(criminal => criminal.id === cf.criminalId)
                return matchingCriminalObject
            })

            // Must pass the matching facilities to the Criminal component
            return FacilityCardHTML(facilityObject, criminals)
        }
    ).join("")
    
    facilityContainer.innerHTML = `
            <h1>INCARCERATION FACILITIES OF GLASSDALE</h1>
            <section class="facilitiesList">
                ${facilityHTMLRepresentations}
            <button id="hideFacilityCards">Hide Facilities</button> 
            </section>
            `

        
    }
