const Orden = require('../models/ordenModel');

const crearOrden = async (req, res) => {

    try {

        const numero_orden = req.body.numero_orden
        const existencia = await Orden.buscarOrdenPorNumeroOrden(numero_orden);
        if(existencia.length == 1){
            res.json({
                status: 404,
                mensaje: 'Ya existe este nùmero de orden',
            });
        } else {
            const resultado = await Orden.crearOrden(req.body);
            // buscar por id 
            // ir a model ORDEN Y BUSCAR METODO QUE PERMITA BUSCAR POR ID
            // ESE METODO USAR AQUI ENVIANDOLE EL resultado.insertId

            res.json({
                mensaje: 'Orden creada',
                id: resultado.insertId
            });
        }

    } catch (error) {

        console.log(error);

        res.status(500).json({
            error: 'Error del servidor'
        });
    }
};

const obtenerOrdenes = async (req, res) => {

    try {

        const ordenes = await Orden.obtenerOrdenes();

        res.json(ordenes);

    } catch (error) {

        console.log(error);

        res.status(500).json({
            error: 'Error servidor'
        });
    }
};

const obtenerOrdenPorId = async (req, res) => {

    try {

        const { id } = req.params;

        const orden = await Orden.obtenerOrdenPorId(id);

        if (!orden) {

            return res.status(404).json({
                error: 'Orden no encontrada'
            });
        }

        res.json(orden);

    } catch (error) {

        console.log(error);

        res.status(500).json({
            error: 'Error servidor'
        });
    }
};

const actualizarEstadoOrden = async (req, res) => {

    try {

        const { numero_orden } = req.params;

        const { estado_actual } = req.body;

        await Orden.actualizarEstadoOrden(
            numero_orden,
            estado_actual
        );

        res.json({
            mensaje: 'Estado actualizado'
        });

    } catch (error) {

        console.log(error);

        res.status(500).json({
            error: 'Error servidor'
        });
    }
};


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

const eliminarOrden = async (req, res) => {

    try {

        const { numero_orden } = req.params;

        const resultado = await Orden.eliminarOrden(
            numero_orden
        );

        if (resultado.affectedRows === 0) {

            return res.status(404).json({
                error: 'Orden no encontrada'
            });
        }

        res.json({
            mensaje: 'Orden eliminada'
        });

    } catch (error) {

        console.log(error);

        res.status(500).json({
            error: 'Error servidor'
        });
    }
};


module.exports = {
    crearOrden,
    obtenerOrdenes,
    obtenerOrdenPorId,
    actualizarEstadoOrden,
    obtenerProcesoPorId,
    eliminarOrden
};