// two ways of declaring an objects

// 1. as a literals --> Not a singleton , means multiple instances of an object is created ..

const JsUser = {
    name : "Abhishek",
    age : 19 ,
    location : "Pune"
}

// to access the object we have two ways 
// console.log(JsUser.name);
// console.log(JsUser["name"]);

Object.freeze(JsUser) // tis function locks value of object , and further we cannot update object

