const {multiltoObject, mongoogeToObject} = require('../../ulti/mongoose')
const Accounts = require('../models/account')
class login {
    login(req, res, next) {
        var username = req.body.username
        var password = req.body.password;
        Accounts.findOne({username: username, password: password})
            .then((data) => {
                if(data) {
                    res.json('Thanh cong')
                } else {
                    res.json('Khong co tai khoan')
                }
            })
        .then((data) => {res.json('dang nhap thanh cong')})
        .catch((err) => {res.json('dang nhap that bai')})
    }
}
module.exports = new login()