const express = require('express');

const app = express();

const db = require('./config/db');

const ordenRoutes = require('./routes/ordenRoutes');

const procesoRoutes = require('./routes/procesoRoutes');

app.use(express.json());

app.use('/ordenes', ordenRoutes);

app.use('/procesos', procesoRoutes);

app.get('/', async (req, res) => {

    try {

        const [rows] = await db.query('SELECT NOW() AS fecha');

        res.json(rows);

    } catch (error) {

        console.log(error);

        res.status(500).send('Error servidor');
    }
});

app.listen(3000, () => {console.log('Servidor corriendo en puerto 3000');});