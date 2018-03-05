var http = require('http');
var path = require('path');
var fs = require('fs');

var mime = {
  '.html':  'text/html',
  '.js':    'text/javascript',
  '.png':   'image/png',
  '.jpg':   'image/jpg',
  '.css':    'text/css'
}

var routes = {
  '/about': 'This is my website\n',
  '/': 'Hello World\n'
}

http.createServer(onrequest).listen(8000)

function onrequest(req, res) {
  var route = req.url;

  if (route === '/') {
    route = 'index.html'
  }

  fs.readFile(path.join('static', route), onread)

function onread(err, buf) {
  res.setHeader('Content-Type', 'text/html')

  if (err) {
    res.statusCode = 404
    res.end('Not found\n')

  }  else {
    res.statusCode = 200
    res.end(buf)
  }
} }
