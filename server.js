import firebase from './firebaseConfig.js';

var express = require('express');
var app = express();

app.get('/', function (req, res) {
    console.log("HTTP Get Request");
    res.send("HTTP GET Request");
    // firebase.database().ref('/pvt/subkey').set('dmfnl');
    let ref = firebase.database().ref('/dsd');
    ref.orderByKey().on("child_added", function (snapshot) {
        console.log(snapshot.val);
    });
    ref.push();
    // firebase.database().ref('/dsd').push({
    //     name: 'Christopher',
    //     description: 'I eat too much ice cream'
    //    });;
});

app.put('/', function (req, res) {
    console.log("HTTP Put Request");
    res.send("HTTP PUT Request");
});

app.post('/', function (req, res) {
    console.log("HTTP POST Request");
    res.send("HTTP POST Request");
});

app.delete('/', function (req, res) {
    console.log("HTTP DELETE Request");
    res.send("HTTP DELETE Request");
});

var server = app.listen(3001, function () {

    var host = server.address().address;
    var port = server.address().port;

    console.log("Example app listening at http://%s:%s", host, port);
});




// const express = require('express')
// const app = express()
// const bodyParser = require('body-parser')
// require('dotenv').load()
// const port = process.env.PORT || 3001

// app.use(bodyParser.urlencoded({ extended: true }))
// app.use(bodyParser.json())

// let routes = require('./api/routes') //importing route
// routes(app)

// app.use(function(req, res) {
//     res.status(404).send({url: req.originalUrl + ' not found'})
// })

// app.listen(port)

// console.log('RESTful API server started on: ' + port)