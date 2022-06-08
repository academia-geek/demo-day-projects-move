import Joi from "joi";

const userSchema = Joi.object({
    cc_user: Joi.string().min(10).required(),
    first_name: Joi.string().min(3).required(),
    last_name: Joi.string().min(3).required(),
    city: Joi.string().min(3).required(),
    address: Joi.string().min(3).required(),
    age: Joi.string().min(2).required(),
})

export default userSchema;

export const userUniqueSchema = Joi.object({
    cc_user: Joi.string().min(10).required(),
    first_name: Joi.string().min(3).required(),
    last_name: Joi.string().min(3).required(),
    city: Joi.string().min(3).required(),
    address: Joi.string().min(3).required(),
    age: Joi.string().min(2).required(),
})