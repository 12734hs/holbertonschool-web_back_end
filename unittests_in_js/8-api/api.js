const express = require('express')
const PORT = 7865;

const app = express()

app.get('/', (req, res) => {
    res.send('Welcome to the payment system')
})

app.get('/health', (req, res) => {
    res.send('server is alive!!!')
})


if (require.main === module){
    app.listen(PORT, () => {
        console.log('API available on localhost port 7865')
    })}

module.exports = app