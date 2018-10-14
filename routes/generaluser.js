module.exports = function (app) {
    var authMW = require('../middleware/generic/auth');
    var renderMW = require('../middleware/generic/render');
    var exitUserMW = require('../middleware/generic/exit');
    var inverseAuthMW = require('../middleware/generic/inverseAuth');
    var checkUserMW = require('../middleware/generic/checkUser');
    var loadOrderListMW = require('../middleware/owner/loadOrderList');
    var loadFoodlistMW = require('../middleware/admin/loadFoodList');
    var loadCartListMW = require('../middleware/generaluser/loadCartList');
    var updateCartListMW = require('../middleware/generaluser/updateCartList');
    var deleteItemfromCartMW = require('../middleware/generaluser/deleteItemfromCart');
    var addNewOrdertoListMW = require('../middleware/generaluser/addNewOrdertoList');
    var addItemtoCartMW = require('../middleware/generaluser/addItemtoCart');
    var objrep = {};

    app.get('/about',
        authMW(objrep),
        renderMW(objrep)
    );
    app.post('/exit',
        authMW(objrep),
        exitUserMW(objrep)
    );
    app.get('/login',
        inverseAuthMW(objrep),
        renderMW(objrep)
    );
    app.post('/login',
        checkUserMW(objrep),
    );

    app.get('/cart',
        inverseAuthMW(objrep),
        loadCartListMW(objrep),
        renderMW(objrep)
    );
    app.post('/cart',
        inverseAuthMW(objrep),
        loadCartListMW(objrep),
        updateCartListMW(objrep),
        renderMW(objrep)
    );

    app.post('/cart/del/:id',
        inverseAuthMW(objrep),
        addNewOrdertoListMW(objrep),
    );

    app.post('/checkout',
        inverseAuthMW(objrep),
        loadCartListMW(objrep),
        renderMW(objrep)
    );
    app.get('/checkout',
        inverseAuthMW(objrep),
        loadCartListMW(objrep),
        renderMW(objrep)
    );

    app.get('/',
        inverseAuthMW(objrep),
        loadFoodlistMW(objrep),
        renderMW(objrep)
    );
    app.post('/',
        addItemtoCartMW(objrep),
    );
    app.get('/thankyou',
        inverseAuthMW(objrep),
        renderMW(objrep)
    );

}