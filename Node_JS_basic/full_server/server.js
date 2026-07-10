const express = require('express');
const routes = require('./routes');
const PORT = 1245;

const app = express();

app.use('/', routes);

app.listen(PORT, () => {
    console.log(`Server use: ${PORT}`);
})

export default app;