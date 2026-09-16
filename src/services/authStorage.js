const clearStoredAuth = () => {
  localStorage.removeItem("token");
  localStorage.removeItem("user");
};

export const hasValidToken = () => {
  const token = localStorage.getItem("token");

  if (!token) {
    return false;
  }

  try {
    const encodedPayload = token.split(".")[1];
    const normalizedPayload = encodedPayload
      .replace(/-/g, "+")
      .replace(/_/g, "/")
      .padEnd(Math.ceil(encodedPayload.length / 4) * 4, "=");
    const payload = JSON.parse(
      atob(normalizedPayload)
    );

    if (payload.exp && payload.exp * 1000 <= Date.now()) {
      clearStoredAuth();
      return false;
    }

    return true;
  } catch {
    clearStoredAuth();
    return false;
  }
};
