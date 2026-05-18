//  Primitive Data Types

console.log("Hello");

let consta = 5;
console.log(consta);

let any = true;
console.log(any);

let str = "Hello World";
console.log(str);

let num = null
console.log(num);

let undef;
console.log(undef);

let sym = Symbol("123");
console.log(sym);

let bint = 123n;
console.log(bint);


// Non Primitive Data Types

//Arrays (Always IN [])

let arr = [1, "arr", 3.0, 4234598745267986452798457n, true];
console.log(arr);

//Objects (Always IN {})
let obj = {
    name: "John",
    age: 30,
    isStudent: false
};
console.log(obj);

let myFun = function () {
    console.log("Hello, World!");
}
myFun();

// All Data Types Actual types


console.log(typeof any);
console.log(typeof str);
console.log(typeof num);
console.log(typeof undef);
console.log(typeof sym);
console.log(typeof bint);
console.log(typeof arr);
console.log(typeof obj);
console.log(typeof myFun);
console.log(typeof consta);

// Deep Understanding of DataTypes


// Understanding Memory ++++++++++++++++++++++++++++++++++++++  

        // All Primitive Data Types Uses Stack ( Call By Value )
        
        let userName = "ujjawal";
         let User2Name = userName;
User2Name = "rajesh"
console.log(userName);         
console.log(User2Name);          // Because Uses Call By Value


        // All Non-Primitive Data Types Uses Heap ( Call By Reference)

        let obj2 = {
            name: "John",
            age: 30
        };


    let obj3 = obj2;
    obj3.name = "Jane";  // Both Name Changed As Obj2 Reference Is Passed Not Value Like Primitive One
console.log(obj2.name); // Output: "Jane"
console.log(obj3.name); // Output: "Jane"

// Understood Stack (Primitive) and Heap (Non-Primitive) Memory Allocation

