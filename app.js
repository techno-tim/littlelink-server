const express = require('express')
const morgan = require('morgan')
const compression = require('compression')

const app = express();
app.use(morgan('combined'));
app.use(express.static('www'));
app.use(compression())

const server = app.listen(process.env.PORT || 3000, () => {
    const host = server.address().address
    const port = server.address().port
    console.log('Express app listening at http://%s:%s', host, port)
})
