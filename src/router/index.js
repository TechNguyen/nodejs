const newsRouter = require('./newRoute')
const siteRouter = require('./site')
const courseRouter = require('./courses')
const meRouter = require('./me')
const excuteTicket = require('./tickets')
const home = require('./home')
const api = require('./api')
function Route(app) {
    app.use('/mildleware', excuteTicket)
    app.use('/news', newsRouter)
    app.use('/courses', courseRouter)
    app.use('/me', meRouter)
    app.use('/user', home)
    app.use('/', siteRouter)
    app.use('/api/v1', api )
}
module.exports = Route