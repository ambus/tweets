const numbers = [3, 1, 4, 1, 5, 9];  
const sorted = numbers.toSorted();  

console.log(numbers); // [3, 1, 4, 1, 5, 9] ✅ original  
console.log(sorted);  // [1, 1, 3, 4, 5, 9] 🔥 new  