const express = require('express')
const router = express.Router()
const paginController = require('../app/controllers/paginController');
router.get('/pagin', paginController.pagina)
module.exports = router

