import { OfficerList } from "./officers/OfficerList.js"
import { CriminalList } from "./criminals/CriminalList.js"
import { ConvictionSelect } from "./convictions/ConvictionSelect.js";
import { OfficerSelect } from "./officers/OfficerSelect.js";
import { NoteForm } from "./notes/NoteForm.js"
import { NoteList } from "./notes/NoteList.js"
import "./criminals/AlibiLIst.js"
import { getWitnesses } from "./witnesses/WitnessDataProvider.js"

import { WitnessSelect } from "./witnesses/WitnessSelect.js"
import { WitnessList } from "./witnesses/WitnessList.js"


CriminalList();
OfficerList();
ConvictionSelect();
OfficerSelect();
NoteForm();
NoteList();
getWitnesses();
// WitnessList();
WitnessSelect();



// GetConvictions().then(() => {
//     const GetConvictionsTest = useConvictions();
//     console.log(GetConvictionsTest);
// })
// // logs Promise {<pending>}
// let useConvictionsTest= useConvictions();
// console.log(useConvictionsTest);
// // logs empty array []
// const convictionSelectTest = 
// console.log(convictionSelectTest);ß
// // logs undefined


// TEST CASE, DUMMY CRIMINAL OBJECT
// const bob = makeCriminalObj("Bob Doe",45, "Vehicular Manslaughter","1983-03-07T10:37:22.178Z","2014-03-13T13:57:55.918Z");

// console.table(bob);
// const testHTMLCardToInsert = CriminalCardHTML(bob);
// console.log(testHTMLCardToInsert);