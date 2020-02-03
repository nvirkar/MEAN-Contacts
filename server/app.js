const express = require('express')
const cors = require('cors')
const bodyparser = require('body-parser')
const mongoose = require('mongoose')
const port = 3000;
var app = express()

const route = require('./routes/route')


mongoose.connect('mongodb://localhost:27017/contactlist')

mongoose.connection.on('connected', () => {
    console.log('connect to db mongo at 27017');
})

mongoose.connection.on('error', (err) => {
    if (err) {
        console.log('error in db connection', err);
    }
})


app.use(cors())
app.use(bodyparser())
app.use('/api', route)



app.get('/', (req, res) => {
    res.send('testing')
})

app.listen(port, () => {
    console.log(`Server started at port ${port}`);
})