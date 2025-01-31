// Wrapping Synchronous Code in a Promise

function myFunction() {
    return "Simple sync function 🔥";
}

const promise = Promise.try(myFunction);

console.log("Start");

promise.then(result => {
    console.log(result);
}).catch(err => {
    console.error(err.message);
});

console.log("End");

// Output: 
// Start
// End
// Simple sync function 🔥