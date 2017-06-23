/**
 * Created by Administrator on 2017/6/22.
 */
var http = require('http'),
    superagent = require('superagent');


function start(route){
    function onRequest(req,res){
        route.start(req,res);
    }
    http.createServer(onRequest).listen(8080);
    console.log("Server is starting!!!");
}
exports.start = start;