const express = require('express')
const mongoose = require('mongoose')
const { connectdb } = require("./config/database")
const app = express()
require('dotenv').config();
connectdb();
app.use(express.json())


mongoose.connection.once('open', () => {

    console.log('connectdb.....')

    app.listen(process.env.PORT, () => {
        console.log('connect server.....')
    })
})

mongoose.connection.on('error', () => {

    console.log('error.....')
})

module.exports = { app }
