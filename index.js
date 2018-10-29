var express = require('express');
var app = express();

//app.use(express.static('static/src'));
app.use( express.static( "public" ) );
app.set('view engine', 'ejs');
/**
 * Let's creat the .tpl and .error on the res object
 */
app.use(function (req, res, next) {
  res.tpl = {};
  res.tpl.error = [];

  return next();
});

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
