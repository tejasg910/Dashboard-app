import dotenv from "dotenv";
dotenv.config({ path: "./Config/config.env" });
import connectDB from "./Config/conectDB.js";
connectDB();
import app from "./app.js";
app.listen(8000, () => {
  console.log("server started on port 8000");
});
