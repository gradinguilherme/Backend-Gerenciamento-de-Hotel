/**
 * Controller de Ocupação
 * Gerencia operações relacionadas à ocupação de quartos
 */

const CheckInDTO = require('../dto/checkIn.dto');
const checkInService = require('../services/checkIn.service');

/**
 * Realiza o check-in de um hóspede
 * @param {Object} req - Request object do Express
 * @param {Object} res - Response object do Express
 */
const realizarCheckIn = async (req, res) => {
  try {
    // Cria e valida o DTO
    const checkInDTO = new CheckInDTO(req.body);
    const validation = checkInDTO.validate();

    // Retorna 400 se a validação falhar
    if (!validation.valid) {
      return res.status(400).json({
        status: "error",
        mensagem: "Dados de entrada inválidos",
        erros: validation.errors
      });
    }

    // Obtém dados validados e formatados
    const checkInData = checkInDTO.toObject();

    // Chama o serviço para processar o check-in
    const resultado = await checkInService.realizarCheckIn(checkInData);

    // Retorna resposta baseada no resultado do serviço
    if (!resultado.success) {
      return res.status(resultado.statusCode || 400).json({
        status: "error",
        mensagem: resultado.message,
        dados: resultado.data || null
      });
    }

    // Retorna 201 Created em caso de sucesso
    return res.status(201).json({
      status: "success",
      mensagem: resultado.message,
      dados: resultado.data
    });
  } catch (error) {
    // Retorna 500 em caso de erro interno
    return res.status(500).json({
      status: "error",
      mensagem: "Erro interno ao processar check-in",
      erro: error.message
    });
  }
};

module.exports = {
  realizarCheckIn
};
