const eventHub = document.querySelector(".container")
import { getWitnesses, useWitnesses } from './WitnessDataProvider.js'
import { WitnessList } from './WitnessList.js'
import { CriminalList } from '../criminals/CriminalList.js'


let WitnessArrayStatic = []

export const WitnessSelect = () => {
    getWitnesses()
        .then(() => {
            const WitnessArrayStatic = useWitnesses();
            return WitnessArrayStatic 
    })
}

eventHub.addEventListener("click", clickEvent => {

    if (clickEvent.target.id === "witnessButton")
    {
        const customEvent = new CustomEvent("witnessButtonClicked", {
            detail: {
                test: clickEvent
            }
        })    
        console.log("trying to pull out all the witness id numbers:", clickEvent)
        eventHub.dispatchEvent(customEvent)
}})

eventHub.addEventListener("witnessButtonClicked", event => {
    WitnessList();
})

eventHub.addEventListener("click",(eventObj) => {
  // const witnessCardTarget = document.querySelector(".witnessesList")
  // let witnessesHTMLRepresentations = ""
  if (eventObj.target.id === "hideWitnessCards"){
    CriminalList();
    // witnessCardTarget.innerHTML = `${witnessesHTMLRepresentations}`
  }
})    
