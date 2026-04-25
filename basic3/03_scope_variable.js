// let ,const are fine like it is different for global and block scope

// but var is common for all the program like changes inside function or {} can effect the value of variable outside

let a=10;
const b=20;
var c=30;

if(true){
    a=100
    //b=200 because of const value we can't change the value of b
    c=300
    
}

console.log(a,b,c)


//var is function scope and let and const are block scope  means if we declare variable inside the function then it is not accessible outside the function but if we declare variable inside the block then it is accessible outside the block in case of var but not in case of let and const

if(true){
    let x=10;
    var y=20;
    const z=30;
}

// console.log(x)  // error because x is block scope variable
console.log(y)  // 20 because y is function scope variable
// console.log(z)  // error because z is block scope variable

