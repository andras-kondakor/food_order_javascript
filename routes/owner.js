module.exports = function (app) {
    var authMW = require('../middleware/generic/auth');
    var renderMW = require('../middleware/generic/render');
    var loadOrderListMW = require('../middleware/owner/loadOrderList');
    var completeOrderMW = require('../middleware/owner/completeOrder');

    var objrep = {};

    app.get('/owner',
        authMW(objrep),
        loadOrderListMW(objrep),
        renderMW(objrep, '/owner'));

    app.post('/owner/del/:id',
        authMW(objrep),
        loadOrderListMW(objrep),
        completeOrderMW(objrep)
        );



};