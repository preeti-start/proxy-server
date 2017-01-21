
var httpProxy = require('http-proxy');
var proxy = httpProxy.createProxyServer();
var express=require('express');
var app=express();
app.listen(80,()=>{
	console.log('this is main server '+"80 port")
})

app.all('/*',(req,res,err)=>{
	console.log('we have call / ')
	proxy.web(req,res,{target:'http://127.0.0.1:3000'})
})
