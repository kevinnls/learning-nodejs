const fs = require('fs')
const express = require('express')
const app = express()

app.use((req, res, next) => {
    console.log(req.url)
    next()
})
app.get('/', (req, res) => {
    res.send('Hello World')
})
app.get('/createfile', (req, res) => {
    fs.appendFile('filecreated',
        '\n' + JSON.stringify({ 'user_id': '000', 'name': 'user', 'phone': '1234567890', 'email': 'email@user.com' }),
        (err) => {
            if (err) console.error(err)

        })
    res.end('Done')
})
app.get('/isfile', (req, res) => {
    fs.readFile('checkfile', (err, data) => {
        if (data === null || data === undefined)
            res.end('File not found')
        else res.json(JSON.parse(data)).end()
    })
})
app.listen(8080, () => {
    console.log("running on 8080")
})