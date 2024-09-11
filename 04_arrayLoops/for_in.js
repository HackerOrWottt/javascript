// basically used for iterate Objects

const myObj = {
    1 : 'abhishek',
    2 : 'anand',
    3 : 'aadesh',
    4 : 'karan'
}

for (const key in myObj) {
    console.log(key , ":-", myObj[key]);
    
}

// trying on arrays

const myArr= ['a', 'b' , 'c']

// if u try to work in for in loop just like for of loops , if for of loop u can directly get value of array elements but in for in u get keys / index of elements

for (const key in myArr) {
   console.log(key);
   
}

// as u can see above syntax prints index of elements

// way to print or access elements of array using for in loop

for (const key in myArr) {
    console.log(myArr[key]);
}

