# Array.with()

📢 #JavaScript devs, meet array.with() from #ES2023! 🚀
Replace an array element without mutation.

✅ with() is cleaner and shorter!

Check example 👇

```js
const arr = [1, 2, 3];

// New in ES2023
const newArr = arr.with(1, 42);
console.log(newArr); // [1, 42, 3]

// Old way (spread with slice)
const oldArr = [...arr.slice(0, 1), 42, ...arr.slice(2)];
console.log(oldArr); // [1, 42, 3]
```

[X](https://x.com/standarski/status/1886502121798848867) -> [X Short](https://standarski.short.gy/7jUmow)

[BlueSky](https://bsky.app/profile/standarski.bsky.social/post/3lhccsoljdk2j)

[Mastodon](https://mastodon.social/@standarski/113941687353781784) -> [Mastodon Short](https://standarski.short.gy/uDi6zJ)

_Publication Date: 2025-02-03_

