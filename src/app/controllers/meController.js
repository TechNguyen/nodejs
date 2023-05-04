const Course = require('../models/Course')
const {multiltoObject, mongoogeToObject} = require('../../ultis/mongoose')
class meController {
    storedCourses (req, res, next) {
        Promise.all([Course.find({}), Course.countDocumentsDeleted()])
            .then(([course, countDeleted]) => {
                res.render('me/stroredCourses', {
                    course: multiltoObject(course),
                    countDeleted
                })
            })
            .catch(next)
       
    }
    trashCourses ( req, res, next) {
        Course.findDeleted()
            .then((course) => {
                res.render('me/trashCourses', {
                    course: multiltoObject(course)
                })
            })
            .catch(next)
    }
}

module.exports = new meController()