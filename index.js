var express = require('express')
var app = express()

// Serve Web UI
app.use(express.static('public'));

app.listen(3000, function () {
    console.log('app listening on port 3000!')
})