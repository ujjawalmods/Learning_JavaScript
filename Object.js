// Object Literals

const user = {  
    name: 'Ujjawal Rai',
    class: "high",
    age: 20,
    location: "India",
    "brother name": "Rishabh Rai" // key with space in it

}

console.log(user.name); // Accessing the name property of the user object
console.log(user["name"]); // name is key and internally it is converted to string and then it is accessed
console.log(user["brother name"]); // Accessing the "brother name" property of the user object is only possible using bracket notation because it has a space in the key name


