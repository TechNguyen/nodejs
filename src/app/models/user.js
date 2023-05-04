const mongoose = require('mongoose')
const { ObjectId } = require('mongodb')
const Schema = mongoose.Schema
const mongooseDelete = require('mongoose-delete');
const User = new Schema({
    email: String,
    address : String,
    firstname: String,
    lastname: String,
    classname: String,
    timeteach: Date
}, {
    collection: 'User',
    timestamps: true
})
mongoose.plugin(mongooseDelete)
User.plugin(mongooseDelete, {overrideMethods: true, deletedAt: true})
const UserModel = mongoose.model('User', User)
module.exports = UserModel