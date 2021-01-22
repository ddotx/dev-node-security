const express = require('express')
const fs = require('fs').promises
const path = require('path')
const cors = require('cors')

const app = express()

app.use(cors({
    origin: '*'
    // origin: 'http://localhost:4200'
    // origin: ['http://localhost:4200', 'https://objective-snyder-f1032e.netlify.app']
}))

app.use(express.json())
app.use(express.urlencoded())

app.get('/', (req, res) => {
    res.status(200).json({
        msg: 'success'
    })
})


app.get('/products', listProducts)

app.get('/form', (req, res) => {
    res.send('get form')
})

app.post('/form', (req, res) => {
    // console.log('req', req)
    const formData = req.body
    // res.sendStatus(204)
    console.log(formData)
    res.json(formData)
})

async function listProducts (req, res) {
    const productsFile = path.join(__dirname, './products.json')
    try {
        const data = await fs.readFile(productsFile)
        res.json(JSON.parse(data))
    }
    catch (err) {
        res.status(500).json({error: err.message})
    }
}

const port = process.env.PORT || 3000

app.listen(port, () => {
    console.log(`server listening on port ${port}`)
})