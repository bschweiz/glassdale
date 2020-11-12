import { FacilityList } from "./FacilityList.js";
import { CriminalList } from "../criminals/CriminalList.js";

const eventHub = document.querySelector(".container")
const facButtonTarget = document.querySelector(".facility__button");

export const DisplayFacilitiesButton = () => {
    facButtonTarget.innerHTML = `
    <button id="showFacility__button">Click Here</button> `
}

eventHub.addEventListener("click", clickEvent => {

    if (clickEvent.target.id === "showFacility__button") {
        const customEvent = new CustomEvent("facilityButtonClicked", {
            detail: {test: clickEvent}
            }
        )    
        console.log("trying to pull out all the facility id numbers:", clickEvent)
        eventHub.dispatchEvent(customEvent)
}})

eventHub.addEventListener("facilityButtonClicked", event => {
    FacilityList();
})

eventHub.addEventListener("click",(eventObj) => {
    if (eventObj.target.id === "hideFacilityCards"){
        CriminalList();
    }
})   