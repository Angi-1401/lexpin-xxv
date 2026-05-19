import mongoose from "mongoose";

const farmSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    location: {
      type: String,
      required: true,
    },
    size: {
      type: Number,
      required: true,
    },
    crops: [
      {
        type: String,
        required: true,
      },
    ],
    animals: [
      {
        type: String,
        required: true,
      },
    ],
  },
  {
    timestamps: true,
  },
);

const Farm = mongoose.model("Farm", farmSchema);

export default Farm;

/**
 * Expected JSON structure for creating/updating a farm:
 * {
 *  "name": "Green Valley Farm",
 *  "location": "123 Farm Lane, Countryside",
 *  "size": 150,
 *  "crops": ["Wheat", "Corn", "Soybeans"],
 *  "animals": ["Cows", "Pigs", "Chickens"]
 * }
 */
