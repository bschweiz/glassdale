export const OfficerCardHTML = (officerObj) => {
    return `<section class="officer">
    <h3 class="officer__name">${officerObj.name}</h3>
        <div class="officer__properties">
            <p>ID Number: ${officerObj.id}</p>
         
        </div>
    </section>`
}