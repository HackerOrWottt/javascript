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

//2. object creation via constructor --> singleton object means only one instance of an object is created .


// Object session 2

const tinderUser= new Object()
// console.log(tinderUser);

tinderUser.id= 123
tinderUser.name = "Abhishek"
tinderUser.isLoggedIn = false

// console.log(tinderUser);

// merging  objects

const myObj1= {
    1 : "a",
    2 : "b"
}
const myObj2= {
    3 : "c",
    4 : "d"
}

// const myObj3= {myObj1, myObj2} // bad practice
// two ways

// 1. const myObj3 = Object.assign({} , myObj1, myObj2) 
// 2. const myObj3 = {...myObj1, ...myObj2} // spread operator

// to access only keys or only values , returns in array format

console.log(Object.keys(tinderUser));
console.log(Object.values(tinderUser));

// objects session 3

// destructuring of an object

const course= {
    courseName : "JS HINDI" ,
    price : 999 ,
    courseTeacher : "AbhishekVarma"
}

// It extracts the value from an object which can be easily used like below - destructure of an object
const {courseTeacher} = course
console.log(courseTeacher);
