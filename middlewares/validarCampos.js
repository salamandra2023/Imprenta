const validarCampos = (schema) => {

    return (req, res, next) => {

        const { error } = schema.validate(
            req.body,
            {
                abortEarly: false
            }
        );

        if (error) {

            const errores = error.details.map(
                err => err.message
            );

            return res.status(400).json({
                errores
            });
        }

        next();
    };
};

module.exports = validarCampos;