function intro(){             // function definition
    console.log("hello")
    console.log("vatsalya!")
}

intro()         // function call
// remember if we just write intro it is reference , used on dom manipulation

function add(number1,number2){   // parameters
    return number1 +number2
}

console.log(add(2,7))  //2,7 is arguments

// there is no need to define data type of parameter as in other language 
// but because of this there is one problem that function don't know that number1 and number2 should be number so that we can add
//eg 
console.log(add(2,"a"))  // output will be 2a it consider 2 also as string and add concatenate both string 


// to prevent these type of cases we need to use if and else statement 
// if user doesn't enter anything in parameters then it can give Nan means not a number or NUll as result to prevent this assign default value if nothing given it is taken as input otherwise if given then  override the parameters 

function print(username){  // using if and else
    // when no argument is provided `username` will be `undefined`, not `null`.
    // using `== null` checks for both `null` and `undefined` in one shot.
    if (username == null) {
        console.log("nothing is given")
        return              // stop here so the rest of the function doesn’t run
    }
    console.log(`${username} logged out `)
    // in this formating we use backticks and ${} to print the value of variable in string
}

print()

// alternatively we could give a default value in the signature:
// function print(username = null) { ... }


function show(username="vatsalya"){  // using default value
    console.log(`${username} logged out `)  

}

show()
