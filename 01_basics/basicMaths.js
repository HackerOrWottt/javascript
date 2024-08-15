// Maths library comes by default in javascript

console.log(Math); // it is an object in JS which includes various methods 

console.log(Math.abs(-10)); // abs is a method which convert negative value into positive value , especially used in a case where you want to find difference between two values
console.log(Math.round(4.3)); // round is a method which gives round of value of decimal values
console.log(Math.ceil(6.1)); // ceil method choose the top value of decimal values , e . 4.3 --> 5
console.log(Math.floor(6.7)); // floor method choose the ground value of decimal value e. 4.9 --> 4
console.log(Math.min(1,2,3,4,5,6,7,8,9,0)); // returns the minimum value
console.log(Math.max(1,2,3,4,5,6,7,8,9,0)); // returns the maximum value 
console.log(Math.random()); // generates a random value between range 0 to 1

//to generate random values from rane min = 10 to max = 20
const min = 10
const max = 20
console.log(Math.floor(Math.random() * (max - min + 1)) + min);

