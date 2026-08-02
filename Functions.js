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