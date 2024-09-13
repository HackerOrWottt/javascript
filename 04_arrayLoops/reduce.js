const myNums= [1,2,3,4,5]

const myTotal = myNums.reduce( (accumulator, currvalue) => {
    console.log(`acc : ${accumulator}`);
    console.log(`currVal : ${currvalue}`);
    
    return accumulator + currvalue
}, 0) // you have to pass starting value of accumalator like this by giving value after comma, and further accumlator value become accumaltor + currValue


console.log(myTotal);
