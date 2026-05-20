import axios from "axios";

const API_URL = "http://localhost:3001/farm";

export const createFarmService = async (formData) => {
  try {
    const response = await axios.post(API_URL, formData);
    return response.data;
  } catch (error) {
    console.error("Error creating farm:", error);
    throw error;
  }
};

export const getFarmsService = async () => {
  try {
    const response = await axios.get(API_URL);
    return response.data;
  } catch (error) {
    console.error("Error fetching farms:", error);
    throw error;
  }
};

export const getFarmByIdService = async (id) => {
  try {
    const response = await axios.get(`${API_URL}/${id}`);
    return response.data;
  } catch (error) {
    console.error(`Error fetching farm with id ${id}:`, error);
    throw error;
  }
};

export const updateFarmService = async (id, formData) => {
  try {
    const response = await axios.patch(`${API_URL}/${id}`, formData);
    return response.data;
  } catch (error) {
    console.error(`Error updating farm with id ${id}:`, error);
    throw error;
  }
};

export const deleteFarmService = async (id) => {
  try {
    const response = await axios.delete(`${API_URL}/${id}`);
    return response.data;
  } catch (error) {
    console.error(`Error deleting farm with id ${id}:`, error);
    throw error;
  }
};
