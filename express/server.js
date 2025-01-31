const http = require('http')
const express = require('express')


const app = express()

const server = http.createServer(app);

const PORT = 5050;

server.listen(PORT, ()=>{
    console.log(`Server running at http://localhost:${PORT}`);
})