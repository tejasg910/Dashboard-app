import mongoose from "mongoose";

async function connectDB() {
  try {
    await mongoose.connect(process.env.DBURL);
    console.log("database connected successfully");

    // replace <username>, <password>, <cluster-address>, <database>, and <collection> with your own values
  } catch (error) {
    console.log(error.message);
  }
}

export default connectDB;
