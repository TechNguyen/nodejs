const express = require('express');
const router = express.Router();
const apiController = require('../app/controllers/Apicontroller');
router.get('/users', apiController.getUser)
router.post('/create-users', apiController.createUser)
router.put('/update-users', apiController.updateUser)
router.delete('/create-users:id', apiController.deleteUser)
module.exports = router