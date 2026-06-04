const db = require('../config/db');

const obtenerProcesoPorId = async (id) => {

    const [rows] = await db.query(
        `
        SELECT *
        FROM procesos
        WHERE id = ?
        `,
        [id]
    );

    return rows[0];
};

module.exports = {obtenerProcesoPorId};