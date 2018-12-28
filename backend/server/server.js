const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors');
const morgan = require('morgan');

require('dotenv').load();
const port = process.env.PORT || 3001;

//config
app.use(morgan('combined'));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cors());

//importing route
let routes = require('../api/routes');
routes(app);

let path = require('path');
let route = require('../routes/index');
app.set('views', path.join(__dirname, '../views'));
app.set('view engine', 'ejs');
app.use('/', route);

app.use(function(req, res) {
    res.status(404).send({url: req.originalUrl + ' not found'})
});

app.listen(port);

console.log('RESTful API serverFirebase started on: ' + port);