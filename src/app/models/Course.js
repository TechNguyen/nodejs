const mongoose = require('mongoose')
const slug  = require('mongoose-slug-generator');
const mongooseDelete = require('mongoose-delete')


const Schema = mongoose.Schema;
const course = new Schema(
    {
        name: {type: String},
        description : {type: String},
        videoID: {type: String},
        slug: {type: String , slug: 'name', unique: true},
    }, {    
        timestamps: true
    }   
    )

mongoose.plugin(slug);
course.plugin(mongooseDelete, {
    deletedAt: true,
    overrideMethods: 'all'})
module.exports = mongoose.model('Course', course)