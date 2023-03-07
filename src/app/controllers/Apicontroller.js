const Account = require('../models/account')
class Api {
    async getUser(req,res,next) {
        const rows = await Account.find()
        return  res.status(200).json({
            message: 'ok',
            data: rows
        })
    }
    async createUser(req,res,next) {
        const username = req.body.username;
        const password = req.body.password;
        res.send('User.hbs')
        await Account.create({username: username,password: password})
        return res.status(200).json({
            message: 'ok',
        })
    }
    async updateUser(req,res,next) {
        const username = req.body.username;
        const password = req.body.password;
        var user
        if(!username || !password) {
            return res.status(401).json({
                message: 'missign querry data'
            })
        }
        return res.status(200).json({
            message: 'ok',
            user
        })
    }

    async deleteUser(req,res,next) {
        return res.status(200).json({
            message: 'ok'
        })
    }
}



module.exports = new Api()