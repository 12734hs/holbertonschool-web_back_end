const express = require('express')
const PORT = 7865;

const app = express()

app.get('/', (req, res) => {
    return res.send('Welcome to the payment system')
})

app.get('/health', (req, res) => {
    return res.send('server is alive!!!')
})

app.get('/cart/:id', (req, res) => {
    const id = req.params.id;
    if (isNaN(Number(id))) {
        return res.status(404).send('error')
    }

    return res.send(`Payment method for cart :${id}`)
})

if (require.main === module){
    app.listen(PORT, () => {
        console.log('API available on localhost port 7865')
    })}

module.exports = app