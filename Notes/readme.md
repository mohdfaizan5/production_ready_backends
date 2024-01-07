# New learn

- Data model even before starting or in start of a project
  - Think of what data fields will be available on the application
    > Write down all data what you'll be taking from your user

```js
// Step1
import mongoose from "mongoose";

// Step 2
const todoSchema = new mongoose.Schema({}, { timestamps: true });

// Step 3
export default Todo = mongoose.model("Todo", todoSchema);
```

> Tips:
>
> 1. BestPractice: Use model name as variable name (here Todo and Todo)
> 2. Mongo converts model name to lower and makes it plural.
>    > Here `Todo` is converted to `todos`

## Enum

Enumaration are choices from only which you can select and if something else is given then it wont accept

> It takes an array

```js
{
  status: {
    type: String,
    enum: ["PENDING", "CANCELLED", "DELIVERED"],
    default: "PENDING"
  }

}

```

Inital prettier setup

```json
{
  "singleQuote": false,
  "bracketSpacing": true, // How many spaces after a bracket
  "tabWidth": 4, // Whole project tab width will be changed to this standard
  "semi": false, // Do you need semi colons or not
  "trailingComma": "es5" // Like do you want to end the final key value with comma or not
}
```

Pritter Ignorer;

```json
// .prettierignore
node_modules
/dist/




*.env
.env
.env.*
```
