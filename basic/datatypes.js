
"use strict"; // treat all js code as newer version
// bz of this we have to use let, const, and var to declare variables
//  otherwise it will give error 


let n=88 //This is a number data type
//console.log(n); // Output: 88
//console.log(typeof n) // Output: number
//console.log(typeof(n)) 
/*there are 2 types of typeoff method you can use any
                                             of them */
           

let player="vatsalya" //This is a string data type

/* now we will discuss different types of data types in javascript:
  1.Number -range from -2^53 to 2^53
  2.String
  3.Boolean => true or false
  4.Undefined- it is a variable that has been declared but not assigned a value
  5.Null - it a standalone value that represents no value or non-existence
  6.Symbol
  7.BigInt- used for bigger integers than Number can hold
  8.Object - a collection of key-value pairs . Here it is not same as object in C++ or Java
    
  There are more data types in javascript but these are the most commonly used ones
*/

// DATATYPES CONVERSION

let t="33"
//console.log(typeof t)
let t1=Number(t) // converting string to number 
       //To for conversion we use first letter of the data type in capital letter 
       // like Number, String, Boolean, etc.
//console.log(typeof t1) // Output: number
//console.log(t1) 

//But the real problem arise here

let num="44abc"
let converted_num=Number(num) // converting string to number
//console.log(typeof converted_num) // Output: number   
//console.log(converted_num) // Output: NaN (Not a Number)

let tryVar = null // This is a null data type ,we can't use try bz it is a reserved keyword
console.log(tryVar) // Output: null
console.log(typeof tryVar) // Output: object (this is a bug in JavaScript)

// we will use two documents to learn javascript =>mdn and tc39

 let try2=undefined // This is an undefined data type
console.log(try2) // Output: undefined
console.log(typeof try2) // Output: undefined

let try_num=Number(tryVar)
console.log(try_num) // Output: 0 (because null is converted to 0)
console.log(typeof try_num) // Output: number
let try2_num=Number(try2)
console.log(try2_num) // Output: NaN (because undefined is not a number)
console.log(typeof try2_num) // Output: number

// When type of null is checked , it returns object
//  but in case of undefined it returns undefined
// it is interview question that null is object and undefined is undefined

let option=false // This is a boolean data type , no need for first letter 
console.log(option) // Output: false
console.log(typeof option) // Output: boolean

let x="ramesh"
let y=Boolean(x) // converting string to boolean
console.log(y) // Output: true (because non-empty string is truthy)
console.log(typeof y) // Output: boolean

let p="" // empty string
let q=Boolean(p) // converting empty string to boolean
console.log(q) // Output: false (because empty string is falsy)
console.log(typeof q) // Output: boolean

let number=1
let bol=Boolean(number) // converting number to boolean
console.log(bol) // Output: true (because non-zero number is truthy)
console.log(typeof bol) // Output: boolean

// for number=0 it will return false

let number2=13
let bol2=Boolean(number2) // converting number to boolean
console.log(bol2) // Output: true (because non-zero number is truthy)

let bolvar=true
let bolnum=Number(bolvar) // converting boolean to number
console.log(bolnum) // Output: 1 (true is converted to 1)
console.log(typeof bolnum) // Output: number

// for false it wil return 0

