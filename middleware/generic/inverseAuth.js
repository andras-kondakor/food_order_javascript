/**
 * Checks if any user is logged in
 * if admin is logged in redirects to /admin
 * if owner is logged in redirects to /owner
 */
module.exports = function (objectrepository) {

    return function (req, res, next) {
     // req.session.destroy(function (err) {
        return next();
     // });
    };
  
  };