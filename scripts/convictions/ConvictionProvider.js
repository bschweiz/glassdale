

    
let convictions = []

export const useConvictions = () =>  convictions.slice()
  
// generates an array that will be used over on ConvictionSelect.js
// useConvictions cannot work without getConvictions, is it ASYNCHRONOUS?

export const GetConvictions = () => {
    return fetch("https://criminals.glassdale.us/crimes")
        .then(response => response.json())
        .then(
            parsedCrimes => {
                console.table(parsedCrimes)
                convictions = parsedCrimes
        }
    )
}
  /*  Load database state into application state with a fetch().
    Make sure the last `then()` sets the local `convictions`
    variable to what is in the response from the API.
*/
