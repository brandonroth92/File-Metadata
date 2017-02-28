var express = require('express');
var favicon = require('serve-favicon');
var api = require('./app/api/upload.js')
var routes = require('./app/routes/index.js')
var path = require('path');
var app = express();

app.set('port', (process.env.PORT || 1337));

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(favicon(path.join(__dirname, 'views', 'favicon.ico')));

//pass app instance to modules
routes(app);
api(app);

app.listen(app.get('port'));
console.log(`Server listening on port ${app.get('port')}`);

