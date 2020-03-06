import Joi from "@hapi/joi";

export const registroSchema = Joi.object({
  business_name: Joi.string().required().max(50),
  rut: Joi.string().required(),
  name: Joi.string().required().max(50),
  last_name: Joi.string().required().max(50),
  email: Joi.string().required(),
  phone: Joi.number().required().min(100000000).max(9999999999),
  position: Joi.string().required().email(),
});