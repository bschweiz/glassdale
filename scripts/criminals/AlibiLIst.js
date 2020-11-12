
const eventHub = document.querySelector(".container")

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

