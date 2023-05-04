const Accounts = require('../models/account')
const { mongooseToObject, multiltoObject } = require('../../ultis/mongoose')
const { PromiseProvider } = require('mongoose')
class userController{
    showInfor(req ,res,next) {
        Accounts.findById(req.params.id)
            .then((acc) => {
                res.render('admin/showinfor', {acc: mongooseToObject(acc)})
            })
            .catch(next)
    }
    updateInfor(req,res,next) {
        Accounts.findById(req.params.id) 
            .then((acc) => {
                res.render('admin/update', {acc: mongooseToObject(acc)})
            })
            .catch(next)
    }
    update(req,res,next) {
        Accounts.updateOne({})
            .then((acc) => {
                res.render('admin/showinfor', {acc: mongooseToObject(acc)})
            })
            .catch(next)
    }
    post(req,res,next) {
        Accounts.findById(req.params.id)
            .then((acc) => {
                res.render('admin/post',{acc: mongooseToObject(acc)})
            })
    }
    renderUser(req,res,next) {
        Accounts.findById(req.params.id)
            .then((acc) => { 
                res.render('admin/createMember', {acc: mongooseToObject(acc)})
            })
            .catch(next)
    }
    renderContent(req,res,next) {
        Accounts.findById(req.params.id)
            .then((acc) => {
                res.render('admin/mainContent', {acc: mongooseToObject(acc)})
            })
            .catch(next)
    }
    createUser(req,res,next) {
        const user = {
            firstname: req.body.firstname,
            lastname: req.body.lastname,
            username: req.body.username,
            password: req.body.password,
            address: req.body.address,
            class: req.body.class,
            email: req.body.email,
            specialized: req.body.specialized,
            course: req.body.course,
            position: req.body.position
        }
        Accounts.findById(req.params.id)
            .then(() => {
                Accounts.create(user)
                    .then((acc) => {
                        res.send('ok')
                    })
                
            })
            .catch(next)
        
    }
    renderList(req,res,next) {
        Accounts.findById(req.params.id)
            .then((acc) => {
                Accounts.find()
                    .then((user) => {
                        res.render('admin/listMember', {acc: mongooseToObject(acc), user: multiltoObject(user)})
                    })
            })
            .catch(next)
    }
    logout(req,res,next) {
        res.render('home')
    }
    searchMember(req,res,next) {
        const checkmember = req.body.usercheck
        Accounts.findById(req.params.id)
            .then((acc) => {
                Accounts.find({lastname: checkmember})
                .then((user) => {
                    res.render('admin/listMember', {acc: mongooseToObject(acc), user: multiltoObject(user)})
                })
                })
            .catch(next)   
    }
    filterMember(req,res,next) {
        const [courseMber,specializedMember] = [
            req.body.course ,req.body.specialized
        ]   
        Accounts.findById(req.params.id)
            .then((acc) => {
                Accounts.find({course: courseMber, specialized: specializedMember})
                    .then((user) => {
                        res.json(user)
                        // res.render('admin/listMember', {acc: mongooseToObject(acc), user: multiltoObject(user)})
                    })
                })
            .catch(next)   
    }
}
module.exports = new userController()