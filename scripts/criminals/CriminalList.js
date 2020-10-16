import { getCriminals, useCriminals } from './CriminalProvider.js'

export const CriminalList = () => {
    // promise zone starts here
    getCriminals().then(() => {
        debugger
        // promise fullfilled and stored to a "static" variable
        
        let HTMLToInsert = "";
        const arrayToUse = useCriminals();
        // let HTMLToInsert = "";
        
        for (const criminalObj of arrayToUse) {
            
            HTMLToInsert += `<section class="criminal" id="criminal--${criminalObj.id}">
            <h2 class="criminal__name">${criminalObj.firstName}</h2>
            <div class="criminal__properties">
            <p>Age: ${criminalObj.age}</p>
            <p>Crime: ${criminalObj.conviction}</p>
            <p>Term start: ${criminalObj.incarceration.start}</p>
            <p>Term end: ${criminalObj.incarceration.start}</p>
            </div>
            </section>`
        }
        return HTMLToInsert
    })       
}
  /*
            Now that you have the data, what
            component should be rendered?
        */
      