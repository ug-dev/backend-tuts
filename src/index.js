import dotenv from "dotenv";
import express from "express";

import connectDB from "./db/index.js";

dotenv.config({ path: "./env" });
const app = express();
const port = process.env.PORT || 8000;

connectDB()
  .then(() => {
    app.listen(port, () => {
      console.log(`Server is running at port : ${port}`);
    });
  })
  .catch((error) => {
    console.log("MONGO_DB Error !!");
    console.log("🚀 ~ file: index.js:17 ~ error:", error);
  });
