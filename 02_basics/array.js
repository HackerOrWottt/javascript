// declaration of an array

// Array in js is collection of different items under a single variable
const myArr = [0 , 1, 2 ,3 , 4, 5]

// to access array elements
// console.log(myArr[2]);

// Another way of declaring array

const newArr = new Array(1, 2, 3, 4)

// Array Methods

//myArr.push(6) // add element to the last of an array
//console.log(myArr);

// myArr.pop() // deletes one element from last of an array, no need of passing an argument
// console.log(myArr);

// myArr.unshift(10) // adds element to te first of an array
// console.log(myArr);

// myArr.shift() // deletes an element from start of an array
// console.log(myArr);

// slice and splice

// const subArray1= myArr.slice(1, 3) // function returns subarray starting from index 1 to 3-1 index, but te values of OG array is not changed
// const subarray2= myArr.splice(1, 3) // function removes subarray from index 1 to 3 from the OG array 

const marvel_heroes = ["thor", "ironman", "spiderman"]
const dc_heroes = ["superman", "flash" , "batman"]

// marvel_heroes.push(dc_heroes)
// console.log(marvel_heroes);

const all_heroes = marvel_heroes.concat(dc_heroes)
console.log(all_heroes);

