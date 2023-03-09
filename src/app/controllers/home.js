const User = require('../models/user')
class Home {
    create(req,res,next) {
        res.render('user/User')
    }
    storeUser(req,res,next) {
        const user = new User(req.body)
        user.save()
            .then((user) => {
                User.find()
                .then((users) => {
                    res.render('home', {users: users})
                })
                .catch(next)
            })
            .catch(next)
    }
    getUser(req,res,next) {
        User.find()
        .then((user) => {
            res.render('user/userStore', {users: user})
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