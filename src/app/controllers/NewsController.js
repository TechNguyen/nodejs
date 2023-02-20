class newController {
    // GET[]/ new 
    index(req, res) {
        res.render('news')
    }
    backend(req, res) {
        res.send('Backend-course')
    }
    frontend(req, res) {
        res.send('Frontend-course')
    }
}
module.exports = new newController()
