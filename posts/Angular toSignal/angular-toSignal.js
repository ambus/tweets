
const data = toSignal(
  toObservable(this.inputSignal).pipe(
    filter((input) => !!input), // 👉 filter out undefined values
    switchMap((input) => this.apiService.getData(input))
  )
);

