// Object Literals

const user = {  
    name: 'Ujjawal Rai',
    class: "high",
    age: 20,
    location: "India",
    "brother name": "Rishabh Rai" // key with space in it

}

console.log(user["name"]); // name is key and internally it is converted to string and then it is accessed
console.log(user["brother name"]); // Accessing the "brother name" property of the user object is only possible using bracket notation because it has a space in the key name
// user.age = 21;
// console.log(user); // Accessing the name property of the user object
// Object.freeze(user); // Freezing the object to prevent any modifications to its properties
// user.age = 22; // Attempting to modify the age property of the user object after freezing it
// console.log(user); // Accessing the name property of the user object


// Doesnt give error but it will not change the value of age property because the object is frozen and cannot be modified



user.grettings = function() {
    console.log("I am function ")
}
console.log(user.grettings()); // Calling the grettings method of the user object


// getting undefined because the grettings method does not return any value, it only logs a message to the console. Therefore, when we call user.grettings(), it executes the function and logs "I am function" to the console, but since there is no return statement in the function, it returns undefined.

console.log(user.grettings); // Calling the grettings method of the user object


// its not function called its just a function returning the function definition itself, so it will log the function definition to the console instead of executing it.


user.grettings2 = function()
{
    console.log("Hello User ${this.name} ");
}

// not working because we are using single quotes instead of backticks for the string interpolation. To fix this, we can change the single quotes to backticks like this:

user.grettings2 = function()
{
    console.log(`Hello User ${this.name} `);
}

// In a JavaScript object, this refers directly to the object that currently "owns" or is executing the method.

console.log(user.grettings2()); // Calling the grettings2 method of the user object

//  End of lecture 16