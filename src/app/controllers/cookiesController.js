
class cookieController {
    setcookie(req,res,next) {
        res.cookie('user-id', 20000)
        res.send('Hello')
    }
    getUser(req,res,next) {
        res.send(req.cookies.user_id)
    }
}

module.exports = new cookieController()