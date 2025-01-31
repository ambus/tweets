# StructuredClone

🧪 Do you know what `structuredClone()` is in JavaScript? It’s a method for deep-copying complex objects without issues like circular references! 🚀  It causes far fewer issues compared to JSON.stringify and ensures deep copying unlike the spread operator {...object}.
Check example! 👇 #JavaScript #CodingTips

```JavaScript
const originalObject = {
    name: "John",
    data: {
        age: 30,
        names: ["Simon", "Tom"],
    },
    circularRef: null,
    date: new Date(),
};

// Adding a circular reference - does not cause an infinite loop
originalObject.circularRef = originalObject; // -> this will cause an error when using JSON.stringify

const clonedObject = structuredClone(originalObject);

// ✅ deep copy!!
clonedObject.data.age = 31;

console.log(originalObject.data.age); // 30
console.log(clonedObject.data.age);  // 31

// ✅ dates continue to be dates
console.log(typeof clonedObject.date);

```


https://x.com/standarski/status/1879160320201232508