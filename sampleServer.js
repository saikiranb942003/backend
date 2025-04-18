let http = require('http')
// here http is a module
http.createServer(function(req,res) {
   
   res.writeHead(200, {'content-Type ' : 'text/html'})
   // it is the http header where 200 is status code 
   res.write('hi hello welcome back');
    res.end();// to say its the end of the satements
}).listen(8080); // 8080 is a port number where the web page displays

/*
-> nodejs is usewd for io intensive work
-> it is not used for cpu intensive work

Module :

-> modules are encapsulated unit
-> nodejs has millions of modules 
-> modules are used to solve the problems (some big problems are divided into smaller problems and this 
each small problem is found as solution in the form of module)



*/









