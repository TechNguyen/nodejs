const path = require('path')
const express = require('express')
class paginController {
    pagina(req, res, next) {
        res.sendFile(path.win32.join(__dirname))
    }
}

module.exports = new paginController()