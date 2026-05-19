import mongoose, { mongo } from "mongoose";

let isConnected = false;

export const connectDB = async () => {
  if (isConnected) {
    // console.log("Already connected to the database.");
    return mongoose.connection;
  }

  try {
    const uri = "mongodb://localhost:27017";
    const dbName = "booking_db";
    await mongoose.connect(uri, { dbName, autoIndex: true });
    isConnected = true;
    // console.log("Connected to the database.");
  } catch (error) {
    console.error("Error connecting to the database:", error);
    throw error;
  }
};

export const disconnectDB = async () => {
  if (!isConnected) {
    // console.log("Not connected to the database.");
    return;
  }

  try {
    await mongoose.disconnect();
    isConnected = false;
    // console.log("Disconnected from the database.");
  } catch (error) {
    console.error("Error disconnecting from the database:", error);
    throw error;
  }
};
