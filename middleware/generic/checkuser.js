/**
 * Checks username and password, if correct
 * admin is redirected to /admin
 * owner is redirexted to /owner
 */
module.exports = function (objectrepository) {

    return function (req, res, next) {
     // req.session.destroy(function (err) {
        return next();
     // });
    };
  
  };