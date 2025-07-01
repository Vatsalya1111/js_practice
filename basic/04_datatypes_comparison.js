console.log(2>1) // this will give boolean result
console.log(2!=1) // true 
// these all are the simple examples and easy

console.log("2" > 1) // this will give true because string is converted to number
console.log(1<"2") // this will give true because string is converted to number

console.log("2" == 2) // this will give true because string is converted to number

console.log("2" === 2) // this will give false because === is known as strict equality operator and it checks both value and type and here string datatype is not equal to number data type

console.log(null>0) // this will give false because null is converted to 0
console.log(null==0) // this will give false because null is not equal to 0
console.log(null>=0) // this will give true because null is converted to 0 and 0 is greater than or equal to 0
// means equality operator and comparison operator works differently . equality checks equalness but comparison operator like(>,<,>=,<=) first converts the value to number and then compares it. That's why null>=0 is true but null==0 is false

console.log(undefined>0) // this will give false because undefined is converted to NaN and NaN is not greater than 0
console.log(undefined==0) // this will give false because undefined is not equal to 0

console.log(undefined>=0) // this will give false because undefined is converted to NaN and NaN is not greater than or equal to 0

//learning ==> in javascript compare only same type of data bz it will give unexpected results as "2 " > 1 is true but "2" === 2 is false.
// so always use strict equality operator === and !== to avoid unexpected results
 