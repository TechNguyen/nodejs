const express = require('express');
const router = express.Router();
const ticketsControllers = require('../app/controllers/ticketControllers')
router.get('/vip', ticketsControllers.vipticket)
router.get('/popular', ticketsControllers.popticket)
module.exports = router