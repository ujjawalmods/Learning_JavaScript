// Object Literals

const user = {  
    name: 'Ujjawal Rai',
    class: "high",
    age: 20,
    location: "India",
    "brother name": "Rishabh Rai" // key with space in it

}

// console.log(user["name"]); // name is key and internally it is converted to string and then it is accessed
// console.log(user["brother name"]); // Accessing the "brother name" property of the user object is only possible using bracket notation because it has a space in the key name
// user.age = 21;
// console.log(user); // Accessing the name property of the user object
// Object.freeze(user); // Freezing the object to prevent any modifications to its properties
// user.age = 22; // Attempting to modify the age property of the user object after freezing it
// console.log(user); // Accessing the name property of the user object


// Doesnt give error but it will not change the value of age property because the object is frozen and cannot be modified



// user.grettings = function() {
//     console.log("I am function ")
// }
// console.log(user.grettings()); // Calling the grettings method of the user object


// getting undefined because the grettings method does not return any value, it only logs a message to the console. Therefore, when we call user.grettings(), it executes the function and logs "I am function" to the console, but since there is no return statement in the function, it returns undefined.

// console.log(user.grettings); // Calling the grettings method of the user object


// its not function called its just a function returning the function definition itself, so it will log the function definition to the console instead of executing it.


// user.grettings2 = function()
// {
//     console.log("Hello User ${this.name} ");
// }

// not working because we are using single quotes instead of backticks for the string interpolation. To fix this, we can change the single quotes to backticks like this:

// user.grettings2 = function()
// {
//     console.log(`Hello User ${this.name} `);
// }

// // In a JavaScript object, this refers directly to the object that currently "owns" or is executing the method.

// // console.log(user.grettings2()); // Calling the grettings2 method of the user object

// //  End of lecture 16

// const obj1 = {
//     name : "City Connect",
//     "owner/cto ": "Ujjawal Rai",
//     technology : "React JS",
// }

//     const obj2 = {
//         namefds : "AI integrated City Connect",
//         "ownerfd/cto ": "Ujjawal Rai",
//         technologyfsd : "React JS + AI",
//     }

// // obj3 = {obj1 , obj2} 
// //  Not used for merging because its object inside object so it will create a new object with two properties obj1 and obj2 instead of merging the two objects into one.

// // console.log(obj3); // Accessing the obj3 object

// // const Obj3 = Object.assign(obj2, obj1); // Merging the two objects into one using Object.assign() method
// // console.log(Obj3); // Accessing the Obj3 object

// const obj3 = {...obj1, ...obj2}; // Merging the two objects into one using spread operator
// // console.log(obj3); // Accessing the obj3 object

// console.log (Object.keys(obj3)); // Accessing the keys of the obj3 object
// console.log (Object.values(obj3)[1]); // Accessing the element of array of the obj3 object

// console.log(obj3.hasOwnProperty("namegfd")); // Checking if the obj3 object has the property/key "name"



// De Structure In Javascript

const obj4 = {  
    name : "City Connect",
    "owner/cto ": "Ujjawal Rai",
    technology : "React JS",
}

console.log(obj4.technology); // Accessing the technology property of the obj4 object

const {technology : tech} = obj4; 

// instead if objectname.proeprty we used only name even shorted that by using another short name 
// Destructuring the obj4 object to extract the technology property
// So it just simplifies the name better if using again and again
console.log(tech); // Accessing the technology property of the obj4 object after destructuring