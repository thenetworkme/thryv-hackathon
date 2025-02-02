import axios from "axios";

const AWS_API_BASE_URL =
  "https://rxm2e5vk9i.execute-api.us-east-1.amazonaws.com";

// axios.defaults.withCredentials = true;
const api = axios.create({
  baseURL: AWS_API_BASE_URL,
  validateStatus: () => true,
});

export const login = async ({ username, password }) => {
  try {
    const response = await api.post("/login", { username, password });
    return response;
  } catch (error) {
    return error.response;
  }
};

export const register = async ({ username, email, password }) => {
  try {
    const response = await api.post("/register", { username, email, password });
    const data = response.data;
    console.log(response.data);
    return response;
  } catch (error) {
    return error.response;
  }
};
