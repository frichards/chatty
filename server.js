var messages =['Hello'];

var express = require('express');
var bodyParser = require('body-parser');

var app = express();
app.use(bodyParser());
app.use(function(req, res, next){
	res.setHeader('Content-Type', 'application/json');
	res.setHeader('Access-Control-Allow-Origin', '*');
	res.setHeader('Access-Control-Allow-Methods', 'OPTIONS, GET, POST');
	res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Request-With, Content-Type, Accept');
	next();
})

app.listen(11100);
app.get('/', function(req, res){
	res.send(JSON.stringify(messages));
});

app.post('/', function(req, res){
	messages.push(req.body.message);
	res.send({});
});

app.options('/', function(req, res){
	res.send({});
});


// var onRequest = function(req, res){
// 	res.writeHead(200, {
// 		'Connection': 'close',
// 		'Content-Type': 'application/json',
// 		'Access-Control-Allow-Origin': '*'
// 	});

// 	if (req.method === 'GET') {
// 		res.end(JSON.stringify(messages));
// 	}
// 	else if (req.method === 'POST') {
// 		var postData = '';
//    		req.on('data', function(chunk) {
//     		postData += chunk.toString();
// 	   	});
// 	   	req.on('end', function() {
// 		    console.log("Got POST data:");
// 		    console.log(JSON.parse(postData));
// 		    messages.push(JSON.parse(postData).message);
// 		    res.end(JSON.stringify(messages));
//  		});
//   	}
//  	else if (req.method === 'OPTIONS'){
//  		res.writeHead(200, {
//  			'Connection': 'close',
// 			'Content-Type': 'application/json',
// 			'Access-Control-Allow-Methods': 'OPTIONS, GET, POST',
// 			'Access-Control-Allow-Headers':'Origin, X-Request-With, Content-Type, Accept',
// 			'Access-Control-Allow-Origin': '*'
//  		});
//  		res.end('');
//  	}
//  }


	


// var http = require('http');
// http.createServer(onRequest).listen(11100);


