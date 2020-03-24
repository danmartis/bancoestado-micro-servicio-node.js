import Joi from "@hapi/joi";
import { email } from "./types";

export const registerNewUserSchema = Joi.object({
  name: Joi.string().required().max(50),
  email: email,
  perfil: Joi.string().required(),
  asignarContacto: Joi.boolean().required(),
  tipoContacto: Joi.string()
});