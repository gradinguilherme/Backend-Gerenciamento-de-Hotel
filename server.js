require('dotenv').config();
const express = require('express');
const ocupacaoRoutes = require('./src/routes/ocupacao.routes');

const app = express();
const PORT = process.env.PORT || 8080;

// Middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Rotas
app.use('/api/ocupacao', ocupacaoRoutes);

// Rota de teste
app.get('/', (req, res) => {
  res.json({
    status: 'success',
    mensagem: 'Sistema de Gestão de Motéis - API Online',
    versao: '1.0.0'
  });
});

// Inicialização do servidor
app.listen(PORT, () => {
  console.log(`🚀 Servidor rodando na porta ${PORT}`);
  console.log(`📡 Acesse: http://localhost:${PORT}`);
});

module.exports = app;
