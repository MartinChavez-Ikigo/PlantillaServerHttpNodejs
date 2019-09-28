const http = require('http'); //HACE REFERENCIA A UN PAQUETE QUE INCLUYE NODEjs
const url = require('url');

const hostname = '187.204.80.31; //DIRECCION DEL SERVIDOR
const port = '80'; //PUERTO
console.log('Entra a app js');
//CALLBACK
const server = http.createServer(function (req, res){
  var myURL = url.parse(req.url);
  if (req.method =="GET"){
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    res.end(myURL.pathname);
  }else{
    res.statusCode = 400;
  }
});
//var miFuncion = function(req, res){
//};
//const server = http.createServer(miFuncion);
server.listen(port, hostname, function(){
  console.log(`Servidor ejecutandose en http://${hostname}:${port}`);
})

