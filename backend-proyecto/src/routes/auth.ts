import middy from "@middy/core";
import jsonBodyParser from "@middy/http-json-body-parser";
import httpHeaderNormalizer from "@middy/http-header-normalizer";
import { comparePasswords, hashPassword } from "../utils/hash";
import { JSend } from "../utils/jsend";
import supabase from "../api/supabase";

const registerUser = async (event, context) => {
  const { email, password } = event.body;

  if (!email || !password) {
    return JSend.error("Email and password are required", 400);
  }

  const { data: existingUsers, error: checkError } = await supabase
    .from("users")
    .select("*")
    .eq("email", email)
    .limit(1);

  if (checkError) return JSend.error("Failed to register user", 500);

  if (existingUsers && existingUsers.length > 0)
    return JSend.error("Email already registered", 409);

  const hash = await hashPassword(password);
  if (!hash) return JSend.error("Failed to register user", 500);

  const res = await supabase.from("users").insert([
    {
      email,
      password: hash,
    },
  ]);

  if (res.status !== 201) {
    return JSend.error("Failed to register user", 500);
  }

  return JSend.success(res, 201);
};

const loginUser = async (event, context) => {
  const { email, password } = event.body;

  if (!email || !password) {
    return JSend.error("Email and password are required", 400);
  }

  // get user
  const { data: users, error: checkError } = await supabase
    .from("users")
    .select("*")
    .eq("email", email)
    .limit(1);

  if (checkError) return JSend.error("Failed to login", 500);

  if (!users || users.length === 0) {
    return JSend.error("Either email or password is incorrect", 400);
  }

  const user = users[0];
  const isPasswordValid = await comparePasswords(password, user.password);
  if (!isPasswordValid) {
    return JSend.error("Either email or password is incorrect", 400);
  }

  return JSend.success({ user }, 200);
};

const middlewares = (handler) => {
  return middy(handler).use(jsonBodyParser()).use(httpHeaderNormalizer());
};

export const register = middlewares(registerUser);
export const login = middlewares(loginUser);
