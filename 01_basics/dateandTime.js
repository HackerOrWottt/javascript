//Dates are calculated from January 1, 1970 ..

let myDate= new Date() // ere we created an instance of object
console.log(myDate);

console.log(myDate.toString()); 
console.log(myDate.toDateString());
console.log(myDate.toISOString());
console.log(myDate.toJSON());
console.log(myDate.toLocaleDateString());
console.log(myDate.toLocaleString());

// In this way we can create an instance of date object wit a specific date and values

let myNewDate = new Date(2023, 0 , 23) // note : Indexing of months starts from 0 
console.log(myNewDate.toDateString())

let myTimeStamp = Date.now() // creates an instance of object which stores the time in ms started calculatin from 1 Jan 1970
 
console.log(myTimeStamp)