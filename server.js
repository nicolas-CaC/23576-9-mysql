import express from 'express';
import productsRoutes from './src/routes/productsRoutes.js';

const app = express();
const PORT = process.env.PORT || 8080;

app.use(express.urlencoded({ extended: true }));

app.use('/', productsRoutes);

app.listen(PORT, () => console.log(`http://localhost:${PORT}`));