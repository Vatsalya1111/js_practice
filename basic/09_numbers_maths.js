const score=100
const num = new Number(100);
console.log(score)
console.log(num);
// the type of both is number but when you use the Number object, it has methods and properties and console.log give number :100

console.log(num.toString()); 
console.log(num.toString().length); // 3 length is property of string not a function that why's no ()

console.log(num.toFixed(2)); // 100.00
 
balance= 123456.789
console.log(balance.toLocaleString())// by default convert to US system 

console.log(balance.toLocaleString('en-IN')); // Indian system

console.log(balance.toPrecision(5)); 
console.log(balance.toPrecision(6)); 
console.log(balance.toPrecision(8)); 

// *******Math *********

console.log(Math)
console.log(Math.PI); // 3.141592653589793
console.log(Math.abs(-10)); // 10
// it returns postive value for negative value and postive value remains same

console.log(Math.round(4.5)); // 5
console.log(Math.round(4.4)); // 4
console.log(Math.round(4.6)); // 5

console.log(Math.ceil(4.1)); // 5
console.log(Math.ceil(4.9)); // 5
console.log(Math.floor(4.9)); // 4
console.log(Math.floor(4.1)); // 4

console.log(Math.min(1, 2, 3, -1, -2)); // -2
console.log(Math.max(1, 2, 3, -1, -2)); // 3
console.log(Math.random()); // random number between 0 and 1    
console.log(Math.random() * 10); // random number between 0 and 10
console.log(Math.random() * 10+ 1); // random number between 1 and 10

console.log((Math.random()*100)+1); // random number between 1 and 100

console.log(Math.floor(Math.random() * 100) + 1); // random number between 1 and 100 but not any decimal value


//general formula for random number between min and max

min=5
max=19

console.log(Math.floor(Math.random()*(max-min+1))+min); // random number between 5 and 19