// 2 types of memory
// 1 - Stack Memory - used in primitve data types
// 2 - Heap Memory - used in  non- primitive types

let myYouTubeName= "igodPain"
let myName= "Abhishek"

myName= myYouTubeName
myName= "abhishekVarma"

console.log(myYouTubeName);

console.log(myName);

// object

let userOne = {
    email : "abhishekvarma123j@mail.com" , 
    upiID : "user@paytm"
}

let userTwo = userOne

userTwo.email = "user@google.com"

console.log(userOne.email);
console.log(userTwo.email);



