export const FacilityCardHTML = (facilityObj, criminalArray) => {
    return `<section class="facility noteCard">
    <h3 class="facility__name">${facilityObj.facilityName}</h3>
        <div class="facility__properties">
            <p>Security Level: ${facilityObj.securityLevel}</p>
            <p>Capacity: ${facilityObj.capacity}
            <h4>Criminals Incarcerated Therein</h4>
            <ul>
            ${criminalArray.map(crim => `<li>${crim.name}</li>`).join("")}
            </ul>
        </div>
    </section>`
}