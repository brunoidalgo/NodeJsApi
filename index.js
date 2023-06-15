const express = require('express')
const server = express()
const filmes = require('./src/data/filmes.json')


server.get('/filmes', (req, res) => {
    return res.json(filmes) //Rota de usuário
})

// LocalHost (3000) é o nosso server e a porta em que ele escuta

server.listen(3000, () => {
    console.log('Servidor Rodando...')
})