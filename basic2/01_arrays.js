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
