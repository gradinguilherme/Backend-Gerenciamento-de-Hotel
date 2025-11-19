/**
 * Serviço de Check-in
 * Contém a lógica de negócio para operações de check-in
 */

class CheckInService {
  /**
   * Realiza o check-in de um hóspede
   * @param {Object} checkInData - Dados do check-in (quarto_id, placa)
   * @returns {Promise<Object>} Resultado do check-in
   */
  async realizarCheckIn(checkInData) {
    try {
      const { quarto_id, placa } = checkInData;

      // MOCK: Simula validação de disponibilidade do quarto
      // TODO: Implementar consulta real ao banco de dados
      const quartoDisponivel = await this.verificarDisponibilidadeQuarto(quarto_id);
      
      if (!quartoDisponivel) {
        return {
          success: false,
          message: 'Quarto não está disponível para check-in',
          statusCode: 400
        };
      }

      // MOCK: Simula registro do check-in
      // TODO: Implementar persistência real no banco de dados
      const ocupacao = await this.registrarOcupacao(quarto_id, placa);

      return {
        success: true,
        message: 'Check-in realizado com sucesso',
        data: ocupacao,
        statusCode: 201
      };
    } catch (error) {
      throw new Error(`Erro ao processar check-in: ${error.message}`);
    }
  }

  /**
   * Verifica se o quarto está disponível
   * @param {string|number} quartoId - ID do quarto
   * @returns {Promise<boolean>} True se disponível, false caso contrário
   * @private
   */
  async verificarDisponibilidadeQuarto(quartoId) {
    // MOCK: Simula consulta ao banco de dados
    // TODO: Implementar consulta real
    
    // Simulação: considera quartos com ID par como ocupados
    const quartoOcupado = ['102', '104', '106', 102, 104, 106];
    
    return !quartoOcupado.includes(quartoId);
  }

  /**
   * Registra a ocupação do quarto
   * @param {string|number} quartoId - ID do quarto
   * @param {string} placa - Placa do veículo
   * @returns {Promise<Object>} Dados da ocupação registrada
   * @private
   */
  async registrarOcupacao(quartoId, placa) {
    // MOCK: Simula inserção no banco de dados
    // TODO: Implementar persistência real
    
    const ocupacao = {
      id: Math.floor(Math.random() * 10000), // ID mockado
      quarto_id: quartoId,
      placa: placa.toUpperCase(),
      data_check_in: new Date().toISOString(),
      status: 'ativo',
      created_at: new Date().toISOString()
    };

    // Simula delay de operação de banco de dados
    await new Promise(resolve => setTimeout(resolve, 100));

    return ocupacao;
  }

  /**
   * Busca ocupação por ID do quarto
   * @param {string|number} quartoId - ID do quarto
   * @returns {Promise<Object|null>} Ocupação encontrada ou null
   */
  async buscarOcupacaoPorQuarto(quartoId) {
    // MOCK: Simula consulta ao banco de dados
    // TODO: Implementar consulta real
    
    const ocupacoesMock = {
      '102': { id: 1, quarto_id: '102', placa: 'XYZ-9876', status: 'ativo' },
      '104': { id: 2, quarto_id: '104', placa: 'DEF-4567', status: 'ativo' }
    };

    return ocupacoesMock[quartoId] || null;
  }
}

module.exports = new CheckInService();
