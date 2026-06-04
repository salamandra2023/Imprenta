const Joi = require('joi');

const crearOrdenSchema = Joi.object({

    numero_orden: Joi.number()
        //.integer()
        .min(5)
        .required(),

    nombre_libro: Joi.string()
        .min(3)
        .max(200)//.validate()
        .required(),

    cliente: Joi.string()
        .min(3)
        .max(150)
        .required(),

    //fecha_ingreso: Joi.date()
    //   .required(),

   /* estado_actual: Joi.number()
        //.integer()
        .required()*/
});

module.exports = {
    crearOrdenSchema
};