import Farm from "./../models/farm.model.js";

export const createFarmController = async (req, res) => {
  try {
    const farm = new Farm(req.body);
    await farm.save();
    res.status(201).json(farm);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const getFarmsController = async (req, res) => {
  try {
    const farms = await Farm.find();
    res.status(200).json(farms);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const getFarmByIdController = async (req, res) => {
  try {
    const farm = await Farm.findById(req.params.id);
    if (!farm) {
      return res.status(404).json({ message: "Farm not found" });
    }
    res.status(200).json(farm);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const updateFarmController = async (req, res) => {
  try {
    const farm = await Farm.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );
    if (!farm) {
      return res.status(404).json({ message: "Farm not found" });
    }
    res.status(200).json(farm);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const deleteFarmController = async (req, res) => {
  try {
    const farm = await Farm.findByIdAndDelete(req.params.id);
    if (!farm) {
      return res.status(404).json({ message: "Farm not found" });
    }
    res.status(200).json(farm);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
