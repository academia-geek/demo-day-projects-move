import Joi from "joi";

const lenderSchema = Joi.object({
    cc_user_fk: Joi.string().min(10).required(),
    conductor: Joi.string().valid('si', 'no').required(),
    active_lender: Joi.bool(),
    balance_lender: Joi.number(),
    total_loans: Joi.number(),
    commissions: Joi.number()
})

export default lenderSchema;