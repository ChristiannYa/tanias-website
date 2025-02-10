const BASE_URL = import.meta.env.VITE_BACKEND_URL || 'http://localhost:3000';

const apiClient = async (endpoint, method = 'GET', data = null) => {
  const options = {
    method,
    headers: {
      'Content-Type': 'application/json',
    },
  };

  if (data) {
    options.body = JSON.stringify(data);
  }

  const response = await fetch(`${BASE_URL}${endpoint}`, options);
  const responseData = await response.json();

  if (!response.ok) {
    throw new Error(
      responseData.error || `Failed to ${method.toLowerCase()} data`
    );
  }

  return responseData;
};

export default apiClient;
