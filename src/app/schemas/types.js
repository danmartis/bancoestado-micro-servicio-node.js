import Joi from "@hapi/joi";

export const rut = Joi.string().required().min(3);
export const email = Joi.string().required();
export const phone = Joi.number().required().min(100000000).max(9999999999);
export const password = Joi.string().required().alphanum().min(6).max(8);