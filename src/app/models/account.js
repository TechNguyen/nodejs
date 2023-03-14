const { ObjectId } = require('mongodb')
const mongoose = require('mongoose')
const Schema = mongoose.Schema
const account = new Schema({
    profileId: String,
    name: String,
    provider: String,
}, {
    collection: 'Accounts', 
    timestamps: true
})
const AccountModels = mongoose.model('Accounts', account)
module.exports = AccountModels


