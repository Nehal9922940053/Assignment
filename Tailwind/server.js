const http = require('http');
const fs = require('fs');


const server = http.createServer((req, res)=>{
    // console.log("request is created")
    // console.log(req)
    console.log(req.url, req.method)

    //set headers
    res.setHeader('Content-Type', 'text/html')
    
    let path = "./public/views"
    console.log(`This  is default path: ${path}`);
    switch (req.url) {
        case "/": 
        path  +='index.html';
        res.statusCode=200;
        console.log(`This page is now  on screen: ${path}`);
        break;
        case "/teams": 
        path  +='teams.html';
        res.statusCode=200;
        console.log(`This page is now  on screen: ${path}`);
        break;
        case "/team": 
        res.statusCode=301;
        res.setHeader('Location','/teams');
        res.end();
        break;
        case "/about": 
        path  +='about.html';
        res.statusCode=200;
        console.log(`This page is now  on screen: ${path}`);
        break;
        case "/AboutUs": 
        res.statusCode=301;
        res.setHeader('Location','/about');
        res.end();
        break;
        case "/about-me": 
        res.statusCode=301;
        res.setHeader('Location','/about');
        res.end();
        break;
        case "/aboutus": 
        res.statusCode=301;
        res.setHeader('Location','/about');
        res.end();
        break;
        default: 
        path += '404.html';
        res.statusCode=404;
        console.log(`This page is now  on screen: ${path}`);
        break;
    }
    // res.write('<head><link rel="stylesheet" href="#"></head>');
    // res.write("<h1>NODE JS</h1>");
    // res.write("<p>Welcome to NODE JS Class</p>");
    // res.write("<p>Request and Response</p>");
    // res.end();

    // fs.readFile('./views/index.html',(err,data) =>{
  fs.readFile(path,(err,data) =>{
        if(err){
            console.log(err);
        }else{
            // res.write(data);
            // res.end();
            res.end(data);
        }
    })
});

server.listen(3000,'localhost',()=>{
    console.log("listening for request done on port 3000")
});