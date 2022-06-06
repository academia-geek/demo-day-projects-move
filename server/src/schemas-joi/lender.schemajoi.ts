import Joi from "joi";

const lenderSchema = Joi.object({
    cc_user_fk: Joi.string().min(10).required(),
})

export default lenderSchema;