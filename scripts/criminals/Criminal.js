const eventHub = document.querySelector(".container")


// id="criminal--${criminalObj.id}"

export const CriminalCardHTML = (criminalObj) => {
    return `<section id="criminal-${criminalObj.id}" class="criminal">
    <h2 class="criminal__name">${criminalObj.name}</h2>
    <div class="criminal__properties">
    <p>Age: ${criminalObj.age}</p>
    <p>Crime: ${criminalObj.conviction}</p>
    <p>Term start: ${new Date(criminalObj.incarceration.start).toLocaleDateString('en-US')}</p>
    <p>Term end: ${new Date(criminalObj.incarceration.end).toLocaleDateString('en-US')}</p>
   
    <button id="associates--${criminalObj.id}">Associate Alibis</button>
  
    </div>
    </section>`
}

eventHub.addEventListener("click",(eventObj) => {
    // split the id number off of the 
    const [nameOfId, criminalId] = eventObj.target.id.split("--")
    // check ot see if it was the button we wanted 
    if (eventObj.target.id.startsWith("associates--")){
        // console.log("name", nameOfId,"id",criminalId)
        const alibiButtonEvent = new CustomEvent("alibiButton", {
            detail: {
                criminalId: criminalId
            }
        }) 
        eventHub.dispatchEvent(alibiButtonEvent)
    }
})












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