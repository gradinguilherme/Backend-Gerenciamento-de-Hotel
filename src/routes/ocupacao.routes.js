const express = require('express');
const OcupacaoController = require('../controllers/ocupacao.controller');

const router = express.Router();

/**
 * @route POST /check-in
 * @desc Realiza o check-in de um hóspede em um quarto
 * @access Public (TODO: implementar autenticação)
 */
router.post('/check-in', OcupacaoController.realizarCheckIn);

module.exports = router;
