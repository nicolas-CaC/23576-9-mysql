import conn from '../config/conn.js';


/**
 * Crea la primera tabla
 * @returns la respuesta
 */
const createTable = async () =>
    await conn.query("CREATE TABLE productos(id int NOT NULL AUTO_INCREMENT PRIMARY KEY, nombre varchar(50) NOT NULL, precio int NOT NULL);");


/**
 * Obtiene todos los productos de la DB
 * @returns Retorna resultado
 */
const getProducts = async () =>
    await conn.query("SELECT * FROM productos");


/**
 * Busca un producto en la base de datos por ID
 * @param {string} id El ID del producto
 * @returns Un producto
 */
const getProduct = async (id) =>
    await conn.query("SELECT * FROM productos WHERE ID = ?", id);


/**
 * Crea un producto
 * @param {object} data el req.body 
 * @returns información de la transacción
 */
const postProduct = async ({ id, nombre, precio }) =>
    await conn.query("INSERT INTO productos VALUES (?, ?, ?)",
        [id, nombre, precio]);


/**
 * Borra un producto por ID
 * @param {string} id ID del producto 
 * @returns Respuesta de la DB
 */
const delProduct = async (id) =>
    await conn.query("DELETE FROM productos WHERE id = ?", id);


const products = {
    createTable,
    getProducts,
    getProduct,
    postProduct,
    delProduct
};

export default products;

