/**
 * Deletes item from cart
 */
module.exports = function (objectrepository) {

    return function (req, res, next) {
      //req.session.destroy(function (err) {
        return next();
     // });
    };
  
  };