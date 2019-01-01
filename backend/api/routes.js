'use strict';
module.exports = function (app) {
    let staffCtl = require('./controllers/staffControllers');

    // todoList Routes
    app.route('/api/staff')
        .get(staffCtl.get)
        .post(staffCtl.store);

    app.route('/api/staff/one')
        .get(staffCtl.getone);

    app.route('/api/staff/:staff_id')
        .get(staffCtl.detail)
        .put(staffCtl.update)
        .delete(staffCtl.delete);
    app.route('/api/staff/query-by-name/:name')
        .get(staffCtl.condition);


};