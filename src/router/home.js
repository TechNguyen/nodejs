const express = require('express')
const route = express.Router();
const Home = require('../app/controllers/home')
route.get('/user', Home.create)
route.get('/user/store', Home.getUser)
route.post('/store', Home.storeUser)
route.post('/update/user', Home.updateUser)
module.exports = route