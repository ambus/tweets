const arr = [1, 2, 3];

// New in ES2023
const newArr = arr.with(1, 42);
console.log(newArr); // [1, 42, 3]

// Old way (spread with slice)
const oldArr = [...arr.slice(0, 1), 42, ...arr.slice(2)];
console.log(oldArr); // [1, 42, 3]