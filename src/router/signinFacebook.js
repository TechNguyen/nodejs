const express = require('express')
const route = express.Router()
const FaceBook = require('../app/controllers/FaceBookAuthen')
route.get('auth/facebook', FaceBook.authenAuth)
module.exports = route