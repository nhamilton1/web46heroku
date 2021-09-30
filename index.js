require('dotenv').config()

console.log(`web46 rulez`)
console.log(process.argv[2])
console.log(process.argv[3])
console.log(process.env.username)
console.log(process.env.FOO)

const express = require('express')

const server = express()
server.use(express.json())

server.get('/', (req, res) => {
    res.json({
        message: 'web 46 EZ Clap'
    })
})

server.get('/hello', (req, res) => {
    res.send('<h1>Hello there</h1>')
})

const port = process.env.port || 3000 // this is where the port number is in heroku

server.listen(port, () => {
    console.log(`listening on ${port}`)
})
