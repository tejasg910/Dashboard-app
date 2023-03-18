import express from "express";
import { getAllData } from "../Controllers/allController.js";
import {
  getAllCountries,
  getAllPestle,
  getAllRegion,
  getAllSector,
  getAllSource,
  getAllTopics,
  getAllYears,
} from "../Controllers/filter.js";

const router = express.Router();

router.route("/").get(getAllData);
router.route("/end-year").get(getAllYears);
router.route("/get-topics").get(getAllTopics);
router.route("/get-sector").get(getAllSector);
router.route("/get-region").get(getAllRegion);
router.route("/get-pestle").get(getAllPestle);
router.route("/get-source").get(getAllSource);
router.route("/get-country").get(getAllCountries);

export default router;
