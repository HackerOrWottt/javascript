//basic function 

function addTwoNUms(number1, number2){ // here parameters are declared
    console.log( number1 + number2 );
}

addTwoNUms(3,4) // here arguments are passed

function addElementToMyCart(...num){ // take multiple arguments as an input array
    return num 
}

//how to pass object in a function

const myObj = {
    username : 199
}

function handleObject(myObj){
    console.log(`${myObj.username}`)
}

handleObject(myObj)