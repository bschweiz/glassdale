import { useCriminals, getCriminals} from "./criminals/CriminalProvider.js"
import { makeCriminalObj, CriminalCardHTML } from "./criminals/Criminal.js"
import { CriminalList } from "./criminals/CriminalList.js"


const bob = makeCriminalObj("Bob Doe",45, "Vehicular Manslaughter","1983-03-07T10:37:22.178Z","2014-03-13T13:57:55.918Z");

console.table(bob);
const testHTMLCardToInsert = CriminalCardHTML(bob);
console.log(testHTMLCardToInsert);

const test = CriminalList();

console.log(test);


// getCriminals();
// let result = useCriminals();
// console.log(result);