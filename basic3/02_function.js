function addCart(num)
{
    return (num)
}

n=10

console.log(addCart(n))


// if pass group of number then it will just give the first number in return ,not rest of them



console.log(addCart(10,20,30))

// now here in this case to print all the numbers we need to use the ... (rest) operater

function modifycalculator(...num)
{
    return num
}

console.log(modifycalculator(10,20,30))

// accessing member inside the object and using it in the function

const user={
    username:"vatsalya",
    age:19

}

function using_member(anyobject)
{
    console.log(`${anyobject.username} age is ${anyobject.age}`)
}

using_member(user)

function printing_second_value(array1)
{
    return array1[1]
}

const newArray=[10,20,30]

console.log(printing_second_value(newArray))

