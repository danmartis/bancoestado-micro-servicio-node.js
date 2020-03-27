import Joi from "@hapi/joi";
import { date, phone } from "./types";

export const UpdatePerfilUserSchema = Joi.object({
  birthday: date,
  phone: phone,
  address: Joi.string()
    .required()
    .max(150),
  comuna: Joi.string()
    .required()
    .max(50),
  city: Joi.string()
    .required()
    .max(50)
});
