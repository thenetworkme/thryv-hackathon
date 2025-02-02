import middy from "@middy/core";
import jsonBodyParser from "@middy/http-json-body-parser";
import httpHeaderNormalizer from "@middy/http-header-normalizer";
import { hashPassword } from "../utils/hash";

const registerUser = async (event, context) => {
  const { email, password } = event.body;
  // const db = new AWS.DynamoDB.DocumentClient();
  const hash = await hashPassword(password);
  return {
    statusCode: 200,
    body: JSON.stringify({ email, password: hash }),
  };
};

const loginUser = (event, context) => {
  const { email, password } = event.body;
  return {
    statusCode: 200,
    body: JSON.stringify({ email, password }),
  };
};

const middlewares = (handler) => {
  return middy(handler).use(jsonBodyParser()).use(httpHeaderNormalizer());
};

export const register = middlewares(registerUser);
export const login = middlewares(loginUser);
