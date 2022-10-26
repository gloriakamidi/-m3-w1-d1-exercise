//const { fstat } = require('fs');
var http = require('http');

var hostname = 'localhost';
var port = 3000;

var server = http.createServer((req, res) => {
   console.log(`request for ${req.url} by method ${req.method}`);

   if (req.method === 'GET') {
    var fileUrl = req.url;
    if (fileUrl === '/') {
        fileUrl = '/index.html';
    }

    var filePath = path.resolve('./public' + fileUrl);
    var fileExt = path.extname(filePath);

    if (fileExt === '.html') {
        fs.acces(filePath, function(err){
            if (err) {
                res.statusCode = 404;
                res.setHeader('Content-Type', 'text/html');
                res.end(
                  `<html><body><h1>Error 404: $(fileUrl) not found</h1></body></html>`);

                  return;
            }
            res.statusCode = 200;
            res.setHeader('Content-Type', 'text/html');
            fs.createReadStream(filepath).pipe(res);
        }); 
    } else {
         res.statusCode = 400;
         res.setHeader("Content-Type", "text/html");
         res.end(
           "<html><body><h1>Error 404: $(fileUrl) is not an html file</h1></body></html>");

    } 

    } else {
        res.statusCode = 400;
        res.setHeader('Content-Type', 'text/html');
        res.end('<html><body><h1>Error 404: ${req.method} not supported </h1></body></html>');

    }
   });
  
    
   