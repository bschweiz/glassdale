export const OfficerCardHTML = (officerObj) => {
    return `<section class="officer" >
    <h2 class="officer__name">${officerObj.name}</h2>
        <div class="officer__properties">
            <p>ID Number: ${officerObj.id}</p>
         
        </div>
    </section>`
}