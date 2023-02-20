const Course = require('../models/Course')
const {multiltoObject, mongoogeToObject} = require('../../ulti/mongoose')
const { count } = require('../models/Course')
class coursesController {
    show(req, res, next) {
        Course.findOne({ slug: req.params.slug })
            .then(course => {
                res.render('courses/show', {course: mongoogeToObject(course)})
            })
            .catch(next)
    }
    create (req, res, next) {
        res.render('courses/create')
    }
    store (req, res, next) {
        const course = new Course( req.body )
        course.save()
            .then((course) => res.redirect(`/courses/${course.slug}`))
            .catch((err) => {

            })
    }
    // GET BY id
    edit (req, res, next) {
        Course.findById(req.params.id)
            .then((course) => res.render('courses/edit', {
                course: mongoogeToObject(course)
            }))
            .catch(next)
    }
    // PUT id
    update (req, res, next) {
        Course.updateOne({_id: req.params.id}, req.body)
            .then(() => res.redirect('/me/stored/courses'))
            .catch(next)
    }
    destroy ( req, res, next) {
        Course.delete( {_id: req.params.id} )
            .then (() => {
                res.redirect('back')
            })
            .catch(next)
    }
    // Restore 
    restore (req, res, next) {
        Course.restore( {_id: req.params.id })
            .then(( ) => {
                res.redirect('back')
            })
            .catch( next )
    }
    forced (req, res, next) {
        Course.deleteOne( {_id: req.params.id} )
            .then(() => {
                res.redirect('back')
            })
            .catch(next)
    }
    handleForm ( req, res, next) {
        res.json(req.body)
    }
}
module.exports = new coursesController()