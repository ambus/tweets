# Angular toSignal

🚀 #Angular: how to react to input signal changes and fetch data from an API (without an effect)?

Connect toSignal + toObservable for auto-updating API calls! ⚡

Check example 👇

```ts
const data = toSignal(
  toObservable(this.inputSignal).pipe(
    filter((input) => !!input), // 👉 filter out undefined values
    switchMap((input) => this.apiService.getData(input))
  )
);
```

No manual subscriptions! Just reactive magic!

_Publication Date: 2025-02-14_

[Mastodon](https://mastodon.social/@standarski/114002681720325096) -> [Mastodon Short](https://standarski.short.gy/eXQwdJ)

[Bluesky](https://bsky.app/profile/standarski.bsky.social/post/3li5flgmgu223)

[X](https://x.com/standarski/status/1890405914617811141) -> [X Short](https://standarski.short.gy/vemEH5)

