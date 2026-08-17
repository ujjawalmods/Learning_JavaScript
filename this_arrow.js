const user = {
    name: "Ujjawal",
    class: "high",

    welcome: function () {
        console.log(`Welcome ${user.name} of ${user.class} class`);
        console.log(this)
    },

    email: "ujjawalrai0205@gmail.com",
}; 

// function mchai()
// {

//    username = "Ujjawal"
//     console.log(this.username)
// }

// mchai()

// Arrow Functionssssssssssssssss

// const addTwo = (num1 , num2) => {
//     return num1+num2
// }

// console.log(addTwo( 2,3))

//////////////////////

// const addTwo = (num1 , num2) =>   
// ({username : "ujjawal"}) // object should be wrapped in () to return , {} doesnt work or return undefined
// console.log(addTwo( 2,3))



(function chai ()
{
    console.log("iamujjawal")
})();

// This Is IIFe Immediately Invoked Function Expression

