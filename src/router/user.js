const express = require('express')
const router = express.Router();
const user = require('../app/controllers/userController')
router.all('/*', function (req, res, next) {
    req.app.locals.layout = 'admin'; // set your layout here
    next(); // pass control to the next handler
});
router.get('/infor/:id', user.showInfor)
router.get('/update/:id', user.updateInfor)
router.get('/post/:id', user.post)
router.get('/create/:id', user.renderUser)
router.get('/dashboard/:id', user.renderContent)
router.get('/listMember/:id', user.renderList)
router.post('/user/:id', user.createUser)
router.post('/search/:id', user.searchMember)
router.post('/filter/:id', user.filterMember)
router.get('/logout/:id',  function(req,res,next) {
    req.app.locals.layout = 'main'
    next();
}, user.logout)
module.exports = router

