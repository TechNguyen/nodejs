const { ObjectId } = require('mongodb')
const mongoose = require('mongoose')
const Schema = mongoose.Schema
const account = new Schema({
    username: String,
    password: String
}, {
    collection: 'Accounts'
})
const AccountModels = mongoose.model('Accounts', account)
module.exports = AccountModels


