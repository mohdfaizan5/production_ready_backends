## How to connect to DB professionally

```js
// db/connectDB.js
import mongoose from "mongoose";
import { DB_NAME } from "../constants.js";

const connectDB = () => {
  try{
  const connectionInstance = await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`)
  console.log(`Mongo Connected And Host link: ${connectionInstance.connection.host}`)
  // connectionInstance.connection.host will give the host DB link which we are connected -> This will help you know where you're connected

  }
  catch(error){
    console.log("\tMongoDB connection error\n", error)
    process.exit(1) // This exits the node with code 1
  }
};

export default connectDB;
```

```js
// src/constants.js

export const DB_NAME = "videotube";
```

```js
// src/server.js

import dotenv from "dotenv";
import connectDB from "./db/connectDB.js";

// We are telling to take env from root dir
dotenv.config({ path: "./env" });

connectDB();
```

> Note:
> To run with env loaded
```sh
node -r dotenv/config src/server.js
```
