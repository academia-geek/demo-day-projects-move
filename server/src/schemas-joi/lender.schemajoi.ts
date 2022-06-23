import Joi from "joi";

const lenderSchema = Joi.object({
    cc_user_fk: Joi.string().min(10).required(),
    conductor: Joi.string().valid('si', 'no').required(),
    active_lender: Joi.bool().allow(''),
    balance_lender: Joi.number().allow(''),
    total_loans: Joi.number().allow(''),
    commissions: Joi.number().allow('')
})

export default lenderSchema;