import Joi from "@hapi/joi";
import { rut, email } from "./types";

export const UpdateUserSchema = Joi.object({
  rut: rut,
  email: email,
  roles: Joi.string().required().max(50),
  contact: Joi.string().required().max(50),
  contactType: Joi.string().max(50)
});

