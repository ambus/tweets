// You can combine async and sync functions and handle them with a single catch

function mySyncFunction() {
    return "Simple sync function 🔥";
}

function myAsyncFunction() {
    return new Promise(resolve => setTimeout(() => resolve("Async result"), 1000));
}

Promise.try(myAsyncFunction)
    .then(result => {
        console.log(result); // Output after 1 second: Async result
        return Promise.try(mySyncFunction);
    })
    .then(result => {
        console.log(result); // Output: Simple sync function 🔥
    })
    .catch(err => {
        console.error(err.message);
    });
    
// Output ....( after 1sec ):
// Async result
// Simple sync function 🔥