import express from "express";

const app = express();
import apiRoutes from "./Routes/apiRoutes.js";
app.use("/api", apiRoutes);
export default app;
