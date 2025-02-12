# Set.prototype.intersection()

🚀 #JavaScript: Meet set.intersection() – a built-in method for finding the intersection of sets! 🎉

Check example and polyfill 👇

```js
const setA = new Set([1, 2, 3, 4]);  
const setB = new Set([3, 4, 5, 6]);  

const result = setA.intersection(setB);  
console.log(result); // 👉 Set { 3, 4 }
```

```js 
if (!Set.prototype.intersection) {
  Set.prototype.intersection = function (otherSet) {
    return new Set([...this].filter(x => otherSet.has(x)));
  };
}

// Test
const setA = new Set([1, 2, 3, 4]);
const setB = new Set([3, 4, 5, 6]);

console.log(setA.intersection(setB)); // 👉 Set { 3, 4 }
```

_Publication Date: 2025-02-11_

[Mastodon](https://mastodon.social/@standarski/113985763454836847) -> [Mastodon Short](https://standarski.short.gy/5AJ0Jh)

[Bluesky](https://bsky.app/profile/standarski.bsky.social/post/3lhvv5ou55c2v) -> [Bluesky Short](https://standarski.short.gy/7jUmow)

[X](https://x.com/standarski/status/1889323094533099962) -> [X Short](https://standarski.short.gy/vemEH5)

