import express from "express";
import { getAllData } from "../Controllers/allController.js";

const router = express.Router();

router.route("/").get(getAllData);

export default router;
