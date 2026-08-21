const map = new Map();
map.set('IN', 'India');
map.set('US', 'United States');
map.set('FR', 'France');

// console.log(map);

for (const [key, value] of map) {
    console.log(key, '->', value);
}

for (const i of map) {
    console.log(map.keys());
}

// For each loop used in object

const obj1 = {
    name: "Ujjawal",
    class: "high",
    email: "ujjawal@example.com"
};

// for (const [key, value] of obj1) {
//     console.log(key, '->', value);
//     } // In this way object is not iterable so we cannot use for of loop.




// for (const key in obj1) {
//     console.log(key + ' -> ' + obj1[key]);
// }

// for in loop is used to iterate over the properties of an object. In this case, it will log each key and its corresponding value in the obj1 object.

const prog = [ "js" , "ruby" , "python" , "java" , "c++" , "c" , "php" , "html" , "css" , "sql" , "nodejs" , "reactjs" , "angularjs" , "vuejs" , "django" , "flask" , "springboot" , "laravel" , "expressjs" , "mongodb" ];

// for (const key in prog) {
//     console.log(key);
// }

// for (const key in prog) {
//     console.log(prog[key]);
// }


// but for in loop is not recommended to use in array because it will give the index of the array and not the value of the array. So we can use for of loop in array.   


//// For in used in map? 

// for ( const key in map) {
//     console.log(keys);
// }

// no output because map is not iterable in for in loop. So we can use for of loop in map.


// prog.forEach( function (my) {
//     console.log(my);
// }   
// )

prog.forEach( (item) => {
    console.log(item);
    })


    const myarr = [ {name: "Ujjawal", age: 25} , {name: "Rai", age: 26} , {name: "John", age: 27} , {name: "Doe", age: 28} , {name: "Jane", age: 29} , {name: "Smith", age: 30} , {name: "Johnson", age: 31} , {name: "Williams", age: 32} , {name: "Jones", age: 33} , {name: "Brown", age: 34} , {name: "Davis", age: 35} , {name: "Miller", age: 36} , {name: "Wilson", age: 37} , {name: "Moore", age: 38} , {name: "Taylor", age: 39} , {name: "Anderson", age: 40} , {name: "Thomas", age: 41} , {name: "Jackson", age: 42} , {name: "White", age: 43} , {name: "Harris", age: 44} ]

    myarr.forEach( (item) => {
        console.log(item.name)
    })

    // Accessing objects inside an array using forEach loop. In this case, it will log the name property of each object in the myarr array. 