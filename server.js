let http = require('http');
let port = 2819;
let data = require('./main');
let server = http.createServer(function(req,res){
    res.writeHead(200, {'Content-Type':'text/html'});
    const result = data.createElement();
    res.write(result);
    res.end();
})

server.listen(port,(err)=>{
    if(err){
        console.log(`something went wrong ${err}`);
    }else{
        console.log(`server running on ${port}`);
    }
})

