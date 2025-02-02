import middy from "@middy/core";
import jsonBodyParser from "@middy/http-json-body-parser";
import httpHeaderNormalizer from "@middy/http-header-normalizer";
import { JSend } from "../utils/jsend";
import supabase from "../api/supabase";

const configureCompany = async (event, context) => {
  const { userId, companyName, country, province, currency } = event.body;

  if (!companyName || !country || !province || !currency)
    return JSend.error("Email y contraseña son requeridos", 400);

  // check if userId exists
  const { data: user, error: userError } = await supabase
    .from("users")
    .select("id")
    .eq("id", userId);

  if (userError) return JSend.error("El usuario no existe", 404);

  // save the company
  const { data, error } = await supabase.from("companies").insert([
    {
      userId,
      companyName,
      country,
      province,
      currency,
    },
  ]);

  if (error) return JSend.error("No se pudo registrar la empresa", 500);
  console.log(error);
  return JSend.success(data, 201);
};

// Middleware configuration with proper CORS settings
const middlewares = (handler) => {
  return middy(handler).use(jsonBodyParser()).use(httpHeaderNormalizer());
};
export const saveCompany = middlewares(configureCompany);
