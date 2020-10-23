


// id="criminal--${criminalObj.id}"

export const CriminalCardHTML = (criminalObj) => {
    return `<section class="criminal">
    <h2 class="criminal__name">${criminalObj.name}</h2>
        <div class="criminal__properties">
            <p>Age: ${criminalObj.age}</p>
            <p>Crime: ${criminalObj.conviction}</p>
            <p>Term start: ${new Date(criminalObj.incarceration.start).toLocaleDateString('en-US')}</p>
            <p>Term end: ${new Date(criminalObj.incarceration.end).toLocaleDateString('en-US')}</p>
        </div>
    </section>`
}





// const formatDate = (rawDate) => {
//     formattedDate = (rawDate).toLocaleDateString('en-US') ;
//     return formattedDate
// }

// creating my own test criminalObj that can be tested WITHOUT needing to complicate things with 
// needing to fetch the API:

export const makeCriminalObj = (name, age, conviction, start, end) => {
   
    let newCriminal = {
        name, 
        age, 
        conviction, 
        incarceration: { start , end }
    }
    return newCriminal
      
}