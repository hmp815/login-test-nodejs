//http로 서버 가동
// const http = require("http");
// const app = http.createServer((req, res) => {
//     res.writeHead(200, { "Content-Type" : "text/html; charset = utf-8" });
//     if(req.url == "/"){
//         res.end("this is root");
//     }else if(req.url === "/login"){
//         res.end("this is login page");
//     }    
// });

// app.listen(3001, () =>{
//     console.log("http로 가동된 서버");
// });
"use strict";
//모듈
const express = require("express");
const app = express();


//라우팅
const home = require("./src/routes/home");

//앱 세팅
app.set("views", "./src/views"); 
app.set("view engine", "ejs");

app.use(express.static(`${__dirname}/src/public`))
app.use("/", home); //use -> 미들웨어를 등록해주는 메서드 / 루트라는 경로로 들어오면 home으로 보내줌

module.exports = app; 