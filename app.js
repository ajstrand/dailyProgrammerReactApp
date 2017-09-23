var express = require('express');
var path = require('path');
var http = require('http');
var bodyParser = require('body-parser');

var index = require('./routes/index');
var users = require('./routes/users');

var redditRequests = require('./routes/redditRequests');


var app = express();

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use(express.static(path.join(__dirname, 'public')));

//app.use('/', index);
app.use('/api', redditRequests);
//app.use('/users', users);


/**
 * Get port from environment and store in Express.
 */
const port = process.env.PORT || '3000';
app.set('port', port);

/**
 * Create HTTP server.
 */
const server = http.createServer(app);

/**
 * Listen on provided port, on all network interfaces.
 */
server.listen(port, () => console.log(`API running on localhost:${port}`));
