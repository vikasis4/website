const express = require('express')
const bodyParser = require('body-parser')
const next = require('next')
const path = require('path');

const dev = process.env.NODE_ENV !== 'production'
const app = next({ dev })
const handle = app.getRequestHandler()

app.prepare()
    .then(() => {
        const server = express()
        server.use(bodyParser.json())
        server.use(bodyParser.urlencoded({ extended: true }))
        const options = {
            root: path.join(__dirname)
        };

        server.get('/api/xml', (req, res) => {
            const fileName = 'sites.xml';
            res.sendFile(fileName, options, function (err) {
                if (err) { next(err) }
                else { console.log('Sent:', fileName) }
            });
        })
        server.get('/api/json', (req, res) => {
            res.json({ data:true})
        })

        server.get('*', (req, res) => {
            return handle(req, res)
        })

        server.listen(3000, (err) => {
            if (err) throw err
            console.log('> Ready on http://localhost:3000')
        })
    })
    .catch((ex) => {
        console.error(ex.stack)
        process.exit(1)
    })