import helpers from '../helpers/productsHelpers.js';
import products from '../models/products.js';
import conn from '../config/conn.js';


/**
 * Crea la primera tabla conectándose a la DB (products)
 * @returns Información de la DB sobre la tabla creada
 */
const createTable = async () => {
    try { return await products.createTable(); }
    catch (e) { console.log('Problema al crear la tabla: Ya existe'); }
    finally { conn.releaseConnection(); }
}



/**
 * Extrae los datos necesarios de la consulta a DB de la lista de productos
 * @returns Respuesta de la DB
 */
const getProducts = async () => {
    try {
        const [result] = await products.getProducts();
        if (result.length === 0) throw Error();
        return result;
    }
    catch (e) { return false; }
    finally { conn.releaseConnection(); }
}



/**
 * Convierte la id en número y solicita el producto a la DB
 * @param {string} id id del producto en string
 * @returns Respuesta de la DB
 */
const getProduct = async (id) => {
    try {
        id = helpers.dataAdapter(id);
        const [result] = await products.getProduct(id);
        if (result.length === 0) throw Error();
        return result;
    }
    catch (e) { return false; }
    finally { conn.releaseConnection(); }
}



/**
 * Crea el producto en la DB
 * @param {object} data Datos del producto 
 * @returns Respuesta de la DB
 */
const postProduct = async (data) => {
    try {
        data = helpers.dataAdapter(data);
        const response = await products.postProduct(data);
        console.log('Producto guardado');
        return response;
    }
    catch (e) { return false; }
    finally { conn.releaseConnection(); }
};



/**
 * Borra el producto de la DB
 * @param {string} id ID del producto 
 * @returns Respuesta de la DB
 */
const delProduct = async (id) => {
    try {
        id = helpers.dataAdapter(id);
        const [response] = await products.delProduct(id);
        if (response.affectedRows === 0) throw Error();
        console.log('Producto borrado');
        return response;
    }
    catch (e) { return false; }
    finally { conn.releaseConnection(); }
};



/**
 * Objeto con las funciones de servicios
 */
const services = {
    createTable,
    getProducts,
    getProduct,
    postProduct,
    delProduct
};

export default services;