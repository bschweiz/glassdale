import { useCriminals, getCriminals} from "./criminals/CriminalProvider.js"

getCriminals();
let result = useCriminals();
console.log(result);