const express = require('express')
const route = express.Router()
const auth = require('../app/controllers/authentication')
route.get('/login', auth.showForm)
route.post('/author', auth.login)
route.get('/admin/:id', auth.adminShow)
route.get('/member/:id', auth.memberShow)
module.exports = route