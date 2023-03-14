const Course = require('../models/Course')
const {multiltoObject, mongoogeToObject} = require('../../ulti/mongoose')
const express = require('express')
const Accounts = require('../models/account')
const User = require('../models/user')
const jwt = require('jsonwebtoken');
class SiteController {
    home(req, res, next) {
        User.find({})
            .then(users => {
                console.log(users);
                res.render('home', { users: users})
            })
            .catch(next)
    };
    search(req, res) {
        res.render('search')
    }
    dangky(req, res, next) {
        var data1 = {
            username: req.body.username,
        }
        var password = req.query.password


        Accounts.findOne({username: data1.username})
            .then((data) => {
                if(data) {
                    res.json('Tai khoan da ton tai')
                } else {
                    var token = jwt.sign(data1, password);
                    var decode = jwt.verify(token, password);
                    return Accounts.create({
                        username: decode.username,
                        password: password
                    })
                }}
            )
        .then((data) => {return res.json('Tao tai khoan thanh cong')})

        .catch((err) => {return res.json('Tao tai khoan that bai')})
    }
    dangnhap(req, res, next) {
        var username = req.body.username
        var password = req.body.password
        Accounts.findOne({username:username, password:password})
            .then(data => {
                if(data) {
                    var token = jwt.sign({username: data.username}, data.password)
                    return res.json(jwt.verify(token, data.password))
                } else {
                    res.json('Tai khoan khong ton tai')
                }
            })
        .then((data) => res.json('Dang nhap thanh cong!!!!!'))
        .catch((err) => res.json('Dang nhap that bai'))
    }
}
module.exports = new SiteController()