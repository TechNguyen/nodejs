const express = require('express')
const app = express()
const port = 3000;
app.get('/', function (req, res) {
    var a = 1;
    var b = 2;

    var c = a + b;
  res.send('Hello word')
})

app.listen(port, () => {
    console.log('hello anh em f8');
});