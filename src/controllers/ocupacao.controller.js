/**
 * Controller de Ocupação
 * Gerencia operações relacionadas à ocupação de quartos
 */

/**
 * Realiza o check-in de um hóspede
 * @param {Object} req - Request object do Express
 * @param {Object} res - Response object do Express
 */
const realizarCheckIn = async (req, res) => {
  try {
    // Extrai os dados do corpo da requisição
    const { quartoId, placaVeiculo } = req.body;

    // Mock da lógica de negócio (sem implementação real de serviço/DB)
    // TODO: Implementar validações e lógica de negócio real
    
    // Retorna resposta mockada de sucesso
    return res.status(201).json({
      status: "success",
      mensagem: "Check-in realizado com sucesso - MOCK",
      dados: {
        quartoId,
        placaVeiculo
      }
    });
  } catch (error) {
    return res.status(500).json({
      status: "error",
      mensagem: "Erro ao processar check-in",
      erro: error.message
    });
  }
};

module.exports = {
  realizarCheckIn
};
