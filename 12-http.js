const http = require('http')
const server = http.createServer((req,res)=>{
    if(req.url === '/'){
        res.end("Welcome")
        return
    }
    if(req.url === '/about'){
        res.end("About page")
        return
    }
    res.end(`
    <h1>Oops</h1>
    <p>Cannot find page</p>
    <a href = "/">Back home</a>
    `
    )
})
server.listen(5000);