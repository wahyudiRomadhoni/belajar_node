var http = require('http');
var tanggal = require('./tanggal');

http.createServer(function (req, res) {
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.write('saat ini tanggal' + tanggal.myDateTime())
    res.end();
  }).listen(8080);