// In nested scoping child can use parent declared variable but parent cannot use child declared variable because child is in local scope and parent is in global scope.

function outerFunction() {
    const outerVariable = "I am from the outer function";

    function innerFunction() {
        const innerVariable = "I am from the inner function";
        console.log(outerVariable); // Accessing outer variable from inner function
    }

    // console.log(innerVariable); // This will throw an error because innerVariable is not accessible in the outer function

    innerFunction(); // Calling the inner function from within the outer function...its valid
}

// innerFunction() // This will throw an error because innerFunction is not accessible outside outerFunction
outerFunction(); // This will work and call the outerFunction, but innerFunction is not accessible from here
