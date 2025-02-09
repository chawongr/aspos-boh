import axios from "axios";

let token = localStorage.getItem("token");
const API_URL = import.meta.env.VITE_DOMAIN;

// ============================ Store ==============================
// Store Group
export const fetchStoreGroup = async () => {
  try {

    if (!token) {
      throw new Error("No token found. Please log in.");
    }

    const response = await axios.get(`${API_URL}/store/group`, {
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

export const addStoreGroup = async (code: string, name: string) => {
  try {
    if (!token) {
      throw new Error("No token found. Please log in.");
    }
    
    const response = await axios.post(`${API_URL}/store/group`,{ code, name }, {
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
    });
    
    return response.data;
  } catch (error) {
    console.error("Error updating store group:", error);
    throw error;
  }
};

export const editStoreGroup = async (code: string, name: string) => {
  try {
    if (!token) {
      throw new Error("No token found. Please log in.");
    }
    
    const response = await axios.put(`${API_URL}/store/group/${code}`, { name }, {
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
    });
    
    return response.data;
  } catch (error) {
    console.error("Error updating store group:", error);
    throw error;
  }
};

export const deleteStoreGroup = async (code: string) => {
  try {
    if (!token) {
      throw new Error("No token found. Please log in.");
    }
    
    const response = await axios.delete(`${API_URL}/store/group/${code}`, {
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
    });
    
    return response.data;
  } catch (error) {
    console.error("Error updating store group:", error);
    throw error;
  }
};


// Store Type
export const addStoreType = async (code: string, type: string) => {
  try {
    if (!token) {
      throw new Error("No token found. Please log in.");
    }
    
    const response = await axios.post(`${API_URL}/store/type`,{ code, type }, {
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
    });
    
    return response.data;
  } catch (error) {
    console.error("Error updating store type:", error);
    throw error;
  }
};

export const editStoreType = async (code: string, type: string) => {
  try {
    if (!token) {
      throw new Error("No token found. Please log in.");
    }
    
    const response = await axios.put(`${API_URL}/store/type/${code}`, { type }, {
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
    });
    
    return response.data;
  } catch (error) {
    console.error("Error updating store type:", error);
    throw error;
  }
};

export const deleteStoreType = async (code: string) => {
  try {
    if (!token) {
      throw new Error("No token found. Please log in.");
    }
    
    const response = await axios.delete(`${API_URL}/store/type/${code}`, {
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
    });
    
    return response.data;
  } catch (error) {
    console.error("Error updating store type:", error);
    throw error;
  }
};


// Area
export const addArea = async (code: string, name: string) => {
  try {
    if (!token) {
      throw new Error("No token found. Please log in.");
    }
    
    const response = await axios.post(`${API_URL}/location/area`,{ code, name }, {
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
    });
    
    return response.data;
  } catch (error) {
    console.error("Error updating area:", error);
    throw error;
  }
};

export const editArea = async (code: string, name: string) => {
  try {
    if (!token) {
      throw new Error("No token found. Please log in.");
    }
    
    const response = await axios.put(`${API_URL}/location/area/${code}`, { name }, {
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
    });
    
    return response.data;
  } catch (error) {
    console.error("Error updating area:", error);
    throw error;
  }
};

export const deleteArea = async (code: string) => {
  try {
    if (!token) {
      throw new Error("No token found. Please log in.");
    }
    
    const response = await axios.delete(`${API_URL}/location/area/${code}`, {
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
    });
    
    return response.data;
  } catch (error) {
    console.error("Error updating area:", error);
    throw error;
  }
};


// Company
export const addCompany = async (
  code: string,
  name: string,
  address1: string,
  address2: string,
  address3: string,
  email: string,
  phone: string,
  taxId: string
) => {
  try {
    if (!token) {
      throw new Error("No token found. Please log in.");
    }

    const response = await axios.post(`${API_URL}/location/company`, { code, name, address1, address2, address3, email, phone, taxId }, {
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
    });

    return response.data;
  } catch (error) {
    console.error("Error updating company:", error);
    throw error;
  }
};

export const editCompany = async (
  code: string,
  name: string,
  address1: string,
  address2: string,
  address3: string,
  email: string,
  phone: string,
  taxId: string
) => {
  try {
    if (!token) {
      throw new Error("No token found. Please log in.");
    }

    const response = await axios.put(`${API_URL}/location/company/${code}`, { name, address1, address2, address3, email, phone, taxId }, {
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
    });

    return response.data;
  } catch (error) {
    console.error("Error updating company:", error);
    throw error;
  }
};

export const deleteCompany = async (code: string) => {
  try {
    if (!token) {
      throw new Error("No token found. Please log in.");
    }

    const response = await axios.delete(`${API_URL}/location/company/${code}`, {
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
    });

    return response.data;
  } catch (error) {
    console.error("Error updating company:", error);
    throw error;
  }
};
