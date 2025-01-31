# NaN


🤔 What does NaN mean in JS?

NaN stands for “Not-a-Number”, but ironically, it’s of type number! 🤯

You can use Number.isNaN(x) to check if value is truly NaN.
NaN !== NaN (It’s the only value not equal to itself!).
 #JavaScript #CodingTips

```JS
typeof NaN; // "number"  
0 / 0; // NaN  
parseInt("hello"); // NaN

console.log(NaN == NaN) //false
console.log(NaN === NaN) //false
```


🔥 Why is NaN !== NaN? A JS quirk or a hidden superpower? 🤯
At first, it may seem like a weird JavaScript oddity, but it’s actually a powerful feature!

Imagine your code needs to alert the user when two sensors return different values. If both sensors fail and produce faulty data, leading to NaN, the comparison NaN !== NaN triggers the alert—exactly as intended! 🚨

What looks like a quirk is actually a lifesaver in the right scenario! 😉

https://x.com/standarski/status/1879921558258684073
https://bsky.app/profile/standarski.bsky.social/post/3lfujyuc3os2m
https://mastodon.social/@standarski/113838601434737382

----
Why NaN !== NaN? What may seem like a JS quirk at first is actually a very big feature.
Imagine that your code has to display an alert to the user if the values from two sensors are different from each other. When the two sensors break and return faulty data, that returns NaN after calculations in your function. Thanks to the fact that NaN !== NaN, the user will see an alert! Seemingly a quirk of JS and yet very useful :). 
