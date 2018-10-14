/**
 * Updates current cart list
 */
module.exports = function (objectrepository) {

    return function (req, res, next) {
      req.session.destroy(function (err) {
        return next();
      });
    };
  
  };