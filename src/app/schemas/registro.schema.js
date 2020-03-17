import Joi from "@hapi/joi";
import {rut, email, phone} from "./types";

export const registroSchema = Joi.object({
  business_name: Joi.string().required().max(50),
  rut: rut,
  name: Joi.string().required().max(50),
  last_name: Joi.string().required().max(50),
  email: email,
  phone: phone,
  position: Joi.string().required(),
});