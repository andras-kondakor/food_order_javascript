var express = require('express');
var app = express();

//app.use(express.static('static/src'));


/**
 * Include all the routes
 */
require('./routes/admin')(app);
require('./routes/owner')(app);
require('./routes/generaluser')(app);

/**
 * Standard error handler
 */
app.use(function (err, req, res, next) {
    res.status(500).send('Something went wrong.. Sorry!');
  
    //Flush out the stack to the console
    console.error(err.stack);
  });

var server = app.listen(3000, function () {
    console.log("Running On:3000");
});
