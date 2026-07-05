const express = require('express')
const PORT = 7865;

const app = express()
app.use(express.json())


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

    return res.send(`Payment methods for cart ${id}`)
})

app.get('/available_payments', (req, res) => {
    const obj = {
        payment_methods: {
        credit_cards: true,
        paypal: false}
    };

    return res.send(obj)
})

app.post('/login', (req, res) => {
    const { userName } = req.body;
    return res.send(`Welcome ${userName}`);
})

if (require.main === module){
    app.listen(PORT, () => {
        console.log('API available on localhost port 7865')
    })}

module.exports = app