const { mongoogeToObject, multiltoObject } = require('../../ulti/mongoose')
const User = require('../models/user')
const PAGE_SIZE = 8;
class Home {
    create(req,res,next) {
        res.render('user/User')
    }
    show(req,res,next ) {
        User.findById(req.params.id)
            .then((user) => {
                res.render('user/show', {user: mongoogeToObject(user)})
            })
            .catch(next)
    }
    storeUser(req,res,next) {
        const user = new User(req.body)
        user.save()
            .then((user) => {
               res.redirect(`/user/${user.id}`)
            })
            .catch(next)
    }
    getUser(req,res,next) {
        const page = req.query.page;
        const skippage = (parseInt(page) - 1) * PAGE_SIZE; 
        if(page && page > 1) {
            User.find({})
                // .skip(skippage)
                // .limit(PAGE_SIZE)
                .then((user) => {
                    res.render('user/userStore', {users: user})
                })
                .catch(next)
        } else {
            User.find({})
                // .skip(0)
                // .limit(PAGE_SIZE)
                .then((user) => {
                    res.render('user/userStore', {users: user})
                })
                .catch(next)
        }
    }
    editUser(req,res,next) {
        User.findById(req.params.id)
            .then((user) => {
                res.render('user/editUser', {
                    user: mongoogeToObject(user)
                })
            })
            .catch(next)
    }
    updateUser(req,res,next) {
        User.updateOne({_id: req.params.id}, req.body)
            .then(() => {
                res.redirect('/user/storeUser')
            })
            .catch(next)
    }
    deleteUser(req,res,next) {
        // User.deleteOne({id: req.params.id})
        //     .then(() => {
        //         res.redirect('back')
        //     })
        //     .catch(next)


        User.findById(req.params.id)
            .then((user) => {
                res.json(user)
            })
            .catch(next)
        // User.deleteOne({id: req.params.id})
        //     .then(() => {
        //         res.redirect('back')
        //     })
        //     .catch(next)
    }
    deleteForced(req,res,next) {
        User.deleteMany({id: req.params.id})
            .then(() => {
                res.redirect('back')
            })
            .catch(next)
    }
    restore(req,res,next) {
        User.restore({id: req.params.id})
            .then(() => {
                res.redirect('back')
            })
            .catch(next)
    }
}
module.exports = new Home()