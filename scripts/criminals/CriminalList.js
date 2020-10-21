import { getCriminals, useCriminals } from './CriminalProvider.js'
// getCriminals fetches the API, useCriminals makes a slice replica
import { CriminalCardHTML } from "./Criminal.js"
import { useConvictions } from "../convictions/ConvictionProvider.js"


const eventHub = document.querySelector(".container")
const criminalsContainer = document.querySelector(".criminalsContainer");
// creating a container and tying it to a class on the "document"

export const CriminalList = () => {    

    getCriminals()
        .then(() => {
            const arrayFromUseCriminals = useCriminals();
            // promise fullfilled and stored to a "static" variable
            // try to implement .map() below?
            render(arrayFromUseCriminals) 
    }) 
}

const render = (criminalsArray) => {
    let criminalsHTMLRepresentations = ""
    for (const criminal of criminalsArray) {
  
      criminalsHTMLRepresentations += CriminalCardHTML(criminal)
  
      criminalsContainer.innerHTML = `
            <h1>CRIMINALS OF GLASSDALE</h>
            <section class="criminalsList">
              ${criminalsHTMLRepresentations}
            </section>
          `
    }
  }

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
