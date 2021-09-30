require('dotenv').config()
const path = require('path')
const cors = require('cors')
console.log(process.env.username)


const express = require('express')

const server = express()
server.use(cors())
server.use(express.json())
// __dirname is a special global, its the aboslute path to where the file lives. 
server.use(express.static(
    path.join(__dirname, 'client/build')
))

server.get('/api/users', (req, res) => {
    res.json([{ id: 1, name: 'Nick'}])
})

server.get('*', (req, res) => {
    res.sendFile(
        path.join(__dirname, 'client/build', 'index.html')
    )
})


const port = process.env.PORT || 3000 // this is where the port number is in heroku
//DO NOT FORGET TO CAPITALIZE!!!!!!!!!!

server.listen(port, () => {
    console.log(`listening on ${port}`)
})
