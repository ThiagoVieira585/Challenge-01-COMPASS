import express from 'express';
import router from './src/routes/tutorRoutes';

const app = express();
const port: number = 3000;

//Todas as rotas
app.use(router);


//Servidor
app.listen(port, () =>{
    console.log(`Servidor iniciado na porta ${port}`);
});