const express = require('express'); // import express 
// require() is a global node function that is used to import modules into the current file
const app = express();
const path = require('path');

// set up middleware

// second param is a callback function.
// app.METHOD(path, callback [, callback ...])
// Routes an HTTP request, where METHOD is the HTTP method of the request, 
// such as GET, PUT, POST, and so on, in lowercase. Thus, the actual methods are app.get(), app.post(), app.put(), and so on. See Routing methods below for the complete list.

// app.get('/', (req, res) => res.send('Hello World!fee'));

// https://expressjs.com/en/api.html#app.METHOD



const mongoose = require('mongoose');
mongoose.connect('mongodb://user:user2018@ds153179.mlab.com:53179/myproblems');

const restRouter = require('./routes/rest');
app.use('/api/v1', restRouter);


app.use(express.static(path.join(__dirname, '../public/'))); // 一定要最后的‘/’
app.use((req, res) => {
    console.log("<server.js>: application level middleware being called");
    res.sendFile('index.html', {root: path.join(__dirname, '../public/')});
}) // application level middleware, the function is executed every time the app receive a request.


var http = require('http');
var socketIO = require('socket.io');
var io = socketIO();
var editorSocketService = require('./services/editorSocketService')(io);


// connect io with server
const server = http.createServer(app);
io.attach(server);

// app.listen(3000, ()=> console.log('Example app listening on port 3000!'));
server.listen(3000);
server.on('listening', onListening);
function onListening() {
    console.log('App listening on port 3000');
}