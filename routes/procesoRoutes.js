const express = require('express');

const router = express.Router();

const procesoController = require('../controllers/procesoController');

router.get('/:id', procesoController.obtenerProcesoPorId);

module.exports = router;