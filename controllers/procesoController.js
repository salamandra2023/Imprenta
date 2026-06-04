const Proceso = require('../models/procesoModel');

const obtenerProcesoPorId = async (req, res) => {

    try {

        const { id } = req.params;

        const proceso = await Proceso.obtenerProcesoPorId(id);

        if (!proceso) {

            return res.status(404).json({
                error: 'Proceso no encontrado'
            });
        }

        res.json(proceso);

    } catch (error) {

        console.log(error);

        res.status(500).json({
            error: 'Error servidor'
        });
    }
};

module.exports = {obtenerProcesoPorId};