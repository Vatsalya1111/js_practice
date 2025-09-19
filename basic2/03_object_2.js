// const app= new Object() //declaring the object using the singleton

const app ={} // declaring by using literals

app.id="12abc"
app.name="vatsalya"

console.log(app.name);

// object inside object

const obj1={
    name:"vatsalya",
    age:18,
    address:{
        street:"abc road",
        city:"bangalore",
        state:"karnataka"
    }
}

console.log(obj1.address.city);// you can use the ? for protecting from error if address is not present in obj1 then it will not give error it will return undefined. mostly used when data is fetched from api
console.log(obj1?.address?.city);
console.log(obj1['address']['state']);

// to combine two objects

const first={
    name:"vatsalya",
    age:18
}

const second={
    height : 5.8,
    weight: 70
}
//const three =Object.assign(one, two) // it will combine two objects and store in one object
// but this will change the first object and store the combined object in it and not professionally correct

const three=Object.assign({}, first, second) // correct way to do it

// there is easy way to do it which we will use mostly
const four={...first, ...second} // spread operator
console.log(three);
console.log(four);

// object methods
console.log(app)
console.log(Object.keys(app)) // it will return the keys of the object in the form of array
console.log(Object.values(app)) // it will return the values of the object in the form of array
console.log(Object.entries(app)) // it will return the key value pair of the object in the form of array of arrays

console.log(app.hasOwnProperty('id')) // true
console.log(app.hasOwnProperty('color')) // false