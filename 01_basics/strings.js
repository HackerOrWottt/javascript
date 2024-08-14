const name = "Hello"
const name2= " world"

console.log(name + name2) // This is not recommended coz its outdated nowadays

//This syntax is compatively better known as string interpolation
console.log(`string after concadination is ${name} ${name2}`)

// another way of declaring strings 
const gameName= new String("teamOGxABHI")
console.log(gameName[4]);

//Some of the string methods
console.log(gameName.length); // calculates the length of the string
console.log(gameName.toUpperCase()); // convert the string in uppercase
console.log(gameName.charAt(6)); // used to check which charcater is present on given index
console.log(gameName.indexOf('A')); // used to check passed character is present on which index
console.log(gameName.substring(0 , 4)); // used to create substring string from starting to ending - 1 postion passed as an argument
console.log(gameName.slice(0 , 4)); // work same as substring method but we can also pass negative value as an argument

const url= "https://abhishek.com/abhishek%20varma"
console.log(url.replace('%20', '-')); // uesd to replace strings
