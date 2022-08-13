// Dependencies

require('dotenv').config();
const express = require('express');
const app = express();
const PORT = process.env.PORT || 3001;
const connectDB = require('./config/connection');
const logger = require('morgan');
const cors = require('cors');



// Middleware

app.use(logger('dev'));
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));


app.get('/', (req, res) => {
    res.status(200).json({ message: "Root Directory" })
})

const start = async () => {
    try {
        connectDB();
        app.listen(PORT, () => {
            console.log(`Server is live on port: ${PORT}`)
        })
    } catch (error) {
        console.log(`Catch error: ${error}`)
    }
}

start();