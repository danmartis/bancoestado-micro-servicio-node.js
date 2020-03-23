import Joi from "@hapi/joi";
import {rut, email, password} from "./types";

export const loginSchema = Joi.object({
  rut: rut,
  email: email,
  password: password,
  changePassword: Joi.boolean()
});

export const changePasswordSchema = Joi.object({
  rut: rut,
  email: email,
  oldPassword: Joi.string().required(),
  newPassword: password,
});