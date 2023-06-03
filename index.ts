import express from 'express';
import tutorRoutes from './src/routes/tutorRoutes';

const app = express();
const port: number = 3000;


//Todas as rotas
app.use(tutorRoutes);



//Servidor
app.listen(port, () =>{
    console.log(`Servidor iniciado na porta ${port}`);
});