import Joi from "@hapi/joi";
import {rut, email, password} from "./types";

export const loginSchema = Joi.object({
  rut: rut,
  email: email,
  password: Joi.string().required(), // al realizar login no se limita a schema para evitar hackeos
  changePassword: Joi.boolean()
});

export const changePasswordSchema = Joi.object({
  rut: rut,
  email: email,
  oldPassword: Joi.string().required(),
  newPassword: password,
});