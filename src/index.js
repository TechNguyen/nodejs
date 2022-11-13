const express = require('express');
const morgan = require('morgan');
const app = express();
const handlebars = require('express-handlebars')
const path = require('path');
const port = 3000;
// HTTP logger 
app.use(morgan('combined'));
app.use(express.static(path.join(__dirname, 'public')))
// Express-handlebar
// Template Engine
app.engine('hbs', handlebars.engine({
    extname: '.hbs'
}));
app.set('view engine', 'hbs')
app.set('views', path.join(__dirname, 'resource/views'));
app.get('/', function (req, res) {
    return res.render('home')
})
app.get('/news', function (req, res) {
    return res.render('news')
})
app.listen(port, () => {
    console.log(`http::${port}`)
})