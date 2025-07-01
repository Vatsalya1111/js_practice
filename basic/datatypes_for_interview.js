//  Primitive

//  7 types : String, Number, Boolean, null, undefined, Symbol, BigInt

const score = 100 //number
const scoreValue = 100.3 // decimal also come under number there is no float in javascript

const isLoggedIn = false // boolean
const outsideTemp = null 

let userEmail;            
let userEmail_1=undefined ; // the above both have same meaning. If we typeof userEmail and userEmail_1 it will gvie undefined.

const id = Symbol('123')
const anotherId = Symbol('123')

console.log(id === anotherId); // returns false , means the datatype and description are same but the symbol value are different. 

const bigNumber = 3456543576654356754n // BigInt, the n at the end is important to make it a BigInt

//Primitive: Stored directly, compared by value, immutable.

//Non-primitive: Stored by reference, compared by reference, mutable.



// Reference (Non primitive)

// Array, Objects, Functions

const heros = ["shaktiman", "naagraj", "doga"];

let myObj = {
    name: "hitesh",
    age: 22,
}

const myFunction = function(){
    console.log("Hello world");
}

console.log(typeof id)
console.log(typeof anotherId);

console.log(typeof heros);      // "object"    (Array)
console.log(typeof myObj);      // "object"    (Object)
console.log(typeof myFunction); // "function"  (Function)

// https://262.ecma-international.org/5.1/#sec-11.4.3


//typeof array returns "object"

//typeof object returns "object"

//typeof function returns "function" but is also object and we call it as function object 

// typeof null returns "object" (this is a known bug in JavaScript, null is actually a primitive type)

// typeof undefined returns "undefined"


//JavaScript is a dynamic (or dynamically typed) language. This means you do not need to declare variable types explicitly—types are determined at runtime, and variables can hold values of any type at different times.
// means we don't need to define variable type like in c eg int a=10;