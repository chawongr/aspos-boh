import axios from "axios";

let token = localStorage.getItem("token");
const API_URL = import.meta.env.VITE_DOMAIN;


export const fetchStoreGroup = async () => {
    try {
  
      if (!token) {
        throw new Error("No token found. Please log in.");
      }
  
      const response = await axios.get(`${API_URL}/store/group?Page=1&items_per_page=5&Sort=code&Order=%E0%B8%B4%E0%B8%B5&Query=f`, {
        headers: {
          Authorization: `Bearer ${token}`, 
          "Content-Type": "application/json",
        },
      });
  
      return response.data; 
    } catch (error) {
      console.error("Error fetching store groups:", error);
      throw error;
    }
  };

