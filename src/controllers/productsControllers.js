import services from '../services/productsServices.js';


const createTable = async (req, res) => {
    const result = await services.createTable();
    result
        ? res.status(200).send({ info: 'Se creó la tabla' })
        : res.status(400).send({ info: 'La tabla ya existe' });
}


const getProducts = async (_, res) => {
    const result = await services.getProducts();
    result
        ? res.status(200).send(result)
        : res.status(400).send({ info: 'No hay productos' });
};


const getProduct = async (req, res) => {
    const result = await services.getProduct(req.params.id);
    result
        ? res.status(200).send(result)
        : res.status(400).send({ info: 'No se encuentra el producto' });
};


const postProduct = async (req, res) => {
    const result = await services.postProduct(req.body);
    result
        ? res.status(201).send(result)
        : res.status(400).send({ info: 'Problema al guardar el producto' });
};


const delProduct = async (req, res) => {
    const result = await services.delProduct(req.params.id);
    result
        ? res.status(200).send(result)
        : res.status(400).send({ info: 'Problema al borrar el producto' });
};


const controller = {
    createTable,
    getProducts,
    getProduct,
    postProduct,
    delProduct
};

export default controller;