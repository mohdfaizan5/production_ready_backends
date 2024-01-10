import dotenv from "dotenv";
import connectDB from "./db/connectDB.js";
import { app } from "./app.js";

dotenv.config({ path: "./env" });

connectDB()
  .then(() => {
    app.listen(3000, () => console.log("✅  Server Up"));
  })
  .catch((error) => {
    console.log("❌  MongoDb connection error", error);
  });
