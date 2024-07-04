const express = require('express');
const cors = require('cors'); // Importação do cors
const app = express();
const PORT = 8080;

// Middlewares
app.use(express.json()); // Middleware para parsear JSON
app.use(cors()); // Middleware para habilitar CORS

// Importa os módulos de rotas
const travelRouter = require('./routes/cars');


// Rota inicial
app.get('/', (req, res) => {
  res.status(200).send('Bem vindo à aplicação');
});

// Monta os roteadores nos caminhos base
app.use('/cars', travelRouter);  // Monta as rotas de signup no caminho base /signup

// Inicia o servidor
app.listen(8080, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});
