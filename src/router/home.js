const express = require('express')
const route = express.Router();
const Home = require('../app/controllers/home')
route.get('/create', Home.create)
route.post('/store', Home.storeUser)
route.get('/:id', Home.show)
route.get('/storeUsers', Home.getUser)
module.exports = route