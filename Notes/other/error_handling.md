```js
// Converts special chars that can cause vulnerabilities into encoded
app.use(express.urlencoded());

// Converts even for nested ones
app.use(express.urlencoded({ extended: true, limit: "16kb" }));
```

## JSON

```js
// Setting up to also accept json as input
app.use(express.json());

// We can also set limits
app.use(express.json({ limit: "16kb" }));
```

### Setting static files
```js
// To serve static files 
app.use(express.static("public"))
```


## Final

```js
app.use(express.json({ limit: "32kb" }));
app.use(express.urlencoded({ extended: true, limit: "32kb" }));
app.use(express.static("public"))
app.use(cookieParser())
```
