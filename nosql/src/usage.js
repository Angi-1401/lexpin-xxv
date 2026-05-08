import dotenv from "dotenv";
import { connectDB, disconnectDB } from "./db.js";
import { Booking } from "./models/Booking.js";

dotenv.config();

const booking = {
  customerName: "John Doe",
  customerEmail: "johndoe@example.com",
  roomType: "double",
  checkInDate: new Date(Date.now() + 24 * 60 * 60 * 1000), // Tomorrow
  checkOutDate: new Date(Date.now() + 48 * 60 * 60 * 1000), // Day after tomorrow
  totalPrice: 200,
  status: "pending",
  notes: "Late check-in requested.",
};

const run = async () => {
  try {
    await connectDB();

    const newBooking = new Booking(booking);
    await newBooking.save();
    console.log("Booking created:", newBooking);

    const bookings = await Booking.find();
    console.log("All bookings:", bookings);
  } catch (error) {
    console.error("Error:", error);
  } finally {
    disconnectDB();
  }
};

run();
