# Error.cause

🚀 ES13 JavaScript feature: Error.cause!

Easier debugging by preserving the original cause of an error. 
When you create a new error object (Error), you can pass an additional cause property that specifies what the original cause was.
Check out an example below 


```JS
function readFile() {
  try {
    throw new Error("No access to the file"); // Original error
  } catch (err) {
    throw new Error("Failed to load file", { cause: err }); // New bug from cause
  }
}

try {
  readFile();
} catch (err) {
  console.error(err.message); // "Failed to load file"
  console.error("Cause:", err.cause); // Original error
}
```

https://x.com/standarski/status/1882177996997419202
https://bsky.app/profile/standarski.bsky.social/post/3lgecmlgwa22x
https://mastodon.social/@standarski/113874120964344707