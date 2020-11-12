


import { useCriminals } from "./CriminalProvider.js"
import { CriminalCardHTML } from "./Criminal.js"

const eventHub = document.querySelector(".container")

// eventHub.addEventListener("alibiButton", (eventObj) => {
//     // console.log("test of AlibiList.js", eventObj.detail.criminalId)
//     const criminalArray = useCriminals();
//     const selectedCriminal = criminalArray.find((criminalObj) => {
//         return criminalObj.id === parseInt(eventObj.detail.criminalId)
//     })
//     // console.log("testing selected criminal logic", selectedCriminal)
//     renderAlibis(selectedCriminal)
// })
eventHub.addEventListener("alibiButton", (eventObj) => {
    console.log("test of AlibiList.js, criminalId:", eventObj.detail.criminalId)
    
    const alibiIdToRender = eventObj.detail.criminalId
    console.log(alibiIdToRender)

    var div = document.getElementById(`alibiShow-${alibiIdToRender}`);
    if (div.style.display !== 'block') {
        div.style.display = 'block';
    }
    else {
        div.style.display = 'none';
    }
})


// export const renderAlibis = (criminalObj) => {
//     document.querySelector(".hideIt").hidden = false;
    
//     // const alibiContentTarget = document.querySelector(`#criminal-${criminalObj.id}`)
    
//     //     alibiContentTarget.innerHTML += `
//     //         <section class="alibiList">
//     //         <div id="alibi-${criminalObj.id}">
            
//     //         ${criminalObj.known_associates.map(alibiObj => {
//     //             return `
//     //             <p>Alibi Provided By:  ${alibiObj.name}</p>
//     //             <p>Alibi:  ${alibiObj.alibi}</p>`
//     //         }).join("")}
//     //         <button id="hideAlibis">Hide Alibis</button>
//     //         </section>
//     //         `
    
// }


eventHub.addEventListener("click", clickEvent => {
    if(clickEvent.target.id === "hideAlibis") {
    console.log("this is when we want to hide the Alibis", clickEvent.path[2]["id"])
    // const resetAlibiTarget = document.getElementById(`#associates--${clickEvent.path[2]["id"]}`)
    const criminalArray = useCriminals();
    // console.log(criminalArray)
    const [discard, number] = (clickEvent.path[2]["id"]).split("-")
    // console.log(number)
    const selectedCriminal = criminalArray.find((criminalObj) => {
        return criminalObj.id === parseInt(number)
    })
    // console.log("testing reset alibi criminal logic", selectedCriminal)
    const dumbID = clickEvent.path[2]["id"]
    console.log(dumbID)
    const cardTarget = document.querySelector(`.alibiList`)
    
    cardTarget.innerHTML = ""
        }
    
    })


    // <div id="alibiNumber${alibiObj.id}></div>