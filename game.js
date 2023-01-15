const express = require('express');
const { appendFile } = require('fs');
const path = require('path');
const port = 3000;

const game = express();

game.use(express.static('/static'));

game.get('/', (req,res) => {
    res.sendFile(path.resolve(__dirname, './static/index.html'))
});

game.all('*', (req,res) => {
    res.status(404).send('Url does not exist')
});

game.listen(process.env.PORT || port, () => {
    console.log('Ciao from http://localhost:${port}')
});
