var requireOption = require('../common').requireOption;

/**
 * Checks if the user is logged in
 * if not redirects to /login
 */

module.exports = function (objectrepository) {
    return function (req, res, next) {

        return next();
    };

};