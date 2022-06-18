import Joi from 'joi'

const vehicleSchema = Joi.object({
    cc_owner: Joi.string().min(10).required(),
    placa: Joi.string().required(),
    url_image: Joi.array().allow(''),
    modelo: Joi.number().allow(''),
    marca: Joi.string().allow(''),
    color: Joi.string().allow(''),
    linea: Joi.string().allow(''),
    fecha_disponibilidad: Joi.object().allow(''),
    url_soat: Joi.string().allow(''),
    url_tecnicomecanica: Joi.string().allow(''),
    tipo_vehiculo: Joi.string().allow(''),
    url_ficha_tecnica: Joi.string().allow(''),
    estado: Joi.string().allow(''),
    activo: Joi.bool().allow(''),
    tipo: Joi.string().allow(''),
    gama: Joi.string().allow(''),
    comision_renta: Joi.number().allow(''),
    poliza: Joi.bool().allow(''),
    limpieza: Joi.string().allow(''),
    tipo_combustible: Joi.string().allow(''),
    valor_combustible: Joi.number().allow(''),
    zone: Joi.array().allow(''),
    price: Joi.number().allow('')
})

export default vehicleSchema;
