import Joi from 'joi'

const vehicleSchema = Joi.object({
    cc_owner: Joi.string().min(10).required(),
    placa: Joi.string(),
    url_image: Joi.array(),
    modelo: Joi.number(),
    marca: Joi.string(),
    color: Joi.string(),
    linea: Joi.string(),
    fecha_disponibilidad: Joi.object(),
    url_soat: Joi.string(),
    url_tecnicomecanica: Joi.string(),
    tipo_vehiculo: Joi.string(),
    url_ficha_tecnica: Joi.string(),
    estado: Joi.string(),
    activo: Joi.bool(),
    tipo: Joi.string(),
    gama: Joi.string(),
    comision_renta: Joi.number(),
    poliza: Joi.bool(),
    limpieza: Joi.string(),
    tipo_combustible: Joi.string(),
    valor_combustible: Joi.number(),
    zone: Joi.array()
})

export default vehicleSchema;
