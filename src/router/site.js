const express = require('express')
const router = express.Router();
const siteController  = require('../app/controllers/SiteController')
router.post('/dangky', siteController.dangky)
router.get('/dangnhap', siteController.dangnhap)
router.get('/search', siteController.search)
router.get('/', siteController.home)
module.exports = router