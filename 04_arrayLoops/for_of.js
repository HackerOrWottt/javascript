// for of loops is basically used to iterate array and maps

// for of loop syntax

const arr = [1 , 2 , 3 , 4 , 5]

for (const index of arr) {
    console.log(index);
    
}

// check if for of loops works on objects or not ??

const myObj = {
    1 : 'abhishek',
    2 : 'anand',
    3 : 'aadesh',
    4 : 'karan'
}

for (const key in myObj) {
    console.log(key , ":-", myObj[key]);
    
}
 
// as we can see error , thus for of loop does not work on objects