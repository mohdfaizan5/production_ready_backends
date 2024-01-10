import mongoose, { mongo } from "mongoose";
import { DB_NAME } from "../constants.js";

const connectDB = async () => {
  try {
    const connectionInstance = await mongoose.connect(
      `${process.env.MONGODB_URI}/${DB_NAME}`
    );
    console.log(
      "\n❌  MongoDb connected successfully and Host link: ",
      connectionInstance.connection.host
    );
  } catch (error) {
    console.log("❌  MongoDB connection Error", error);
    process.exit(1);
  }
};

export default connectDB;
