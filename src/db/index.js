import mongoose from "mongoose";
import { DB_NAME } from "../constants.js";

const connectDB = async () => {
  try {
    const connectionInstance = await mongoose.connect(
      `${process.env.MONGODB_URI}/${DB_NAME}`
    );
    console.log("🚀🚀🚀 MONGODB CONNETED !!!" + connectionInstance);
  } catch (error) {
    console.log(
      "🚀 ~ file: index.js:8 ~ connectDB ~ MongoDB Error error:",
      error
    );
    process.exit(1);
  }
};

export default connectDB;
