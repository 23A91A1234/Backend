// import http from 'http';
// const server=http.createServer((req,res)=>{
// console.log(req.method);
// if(req.url==="/users"){
//     res.writeHead(200,{"content-type":"appilication/json"});
//     res.end(JSON.stringify([{name:'user1'},{name:'user2'}]))

// }
// else{
//     res.writeHead(200,{"content-type":"text/plain"});
//     res.end("Hello World");
// }
// });
// server.listen(7007,()=>{
//     console.log(`server running at port ${7007}`);
// })

import express from 'express';
const app=express();
app.get('/users',(req,res)=>{
    res.send("hello this is from backend");
})
app.get('/get-users',(req,res)=>{
    res.send("hello this is bhavana");
})
app.listen(2001,()=>{
    console.log("server running at port 2001");
})