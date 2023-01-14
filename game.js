const express = require('express')
const { appendFile } = require('fs')
const path = require('path')

const game = express()

game.use(express.static('/static'))

game.get('/', (req,res) => {
    res.sendFile(path.resolve(__dirname, './static/index.html'))
})

game.all('*', (req,res) => {
    res.status(404).send('Url does not exist')
})

game.listen(443, () => {
    console.log('Ciao from 443')
})
