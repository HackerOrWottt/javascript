const myNum = [1,2,3,4,5]

// const newNum= myNum.map( (item) => {
//     return item + 10
// })

//chaining is allowed here means u can use more te one function at a time like below

const newNum= myNum.map( (item) => {return item * 10}).map( (item) => {return item + 1}).filter((item) => {return item >= 30})
//newNum array becomes => [11, 21, 31, 41, 51]
//output 31, 41, 51

console.log(newNum);
