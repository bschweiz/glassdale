let officers = []

// this function will be used to return a copy of the ARRAY generated by
//  getCriminals() over on main.js
export const useOfficers= () => {
    return officers.slice()
}



export const getOfficers = () => {
    return fetch("https://criminals.glassdale.us/officers")
        .then(response => response.json())
        .then(
            parsedOfficers => {
                // console.table(parsedCriminals)
                officers = parsedOfficers
            }
        )
}