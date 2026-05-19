import express from "express";

import {
  createFarmController,
  getFarmsController,
  getFarmByIdController,
  updateFarmController,
  deleteFarmController,
} from "./../controllers/farm.controller.js";

const router = express.Router();

router.post("/", createFarmController);      // http://localhost:3000/farm
router.get("/", getFarmsController);         // http://localhost:3000/farm
router.get("/:id", getFarmByIdController);   // http://localhost:3000/farm/:id
router.patch("/:id", updateFarmController);  // http://localhost:3000/farm/:id
router.delete("/:id", deleteFarmController); // http://localhost:3000/farm/:id

export default router;
