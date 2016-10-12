var redis=require('redis');
var client=redis.createClient();
client.on('connect',function(...args){
	console.log('Connected to server',args);
});
