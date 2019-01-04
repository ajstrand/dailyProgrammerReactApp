var express = require('express');
var path = require('path');
var http = require('http');
var bodyParser = require('body-parser');
var helmet = require('helmet')

var redditRequests = require('./routes/redditRequests');


var app = express();

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(helmet());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use(express.static(path.join(__dirname, 'public')));

app.use('/api', redditRequests);


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
const logMessage = `API running on localhost:${port}`;
server.listen(port, () => console.log(logMessage));
