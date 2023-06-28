const http = require('http')

const server = http.createServer((req, res) => {
    if(req.url === '/'){
        res.end('Welcome to our homepage')
    }
    if(req.url === '/about'){
        res.end('Here is the about page')
    }
    res.end('<p>cant find the page</p> <a href="/"> back </a>')
})


server.listen(5000)