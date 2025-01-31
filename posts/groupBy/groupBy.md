# groupBy

📌 Object.groupBy()

Since #ES2023 you can use Object.groupBy() to group array elements based on key!

Check example 👇

Very useful! 🚀 #JavaScript

```js
const users = [
  { name: "Simon", age: 25 },
  { name: "John", age: 30 },
  { name: "Mia", age: 25 }
];

const grouped = Object.groupBy(users, user => user.age);
console.log(grouped);
/*
{
  25: [{ name: "Simon", age: 25 }, { name: "Mia", age: 25 }],
  30: [{ name: "John", age: 30 }]
}
*/
```


https://mastodon.social/@standarski/113900629278234739 -> https://standarski.short.gy/06wOUi
https://bsky.app/profile/standarski.bsky.social/post/3lgq3c65crc2a
https://x.com/standarski/status/1882177996997419202 -> https://standarski.short.gy/dfalGX