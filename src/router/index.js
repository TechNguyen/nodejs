const newsRouter = require('./newRoute')
const siteRouter = require('./site')
const courseRouter = require('./courses')
const meRouter = require('./me')
const excuteTicket = require('./tickets')
const pagination = require('./pagination')
const user = require('./user')
function Route(app) {
    app.use('/mildleware', excuteTicket)
    app.use('/user', user)
    app.use('/news', newsRouter)
    app.use('/courses', courseRouter)
    app.use('/me', meRouter)
    app.use('/home', pagination)
    app.use('/site', siteRouter)
}
module.exports = Route