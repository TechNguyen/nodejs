const express = require('express')
const route = express.Router();
const Email = require('../app/controllers/sendEmail')
route.get('/formPostEmail', Email.getForm)
route.post('/sendEmail', Email.postEmail)
module.exports = route