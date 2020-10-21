import { getCriminals, useCriminals } from './CriminalProvider.js'
// getCriminals fetches the API, useCriminals makes a slice replica
import { CriminalCardHTML } from "./Criminal.js"


const criminalsContainer = document.querySelector(".criminalsContainer");
// creating a container and tying it to a class on the "document"
const eventHub = document.querySelector(".container")

export const CriminalList = () => {    
    getCriminals()
    .then(() => {
        const arrayFromUseCriminals = useCriminals();
        // promise fullfilled and stored to a "static" variable
        // try to implement .map() below?
        let HTMLToInsert = "";
        for (const criminalObj of arrayFromUseCriminals) {
            
            HTMLToInsert += CriminalCardHTML(criminalObj)

            criminalsContainer.innerHTML = 
            `<h1>CRIMINALS OF GLASSDALE</h1>
            <section class="criminalsList">
            ${HTMLToInsert}
            </section>`
           
            
        }
    }) 
}

eventHub.addEventListener("crimeSelected", event => {
    console.log(event.detail.crimeThatWasChosen);

    const criminalsArray = useCriminals();
    console.log(criminalsArray);
    // debugger
    // const convictionsArray = useConvictions();
    // console.log(convictionsArray);

    // const convictionThatWasChosen = convivtionsArray.find(conctionObj => {
    //     
    //     return convictionObj.id === event.detail.crimeThatWasChosen
    // })

})
