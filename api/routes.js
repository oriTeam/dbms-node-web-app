'use strict';
module.exports = function (app) {
    let staffCtl = require('./controllers/staffControllers');

    // todoList Routes
    app.route('/api/staff')
        .get(staffCtl.get)
        .post(staffCtl.store);

    app.route('/api/staff/:staffId')
        .get(staffCtl.detail)
        .put(staffCtl.update)
        .delete(staffCtl.delete);
};