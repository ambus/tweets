# Record<string, never>

🚀 **TypeScript:** Record<string, never> **for an empty object!**

Need to describe that a function returns _exactly_ an empty object {}? Use Record<string, never>! 🔒

Why not just {}?
➡️ {} allows adding _any_ properties.
➡️ Record<string, never> enforces _absolute emptiness_. 😎

Perfect for precise type modeling! 🛠️

```typescript
function getEmptyObject(): Record<string, never> {  
  return {}; // ✔️ Valid
}  

const obj = getEmptyObject();  
obj.someKey = 'value'; // ❌ Error!  
```

```typescript
// express.js example

app.get('/api', (req: Request, res: ResponseType | Record<string, never>) => {
  //... your code and response with ResponseType
  
  // response when you want to return an empty object
  res.json({}); // ✔️ Valid
});

```


```Typescript
//Nest.js example

@Controller('api')
export class ExampleController {

  @Get()
  get(): ResponseType | Record<string, never> {
    //... your code and response with ResponseType
    
    // response when you want to return an empty object
    return {}; // ✔️ Valid
  }
}
```


https://x.com/standarski/status/1879538800394965027
https://bsky.app/profile/standarski.bsky.social/post/3lfrynqsqp22m
https://mastodon.social/@standarski/113832900471485499