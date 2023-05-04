const express = require('express');
const route = express.Router();
const UploadFile = require('../app/controllers/uploadFile')
route.get('/push', UploadFile.upload);
route.post('/postFile', UploadFile.postFile)
module.exports = route