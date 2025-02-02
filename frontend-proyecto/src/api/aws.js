import axios from "axios";

const AWS_API_BASE_URL =
  "https://rxm2e5vk9i.execute-api.us-east-1.amazonaws.com";

const api = axios.create({
  baseURL: AWS_API_BASE_URL,
  validateStatus: () => true,
  headers: {
    "Content-Type": "application/json",
  },
});

export const login = async ({ usernameOrEmail, password }) => {
  try {
    const response = await api.post("auth/login", {
      usernameOrEmail,
      password,
    });
    console.log(response.data);
    return response;
  } catch (error) {
    console.error(error);

    return error.response;
  }
};

export const register = async ({ username, email, password }) => {
  try {
    const response = await api.post("auth/register", {
      username,
      email,
      password,
    });
    console.log(response);
    return response.data;
  } catch (error) {
    console.error(error);
    return null;
  }
};

export const saveCompany = async ({
  userId,
  companyName,
  country,
  province,
  currency,
}) => {
  try {
    const response = await api.post("user/configure", {
      userId,
      companyName,
      country,
      province,
      currency,
    });
    return response.status >= 200 && response.status < 300;
  } catch (error) {
    console.error(error);
    return false;
  }
};
