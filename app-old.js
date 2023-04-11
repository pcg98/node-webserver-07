//Require the http object
const http = require('http');
//We create a server
http.createServer((req,res) => {
    //Write that..
    res.write('Hola mundo');
    res.writeHead(200, {'Content-type': 'application/json'});
    //With end, we indicate that no more writable data 
    //will be send
    res.end();
})
//We listen in that port
.listen(8080);

console.log("Escuchando en el puerto 8080");
