// when we declare object using literals then no singleton is created 

// when declared using constructor then singleton is created

// Now we are discussing literals method, object literals

const obj1 = {} // this is an empty object 

const myprofile ={
    name :"vatsalya",// remember to enter comma after each key value pair 
    age: 18,
    "location": "bangalore",
    "email id":"vatsalya.xyz"

}
// in object there key value pair like dictionary in python
// here name , age , location are key and we are writing keys without "" but object take it as string when process

console.log(myprofile)

// there is two way to access member or key

console.log(myprofile.age)// normal
console.log(myprofile['age'])// remember to write age in string format "" or '' .

// now if you try to access email id by normal way you can't access because email id has space between it. When space or special characters are used in key name then you have to use second way.

 console.log(myprofile["email id"])

 //console.log(myprofile.email.id)
 // console.log(myprofile."email id")
 // // both lines will give error


 // interview related question create symbol and use it as member in object and then access it 

 const mySymbol = Symbol("hello")

 const interview_obj = {
    mySymbol : "hello"
 }

 console.log(interview_obj.mySymbol)
 // but this not correct way because when typeof interview_obj.mySymbol is printed then it will give string not symbol

 console.log(typeof mySymbol)

console.log(Object.getOwnPropertyNames(interview_obj)); // shows string keys
console.log(Object.getOwnPropertySymbols(interview_obj)); // shows symbol keys  

 // right ans to the question

 const mySymbol2= Symbol("hii")
 const right_ans = {
    [mySymbol2] :"kuch bhi value hi change kar sakte hai yaha pe "
 }

 console.log(typeof mySymbol2)
 console.log(right_ans[mySymbol2])
 console.log(typeof right_ans[mySymbol2])
 
console.log(Object.getOwnPropertyNames(right_ans)); // shows string keys
console.log(Object.getOwnPropertySymbols(right_ans)); // shows symbol keys  

// to change value of member
myprofile.age= 20
console.log(myprofile.age)

Object.freeze(myprofile)
// now i can't any member or key value

myprofile.location= 'umaria'
console.log(myprofile)

console.log(right_ans)

// function in object

const fun_obj= {
    name: "vatsalya",
    height: 5.8
}

fun_obj.greeting = function()
{
console.log("hello world")
}

console.log(fun_obj.greeting)
// this will not excute the function , just give the reference like function and type of function

// when you write greeting() then it will get executed

console.log(fun_obj.greeting())// in result undefined will come along with hello world , don't take tension we will study it further and debug it later . It's system working

fun_obj.greeting2 = function()
{
console.log(`hello i am, ${this.name}`)// we use this to select property from the on going object, you can use it for not writing fun_obj.
}

console.log(fun_obj.greeting2())