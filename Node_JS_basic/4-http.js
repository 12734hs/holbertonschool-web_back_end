const PORT = 1245
const app = require('http')
const server = http.createServer((req, res), () => {
    res.writeHead(200, {'Content-Type': 'text/plain'});
    res.end('Hello Holberton School!')
})
server.listen(PORT, 'localhost', () => {
    console.log(`Server is executed at the loclhost:${PORT}`)
})

module.exports = app