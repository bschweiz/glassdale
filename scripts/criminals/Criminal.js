

export const makeCriminalObj = (name, age, conviction, start, end) => {
   
    let newCriminal = {
        name, 
        age, 
        conviction, 
        incarceration: { start , end }
    }
    return newCriminal
      
}





