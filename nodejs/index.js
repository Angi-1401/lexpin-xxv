import express from "express";
import mongoose from "mongoose";

import farmRoutes from "./src/routes/farm.routes.js";

const mongoURI = "mongodb://localhost:27017/iaiao";
mongoose
  .connect(mongoURI)
  .then(() => {
    console.log("Connected to MongoDB");
  })
  .catch((err) => {
    console.error("Failed to connect to MongoDB", err);
  });

const app = express();
const port = 3000;

app.use(express.json());
app.use("/farm", farmRoutes);

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
