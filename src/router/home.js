const express = require('express')
const route = express.Router();
const Home = require('../app/controllers/home')
route.get('/user', Home.create)
route.get('/detail/store', Home.getUser)
route.post('/store', Home.storeUser)
module.exports = route