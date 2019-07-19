const express = require('express');
const router = express.Router();
const controller = require('../controllers/cadastro')

router.get('/', controller.read)
router.post('/', controller.insert)
router.post('/', controller.update)
router.post('/', controller.delete)

module.exports = router;