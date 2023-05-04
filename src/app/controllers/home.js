const { mongoogeToObject, multiltoObject } = require('../../ultis/mongoose')
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
        Promise.all([User.find({}), User.countDocumentsDeleted()])
            .then(([user, countDeleted]) => {
                res.render('user/userStore', {
                    users: user,
                    countDeleted : countDeleted
                })
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
    getTrashUser(req,res,next) {
        User.findDeleted({})
            .then((user) => {
                res.render('user/storeTrash', {
                    users: user
                })
            })
            .catch(next)
    }
    deleteUser(req,res,next) {
        User.delete({_id: req.params.id})
            .then(() => {
                res.redirect('back')
            })
            .catch(next)
    }
    deleteForced(req,res,next) {
        User.deleteOne({_id: req.params.id})
            .then(() => {
               res.redirect('back')
            })
            .catch(next)
    }
    restore(req,res,next) {
        User.restore({_id: req.params.id})
            .then(() => {
                res.redirect('back')
            })
            .catch(next)
    }
}
module.exports = new Home()