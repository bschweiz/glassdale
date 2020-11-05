import { useCriminals } from "../criminals/CriminalProvider.js"

const contentTarget = document.querySelector(".noteFormContainer")

const eventHub = document.querySelector(".container")

// const dropdownTarget = document.querySelector(".criminalSelect")

// export const NoteForm = () => {
//     useCriminals()
//     .then(() => suspectSelect())
// }



export const NoteForm = () => {
    const criminalArray = useCriminals();
        const dropdownHTML = criminalArray.map((criminal) => {
        return `<option value="${ criminal.id }">${criminal.name}</option>`
            })
            .join(" ")

    contentTarget.innerHTML = `
    <select id="noteForm--criminal" class="criminalSelect">
    <option value="0">Please Select a Suspect... </option>` 
        + `${dropdownHTML}` + 
    `
    </select>
    <div class="textareaContainer">
        <textarea id="note--note" placeHolder="Enter Your Note Here"></textarea>
    </div>    
    <button id="saveNote">Save Note</button>
    `
}

eventHub.addEventListener("noteStateChanged", () => NoteForm());



// -----

// export const suspectSelect = () => {
//     const criminalArray = useCriminals();
//     suspectDropdown(criminalArray)
// }

// // renders dropdown options based on the parks array
// const suspectDropdown = (criminalArray) => {
//     // debugger
//     const taco = `
//     <option value="0">Please Select a Suspect... </option>
//     ${criminalArray
//             .map((criminal) => {
//                 return `<option value="${ criminal.id }">${criminal.name}</option>`
//             })
//             .join(" ")}
//     `
// }

// export const pageLoad = () => {
//     getParks()
//       .then(() => useParks())
//       .then(() => getAttractions())
//       .then(() => useAttractions())
//       .then(() => getEateries())
//       .then(() => useEateries())
//       .then(() => getItineraries())
//       .then(() => useItineraries())
//       .then(() => renderItineraries())
//       .then(() => NashvilleWeather())
//   }
