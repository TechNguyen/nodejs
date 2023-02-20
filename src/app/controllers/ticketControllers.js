class ticketsControllers {
    vipticket (req, res , next) {
        res.json({message : 'vao ghe vip'})
    }
    popticket (req, res , next) {
        res.json({message: 'vao ghe thuong '})
    }
}
module.exports = new ticketsControllers()