let myArr= [1, 2, 3, 4, 5];
let myArr2= new Array(1, 2, 3, 4, 5); // no need to write [] the Array object himself will create an array

console.log(myArr);
console.log(myArr2);

//let myArr3= [3,6,hitesh,null ,"vatsalya",true] it give error because hitesh is not anydatatype
let myArr3= [3, 6, "hitesh", null, "vatsalya", true]; 
console.log(myArr3);

console.log(myArr3[0]); // 3
console.log(myArr3[2]); 
console.log(myArr3[5]); // true

//console.log(myArr3[0,2])//not work like you think it only give the last index value.

// ****array methods*****

console.log(myArr3.length); // 6
myArr3.push(100); // add 100 at the end of the array
console.log(myArr3)

myArr3.pop(); // remove the last element of the array
console.log(myArr3);

myArr3.unshift(200); // add 200 at the beginning of the array /// this is opposite of its name
console.log(myArr3);

myArr3.shift(); // remove the first element of the array
console.log(myArr3);

// but using shift and unshift is not a good idea because it will change the index of all the elements in the array and it will take more time to execute and not data optimized

console.log(myArr3.indexOf("hitesh")); // 2
console.log(myArr3.includes("bbb")); // false

let arrayfinal=myArr3.join()
// convert the array to a string

console.log(myArr3)
console.log(arrayfinal); 

//When you use the join() method on an array in JavaScript, any null or undefined values are converted to empty strings in the resulting string. therefore null is not shown in the output.

console.log(typeof myArr3)
console.log(typeof arrayfinal)

//***** slice and splice*****

console.log("original", myArr3)

let slicedArray = myArr3.slice(1, 4); // slice(start, end) end is not included

console.log("1st", slicedArray); 

console.log("original", myArr3); // original array is not changed

let splicedArray = myArr3.splice(1, 3); // here end is included 

console.log("2nd", splicedArray); // it will return the removed elements

console.log("original", myArr3); // original array is changed

//*****interview que *****

// main difference between slice and splice is that slice does not change the original array but splice changes the original array.

// slice is used to get a part of the array and splice is used to remove or add elements to the array

// slice does not change the original array but splice changes the original array bz it removes the elements we mentioned in index of splice method

//plus splice not includes the end index but slice includes the end index == this is the basic difference between slice and splice

let boys=new Array("vatsalya","sailesh","abbas")
let girls = new Array("sania","sparsha","ritika")

let students= [boys,girls]// it create array in which boys and girls arrays are elements . means only two elements
console.log(students)

//boys.push(girls)
// // here it take girls as one element and elements inside is treated separately.
console.log(boys)

// but if we want to create a array in which we add two array but boths elements come inside it but as separate then use concat method

boys.concat(girls)
console.log(boys)// but you will be suprisied that terminal result is same as previous because concat return a new array but in push it change or manipulate the given array . here we didn't declare any variable array to store returning value


new_students= boys.concat(girls)
console.log(new_students)

// modern way to do same thing is spread technique

new_students2=[...boys,...girls]
console.log(new_students2)

let complex_array=[1,2,[3,4],6,7,[8,[9,10]]]
let simpel_array=complex_array.flat(2)

// it will return array with all the elements in one level. here 2 is the depth of the array we want to flatten. if we don't give any depth it will flatten all the levels of the array. 

console.log(simpel_array);

extra=complex_array.flat(1) // it will flatten the array only one level
console.log(extra); // [ 1, 2, 3, 4, 6, 7, 8, [ 9, 10 ] ]

// but hume sare elements jo array ke andar array hai unhe elements bana hai but hume depth find nhi karna chah rhe toh hum Infinity use karte hai

let infinite_flat=complex_array.flat(Infinity) // it will flatten the array to all levels
console.log(infinite_flat); // [ 1, 2, 3, 4, 6, 7, 8, 9, 10 ]

console.log(Array.isArray(complex_array)); // true
// means complex_array is an array

console.log(Array.from("hello")); // [ 'h', 'e', 'l', 'l', 'o' ]
// it will convert the string to an array of characters

console.log(Array.from({name: "vatsalya", age: 20}))// not working as expected

// when it don't work then it will return empty array

//The last line:

//actually returns an empty array ([]), not ['name', 'age'].

//Reason:Array.from() expects an iterable or array-like object.

//A plain object like {name: "vatsalya", age: 20} is not iterable and does not have a length property.
//So, Array.from() returns an empty array.
//If you want to get the keys as an array, use:

console.log(Object.keys({name: "vatsalya", age: 20})); // [ 'name', 'age' ]

score1=100
score2=200
score3=300

console.log(Array.of(score1, score2, score3)); // [ 100, 200, 300 ]


// differenc between Array.of() and Array.from() 

//Use Array.of() to create an array from arguments. 

//Use Array.from() to create an array from iterable or array-like objects.

//Array.of()Creates a new array from the arguments you pass.Each argument becomes an element in the new array.

//Array.from()Creates a new array from an iterable or array-like object (like a string, Set, Map, or arguments object).Can also take a mapping function as a second argument.
