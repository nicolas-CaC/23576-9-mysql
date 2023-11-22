import express from 'express';
import controller from '../controllers/productsControllers.js'

const router = express.Router();

router
    .get('/create', controller.createTable)

    .get('/', controller.getProducts)
    .post('/', controller.postProduct)

    .get('/:id', controller.getProduct)
    .delete('/:id', controller.delProduct)





export default router;