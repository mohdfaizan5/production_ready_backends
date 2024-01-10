How to hash passwords before pushing to DB

```js
userSchema.pre("save", function (next) {
  this.password = bcrypt.hash(this.password, 3);
  next();
});
```

The above code will introduce a problem, every time even you just manipulate other data, this function will run and it will rehash our code again and again. So we pust a condition forth to only hash when required

```js
userSchema.pre("save", function (next) {
  // If password is not modified don't just return(get out) of this function
  if (!this.isModified("password")) return next();

  this.password = bcrypt.hash(this.password, 3);
  next(); // If passwords hashed then proceed the middleware
});
```


## Create a new method on Model

### To check/compare hash is match with correct password
