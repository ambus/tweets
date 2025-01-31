// Catching Synchronous Errors

function myFunction() {
    throw new Error("Error in sync function 🔥");
}

const promise = Promise.try(myFunction);

promise.then(result => {
    console.log(result); 
}).catch(err => {
    console.error(err.message); // Output: Error in sync function 🔥
});
