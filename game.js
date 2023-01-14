const express = require('express')
const { appendFile } = require('fs')
const path = require('path')

const game = express()

app.use(express.static('/static'))

app.get('/', (req,res) => {
    res.sendFile(path.resolve(__dirname, './static/index.html'))
})

app.all('*', (req,res) => {
    res.status(404).send('Url does not exist')
})

app.listen(443, () => {
    console.log('Ciao from 443')
})