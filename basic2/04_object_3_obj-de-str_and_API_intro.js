const company={
    name:"vatsalya_limited",
    owner:"vatsalya"
}

console.log(company.name);
// so here to print name of company that is object i need to use company.name but it is too long and very inefficent when using frequently so concept of obj de-structure comes

const {name}=company
// by using above syntax we de structure the object like here company is object and name is member or attribute of that object so we can directly access it 

console.log(name);
// also we can short the name of attribute so that we can use it more easily , see below

const {name: n}=company
console.log(n)

// what is api ??
// api is like want some work to do but don't want how it is doing and we just want the result of it 
// there we use api . It is nothing but like a jason file , what i mean by jason file is that it like object without name(see below)
//  {
//     name:"hello",
//     price:10
// }

// so we use different methods like fetch etc to get useful information. the api will give response in this format then we need to convert that into object and then access each member and we can use in our work

// API in the simplest possible way:

// An API is a waiter in a restaurant.

// You:

// Don’t go inside the kitchen

// Don’t cook your food

// Don’t touch ingredients

// You just say:

// “One paneer butter masala please.”

// The waiter:

// Takes your request

// Goes to the kitchen

// Brings your food

// You never see how it’s made.
// You only get the result.

// That waiter is the API. 🍽️

// 🧠 In Tech Terms (Still Simple)

// API = Application Programming Interface

// But ignore the big words.

// Think of it like this:

// API is a messenger between two programs.

// Your app asks for something.
// The API brings the answer.

// 📱 Real Example

// When you open Instagram:

// You don’t have all photos saved on your phone.

// Instagram asks its server:
// “Give me posts of this user.”

// The server sends data back.

// That request and response system is done using an API.

// 🌦️ Another Example

// If you build a weather app:

// Your app does not calculate weather itself.

// It asks a weather company:

// “What is the temperature in Delhi?”

// The weather API replies:

// {
//   "city": "Delhi",
//   "temperature": 28,
//   "condition": "Cloudy"
// }

// You take that data and show it in your app.

// 🔥 Even Simpler

// API = a way for software to talk to other software

// Just like:

// Humans use language to talk

// Apps use APIs to talk

// 🧩 In JavaScript (What you’ll soon do)

// When you write:

// fetch("https://api.example.com/data")

// You are basically saying:

// “Hey API, give me some data.”

// And it replies.