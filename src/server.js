const PORT = 3000
const express = require('express')
const { createServer } = require('https')

const { readFileSync } = require('fs')

const app = express()

app.use('/', (_req, res) => res.status(200).send({ ok: 1 }))

const path = `${process.cwd()}/src/ssl`
const server = createServer({
  key: readFileSync(`${path}/key.pem`),
  cert: readFileSync(`${path}/cert.pem`)
}, app)

server.listen(PORT, () => console.log(`rodando na porta ${PORT}`))