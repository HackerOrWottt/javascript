const codinglanguage= ["js", "c", "java", "python", "cpp"]

//we can use for each loop like below in javascript 1st way 

// codinglanguage.forEach(function (item) {
//     console.log(item);   
// })

// // 2nd way by using arrow operator

// codinglanguage.forEach( (item) => {
//     console.log(item);
    
// })

// 3rd way

function printMe(item){
    console.log(item);
    
}

codinglanguage.forEach(printMe)

// to operate objects present in array using for each loop

const code = [
    {
        languageName : "Javascript",
        languageFileName : "JS"
    },
    {
        languageName : "Java" ,
        languageFileName : "java"
    },
    {
        languageName : "python",
        languageFileName : "py"
    }
]

code.forEach( (item) => {
    console.log(item.languageName);
})