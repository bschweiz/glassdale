export const WitnessCardHTML = (witnessObj) => {
    return `<section class="witness noteCard">
    <h3 class="witness__name">${witnessObj.name}</h3>
        <div class="witness__properties">
            <p>ID Number: ${witnessObj.id}</p>
            <p>Statement: ${witnessObj.statements}
        </div>
    </section>`
}