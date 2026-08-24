# Capture the flag

Very simple password protection to static pages or whole websites with no server configuration required: you ca use Dropbox, Amazon S3 or any generic hosting service to host a private, password protected site.

### [Check out the demo](https://bbaranoff.github.io/ctf/)

>Password is: "the flag to guess"

The final structure will be:

```
- index.html
- background.jpg
- this-is-a-hash      <-- the SHA1 hash of your password
  \ - index.html      <-- your original index document
```


