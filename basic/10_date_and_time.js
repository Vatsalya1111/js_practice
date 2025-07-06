// IN Future we can use Temporal API for date and time manipulation ,not now bz it is not supported in all browsers

// we can use Date object to get current date and time

let currentDate = new Date();
console.log(currentDate);
// this is not in readable format so we will use methods to get readable format

console.log(typeof currentDate); // object

console.log(currentDate.toString()); 
console.log(currentDate.toLocaleString())
console.log(currentDate.toDateString());
console.log(currentDate.toTimeString());// time here is taken from local time zone that why might be different from normal time

console.log(currentDate.toISOString()); // this is in UTC format , not understandable by humans

let createdDate =new Date(2025,0,1); // year, month, date here month is 0 based index so 0 means January

newDate= new Date(2025,0,1,10,20,30); // year, month, date, hours, minutes, seconds

console.log(createdDate.toDateString()); // this will give us the date in readable format

console.log(newDate.toDateString())// this will not give us time bz it give only date

console.log(newDate.toTimeString())// this will give us the time in readable format

// but if we want to get both and date and time in readable format we can use toLocaleString() method

console.log(newDate.toLocaleString());

createdDate2 =new Date('2025-00-01')
console.log(createdDate2.toDateString()) // this will give us Invalid Date because month is 0 based index so 00 is not valid

// give month from 1 to 12
createdDate3 =new Date('2025-01-01') 
console.log(createdDate3.toDateString())
// also we can creatd date in differnt format like this 
createdDate4 =new Date('2025/01/01')
createdDate5 =new Date('01-01-2025') 

console.log(createdDate4.toDateString())
console.log(createdDate5.toDateString())

console.log(currentDate)

let timestamp = Date.now()
// Date.now() returns the number of milliseconds since January 1, 1970, 00:00:00 UTC

console.log(timestamp); 
console.log(currentDate.getTime())
// here is a tiny time gap between when currentDate is created and when timestamp is assigned. That’s why their values are slightly different. If you want them to be exactly the same, you must use the same moment

// till now we are getting time in milliseconds but we can also get time in seconds by dividing it by 1000
console.log(Math.floor(timestamp / 1000)); 

// more methods in date object
console.log(currentDate.getMonth())// here month is starting from 0 so 6 means july
// for no confusion we add 1 to the month
console.log(currentDate.getMonth() + 1); 

//Amazing properties of toLoacaleString() method
console.log(currentDate.toLocaleString('default',{weekday:'short'},{weekday:'long'})); 
//  it will give only short name of the day bz we can pass only one option at a time and here it is taking the first option
console.log(currentDate.toLocaleString('default',{weekday:'long',month:'short',day:'numeric'}));