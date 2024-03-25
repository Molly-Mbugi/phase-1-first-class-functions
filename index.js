function receivesAFunction(callback) {
    callback();
}

// Function that returns a named function
function returnsANamedFunction() {
    return function namedFunction() {
        // Function body (optional)
    };
}

// Function that returns an anonymous function
function returnsAnAnonymousFunction() {
    return function() {
        // Function body (optional)
    };
}