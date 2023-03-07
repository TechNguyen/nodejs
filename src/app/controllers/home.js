const User = require('../models/user')
class Home {
    create(req,res,next) {
        res.render('user/User')
    }
    storeUser(req,res,next) {
        const user = new User(req.body)
        user.save()
            .then((user) => {
                res.redirect('detail/store')
            })
            .catch(next)
    }
    getUser(req,res,next) {
        res.send('Tai khoan')
    }
}
module.exports = new Home()