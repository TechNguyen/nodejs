const { mongoogeToObject, multiltoObject } = require('../../ulti/mongoose')
const User = require('../models/user')
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
        User.find({})
            .then((user) => {
                res.render('user/userStore', {users: user})
            })
            .catch(next)
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
        User.deleteOne({_id: req.params.id})
            .then(() => {
                res.redirect('back')
            })
            .catch(next)
    }
}
module.exports = new Home()