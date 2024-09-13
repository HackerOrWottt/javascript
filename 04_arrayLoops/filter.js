const myNum = [1 , 2 , 3 , 4 , 5 , 6 ,  7 , 8 , 9 , 10]

// used to filter array with any specific condition
// this filter operation returns a value and we can store values in any variable 

const newNum= myNum.filter( (item) => {
    return item > 4
})

console.log(newNum); // output : 5,6,7,8,9,10
