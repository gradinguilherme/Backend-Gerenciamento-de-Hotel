/**
 * Data Transfer Object (DTO) para Check-in
 * Define a estrutura e validações dos dados de check-in
 */

class CheckInDTO {
  constructor(data) {
    this.quarto_id = data.quarto_id || data.quartoId;
    this.placa = data.placa || data.placaVeiculo;
  }

  /**
   * Valida os dados do DTO
   * @returns {Object} { valid: boolean, errors: Array }
   */
  validate() {
    const errors = [];

    // Validação: quarto_id é obrigatório
    if (!this.quarto_id || this.quarto_id === null || this.quarto_id === undefined) {
      errors.push({
        field: 'quarto_id',
        message: 'O campo quarto_id é obrigatório'
      });
    }

    // Validação: quarto_id deve ser uma string ou número válido
    if (this.quarto_id && (typeof this.quarto_id !== 'string' && typeof this.quarto_id !== 'number')) {
      errors.push({
        field: 'quarto_id',
        message: 'O campo quarto_id deve ser uma string ou número'
      });
    }

    // Validação: quarto_id não pode ser vazio
    if (this.quarto_id && typeof this.quarto_id === 'string' && this.quarto_id.trim() === '') {
      errors.push({
        field: 'quarto_id',
        message: 'O campo quarto_id não pode ser vazio'
      });
    }

    // Validação: placa é obrigatória
    if (!this.placa || this.placa === null || this.placa === undefined) {
      errors.push({
        field: 'placa',
        message: 'O campo placa é obrigatório'
      });
    }

    // Validação: placa deve ser uma string
    if (this.placa && typeof this.placa !== 'string') {
      errors.push({
        field: 'placa',
        message: 'O campo placa deve ser uma string'
      });
    }

    // Validação: placa não pode ser vazia
    if (this.placa && typeof this.placa === 'string' && this.placa.trim() === '') {
      errors.push({
        field: 'placa',
        message: 'O campo placa não pode ser vazio'
      });
    }

    // Validação: formato básico de placa (opcional - pode ser ajustado)
    if (this.placa && typeof this.placa === 'string' && this.placa.trim() !== '') {
      const placaRegex = /^[A-Z]{3}-?\d{4}$|^[A-Z]{3}\d[A-Z]\d{2}$/i;
      if (!placaRegex.test(this.placa.trim())) {
        errors.push({
          field: 'placa',
          message: 'O formato da placa é inválido. Use ABC-1234 ou ABC1D23 (Mercosul)'
        });
      }
    }

    return {
      valid: errors.length === 0,
      errors
    };
  }

  /**
   * Retorna os dados formatados do DTO
   */
  toObject() {
    return {
      quarto_id: this.quarto_id,
      placa: this.placa ? this.placa.toUpperCase().trim() : null
    };
  }
}

module.exports = CheckInDTO;
