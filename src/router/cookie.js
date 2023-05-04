const express = require('express')
const route = express.Router()
const cookieController = require('../app/controllers/cookiesController')
route.get('/cookie', cookieController.setcookie)
route.get('/getcookie', cookieController.getUser)
module.exports = route