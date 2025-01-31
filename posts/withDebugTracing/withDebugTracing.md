# withDebugTracing

🚀 Angular Routing Debugging: enableTracing or withDebugTracing()

Need to debug Angular routes?
✅ Use enableTracing (for traditional RouterModule setup)
✅ Use withDebugTracing() (for standalone APIs)

📌 Both log detailed routing events to the console, helping you debug navigation issues in Angular!
#Angular #Debugging #WebDev


```TypeScript
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [ /* your routes here */ ];

@NgModule({
  imports: [RouterModule.forRoot(routes, { enableTracing: true })], // 🔍 Logs routing events
})
export class AppModule {}
```

```ts
import { provideRouter, withDebugTracing } from '@angular/router';

const routes: Routes = [ /* your routes here */ ];

bootstrapApplication(AppComponent, {
  providers: [
    provideRouter(routes, withDebugTracing()) // 🔍 Logs routing events
  ]
});
```


https://mastodon.social/@standarski/113855634648634231

https://bsky.app/profile/standarski.bsky.social/post/3lg43uciod22u

https://x.com/standarski/status/1880994148154515512