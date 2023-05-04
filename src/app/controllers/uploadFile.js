const { error } = require('console');
const formidable = require('formidable');
const fs = require('fs')
const http = require('http')
class UploadFile {
    upload(req,res,next) {
            res.render('file/upload')
    }
    postFile(req,res,next) {
        const form = formidable({multiples: true})
        form.parse(req,(err,fields,files) => {
            if(err) {
                next(err);
                return;
            }
            res.json({fields, files})
        })
    }
       
}
module.exports = new UploadFile()