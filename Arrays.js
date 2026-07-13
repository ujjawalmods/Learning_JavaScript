const myArr = [1,2,4 , "Ujjawal" , true, null, undefined, [1,2,3], {name: "Ujjawal"}]
// console.log(myArr)
// console.log(myArr.length) // length of array     


const myMovies = new Array("True Detective", "Breaking Bad", "Prision Break", "Money Heist")
// // console.log(myMovies)
// // console.log(myMovies[6])
// myMovies.push("Narcos") // add element at the end of array
// myMovies.unshift("Peaky Blinders") // add element at the beginning of array
// console.log(myMovies.pop()) // remove element from the end of array
// console.log(myMovies.shift()) // remove element from the beginning of array
// console.log(myMovies)

// myMovies.splice(2, 0 , "Game of Thrones" , "stranger Things"  , 3) // add element at specific index
// console.log(myMovies)

// myMovies.splice(2, 3) // remove element from specific index
// console.log(myMovies)

// console.log(myMovies.includes("Game of Thrones")) // check if element is present in array or not;   

// const myMovies2 = myMovies.join(" = ") // convert array to string
// console.log(myMovies2)


// const myArr2 = myArr.slice(1,3)
// console.log(myArr2)


// myMovies.push(myArr)
// console.log(myMovies[3][2]) // access element of nested array


// const newArr2 = [...myArr, ...myMovies] // spread operator used to merge two arrays or even multiple arrays
// console.log(newArr2)

// const newArr3 = [].concat(myArr, myMovies ,newArr2) // concat method used to merge two arrays or even multiple array
// console.log(newArr3)


// similarly Array.of() method is used to create a new array from a list of arguments and it can also be used to convert a string to an array by passing the string as an argument to the Array.of() method.


// console.log(Array.from("Ujjawal")) // convert string to array
// console.log(Array.from({name: "Ujjawal"})) // convert object to array and return empty array because object is not iterable to fix this we can use Object.values() method to convert object to array 


// ⚡⚡ Intresting Interview Question ⚡⚡
// console.log(Array.from(Object.keys/values({name: "Ujjawal"})))