const API_URL =
  import.meta.env.VITE_API_URL || "http://localhost:5000/api/auth";

const getResponseData = async (response) => {
  const contentType = response.headers.get("content-type") || "";

  if (!contentType.includes("application/json")) {
    return {};
  }

  return response.json();
};

export const registerUser = async (userData) => {
  const response = await fetch(`${API_URL}/register`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(userData),
  });

  const data = await getResponseData(response);

  if (!response.ok) {
    throw new Error(data.message || "Registration failed");
  }

  return data;
};

export const loginUser = async (loginData) => {
  const response = await fetch(`${API_URL}/login`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(loginData),
  });

  const data = await getResponseData(response);

  if (!response.ok) {
    throw new Error(data.message || "Login failed");
  }

  return data;
};
