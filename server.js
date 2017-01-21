

var serverArguments=process.argv;
console.log('server arguments > >> '+serverArguments)
var serverName=serverArguments[2];
var portName=serverArguments[3];
var express=require('express');
var app=express();
var ChildProcess = require('child_process');


app.use(express.static(__dirname+'/public'));
app.all('/',(req,res,err)=>{
	console.log('inside the / call');
	res.sendfile('/index.html');
})
app.all('/update',(req,res,err)=>{
	console.log('inside update call');
	
	 var args = "git pull origin master";

    var out = {};
    var exec = ChildProcess.exec;
    exec(args, {cwd: "/media/preeti/4ff2a78e-a905-4e4c-898a-14ed3713b6cb/MongoProject/Mongo_Projects/node_module_setup/AFB_Master/node_modules/AFBSourceClient/node_modules/AFB"}, function (error, stdout, stderr) {
        out.error = error;
        out.stdout = stdout;
        out.stderr = stderr;
        console.log("this is my output >> >> "+JSON.stringify(out));
        res.send(out);
    });
})

app.listen(portName,()=>{
	console.log(serverName+' server is running at port '+portName)
})

