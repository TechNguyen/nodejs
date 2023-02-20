const express = require("express");
const morgan = require("morgan");
const app = express();
const handlebars = require("express-handlebars");
const methodOverride = require('method-override')
const path = require("path");
const port = 3000;
const route = require("./router");
const db = require("./config/database");
const nodemailer = require('nodemailer');
// Connect database
db.connect();
//overide Header 
app.use(methodOverride('_method'))
// HTTP logger
app.use(morgan("combined"));
app.use(express.static(path.join(__dirname, "public")));
app.use(express.urlencoded({extended: true}))
app.use(express.json())
// app.use(function(req, res, next) {
//   res.setHeader("Access-Control-Allow-Headers", "X-Requested-With,content-type, Accept,Authorization,Origin");
//   res.setHeader("Access-Control-Allow-Origin", "*");
//   res.setHeader("Access-Control-Allow-Methods", "GET, POST, OPTIONS, PUT, PATCH, DELETE");
//   res.setHeader("Access-Control-Allow-Credentials", true);
//   next();
// });
app.engine(
  "hbs",
  handlebars.engine({
    extname: ".hbs",
    helpers: {
      sum(a,b) { return a + b }
  }
  }
  )
);
app.get('/user/login', function (req, res, next) {
  res.sendFile(path.join(__dirname, 'index.html'))
})
app.set("view engine", "hbs");
app.set("views", path.join(__dirname, "resource" ,"views"));
// Routers
route(app);
app.listen(port, () => {
  console.log(`http::${port}`);
});
