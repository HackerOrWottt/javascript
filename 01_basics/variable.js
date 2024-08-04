const a= 123
let employeeName= "Abhishek"
let chocolate= 2

/*
prefer not to use var
because of issue in blosk scope and functional scope
*/

//prints only one variable at a time
console.log(a)

//prints all the given values in a tabular format
console.table([a,employeeName,chocolate])

chocolate = 10
console.table([a,employeeName,chocolate])