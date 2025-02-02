import middy from "@middy/core";
import jsonBodyParser from "@middy/http-json-body-parser";
import httpHeaderNormalizer from "@middy/http-header-normalizer";
import { comparePasswords, hashPassword } from "../utils/hash";
import { JSend } from "../utils/jsend";
import supabase from "../api/supabase";
import cors from "@middy/http-cors";

const registerUser = async (event, context) => {
  const { email, password, username } = event.body;

  if (!email || !password)
    return JSend.error("Email y contraseña son requeridos", 400);

  const { data: existingUsers, error: checkError } = await supabase
    .from("users")
    .select("*")
    // match rows that satisfy either condition
    .or(`email.eq.${email}`)
    .or(`username.eq.${username}`)
    .limit(1);

  if (checkError) return JSend.error("No se pudo registrar el usuario", 500);

  if (existingUsers && existingUsers.length > 0)
    return JSend.error("El email o nombre de usuario ya está en uso", 400);

  const hash = await hashPassword(password);
  if (!hash) return JSend.error("No se pudo registrar el usuario", 500);

  const res = await supabase
    .from("users")
    .insert([{ username, email, password: hash }]);

  // search for the user
  const { data: users } = await supabase
    .from("users")
    .select("*")
    .eq("email", email)
    .limit(1);

  if (res.status !== 201 || !users || users.length === 0) {
    return JSend.error("No se pudo registrar el usuario", 500);
  }
  return JSend.success(users[0], 201);
};

const loginUser = async (event, context) => {
  const { usernameOrEmail, password } = event.body;

  if (!usernameOrEmail || !password) {
    return JSend.error("Email y contraseña son requeridos", 400);
  }

  const { data: users, error: checkError } = await supabase
    .from("users")
    .select("*")
    // .or(`email.eq.${usernameOrEmail}`)
    // .or(`username.eq.${usernameOrEmail}`)
    .limit(1);

  if (checkError) return JSend.error("No se pudo iniciar sesión", 500);

  if (!users || users.length === 0)
    return JSend.error("El email o contraseña es incorrecto", 404);

  const user = users[0];
  const isPasswordValid = await comparePasswords(password, user.password);
  // if (!isPasswordValid)
  //   return JSend.error("El email o contraseña es incorrecto", 404);

  return JSend.success({ user }, 200);
};

// Middleware configuration with proper CORS settings
const middlewares = (handler) => {
  return middy(handler)
    .use(
      cors({
        origin: "*",
        headers: "Content-Type,Authorization",
      })
    )
    .use(jsonBodyParser())
    .use(httpHeaderNormalizer());
};
export const register = middlewares(registerUser);
export const login = middlewares(loginUser);
