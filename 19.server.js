//后台服务的搭建

var express = require('bower_components/express');
//express执行
var app = express();
var path = require('path');
//静态
app.use(express.static(path.join(__dirname,'node_modules')));

app.get('/',function (req,res) {
    res.sendFile('./19.resource.html',{root:__dirname});
});

//监听一个端口8080
app.listen(8080);