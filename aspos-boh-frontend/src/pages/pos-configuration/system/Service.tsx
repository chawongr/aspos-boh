import axios from "axios";

// ============================ Store ==============================
// Store Group
export const fetchStoreGroup = async (searchTerm: string) => {
  let token = localStorage.getItem("token");
  const API_URL = import.meta.env.VITE_DOMAIN;
  try {

    if (!token) {
      throw new Error("No token found. Please log in.");
    }

    const url = searchTerm
      ? `${API_URL}/store/group${searchTerm}`
      : `${API_URL}/store/group`;

    const response = await axios.get(url, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    const data = Array.isArray(response.data) ? response.data : response.data.data;

    const formattedData = data.map((item: any, index: number) => ({
      value: item.code ? item.code.toString() : `fallback-${index}`,
      label: item.name,

    }));


    return formattedData;
  } catch (error) {
    console.error("Error fetching store groups:", error);
    throw error;
  }
};

export const addStoreGroup = async (code: string, name: string) => {
  let token = localStorage.getItem("token");
  const API_URL = import.meta.env.VITE_DOMAIN;
  try {
    if (!token) {
      throw new Error("No token found. Please log in.");
    }

    const response = await axios.post(`${API_URL}/store/group`, { code, name }, {
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
  let token = localStorage.getItem("token");
  const API_URL = import.meta.env.VITE_DOMAIN;
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
  let token = localStorage.getItem("token");
  const API_URL = import.meta.env.VITE_DOMAIN;
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
  let token = localStorage.getItem("token");
  const API_URL = import.meta.env.VITE_DOMAIN;
  try {
    if (!token) {
      throw new Error("No token found. Please log in.");
    }

    const response = await axios.post(`${API_URL}/store/type`, { code, type }, {
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
  let token = localStorage.getItem("token");
  const API_URL = import.meta.env.VITE_DOMAIN;
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
  let token = localStorage.getItem("token");
  const API_URL = import.meta.env.VITE_DOMAIN;
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
  let token = localStorage.getItem("token");
  const API_URL = import.meta.env.VITE_DOMAIN;
  try {
    if (!token) {
      throw new Error("No token found. Please log in.");
    }

    const response = await axios.post(`${API_URL}/location/area`, { code, name }, {
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
  let token = localStorage.getItem("token");
  const API_URL = import.meta.env.VITE_DOMAIN;
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
  let token = localStorage.getItem("token");
  const API_URL = import.meta.env.VITE_DOMAIN;
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
    let token = localStorage.getItem("token");
    const API_URL = import.meta.env.VITE_DOMAIN;
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
    let token = localStorage.getItem("token");
    const API_URL = import.meta.env.VITE_DOMAIN;
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
  let token = localStorage.getItem("token");
  const API_URL = import.meta.env.VITE_DOMAIN;
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


// Store
export const addStore = async (
  storeNo: string,
  name: string,
  address1: string,
  address2: string,
  address3: string,
  email: string,
  phone: string,
  stroregroup: string,
  area: string,
  region: string,
  country: string,
  opendate: string,
  closed: string,
  accountcode: string,
  costcentre: string,
  storetype: string,
  ipaddress: string,
) => {
  try {
    let token = localStorage.getItem("token");
    const API_URL = import.meta.env.VITE_DOMAIN;
    if (!token) {
      throw new Error("No token found. Please log in.");
    }

    const response = await axios.post(`${API_URL}/store`, { storeNo, name, address1, address2, address3, email, phone, stroregroup, area, region, country, opendate, closed, accountcode, costcentre, storetype, ipaddress }, {
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
    });

    return response.data;
  } catch (error) {
    console.error("Error updating store:", error);
    throw error;
  }
};

export const editStore = async (
  storeNo: string,
  name: string,
  address1: string,
  address2: string,
  address3: string,
  email: string,
  phone: string,
  stroregroup: string,
  area: string,
  region: string,
  country: string,
  opendate: string,
  closed: string,
  accountcode: string,
  costcentre: string,
  storetype: string,
  ipaddress: string,
) => {
  let token = localStorage.getItem("token");
  const API_URL = import.meta.env.VITE_DOMAIN;
  try {
    if (!token) {
      throw new Error("No token found. Please log in.");
    }

    const response = await axios.put(`${API_URL}/store/${storeNo}`, { name, address1, address2, address3, email, phone, stroregroup, area, region, country, opendate, closed, accountcode, costcentre, storetype, ipaddress }, {
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
    });

    return response.data;
  } catch (error) {
    console.error("Error updating store:", error);
    throw error;
  }
};

export const deleteStore = async (storeNo: string) => {
  let token = localStorage.getItem("token");
  const API_URL = import.meta.env.VITE_DOMAIN;
  try {
    if (!token) {
      throw new Error("No token found. Please log in.");
    }

    const response = await axios.delete(`${API_URL}/store/${storeNo}`, {
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
    });

    return response.data;
  } catch (error) {
    console.error("Error updating store:", error);
    throw error;
  }
};

// Country
export const addCountry = async (code: string, name: string) => {
  let token = localStorage.getItem("token");
  const API_URL = import.meta.env.VITE_DOMAIN;
  try {
    if (!token) {
      throw new Error("No token found. Please log in.");
    }

    const response = await axios.post(`${API_URL}/location/country`, { code, name }, {
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
    });

    return response.data;
  } catch (error) {
    console.error("Error updating country:", error);
    throw error;
  }
};

export const editCountry = async (code: string, name: string) => {
  let token = localStorage.getItem("token");
  const API_URL = import.meta.env.VITE_DOMAIN;
  try {
    if (!token) {
      throw new Error("No token found. Please log in.");
    }

    const response = await axios.put(`${API_URL}/location/country/${code}`, { name }, {
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
    });

    return response.data;
  } catch (error) {
    console.error("Error updating country:", error);
    throw error;
  }
};

export const deleteCountry = async (code: string) => {
  let token = localStorage.getItem("token");
  const API_URL = import.meta.env.VITE_DOMAIN;
  try {
    if (!token) {
      throw new Error("No token found. Please log in.");
    }

    const response = await axios.delete(`${API_URL}/location/country/${code}`, {
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
    });

    return response.data;
  } catch (error) {
    console.error("Error updating country:", error);
    throw error;
  }
};

// Region
export const addRegion = async (code: string, name: string) => {
  let token = localStorage.getItem("token");
  const API_URL = import.meta.env.VITE_DOMAIN;
  try {
    if (!token) {
      throw new Error("No token found. Please log in.");
    }

    const response = await axios.post(`${API_URL}/location/region`, { code, name }, {
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
    });

    return response.data;
  } catch (error) {
    console.error("Error updating region:", error);
    throw error;
  }
};

export const editRegion = async (code: string, name: string) => {
  let token = localStorage.getItem("token");
  const API_URL = import.meta.env.VITE_DOMAIN;
  try {
    if (!token) {
      throw new Error("No token found. Please log in.");
    }

    const response = await axios.put(`${API_URL}/location/region/${code}`, { name }, {
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
    });

    return response.data;
  } catch (error) {
    console.error("Error updating region:", error);
    throw error;
  }
};

export const deleteRegion = async (code: string) => {
  let token = localStorage.getItem("token");
  const API_URL = import.meta.env.VITE_DOMAIN;
  try {
    if (!token) {
      throw new Error("No token found. Please log in.");
    }

    const response = await axios.delete(`${API_URL}/location/region/${code}`, {
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
    });

    return response.data;
  } catch (error) {
    console.error("Error updating region:", error);
    throw error;
  }
};


// Language
export const addLanguage = async (code: string, language: string) => {
  let token = localStorage.getItem("token");
  const API_URL = import.meta.env.VITE_DOMAIN;
  try {
    if (!token) {
      throw new Error("No token found. Please log in.");
    }

    const response = await axios.post(`${API_URL}/config/language`, { code, language }, {
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
    });

    return response.data;
  } catch (error) {
    console.error("Error updating language:", error);
    throw error;
  }
};

export const editLanguage = async (code: string, language: string) => {
  let token = localStorage.getItem("token");
  const API_URL = import.meta.env.VITE_DOMAIN;
  try {
    if (!token) {
      throw new Error("No token found. Please log in.");
    }

    const response = await axios.put(`${API_URL}/config/language/${code}`, { language }, {
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
    });

    return response.data;
  } catch (error) {
    console.error("Error updating language:", error);
    throw error;
  }
};

export const deleteLanguage = async (code: string) => {
  let token = localStorage.getItem("token");
  const API_URL = import.meta.env.VITE_DOMAIN;
  try {
    if (!token) {
      throw new Error("No token found. Please log in.");
    }

    const response = await axios.delete(`${API_URL}/config/language/${code}`, {
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
    });

    return response.data;
  } catch (error) {
    console.error("Error updating language:", error);
    throw error;
  }
};


// Tax
export const addTax = async (code: string, name: string, percent: string, type: string, startamount: string, accountcode: string) => {
  let token = localStorage.getItem("token");
  const API_URL = import.meta.env.VITE_DOMAIN;
  try {
    if (!token) {
      throw new Error("No token found. Please log in.");
    }

    const response = await axios.post(`${API_URL}/config/tax`, { code, name, percent, type, startamount, accountcode }, {
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
    });

    return response.data;
  } catch (error) {
    console.error("Error updating tax:", error);
    throw error;
  }
};

export const editTax = async (code: string, name: string, percent: string, type: string, startamount: string, accountcode: string) => {
  let token = localStorage.getItem("token");
  const API_URL = import.meta.env.VITE_DOMAIN;
  try {
    if (!token) {
      throw new Error("No token found. Please log in.");
    }

    const response = await axios.put(`${API_URL}/config/tax/${code}`, { name, percent, type, startamount, accountcode }, {
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
    });

    return response.data;
  } catch (error) {
    console.error("Error updating tax:", error);
    throw error;
  }
};

export const deleteTax = async (code: string) => {
  let token = localStorage.getItem("token");
  const API_URL = import.meta.env.VITE_DOMAIN;
  try {
    if (!token) {
      throw new Error("No token found. Please log in.");
    }

    const response = await axios.delete(`${API_URL}/config/tax/${code}`, {
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
    });

    return response.data;
  } catch (error) {
    console.error("Error updating tax:", error);
    throw error;
  }
};

// Member
export const addMember = async (memberCode: string, name: string, address1: string, address2: string, address3: string, email: string, point: string, phone: string, startdate: string, expiredate: string) => {
  let token = localStorage.getItem("token");
  const API_URL = import.meta.env.VITE_DOMAIN;
  try {
    if (!token) {
      throw new Error("No token found. Please log in.");
    }

    const response = await axios.post(`${API_URL}/member`, { memberCode, name, address1, address2, address3, email, point, phone, startdate, expiredate }, {
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
    });

    return response.data;
  } catch (error) {
    console.error("Error updating member:", error);
    throw error;
  }
};

export const editMember = async (memberCode: string, name: string, address1: string, address2: string, address3: string, email: string, point: string, phone: string, startdate: string, expiredate: string) => {
  let token = localStorage.getItem("token");
  const API_URL = import.meta.env.VITE_DOMAIN;
  try {
    if (!token) {
      throw new Error("No token found. Please log in.");
    }

    const response = await axios.put(`${API_URL}/member/${memberCode}`, { name, address1, address2, address3, email, point, phone, startdate, expiredate }, {
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
    });

    return response.data;
  } catch (error) {
    console.error("Error updating member:", error);
    throw error;
  }
};

export const deleteMember = async (memberCode: string) => {
  let token = localStorage.getItem("token");
  const API_URL = import.meta.env.VITE_DOMAIN;
  try {
    if (!token) {
      throw new Error("No token found. Please log in.");
    }

    const response = await axios.delete(`${API_URL}/member/${memberCode}`, {
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
    });

    return response.data;
  } catch (error) {
    console.error("Error updating member:", error);
    throw error;
  }
};

// Sales Type
export const addSalesType = async (code: string, name1: string, name2: string,name3: string,suffix: string,pricelevel: string, mainlevel: string) => {
  let token = localStorage.getItem("token");
  const API_URL = import.meta.env.VITE_DOMAIN;
  try {
    if (!token) {
      throw new Error("No token found. Please log in.");
    }

    const response = await axios.post(`${API_URL}/config/sales-type`, { code, name1,name2,name3,suffix,pricelevel,mainlevel }, {
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
    });

    return response.data;
  } catch (error) {
    console.error("Error updating language:", error);
    throw error;
  }
};

export const editSalesType = async (code: string, name1: string, name2: string,name3: string,suffix: string,pricelevel: string, mainlevel: string) => {
  let token = localStorage.getItem("token");
  const API_URL = import.meta.env.VITE_DOMAIN;
  try {
    if (!token) {
      throw new Error("No token found. Please log in.");
    }

    const response = await axios.put(`${API_URL}/config/sales-type/${code}`, { name1,name2,name3,suffix,pricelevel,mainlevel }, {
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
    });

    return response.data;
  } catch (error) {
    console.error("Error updating language:", error);
    throw error;
  }
};

export const deleteSalesType = async (code: string) => {
  let token = localStorage.getItem("token");
  const API_URL = import.meta.env.VITE_DOMAIN;
  try {
    if (!token) {
      throw new Error("No token found. Please log in.");
    }

    const response = await axios.delete(`${API_URL}/config/sales-type/${code}`, {
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
    });

    return response.data;
  } catch (error) {
    console.error("Error updating language:", error);
    throw error;
  }
};


// Customer
export const addCustomer = async (customerCode: string, name: string, contactp: string,address1: string,address2: string,address3: string, email: string, phone: string, taxId: string, location: string) => {
  let token = localStorage.getItem("token");
  const API_URL = import.meta.env.VITE_DOMAIN;
  try {
    if (!token) {
      throw new Error("No token found. Please log in.");
    }

    const response = await axios.post(`${API_URL}/customer`, { customerCode, name,contactp,address1,address2,address3,email,phone,taxId,location }, {
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
    });

    return response.data;
  } catch (error) {
    console.error("Error updating customer:", error);
    throw error;
  }
};

export const editCustomer = async (customerCode: string, name: string, contactp: string,address1: string,address2: string,address3: string, email: string, phone: string, taxId: string, location: string) => {
  let token = localStorage.getItem("token");
  const API_URL = import.meta.env.VITE_DOMAIN;
  try {
    if (!token) {
      throw new Error("No token found. Please log in.");
    }

    const response = await axios.put(`${API_URL}/customer/${customerCode}`, { name,contactp,address1,address2,address3,email,phone,taxId,location }, {
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
    });

    return response.data;
  } catch (error) {
    console.error("Error updating customer:", error);
    throw error;
  }
};

export const deleteCustomer = async (customerCode: string) => {
  let token = localStorage.getItem("token");
  const API_URL = import.meta.env.VITE_DOMAIN;
  try {
    if (!token) {
      throw new Error("No token found. Please log in.");
    }

    const response = await axios.delete(`${API_URL}/customer/${customerCode}`, {
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
    });

    return response.data;
  } catch (error) {
    console.error("Error updating customer:", error);
    throw error;
  }
};
