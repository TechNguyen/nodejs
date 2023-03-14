const { mongoogeToObject, multiltoObject } = require('../../ulti/mongoose')
const User = require('../models/user')
class Home {
    create(req,res,next) {
        res.render('user/User')
    }
    show(req,res,next ) {
        User.findById(req.params.id)
            .then((user) => {
                res.render('user/show', {user: mongoogeToObject(user)} )
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
        User.updateOne({_id: res.params.id}, req.body)
            .then(() => {
                res.redirect('/user/store')
            })
            .catch(next)
    }
}
module.exports = new Home()