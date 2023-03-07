const mongoose = require('mongoose')
const { ObjectId } = require('mongodb')
const Schema = mongoose.Schema
const User = new Schema({
    email: String,
    address : String,
    firstname: String,
    lastname: String,
   
}, {
    collection: 'User'
})
const UserModel = mongoose.model('User', User)
module.exports = UserModel