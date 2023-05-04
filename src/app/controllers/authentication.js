const { mongooseToObject, multiltoObject } = require('../../ultis/mongoose')
const  jwt = require('jsonwebtoken');
const Account = require('../models/account')
const express = require('express')
class authen {
    showForm(req,res,next) {
        res.render('login', {layout: false})
    }
    adminShow(req,res,next) {
        Account.findById(req.params.id)
            .then((acc) => {
                res.render('layouts/admin', {acc: mongooseToObject(acc), layout: false})
            })
            .catch(next)
    }
    memberShow(req,res,next) {
        res.render('layouts/member', {layout: false})
    }
    login(req,res,next) {
        let user = req.body.username;
        let pass = req.body.password;
        if(user == '' && pass == '') {
            res.render('login', {notifiuser: 'Tên đăng nhập bắt buộc', password: pass,notifipass: 'Mật khẩu bắt buộc', username: user,layout: false} )
        }  
        else if(user == '') {
            res.render('login', {notifiuser: 'Tên đăng nhập bắt buộc', password: pass, layout: false}, ) 
        }
        else if(pass == '') {
            res.render('login', {notifipass: 'Mật khẩu bắt buộc', username: user,layout: false} )
        } else {
            Account.findOne({username: user, password: pass})
                .then((data) => {
                    if(data) {
                        if(mongooseToObject(data).role === 'admin') {
                            res.redirect(`/auth/admin/${data._id}`);
                        } else {
                            res.redirect('/auth/member');
                        }
                    }
                    else {
                        res.render('login', {notifi: 'Tài khoản không tồn tại', username:user, password: pass, layout: false}, )
                    }
                })
                .catch(next)
        }
    }
}

module.exports = new authen()



