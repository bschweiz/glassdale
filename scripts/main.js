import { OfficerList } from "./officers/OfficerList.js"
import { makeCriminalObj, CriminalCardHTML } from "./criminals/Criminal.js"
import { CriminalList } from "./criminals/CriminalList.js"
import { ConvictionSelect } from "./convictions/ConvictionSelect.js";
import { useConvictions, GetConvictions }  from "./convictions/ConvictionProvider.js"


CriminalList();
OfficerList();
ConvictionSelect();

// GetConvictions().then(() => {
//     const GetConvictionsTest = useConvictions();
//     console.log(GetConvictionsTest);
// })
// // logs Promise {<pending>}
// let useConvictionsTest= useConvictions();
// console.log(useConvictionsTest);
// // logs empty array []
// const convictionSelectTest = 
// console.log(convictionSelectTest);
// // logs undefined


// TEST CASE, DUMMY CRIMINAL OBJECT
// const bob = makeCriminalObj("Bob Doe",45, "Vehicular Manslaughter","1983-03-07T10:37:22.178Z","2014-03-13T13:57:55.918Z");

// console.table(bob);
// const testHTMLCardToInsert = CriminalCardHTML(bob);
// console.log(testHTMLCardToInsert);