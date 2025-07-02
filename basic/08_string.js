let name="vatsalya"
let age=18

console.log(name+age) // name is cut because it is predefined keywords in javascript , to not get confused the system cut the name to help complier

// The above method for printing is not consider as good because we can't use some function or methods to the string while printing .
// use modern and techniqual method

console.log(`My name is ${name} and age= ${age} `)// remember we are using ` not ' this . The button we used is available left next to 1 button. we also use this button in short cut to open terminal.

let password = "vatsalya@123"
let password2 = new String("vatsalya@123")// both are different , the first one is primitive data type and second one is object data type.
// but by both we can access the methods and properties of string like length, toUpperCase, toLowerCase etc.

console.log(password.length) // 12
console.log(password.charAt(8))//@
console.log(password.indexOf('a'))// it will return the first index of a , not all the indexes 

console.log(password.substring(3,6))// it will return the substring from index 3 to 6 , not including 6

console.log(password.substring(-3,6))// it not takes neg so take index from 0 to 6

console.log(password.substring(3))// it will return the substring from index 3 to end

console.log(password.substring(6,3))// it swap the argument bz small index should be first and large index should be second

console.log(password.slice(3,6))

console.log(password.slice(-3))// it will return the last 3 characters of the string. means it will return the substring from index -3 to end

console.log(password.slice(-6,-1))

console.log(password.slice(-1,-6))// it will return empty string because it is not possible to slice the string in this way. it will not swap the argument like substring.

console.log(password.slice(6,3))// it will return empty string because it is not possible to slice the string in this way. it will not swap the argument like substring.

console.log(password.replace('@','#'))

let newpassword= new String("  hello world  ")

let hello= "  hello --"

console.log(hello)
console.log(newpassword)
// this both give different output bz new string creates a String object, not a primitive string.When you log a String object, Node.js shows it in the format [String: '  hello world  '], which looks a bit like an array but is actually an object wrapper around the string.



console.log(newpassword.trim())

console.log(newpassword.split(' '))// it will split the string into an array of strings by space


// one advantage of using new String() is that when you type normal string like "hello world" it will not give you the methods and properties of string like length, toUpperCase, toLowerCase etc. but when you use new String("hello world") it will give you the methods and properties of string like length, toUpperCase, toLowerCase etc.

