import axios from "axios";

let token = localStorage.getItem("token");
const API_URL = import.meta.env.VITE_DOMAIN;

// ============================ Menu Item ==============================
// Major Group
export const fetchMajorGroup = async () => {
  try {

    if (!token) {
      throw new Error("No token found. Please log in.");
    }

    const response = await axios.get(`${API_URL}/config/menu/major-group`, {
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
    });

    return response.data;
  } catch (error) {
    console.error("Error fetching major groups:", error);
    throw error;
  }
};

export const addMajorGroup = async (code: string, name: string,accountcode:string,inactive:string) => {
  try {
    if (!token) {
      throw new Error("No token found. Please log in.");
    }
    
    const response = await axios.post(`${API_URL}/config/menu/major-group`,{ code, name,accountcode,inactive }, {
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
    });
    
    return response.data;
  } catch (error) {
    console.error("Error updating major group:", error);
    throw error;
  }
};

export const editMajorGroup = async (code: string, name: string,accountcode:string,inactive:string) => {
  try {
    if (!token) {
      throw new Error("No token found. Please log in.");
    }
    
    const response = await axios.put(`${API_URL}/config/menu/major-group/${code}`, { name,accountcode,inactive }, {
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
    });
    
    return response.data;
  } catch (error) {
    console.error("Error updating major group:", error);
    throw error;
  }
};

export const deleteMajorGroup = async (code: string) => {
  try {
    if (!token) {
      throw new Error("No token found. Please log in.");
    }
    
    const response = await axios.delete(`${API_URL}/config/menu/major-group/${code}`, {
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
    });
    
    return response.data;
  } catch (error) {
    console.error("Error updating major group:", error);
    throw error;
  }
};

// Family Group
export const fetchFamilyGroup = async () => {
  try {

    if (!token) {
      throw new Error("No token found. Please log in.");
    }

    const response = await axios.get(`${API_URL}/config/menu/family-group`, {
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
    });

    return response.data;
  } catch (error) {
    console.error("Error fetching family groups:", error);
    throw error;
  }
};

export const addFamilyGroup = async (code: string, name: string,accountcode:string,inactive:string) => {
  try {
    if (!token) {
      throw new Error("No token found. Please log in.");
    }
    
    const response = await axios.post(`${API_URL}/config/menu/family-group`,{ code, name,accountcode,inactive }, {
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
    });
    
    return response.data;
  } catch (error) {
    console.error("Error updating family group:", error);
    throw error;
  }
};

export const editFamilyGroup = async (code: string, name: string,accountcode:string,inactive:string) => {
  try {
    if (!token) {
      throw new Error("No token found. Please log in.");
    }
    
    const response = await axios.put(`${API_URL}/config/menu/family-group/${code}`, { name,accountcode,inactive }, {
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
    });
    
    return response.data;
  } catch (error) {
    console.error("Error updating family group:", error);
    throw error;
  }
};

export const deleteFamilyGroup = async (code: string) => {
  try {
    if (!token) {
      throw new Error("No token found. Please log in.");
    }
    
    const response = await axios.delete(`${API_URL}/config/menu/family-group/${code}`, {
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
    });
    
    return response.data;
  } catch (error) {
    console.error("Error updating family group:", error);
    throw error;
  }
};
