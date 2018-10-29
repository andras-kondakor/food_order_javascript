module.exports = function (app) {
    var authMW = require('../middleware/generic/auth');
    var renderMW = require('../middleware/generic/render');
    var loadFoodMW=require('../middleware/admin/loadFood');
    var deleteFoodMW=require('../middleware/admin/deleteFood');
    var updateFoodMW=require('../middleware/admin/updateFood');
    var loadFoodListMW=require('../middleware/admin/loadFoodList');

    var objrep = {};
    app.get('/admin/del/:id',
        authMW(objrep),
        loadFoodMW(objrep),
        deleteFoodMW(objrep)
    );


    app.get('/admin/add',
        authMW(objrep),
        updateFoodMW(objrep),
        renderMW(objrep, 'admin_changefood'));

    app.get('/admin/edit/:id',
        authMW(objrep),
        renderMW(objrep, 'admin_changefood'));

    app.post('/admin/edit/:id',
        authMW(objrep));
        updateFoodMW(objrep),


    app.get('/admin',
        authMW(objrep),
        loadFoodListMW(objrep),
        renderMW(objrep, 'admin_foodlist'));

};