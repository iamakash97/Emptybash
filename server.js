var http=require('http');
var url=require('url');
var fs=require('fs');
var query=require('querystring');
var module=require('./module');

http.createServer(function(req,res)
{
    var d=url.parse(req.url);

    switch (d.pathname)
    {
          case "/":
              res.writeHead(200,{'Content-Type':'text/html'});
              fs.readFile("calculate.html",function(error,data)
              {
                  if(error)
                  {
                        console.log("error");
                  }
                  else
                  {
                      res.end(data);

                  }
                  
              });
              break;

              case "/calculate":
              res.writeHead(200,{'Content-Type':'text/html'});
              data=query.parse(d.query);
              res.end("<h1>answer"+module.calculate(data.num1,data.num2,data.num3)+"</h1>");
              
              break;
              
    }

}).listen(8081);
