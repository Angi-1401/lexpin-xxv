import express from "express";
import mongoose from "mongoose";
import cors from "cors";

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
const port = 3001;

const corsOptions = {
  origin: "http://localhost:3000",
  optionsSuccessStatus: 200,
};

app.use(express.json());
app.use(cors(corsOptions));

app.use("/farm", farmRoutes);

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
