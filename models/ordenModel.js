const db = require('../config/db');

const crearOrden = async (datos) => {

    const {
        numero_orden,
        nombre_libro,
        cliente
    } = datos;

    const fecha_ingreso = new Date()

    const [resultado] = await db.query(
        `
        INSERT INTO ordenes
        (
            numero_orden,
            nombre_libro,
            cliente,
            fecha_ingreso
        )
        VALUES (?, ?, ?, ?)
        `,
        [
            numero_orden,
            nombre_libro,
            cliente,
            fecha_ingreso
        ]
    );

    return resultado;
};

const obtenerOrdenes = async () => {

    const [rows] = await db.query(`
        SELECT * FROM ordenes
        ORDER BY id DESC
    `);

    return rows;
};

const obtenerOrdenPorId = async (id) => {

    const [rows] = await db.query(
        `
        SELECT * FROM ordenes
        WHERE id = ?
        `,
        [id]
    );

    return rows[0];
};

const actualizarEstadoOrden = async (
    numero_orden,
    estado_actual
) => {

    const [resultado] = await db.query(
        `
        UPDATE ordenes
        SET estado_actual = ?
        WHERE numero_orden = ?
        `,
        [
            estado_actual,
            numero_orden
        ]
    );

    return resultado;
};


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

const eliminarOrden = async (numero_orden) => {

    const [resultado] = await db.query(
        `
        DELETE FROM ordenes
        WHERE numero_orden = ?
        `,
        [numero_orden]
    );

    return resultado;
};


const buscarOrdenPorNumeroOrden = async (numero_orden) => {

     const [resultado] = await db.query(
        `
        SELECT * FROM ordenes
        WHERE numero_orden = ?
        `,
        [numero_orden]
    )

    return resultado
}



module.exports = {
    crearOrden,
    obtenerOrdenes,
    obtenerOrdenPorId,
    actualizarEstadoOrden,
    obtenerProcesoPorId,
    eliminarOrden,
    buscarOrdenPorNumeroOrden
};