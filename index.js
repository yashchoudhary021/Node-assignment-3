let fs = require('fs')
const http = require('http')

fs.writeFile('index.html', "<h1> Hello World </h1>\n<p> This is Yash Choudhary</p>", () => {
    console.log("Task Completed")
})

let server = http.createServer((req,res) =>{
    fs.readFile('index.html', (err,data) =>{
        res.writeHead(200,{'Content-Type': 'text/html'});
        res.write(data)
        return res.end();
    })
})

server.listen(5000, ()=>{
    console.log("This is also done")
})