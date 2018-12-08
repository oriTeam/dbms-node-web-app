'use strict';
var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/firebase', function (req, res) {
    res.render('firebase', { title: 'Firebase' });
});

router.get('/mysql', function (req, res) {
    res.render('mysql', { title: 'Mysql' });
});

module.exports = router;