const configuredApiUrl = import.meta.env.VITE_API_URL;

const API_URL = configuredApiUrl
  ? configuredApiUrl.replace(/\/$/, "")
  : import.meta.env.DEV
    ? "http://localhost:5000/api/auth"
    : "https://kids-learning-1-bops.onrender.com/api/auth";

const request = async (path, options) => {
  if (!API_URL) {
    throw new Error("Backend API URL is not configured");
  }

  try {
    const response = await fetch(`${API_URL}/${path}`, options);
    const data = await getResponseData(response);

    if (!response.ok) {
      throw new Error(data.message || "Request failed");
    }

    return data;
  } catch (error) {
    if (error instanceof TypeError) {
      throw new Error("Unable to connect to the backend server");
    }

    throw error;
  }
};

const getResponseData = async (response) => {
  const contentType = response.headers.get("content-type") || "";

  if (!contentType.includes("application/json")) {
    return {};
  }

  return response.json();
};

export const registerUser = async (userData) => {
  return request("register", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(userData),
  });
};

export const loginUser = async (loginData) => {
  return request("login", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(loginData),
  });
};
