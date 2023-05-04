const siteRouter = require('./site')
const meRouter = require('./me')
const home = require('./home')
const api = require('./api')
const upload = require('./upload')
const email = require('./sendingEmail')
const cook = require('./cookie')
const auth = require('./login')
const user = require('./user')
function Route(app) {
    app.use('/', siteRouter)
    app.use('/auth', auth)
    app.use('/auth/admin', user)
}
module.exports = Route