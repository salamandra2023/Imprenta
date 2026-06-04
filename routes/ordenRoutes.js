const express = require('express');

const router = express.Router();

const validarCampos =
require('../middlewares/validarCampos');

const {
    crearOrdenSchema
} = require('../schemas/ordenSchema');

const ordenController = require('../controllers/ordenController');

// router.post('/', ordenController.crearOrden); SIN VALIDACION

router.post('/', validarCampos(crearOrdenSchema),ordenController.crearOrden);

router.get('/', ordenController.obtenerOrdenes);

router.get('/:id', ordenController.obtenerOrdenPorId);

router.patch('/:numero_orden/estado', ordenController.actualizarEstadoOrden);

router.delete('/:numero_orden', ordenController.eliminarOrden);



module.exports = router;