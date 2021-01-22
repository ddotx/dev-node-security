const express = require('express')

const app = express()

app.get('/', (req, res) => {
    res.status(200).json({
        msg: 'success'
    })
})

app.post('/form', (req, res) => {
    res.sendStatus(204)
})

const port = process.env.PORT || 3000

app.listen(port, () => {
    console.log(`server listening on port ${port}`)
})