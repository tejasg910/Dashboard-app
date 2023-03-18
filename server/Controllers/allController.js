import mongoose from "mongoose";
import { Product } from "../Models/Model.js";

export const getAllData = async (req, res, next) => {
  try {
    console.log("api hitted");

    const data = await Product.find({});
    console.log(data);
    res.status(200).json({ success: true, data: data });
  } catch (error) {
    console.log(error.message);
    res.status(200).json({ success: false, message: error.message });
  }
};
