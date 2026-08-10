// function ShoppingCart1(num1){
//     return num1;
// }

// console.log(ShoppingCart1(5867867,10,20,30,40,50));



// Even tough multiple values are passed to the ShoppingCart function, only the first argument (num1) is returned. The rest of the arguments are ignored because the function is defined to accept on
// ly one parameter. If you want to handle multiple values, you can use the rest parameter syntax or an array to capture all arguments. Here's an example using the rest parameter:  

function ShoppingCart(...items) {
    return items;
}

console.log(ShoppingCart(5,10,20,30,40,50));

function ShoppingCart1(num1,num2,...num3) {
    return num3;
}

console.log(ShoppingCart1(5867867,10,20,30,40,50));

// 5867867 goes to num1, 10 goes to num2, and the rest of the values (20, 30, 40, 50) are captured in the num3 array. The function returns the num3 array containing [20, 30, 40, 50].

const user = {
    username: "JohnDoe",
    email: "johndoe9789788@gmail.com",
}


function handleObject() // here we pass anyObject as a parameter to the function because we may create any function here named user , anyobject give us a local variable to work with so inside function use anyobject.username whatever outside while calling just pass orginal object
{
    console.log(`Username is ${user.username} and email is ${user.email}`);
}

function handleObject1(anyObject)  //overall anyObject is just generic name for the parameter that can be used to refer to any object passed to the function. It allows the function to work with different objects without being tied to a specific one.

{ 
    console.log(`Username is ${anyObject.username} and email is ${anyObject.email}`);
}

handleObject(user);
handleObject1({
    username: "JaneDorgtreegtre",
    email: "janedoe9789788@gmail.comfghjsdik"
});





// Passing Array as an Argument to a Function

const array = [1,2,3,4,5,6,7,8,9];

function returnArray(myarr){
    console.log(myarr);
}

returnArray(array);

// same it can be passed directly without creating a variable like above in object example